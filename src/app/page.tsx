"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Navbar from "./components/Landing-Page-Navbar";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // true kalau login
    });

    return () => unsub();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 text-center">
      <Navbar onToggleSidebar={() => {}} />
      <h1 className="text-4xl font-bold mb-4">Selamat Datang di CodeWithSamm</h1>
      <p className="text-lg mb-6">Belajar dasar-dasar pemrograman secara interaktif, seru, dan mudah!</p>

      <div className="flex flex-wrap justify-center gap-4">
      {isLoggedIn ? (
      <button
      onClick={() => router.push("/dashboard")}
      className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
      >
      Masuk ke Dashboard
      </button>
      ) : (
      <>
      <a
        href="/auth/login"
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Masuk
      </a>
      <a
        href="/auth/register"
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded shadow hover:bg-gray-300"
      >
        Daftar
      </a>
      </>
      )}
      </div>

      <div className="mt-12 max-w-xl text-sm text-gray-600 dark:text-gray-400">
      <p>
      <strong>💡 Tentang kami:</strong> Kami menyediakan platform belajar pemrograman HTML, CSS, JavaScript, dan lainnya, lengkap dengan kuis interaktif dan progress tracker!
      </p>
      </div>
    </main>
  );
}
