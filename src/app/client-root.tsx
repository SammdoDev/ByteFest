"use client";

import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Sidebar from "./dashboard/components/sidebar-dashboard";
import Navbar from "./dashboard/components/navbar-dashboard";
import { ProgressBar } from "primereact/progressbar";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [level, setLevel] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/auth/login");
        return;
      }

      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data();
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
    const closeOnOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        window.innerWidth < 768 &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, [sidebarOpen]);

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
            Memuat data pengguna...
          </p>
          <ProgressBar mode="indeterminate" style={{ height: "6px" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div ref={sidebarRef}>
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      <div className="flex flex-col flex-1">
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
