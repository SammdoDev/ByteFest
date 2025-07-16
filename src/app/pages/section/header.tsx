"use client";

import React, { useEffect, useState } from "react";
import { FaChevronDown, FaCode, FaRocket, FaUsers } from "react-icons/fa";
import { Button } from "primereact/button";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const HeaderSection: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleScrollDown = () => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartLearning = () => {
    router.push(isLoggedIn ? "/dashboard" : "/auth/register");
  };

  return (
    <section
      id="beranda"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <FaCode className="text-blue-400 text-2xl opacity-20" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float-delayed">
          <FaRocket className="text-purple-400 text-xl opacity-20" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float-slow">
          <FaUsers className="text-cyan-400 text-lg opacity-20" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        <h1 className="text-2xl md:text-5xl font-black leading-tight mb-6 py-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
          Mulai Coding, Bangun Masa Depanmu bersama
          <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mt-2">
            CodeWithSamm
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Belajar dasar-dasar pemrograman secara interaktif, praktis, dan
          menyenangkan dengan mentor berpengalaman
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
            <FaUsers className="text-blue-400" />
            <span className="text-gray-300">1000+ Siswa</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
            <FaCode className="text-purple-400" />
            <span className="text-gray-300">3+ Modul Pembelajaran</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
            <FaRocket className="text-cyan-400" />
            <span className="text-gray-300">95% Success Rate</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button
            label="Mulai Belajar Sekarang"
            onClick={handleStartLearning}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-none px-8 py-4 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          />
          <a
            href="#modul"
            className="group relative border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">Lihat Modul</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>

        <div className="flex flex-col items-center cursor-pointer animate-bounce">
          <button 
            onClick={handleScrollDown} 
            aria-label="Scroll ke bawah"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm">Scroll untuk melihat lebih banyak</span>
            <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
              <FaChevronDown size={16} />
            </div>
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeaderSection;