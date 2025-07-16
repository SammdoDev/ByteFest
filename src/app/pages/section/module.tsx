"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaLaravel,
} from "react-icons/fa";

const modules = [
  {
    title: "Dasar HTML",
    desc: "Pelajari cara membuat struktur dasar halaman web menggunakan tag-tag HTML seperti heading, paragraf, tabel, dan form.",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
  },
  {
    title: "CSS untuk Pemula",
    desc: "Pelajari cara mempercantik tampilan website menggunakan CSS, termasuk warna, layout, dan animasi.",
    icon: <FaCss3Alt className="text-blue-400 text-4xl" />,
  },
  {
    title: "Dasar JavaScript",
    desc: "Pelajari logika pemrograman dasar dengan JavaScript, seperti variabel, fungsi, event, dan manipulasi DOM.",
    icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
  },
  {
    title: "Pengantar React",
    desc: "Kenali dasar-dasar React, library JavaScript untuk membangun antarmuka pengguna berbasis komponen.",
    icon: <FaReact className="text-blue-400 text-4xl" />,
  },
  {
    title: "Dasar Laravel",
    desc: "Pelajari struktur dasar framework Laravel dan cara membangun aplikasi web berbasis PHP secara efisien.",
    icon: <FaLaravel className="text-red-500 text-4xl" />,
  },
  {
    title: "Pemrograman Python",
    desc: "Belajar sintaks dasar Python, tipe data, pengkondisian, dan penggunaan Python untuk automasi dan data.",
    icon: <FaPython className="text-yellow-300 text-4xl" />,
  },
];

const ModuleSection: React.FC = () => {
  return (
    <section id="modul" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-black md:text-4xl font-bold mb-4">
          Modul Pembelajaran
        </h2>
        <p className="text-gray-400 mb-12">
          Pelajari secara bertahap dan terstruktur, mulai dari dasar hingga
          mahir.
        </p>

        <div className="overflow-x-auto">
          <div className="flex md:grid md:grid-cols-3 gap-6 min-w-[600px] md:min-w-0 cursor-pointer">
            {modules.map((modul, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-0 bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
              >
                <div className="mb-4">{modul.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{modul.title}</h3>
                <p className="text-gray-400 text-sm">{modul.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleSection;
