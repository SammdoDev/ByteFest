"use client";

import React from "react";
import {
  FaHome,
  FaClipboardList,
  FaChartLine,
  FaSignOutAlt,
  FaTimes,
  FaArrowLeft,
  FaCommentDots,
  FaBook,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("username");
    router.push("/");
  };

  const NavItem = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
  }) => (
    <Link
      href={href}
      className="flex items-center gap-3 hover:bg-blue-600 p-2 rounded transition"
    >
      {icon}
      <span
        className={`
          text-sm
          ${!isOpen && "hidden md:inline-block"}
          ${!isOpen ? "md:opacity-0" : "opacity-100"}
          transition-all duration-300 ease-in-out
        `}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <div
      className={`
        fixed md:relative top-0 left-0 h-screen bg-blue-500 text-white p-4 z-50
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-20"}
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 justify-center">
          <img
            src="/logo.png"
            alt="Eduverse Logo"
            className={`object-contain ${isOpen ? "h-8" : "h-8 w-8 mx-auto "}`}
          />
          {isOpen && <h2 className="text-xl font-bold">CodeWithSamm</h2>}
        </div>

        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-200 md:hidden"
          aria-label="Close Sidebar"
        >
          <FaTimes />
        </button>
      </div>

      <hr className="bg-gray-100 h-[1px] w-full mb-4" />

      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all"
        >
          <FaHome className="text-xl" />
          <span
            className={`
      transition-all duration-200 
      ${isOpen ? "inline-block" : "hidden"} 
      md:${isOpen ? "inline-block" : "hidden"}
    `}
          >
            Beranda
          </span>
        </Link>

        <Link
          href="/dashboard/materi"
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all"
        >
          <FaBook className="text-xl" />
          <span
            className={`
      transition-all duration-200 
      ${isOpen ? "inline-block" : "hidden"} 
      md:${isOpen ? "inline-block" : "hidden"}
    `}
          >
            Materi
          </span>
        </Link>

        <Link
          href="/dashboard/kuis"
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all"
        >
          <FaClipboardList className="text-xl" />
          <span
            className={`
      transition-all duration-200 
      ${isOpen ? "inline-block" : "hidden"} 
      md:${isOpen ? "inline-block" : "hidden"}
    `}
          >
            Kuis
          </span>
        </Link>
        <Link
          href="/dashboard/peringkat"
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all"
        >
          <FaChartLine className="text-xl" />
          <span
            className={`
      transition-all duration-200 
      ${isOpen ? "inline-block" : "hidden"} 
      md:${isOpen ? "inline-block" : "hidden"}
    `}
          >
            Peringkat
          </span>
        </Link>

        <Link
          href="/dashboard/forum"
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all"
        >
          <FaCommentDots className="text-xl" />
          <span
            className={`
      transition-all duration-200 
      ${isOpen ? "inline-block" : "hidden"} 
      md:${isOpen ? "inline-block" : "hidden"}
    `}
          >
            Forum
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all"
        >
          <FaArrowLeft className="text-xl" />
          <span
            className={`
      transition-all duration-200 
      ${isOpen ? "inline-block" : "hidden"} 
      md:${isOpen ? "inline-block" : "hidden"}
    `}
          >
            Kembali ke halaman utama
          </span>
        </Link>

        <div
          onClick={handleLogout}
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all cursor-pointer mt-6"
        >
          <FaSignOutAlt className="text-xl" />
          <span
            className={`
      transition-all duration-200 
      ${isOpen ? "inline-block" : "hidden"} 
      md:${isOpen ? "inline-block" : "hidden"}
    `}
          >
            Logout
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
