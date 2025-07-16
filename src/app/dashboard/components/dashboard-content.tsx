"use client";

import React from "react";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPython,
} from "react-icons/fa";

type DashboardContentProps = {
  user: string;
  level: number;
};

type ModuleCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  minLevel: number;
};

const modules: ModuleCardProps[] = [
  {
    title: "HTML Dasar",
    description: "Pelajari struktur halaman web dan elemen penting HTML.",
    href: "/dashboard/materi/html",
    icon: <FaHtml5 />,
    color: "from-orange-500 to-orange-600",
    minLevel: 1,
  },
  {
    title: "CSS Dasar",
    description: "Belajar styling halaman dengan warna, layout, dan animasi.",
    href: "/dashboard/materi/css",
    icon: <FaCss3Alt />,
    color: "from-blue-500 to-blue-600",
    minLevel: 1,
  },
  {
    title: "Python",
    description: "Bahasa serbaguna untuk backend, data science, dan AI.",
    href: "/dashboard/materi/python",
    icon: <FaPython />,
    color: "from-indigo-500 to-blue-700",
    minLevel: 2,
  },
  {
    title: "JavaScript",
    description: "Interaktifkan halaman web dengan logika dan DOM manipulation.",
    href: "/dashboard/materi/js",
    icon: <FaJs />,
    color: "from-yellow-400 to-yellow-500",
    minLevel: 3,
  },
  {
    title: "React JS",
    description: "Bangun UI modern dengan komponen dan state management.",
    href: "/dashboard/materi/react",
    icon: <FaReact />,
    color: "from-cyan-500 to-blue-400",
    minLevel: 4,
  },
  {
    title: "Laravel",
    description: "Framework PHP modern untuk backend dan REST API.",
    href: "/dashboard/materi/laravel",
    icon: <FaLaravel />,
    color: "from-red-500 to-pink-500",
    minLevel: 5,
  },
];

const DashboardContent: React.FC<DashboardContentProps> = ({ user, level }) => {
  return (
    <main className="flex-1 p-3 md:p-6 w-full bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-sky-400 mb-2">
        Selamat Datang, {user} 👋
      </h1>
      <p className="text-gray-300 text-lg">
        Platform ini dirancang untuk membantumu belajar{" "}
        <span className="font-semibold text-sky-300">HTML, CSS, Python, JavaScript, React, Laravel</span>{" "}
        secara bertahap dan menyenangkan!
      </p>
      <p className="text-gray-400 mt-1 text-base">
        Level kamu saat ini:{" "}
        <span className="text-sky-400 font-semibold">Level {level}</span>
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {modules
          .filter((m) => level >= m.minLevel)
          .map((modul, index) => (
            <ModuleCard key={index} {...modul} />
          ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 italic">
          “Belajar coding itu seperti naik level di game. Konsisten dan terus coba hal baru!” 🎮💻
        </p>
      </div>
    </main>
  );
};

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  href,
  icon,
  color,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all border border-gray-100 text-gray-800">
      <div
        className={`w-12 h-12 rounded-full bg-gradient-to-tr ${color} flex items-center justify-center text-white text-xl shadow-md mb-4`}
      >
        {icon}
      </div>
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <Link
        href={href}
        className={`inline-block px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-tr ${color} hover:opacity-90 transition`}
      >
        Mulai Belajar →
      </Link>
    </div>
  );
};

export default DashboardContent;
