"use client";

import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { FaBars, FaTimes  } from "react-icons/fa";
import { Button } from "primereact/button";

type SectionKey = "beranda" | "about" | "promo" | "modul";

type NavbarProps = {
  isLoggedIn: boolean;
  onChangeSection: (section: SectionKey) => void;
};

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onChangeSection }) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth/login");
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };

  const handleNavigate = (section: SectionKey) => {
    onChangeSection(section);
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { key: "beranda", label: "Beranda" },
    { key: "about", label: "Tentang Kami" },
    { key: "promo", label: "Promo" },
    { key: "modul", label: "Modul" },
  ];

  return (
    <nav className={`w-full text-white top-0 px-4 py-3 fixed z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-blue-700/95 backdrop-blur-md shadow-xl" 
        : "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-lg"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavigate("beranda")}>
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <img src="/logo.png" width={28} height={28} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              CodeWithSamm
            </span>
            <span className="text-xs text-blue-100 opacity-80 hidden sm:block">
              Learn. Code. Create.
            </span>
          </div>
        </div>

        <ul className="hidden md:flex space-x-1 text-sm font-medium items-center">
          {menuItems.map(({ key, label }) => (
            <li key={key}>
              <button
                onClick={() => handleNavigate(key as SectionKey)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 capitalize group ${
                  activeSection === key 
                    ? "bg-white/15 text-white shadow-lg" 
                    : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="relative z-10">{label}</span>
                {activeSection === key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg opacity-20"></div>
                )}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-300"></div>
              </button>
            </li>
          ))}

          {isLoggedIn ? (
            <li className="ml-4">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Logout</span>
              </button>
            </li>
          ) : (
            <li className="ml-4">
              <button
                onClick={handleLogin}
                className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:scale-105"
              >
                Login
              </button>
            </li>
          )}
        </ul>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative"
        >
          <div className="relative">
            {mobileMenuOpen ? (
              <FaTimes size={20} className="text-white transform rotate-0 transition-transform duration-300" />
            ) : (
              <FaBars size={20} className="text-white transform rotate-0 transition-transform duration-300" />
            )}
          </div>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="mt-4 space-y-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
          {menuItems.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleNavigate(key as SectionKey)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 capitalize ${
                activeSection === key 
                  ? "bg-white/15 text-white shadow-md" 
                  : "text-blue-100 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}

          <div className="pt-2 border-t border-white/20">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-3 rounded-lg transition-all duration-300 shadow-lg"
              >
                <span>Logout</span>
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-300 shadow-lg font-medium"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;