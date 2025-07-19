"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";

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
  { name: "HTML", path: "/dashboard/kuis/html", key: "htmlScore", level: 1 },
  { name: "CSS", path: "/dashboard/kuis/css", key: "cssScore", level: 1 },
  {
    name: "Python",
    path: "/dashboard/kuis/python",
    key: "pythonScore",
    level: 2,
  },
  { name: "JavaScript", path: "/dashboard/kuis/js", key: "jsScore", level: 3 },
  { name: "React", path: "/dashboard/kuis/react", key: "reactScore", level: 4 },
  {
    name: "Laravel",
    path: "/dashboard/kuis/laravel",
    key: "laravelScore",
    level: 5,
  },
];

const KuisPage: React.FC = () => {
  const [scores, setScores] = useState<QuizScore>({});
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        const docRef = doc(db, "quizResults", user.uid);

        const unsubscribeDoc = onSnapshot(docRef, async (snap) => {
          if (snap.exists()) {
            const data = snap.data() as QuizScore;
            setScores(data);

            let level = 1;
            if ((data.htmlScore ?? 0) >= 6 && (data.cssScore ?? 0) >= 6)
              level = 2;
            if (level >= 2 && (data.pythonScore ?? 0) >= 6) level = 3;
            if (level >= 3 && (data.jsScore ?? 0) >= 6) level = 4;
            if (level >= 4 && (data.reactScore ?? 0) >= 6) level = 5;
            if (level >= 5 && (data.laravelScore ?? 0) >= 6) level = 6;

            if (level > (data.level ?? 1)) {
              await setDoc(docRef, { level }, { merge: true });
            }
          }
        });

        return unsubscribeDoc;
      }
    });

    return () => unsubscribeAuth();
  }, []);

  return (
    <main className="p-3 md:p-6 w-full mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Daftar Kuis</h1>
      <p className="text-white mb-6">
        Pilih topik yang ingin kamu kerjakan dan lihat skor terakhirmu.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {topics.map((topic) => {
          const canAccess = (scores.level ?? 1) >= topic.level;

          return (
            <div
              key={topic.name}
              className={`border rounded-xl p-5 shadow-sm transition bg-white ${
                canAccess ? "hover:shadow" : "opacity-60"
              }`}
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
                href={canAccess ? topic.path : "#"}
                className={`inline-block px-4 py-2 rounded transition text-white ${
                  canAccess
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {canAccess ? "Mulai Kuis" : "Terkunci"}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default KuisPage;
