import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 text-white flex justify-between items-center px-6 shadow-md">
      <div className="text-2xl font-bold">
        <Link href="/">BitLinks</Link>
      </div>
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link href="/shorten" className="hover:underline">Shorten</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </li>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 rounded-lg shadow-md px-4 py-2 font-semibold">
              Try Now
            </button>
          </Link>
          <Link href="https://github.com/umaiidd" target="_blank">
            <button className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 rounded-lg shadow-md px-4 py-2 font-semibold">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
