import { ArrowRightIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-800 to-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <a href="#about" className="title-font font-bold text-white text-2xl">
          Manuel
        </a>
        {/* Hamburger Menu */}
        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
        </button>
        {/* Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:ml-auto md:items-center w-full md:w-auto`}
        >
          <a href="#projects" className="block md:inline-block text-white hover:text-gray-300 mx-2 p-2">
            Past Work
          </a>
          <a href="#skills" className="block md:inline-block text-white hover:text-gray-300 mx-2 p-2">
            Skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-700 to-pink-500 hover:from-purple-500 hover:to-pink-300 text-white font-medium py-2 px-4 rounded-lg shadow-md mt-4 md:mt-0 md:ml-4"
          >
            Hire Me
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
        </nav>
      </div>
    </header>
  );
}
