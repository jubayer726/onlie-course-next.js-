"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-[#6440a7]">Home</Link></li>
          <li><Link href="/programs" className="hover:text-[#6440a7]">All Program</Link></li>
          <li><Link href="/about" className="hover:text-[#6440a7]">About</Link></li>
          <li><Link href="/contact" className="hover:text-[#6440a7]">Contact</Link></li>
          <li><Link href="/enroll" className="hover:text-[#6440a7] border px-4 py-2 rounded border-[#c01f5b]">Enroll Now</Link></li>
          <li><Link href="/dashboard" className="hover:text-[#6440a7]">Dashboard</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link href="/login" className="border border-[#c01f5b] px-4 py-1 rounded hover:bg-[#6440a7] hover:text-black transition">
            Login
          </Link>
          <Link href="/register" className="bg-[#6440a7] text-white px-4 py-1 rounded hover:bg-[#6440a7] transition">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#2e2a26] px-6 pb-6 space-y-4 text-sm">
          <Link href="/" className="block hover:text-[#6440a7]">Home</Link>
          <Link href="/programs" className="block hover:text-[#6440a7]">All Programs</Link>
          <Link href="/about" className="block hover:text-[#6440a7]">About</Link>
          <Link href="/contact" className="block hover:text-[#6440a7]">Contact</Link>
          <Link href="/enroll" className="block hover:text-[#6440a7]">Enroll Now</Link>
          <Link href="/dashboard" className="block hover:text-[#6440a7]">Dashboard</Link>

          <div className="flex gap-4 pt-4">
            <Link href="/login" className="border border-[#c01f5b] px-4 py-1 rounded">
              Login
            </Link>
            <Link href="/register" className="bg-[#6440a7] text-white px-4 py-1 rounded">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
