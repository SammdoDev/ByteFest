"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const benefits = [
  "Modul interaktif dan menyenangkan",
  "Akses lifetime ke semua materi",
  "Komunitas belajar aktif",
  "Kuis dan evaluasi setiap bab",
  "Belajar mandiri sesuai kecepatan kamu",
  "Belajar bersama dan diskusi melalui chat",
  "Ranking dan level yang memotivasi belajar",
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="bg-white py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/full-stack.png"
            alt="Benefits Learning"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Belajar Lebih Seru & Efisien di CodeWithSamm
          </h2>
          <p className="text-gray-600 mb-6">
            Kami hadir untuk menjadikan proses belajar pemrograman jadi lebih mudah, cepat, dan menyenangkan untuk semua kalangan.
          </p>

          <ul className="space-y-4 mb-8">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span className="text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
