"use client";

import React from "react";
import { FaBook, FaChartBar, FaComment, FaWpforms } from "react-icons/fa";

type DashboardContentProps = {
  user: string;
  level: number;
};

const DashboardContent: React.FC<DashboardContentProps> = ({ user, level }) => {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Selamat Datang, {user} 👋
      </h1>

      <p className="text-gray-700 mt-3 text-lg">
        Platform ini dirancang untuk membantu kamu belajar{" "}
        <strong className="text-blue-600">HTML Dasar</strong> dari nol
        secara mudah, interaktif, dan menyenangkan!
      </p>

      <p className="text-gray-600 mt-2 text-base">
        Level kamu saat ini:{" "}
        <strong className="text-blue-600">Level {level}</strong>
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white shadow-md p-5 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
            <FaBook/> Materi Interaktif
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Pelajari berbagai tag HTML, struktur halaman, dan praktik terbaik.
          </p>
          <a
            href="/materi"
            className="block mt-4 text-sm text-blue-600 font-semibold hover:underline"
          >
            Mulai Belajar →
          </a>
        </div>

        <div className="bg-white shadow-md p-5 rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-yellow-600 flex items-center gap-2">
            <FaWpforms/> Kuis Interaktif
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Uji pemahamanmu setelah belajar dengan kuis-kuis menarik.
          </p>
          <a
            href="/kuis"
            className="block mt-4 text-sm text-yellow-600 font-semibold hover:underline"
          >
            Coba Kuis →
          </a>
        </div>

        <div className="bg-white shadow-md p-5 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-600 flex items-center gap-2">
            <FaChartBar/> Lacak Progress
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Pantau perkembangan belajar dan naik level!
          </p>
          <a
            href="/progress"
            className="block mt-4 text-sm text-green-600 font-semibold hover:underline"
          >
            Lihat Progress →
          </a>
        </div>

        <div className="bg-white shadow-md p-5 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-purple-600 flex items-center gap-2">
            <FaComment/> Forum Diskusi
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Tanya jawab dan berdiskusi seputar HTML bersama teman belajar.
          </p>
          <a
            href="/forum"
            className="block mt-4 text-sm text-purple-600 font-semibold hover:underline"
          >
            Gabung Forum →
          </a>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 italic">
          “Belajar coding itu seperti belajar bahasa baru. Terus latihan, dan kamu akan lancar.” 🚀
        </p>
      </div>
    </main>
  );
};

export default DashboardContent;
