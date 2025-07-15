"use client";

import React from "react";
import {
  FaHome,
  FaUserGraduate,
  FaClipboardList,
  FaChartLine,
  FaUsers,
  FaSignOutAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("username");
    router.push("/auth/login");
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
        <h2 className="text-xl font-bold">{isOpen ? "Eduverse" : "E"}</h2>
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
          href="/"
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
          href="/materi"
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all"
        >
          <FaUserGraduate className="text-xl" />
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
          href="/"
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
          href="/progress"
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
            Beranda
          </span>
        </Link>

        <Link
          href="/forum"
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all"
        >
          <FaUser className="text-xl" />
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

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 hover:bg-blue-600 p-2 rounded mt-6"
        >
          <FaSignOutAlt />
          <span
            className={`
              ${!isOpen && "hidden md:inline-block"}
              ${!isOpen ? "md:opacity-0" : "opacity-100"}
              transition-all duration-300 ease-in-out
            `}
          >
            Logout
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
