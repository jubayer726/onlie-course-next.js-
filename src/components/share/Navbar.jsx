"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Programs", path: "/programs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Enroll Now", path: "/enroll" },
    { name: "Dashboard", path: "/dashboard" },
  ];
  return (
    <nav className="bg-[#2e2a26] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="./logo3.png" alt="" className="w-12 rounded-full" />
          <span className="text-primary font-bold text-xl">
            Online<span className="text-secondary"> Coaching</span>
          </span>
        </Link>
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium shadow">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-medium transition ${
                pathname === link.path
                  ? "border-b-2 border-blue-600"
                  : "text-white hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/login"
            className="border border-[#c01f5b] px-4 py-1 rounded hover:bg-[#6440a7] hover:text-black transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-[#6440a7] text-white px-4 py-1 rounded hover:bg-[#6440a7] transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#2e2a26] px-6 pb-6 space-y-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-medium block transition ${
                pathname === link.path
                  ? "border-b-2 border-blue-600"
                  : "text-white hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex gap-4 pt-4">
            <Link
              href="/login"
              className="border border-[#c01f5b] px-4 py-1 rounded"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#6440a7] text-white px-4 py-1 rounded"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
