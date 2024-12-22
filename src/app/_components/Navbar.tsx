"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/sesc-logo-svg.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-blue-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-col md:flex-row px-4 py-4">
        <div className="flex flex-row w-full items-center justify-between ">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link className="flex flex-row items-center gap-x-4" href="/">
              <Image
                src={logo}
                width={200}
                height={100}
                alt="logo"
                className="w-[45px] md:w-[50px]"
              />
              <h1 className="hidden md:block text-2xl font-semibold">
                Official Blog of SLIIT SESC
              </h1>
              <h1 className="md:hidden text-2xl font-semibold">SESC Blog</h1>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-blue-900 hover:text-black"
              aria-label="Toggle menu">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Links */}
        <div
          className={`md:flex md:items-end font-medium text-xl md:justify-center md:mt-0 md:mb-0 ${
            isOpen ? "flex flex-col w-full mt-4 mb-2" : "hidden"
          }`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-nowrap">
            <li className="mt-4 md:mt-0 hover:text-black hover:underline underline-offset-2">
              <Link href="/">Home</Link>
            </li>
            <li className="mt-4 md:mt-0 hover:text-black hover:underline underline-offset-2">
              <Link href="/about">All Posts</Link>
            </li>
            <li className="mt-4 md:mt-0 hover:text-black hover:underline underline-offset-2">
              <Link href="/contact">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
