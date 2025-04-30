"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-blue-600 p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">MyWebsite</div>

          {/* Hamburger Button */}
          <button
            className="flex flex-col justify-center items-center md:hidden z-50"
            onClick={() => setIsOpen(true)}
          >
            <span className="bg-white block h-1 w-6 rounded-sm mb-1"></span>
            <span className="bg-white block h-1 w-6 rounded-sm mb-1"></span>
            <span className="bg-white block h-1 w-6 rounded-sm"></span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="/" className="text-white hover:underline">Home</a></li>
            <li><a href="/about" className="text-white hover:underline">About</a></li>
            <li><a href="/services" className="text-white hover:underline">Services</a></li>
            <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Fullscreen Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-blue-800 text-white transform transition-transform duration-700 ease-in-out z-40 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close (X) Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-3xl font-bold text-white"
        >
          &times;
        </button>

        <div className="flex flex-col p-8 space-y-6 pt-24 text-lg">
          <a href="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</a>
          <a href="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</a>
          <a href="/services" onClick={() => setIsOpen(false)} className="hover:underline">Services</a>
          <a href="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
