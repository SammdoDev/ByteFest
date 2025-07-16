"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPython,
} from "react-icons/fa";

type Category = {
  name: string;
  field: string;
  icon: React.ReactNode;
  href: string;
  level: number;
  description: string;
};

const categories: Category[] = [
  {
    name: "HTML",
    field: "htmlScore",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    href: "/dashboard/materi/html",
    level: 1,
    description: "Belajar struktur dasar halaman web menggunakan HTML.",
  },
  {
    name: "CSS",
    field: "cssScore",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    href: "/dashboard/materi/css",
    level: 1,
    description: "Pelajari cara mengatur tampilan website dengan CSS.",
  },
  {
    name: "Python",
    field: "pythonScore",
    icon: <FaPython className="text-yellow-500 text-3xl" />,
    href: "/dashboard/materi/python",
    level: 2,
    description: "Bahasa pemrograman populer untuk web, data, dan automasi.",
  },
  {
    name: "JavaScript",
    field: "jsScore",
    icon: <FaJs className="text-yellow-400 text-3xl" />,
    href: "/dashboard/materi/javascript",
    level: 3,
    description: "Tambahkan interaktivitas pada website menggunakan JavaScript.",
  },
  {
    name: "React",
    field: "reactScore",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    href: "/dashboard/materi/react",
    level: 4,
    description: "Bangun antarmuka dinamis dengan library React JS.",
  },
  {
    name: "Laravel",
    field: "laravelScore",
    icon: <FaLaravel className="text-red-500 text-3xl" />,
    href: "/dashboard/materi/laravel",
    level: 5,
    description: "Framework PHP modern untuk membangun backend aplikasi web.",
  },
];

export default function MateriPage() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [userId, setUserId] = useState<string | null>(null);
  const [userLevel, setUserLevel] = useState(1);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const docSnap = await getDoc(doc(db, "quizResults", user.uid));
        if (docSnap.exists()) {
          const data = docSnap.data() as Record<string, number>;
          setScores(data);

          // Logika naik level (urutan Python → JS → React → Laravel)
          let level = 1;
          if ((data["pythonScore"] ?? 0) >= 6) {
            level = 2;
            if ((data["jsScore"] ?? 0) >= 6) {
              level = 3;
              if ((data["reactScore"] ?? 0) >= 6) {
                level = 4;
                if ((data["laravelScore"] ?? 0) >= 6) {
                  level = 5;
                }
              }
            }
          }
          setUserLevel(level);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="p-6 max-w-6xl mx-auto text-white bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      <h1 className="text-4xl font-bold text-sky-400 mb-2">Pilih Materi</h1>
      <p className="text-gray-300 text-lg">
        Mulailah perjalanan belajarmu dari dasar hingga mahir dengan berbagai topik pemrograman populer.
      </p>
      <p className="text-gray-400 mt-1 text-base">
        Level kamu saat ini:{" "}
        <span className="text-sky-400 font-semibold">Level {userLevel}</span>
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {categories.map((cat, idx) => {
          const isLocked = cat.level > userLevel;
          const score = scores[cat.field] ?? null;

          return (
            <div
              key={idx}
              className={`relative bg-white text-gray-800 border p-5 rounded-xl transition duration-200 ${
                isLocked
                  ? "opacity-50 border-gray-300 cursor-not-allowed"
                  : "hover:shadow-lg hover:border-blue-500"
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                {cat.icon}
                <div>
                  <h2 className="text-xl font-semibold">{cat.name}</h2>
                  <p className="text-xs text-gray-500">Level {cat.level}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3">{cat.description}</p>

              {userId && (
                <p className="text-sm font-semibold text-green-600">
                  Skor: {score !== null ? score : "-"}
                </p>
              )}

              {!isLocked ? (
                <Link
                  href={cat.href}
                  className="block mt-3 text-blue-600 text-sm font-semibold hover:underline"
                >
                  Mulai Belajar →
                </Link>
              ) : (
                <span className="block mt-3 text-gray-400 text-sm font-semibold italic">
                  🔒 Tersedia setelah menyelesaikan Level {cat.level - 1}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
