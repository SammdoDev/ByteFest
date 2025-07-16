"use client";

import Link from "next/link";

export default function QuizFinish({
  score,
  total,
  topic,
}: {
  score: number;
  total: number;
  topic: string;
}) {
  return (
    <div className="bg-green-50 border border-green-300 p-6 rounded-xl text-center">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        Skor Kamu: {score} / {total}
      </h2>
      <p className="text-gray-700 mb-4">
        Hasilmu telah disimpan. Terus tingkatkan skill <span className="font-bold">{topic}</span>-mu! 💪
      </p>
      <Link
        href="/dashboard/peringkat"
        className="inline-block mt-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Lihat Peringkat
      </Link>
    </div>
  );
}
