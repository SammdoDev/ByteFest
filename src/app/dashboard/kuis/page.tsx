"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

type QuizScore = {
  htmlScore?: number;
  cssScore?: number;
  jsScore?: number;
  reactScore?: number;
  laravelScore?: number;
  pythonScore?: number;
  level?: number;
};

const topics = [
  { name: "HTML", path: "/dashboard/kuis/html", key: "htmlScore" },
  { name: "CSS", path: "/dashboard/kuis/css", key: "cssScore" },
  { name: "Python", path: "/dashboard/kuis/python", key: "pythonScore" },
  { name: "JavaScript", path: "/dashboard/kuis/js", key: "jsScore" },
  { name: "React", path: "/dashboard/kuis/react", key: "reactScore" },
  { name: "Laravel", path: "/dashboard/kuis/laravel", key: "laravelScore" },
];

export default function KuisPage() {
  const [scores, setScores] = useState<QuizScore>({});
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserId(user.uid);
        const docRef = doc(db, "quizResults", user.uid);
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          const data = snap.data() as QuizScore;
          setScores(data);

          // ✅ Hitung level secara berurutan
          let level = 1;

          if ((data.htmlScore ?? 0) >= 6 && (data.cssScore ?? 0) >= 6) {
            level = 2;
          }
          if (level >= 2 && (data.pythonScore ?? 0) >= 6) {
            level = 3;
          }
          if (level >= 3 && (data.jsScore ?? 0) >= 6) {
            level = 4;
          }
          if (level >= 4 && (data.reactScore ?? 0) >= 6) {
            level = 5;
          }
          if (level >= 5 && (data.laravelScore ?? 0) >= 6) {
            level = 6;
          }

          // ✅ Update level jika berubah
          if (level > (data.level ?? 1)) {
            await setDoc(docRef, { level }, { merge: true });
          }
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Daftar Kuis</h1>
      <p className="text-gray-700 mb-6">
        Pilih topik yang ingin kamu kerjakan dan lihat skor terakhirmu.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="border rounded-xl p-5 shadow-sm hover:shadow transition bg-white"
          >
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              {topic.name}
            </h2>
            <p className="text-gray-600 mb-4">
              Skor Terakhir:{" "}
              <span className="font-semibold text-gray-800">
                {scores[topic.key as keyof QuizScore] ?? 0} / 10
              </span>
            </p>
            <Link
              href={topic.path}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Mulai Kuis
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
