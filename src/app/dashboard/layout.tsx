"use client";

import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Sidebar from "./components/sidebar-dashboard";
import Navbar from "./components/navbar-dashboard";
import { ProgressBar } from "primereact/progressbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [level, setLevel] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/auth/login");
        return;
      }

      try {
        const docSnap = await getDoc(doc(db, "users", user.uid));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserName(data.name || user.email);
          setLevel(data.level || 1);
        }
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    const closeSidebar = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        window.innerWidth < 768 &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", closeSidebar);
    return () => document.removeEventListener("mousedown", closeSidebar);
  }, [sidebarOpen]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-white shadow-md rounded-lg p-6 w-80 md:w-130 text-center">
          <p className="mb-4 text-black font-semibold">
            Satu Baris Kode, Satu Langkah Lebih Dekat ke Impian...
          </p>
          <ProgressBar
            mode="indeterminate"
            style={{ height: "8px" }}
            className="!bg-blue-100 !before:bg-blue-600"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      <div ref={sidebarRef}>
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
