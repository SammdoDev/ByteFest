"use client";

import { useEffect, useState, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { FaBars, FaUser, FaMoon, FaSun } from "react-icons/fa";

type NavbarProps = {
  onToggleSidebar: () => void;
};

const NavbarDashboard = ({ onToggleSidebar }: NavbarProps) => {
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const storedName = localStorage.getItem("username");
    setUserName(storedName || "");

    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("username");
    router.push("/auth/login");
  };

  const goToProfile = () => {
    router.push("/profil");
  };

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  if (!mounted) {
    return (
      <nav className="bg-card shadow-md px-6 py-3 flex justify-between items-center w-full border-b border-border">
        <button className="text-primary">
          <FaBars size={20} />
        </button>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8"></div>
          <div className="w-10 h-10 bg-secondary rounded-full"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-card shadow-md px-6 py-3 flex justify-between items-center w-full border-b border-border">
      <button
        onClick={onToggleSidebar}
        className="text-primary hover:text-primary/80 transition-colors"
      >
        <FaBars size={20} />
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-card-foreground hover:text-primary w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="User Menu"
          >
            <FaUser />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-popover shadow-lg border border-border rounded-md z-10">
              <button
                onClick={goToProfile}
                className="block w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-accent transition-colors"
              >
                My Profile / {userName}
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-destructive hover:bg-accent transition-colors"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarDashboard;