"use client";

import React from "react";
import { FaCode, FaClock, FaGraduationCap, FaAward, FaUsers, FaRocket, FaChartLine } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6">
            <FaGraduationCap className="text-sm" />
            <span className="text-sm font-medium">Tentang Kami</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Mengapa Memilih
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"> CodeWithSamm</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Platform pembelajaran coding terdepan yang telah membantu ribuan siswa 
            mencapai karir impian mereka di bidang teknologi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaCode className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pembelajaran Interaktif</h3>
            <p className="text-gray-600 leading-relaxed">
              Belajar dengan metode hands-on coding, project-based learning, dan feedback real-time dari mentor berpengalaman
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaClock className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fleksibel & Adaptif</h3>
            <p className="text-gray-600 leading-relaxed">
              Belajar kapan saja, di mana saja dengan kurikulum yang disesuaikan dengan kebutuhan dan pace belajar individual
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaAward className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sertifikasi Profesional</h3>
            <p className="text-gray-600 leading-relaxed">
              Dapatkan sertifikat yang diakui industri dan tingkatkan nilai CV Anda untuk karir yang lebih baik
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">1K+</div>
            <div className="text-gray-600 font-medium">Siswa Aktif</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl md:text-4xl font-black text-purple-600 mb-2">3+</div>
            <div className="text-gray-600 font-medium">Modul Pembelajaran</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl md:text-4xl font-black text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>

        <div className="w-full">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Dipercaya Oleh
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"> Partner Terbaik</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bergabung dengan ekosistem teknologi terdepan bersama perusahaan-perusahaan ternama yang telah mempercayai kualitas program kami
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
            
            <Marquee
              gradient={false}
              speed={35}
              pauseOnHover={true}
              className="w-full py-8"
            >
              <div className="flex items-center gap-8 md:gap-12">
                {[
                  "brand1",
                  "brand2", 
                  "brand3",
                  "brand4",
                  "brand5",
                  "brand6",
                  "brand7",
                ].map((brand, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-32 group"
                  >
                    <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg border border-gray-100 group-hover:border-blue-200 transition-all duration-300 group-hover:bg-blue-50">
                      <img
                        src={`/brand/${brand}.png`}
                        alt={brand}
                        className="w-full h-auto object-contain max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                ))}
                <div className="w-12 md:w-16 lg:w-20"></div>
              </div>
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;