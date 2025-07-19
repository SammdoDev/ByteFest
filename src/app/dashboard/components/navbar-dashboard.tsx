"use client";

import { useEffect, useState, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { FaBars, FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";

type NavbarProps = {
  onToggleSidebar: () => void;
};

const NavbarDashboard = ({ onToggleSidebar }: NavbarProps) => {
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  let pageTitle = "Dashboard";

  useEffect(() => {
    setMounted(true);

    const storedName = localStorage.getItem("username");
    setUserName(storedName || "");

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

  if (path === "/dashboard") pageTitle = "Beranda";
  else if (path.startsWith("/dashboard/materi")) pageTitle = "Materi";
  else if (path.startsWith("/dashboard/forum")) pageTitle = "Forum";
  else if (path.startsWith("/dashboard/peringkat")) pageTitle = "Peringkat";
  else if (path.startsWith("/dashboard/kuis")) pageTitle = "Kuis";

  return (
    <nav className="bg-card shadow-md px-6 py-4 flex justify-between items-center w-full border-b-1 border-border">
      <button
        onClick={onToggleSidebar}
        className="text-primary block md:hidden hover:text-primary/80 transition-colors"
      >
        <FaBars size={20} />
      </button>

      <div className="text-lg font-semibold text-muted-foreground">
        {pageTitle}
      </div>

      <div className="flex items-center gap-4">

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-card-foreground bg-white text-black hover:text-primary w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="User Menu"
          >
            <FaUser />
          </button>

          {dropdownOpen && (
            <div className="absolute bg-black right-0 mt-2 w-44 shadow-lg rounded-md z-10">
              <button
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
};

export default NavbarDashboard;
