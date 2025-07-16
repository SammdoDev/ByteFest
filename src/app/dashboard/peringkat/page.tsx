"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";

type LeaderRow = {
  uid: string;
  username: string;
  total: number;
  html: number;
  css: number;
  python: number;
  js: number;
  react: number;
  laravel: number;
  updatedAt: Timestamp | null;
};

const LeaderboardPage: React.FC = () => {
  const [leaders, setLeaders] = useState<LeaderRow[]>([]);
  const [currentUid, setCurrentUid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setCurrentUid(u?.uid ?? null);
    });

    return () => unsub(); // Cleanup saat unmount
  }, []);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const quizCol = collection(db, "quizResults");
      const quizSnaps = await getDocs(quizCol);

      const rows: LeaderRow[] = [];

      await Promise.all(
        quizSnaps.docs.map(async (q) => {
          const d = q.data() as Record<string, any>;
          const uid = q.id;

          // Ambil nama user dari /users/{uid}
          let username = "Guest";
          try {
            const userSnap = await getDoc(doc(db, "users", uid));
            if (userSnap.exists()) {
              const uData = userSnap.data();
              username =
                uData.username || uData.name || uData.displayName || "Guest";
            }
          } catch {
            // abaikan error
          }

          const html = d.htmlScore ?? 0;
          const css = d.cssScore ?? 0;
          const python = d.pythonScore ?? 0;
          const js = d.jsScore ?? 0;
          const react = d.reactScore ?? 0;
          const laravel = d.laravelScore ?? 0;

          rows.push({
            uid,
            username,
            html,
            css,
            python,
            js,
            react,
            laravel,
            total: html + css + python + js + react + laravel,
            updatedAt: d.updatedAt ?? null,
          });
        })
      );

      rows.sort((a, b) => {
        if (b.total !== a.total) return b.total - a.total;
        const ta = a.updatedAt ? a.updatedAt.toMillis() : Infinity;
        const tb = b.updatedAt ? b.updatedAt.toMillis() : Infinity;
        return ta - tb;
      });

      setLeaders(rows);
      setLoading(false);
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
        <p>Memuat data…</p>
      </main>
    );
  }

  return (
    <main className="p-0 md:p-6 max-w-full">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Leaderboard</h1>

      <div className="overflow-x-auto rounded-xl border border-gray-300">
        <table className="min-w-[800px] w-full text-sm text-left border-collapse">
          <thead className="text-gray-100 border-b border-gray-300 sticky top-0 z-10">
            <tr>
              <th className="py-2 px-3 border-r">#</th>
              <th className="py-2 px-3 border-r">Username</th>
              <th className="py-2 px-3 border-r text-center">HTML</th>
              <th className="py-2 px-3 border-r text-center">CSS</th>
              <th className="py-2 px-3 border-r text-center">Python</th>
              <th className="py-2 px-3 border-r text-center">JS</th>
              <th className="py-2 px-3 border-r text-center">React</th>
              <th className="py-2 px-3 border-r text-center">Laravel</th>
              <th className="py-2 px-3 text-center font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((row, idx) => (
              <tr
                key={row.uid}
                className={row.uid === currentUid ? "font-semibold" : ""}
              >
                <td className="py-2 px-3 border-t border-gray-200">
                  {idx + 1}
                </td>
                <td className="py-2 px-3 border-t border-gray-200">
                  {row.username}
                </td>
                <td className="py-2 px-3 border-t border-gray-200 text-center">
                  {row.html}
                </td>
                <td className="py-2 px-3 border-t border-gray-200 text-center">
                  {row.css}
                </td>
                <td className="py-2 px-3 border-t border-gray-200 text-center">
                  {row.python}
                </td>
                <td className="py-2 px-3 border-t border-gray-200 text-center">
                  {row.js}
                </td>
                <td className="py-2 px-3 border-t border-gray-200 text-center">
                  {row.react}
                </td>
                <td className="py-2 px-3 border-t border-gray-200 text-center">
                  {row.laravel}
                </td>
                <td className="py-2 px-3 border-t border-gray-200 text-center font-semibold">
                  {row.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LeaderboardPage;
