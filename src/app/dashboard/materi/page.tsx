"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPython,
  FaLock,
  FaArrowRight,
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
    description:
      "Tambahkan interaktivitas pada website menggunakan JavaScript.",
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
  const [userLevel, setUserLevel] = useState(1);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);

        const quizRef = doc(db, "quizResults", uid);
        const userRef = doc(db, "users", uid);

        const [quizSnap, userSnap] = await Promise.all([
          getDoc(quizRef),
          getDoc(userRef),
        ]);

        let data = quizSnap.exists()
          ? (quizSnap.data() as Record<string, number>)
          : {};
        setScores(data);

        let currentLevel =
          typeof userSnap.data()?.level === "number"
            ? userSnap.data()!.level
            : 1;

        // 🚀 Logika naik level
        if (
          currentLevel < 2 &&
          (data.htmlScore ?? 0) >= 6 &&
          (data.cssScore ?? 0) >= 6
        ) {
          currentLevel = 2;
        }
        if (currentLevel < 3 && (data.pythonScore ?? 0) >= 6) {
          currentLevel = 3;
        }
        if (currentLevel < 4 && (data.jsScore ?? 0) >= 6) {
          currentLevel = 4;
        }
        if (currentLevel < 5 && (data.reactScore ?? 0) >= 6) {
          currentLevel = 5;
        }
        if (currentLevel < 6 && (data.laravelScore ?? 0) >= 6) {
          currentLevel = 6;
        }

        setUserLevel(currentLevel);

        await setDoc(userRef, { level: currentLevel }, { merge: true });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="p-3 md:p-6 w-full mx-auto text-white bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      <h1 className="text-4xl font-bold text-sky-400 mb-2">Pilih Materi</h1>
      <p className="text-gray-300 text-lg">
        Mulailah perjalanan belajarmu dari dasar hingga mahir dengan berbagai
        topik pemrograman populer.
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
              className={`relative border p-5 rounded-xl transition duration-200 ${
                isLocked
                  ? "opacity-50 border-gray-300 cursor-not-allowed bg-gray-100 text-gray-600"
                  : "hover:shadow-lg border-blue-400 bg-white text-gray-800"
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
                  className="flex flex-row justify-start items-center mt-3 text-blue-600 text-sm font-semibold hover:underline"
                >
                  Mulai Belajar
                  <span className="ml-4">
                    <FaArrowRight />
                  </span>
                </Link>
              ) : (
                <span className="block mt-3 text-gray-400 text-sm font-semibold italic">
                  <FaLock /> Tersedia setelah menyelesaikan Level
                  {cat.level - 1}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
