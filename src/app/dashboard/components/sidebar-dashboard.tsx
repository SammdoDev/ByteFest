"use client";

import React, { useState } from "react";
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
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isSidebarVisible = isOpen || isHovered || isSidebarLocked;

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
        className={`text-sm transition-all duration-300 ease-in-out ${
          isSidebarVisible ? "inline-block" : "hidden"
        }`}
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
        ${isSidebarVisible ? "w-64" : "w-20"}
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      onMouseEnter={() => !isSidebarLocked && setIsHovered(true)}
      onMouseLeave={() => !isSidebarLocked && setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-6">
        <div
          className={`flex items-center ${
            isSidebarVisible ? "justify-start space-x-2" : "justify-center ml-2"
          }`}
        >
          <img
            src="/logo.png"
            alt="Eduverse Logo"
            className="h-8 w-8 object-contain"
          />
          {isSidebarVisible && (
            <h2 className="text-xl font-bold">CodeWithSamm</h2>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-200 md:hidden"
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>

          {isSidebarVisible && (
            <div className="hidden md:flex items-center gap-1">
              <input
                type="checkbox"
                checked={isSidebarLocked}
                onChange={(e) => setIsSidebarLocked(e.target.checked)}
                id="lockSidebar"
              />
              <label htmlFor="lockSidebar" className="text-sm"></label>
            </div>
          )}
        </div>
      </div>

      <hr className="bg-gray-100 h-[1px] w-full mb-4" />

      <nav className="space-y-4">
        <NavItem
          href="/dashboard"
          icon={<FaHome className="text-xl" />}
          label="Beranda"
        />
        <NavItem
          href="/dashboard/materi"
          icon={<FaBook className="text-xl" />}
          label="Materi"
        />
        <NavItem
          href="/dashboard/kuis"
          icon={<FaClipboardList className="text-xl" />}
          label="Kuis"
        />
        <NavItem
          href="/dashboard/peringkat"
          icon={<FaChartLine className="text-xl" />}
          label="Peringkat"
        />
        <NavItem
          href="/dashboard/forum"
          icon={<FaCommentDots className="text-xl" />}
          label="Forum"
        />
        <NavItem
          href="/"
          icon={<FaArrowLeft className="text-xl" />}
          label="Halaman Utama"
        />

        <div
          onClick={handleLogout}
          className="flex items-center gap-4 hover:bg-blue-600 p-2 rounded transition-all cursor-pointer mt-6"
        >
          <FaSignOutAlt className="text-xl" />
          <span
            className={`transition-all duration-200 ${
              isSidebarVisible ? "inline-block" : "hidden"
            }`}
          >
            Logout
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
