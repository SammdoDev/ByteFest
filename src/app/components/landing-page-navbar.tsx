import React from "react";

type NavbarProps = {
  onToggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-lg font-semibold">CodeWithSamm</h1>
      <button
        onClick={onToggleSidebar}
        className="bg-blue-800 hover:bg-blue-700 px-3 py-1 rounded"
      >
        Toggle Sidebar
      </button>
    </nav>
  );
};

export default Navbar;
