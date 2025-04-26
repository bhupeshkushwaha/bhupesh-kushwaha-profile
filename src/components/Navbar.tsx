// src/components/Navbar.tsx

import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-8 shadow-sm fixed top-0 bg-white z-50">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Bhupesh Kushwaha" className="h-8 w-8" />
        <span className="font-bold text-lg">Bhupesh Kushwaha</span>
      </div>

      {/* Center Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
        <a href="#about" className="hover:text-gray-600 transition">About Me</a>
        <a href="#skills" className="hover:text-gray-600 transition">Skills</a>
        <a href="#projects" className="hover:text-gray-600 transition">Project</a>
        <a href="#contact" className="hover:text-gray-600 transition">Contact Me</a>
      </nav>

      {/* Right Resume Button */}
      <div className="flex items-center">
        <a
          href="/bhupesh-kushwaha.pdf"
          download
          className="bg-black text-white text-sm font-semibold px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition"
        >
          Resume <span className="text-lg">⬇️</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
