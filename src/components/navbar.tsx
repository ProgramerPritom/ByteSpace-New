"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  variant?: "blue" | "light";
}

export default function Navbar({ variant = "blue" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLight = variant === "light";
  const textColor = isLight ? "text-[#242528]" : "text-[#F5F5F6]";
  const textMuted = isLight ? "text-[#565A65] hover:text-[#003BE2]" : "text-[#F5F5F6]/90 hover:text-[#F5F5F6]";

  return (
    <header className={`w-full h-[120px] flex items-center relative z-50 ${isLight ? "bg-white border-b border-[#CED0D3]" : ""}`}>
      <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo-mark.svg"
            alt="ByteSpace"
            width={29}
            height={32}
            className="w-[29px] h-[32px]"
            priority
          />
          <span className={`text-[24px] font-bold leading-[30px] ${textColor} tracking-tight font-['Clash_Display',sans-serif]`}>
            ByteSpace
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-[16px] font-medium leading-[19px] ${textColor} transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`text-[16px] font-normal leading-[26px] ${textMuted} transition-colors`}
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className={`text-[16px] font-normal leading-[26px] ${textMuted} transition-colors`}
          >
            Creators
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className={`text-[16px] font-normal leading-[24px] ${textColor} hover:opacity-80 transition-opacity`}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className={`text-[16px] font-normal leading-[24px] ${textColor} hover:opacity-80 transition-opacity`}
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Cart"
            className={`w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity ${isLight ? "invert" : ""}`}
          >
            <Image
              src="/icons/cart-icon.svg"
              alt="Cart"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${textColor} p-2`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`absolute top-[120px] left-0 w-full ${isLight ? "bg-white border-b border-[#CED0D3]" : "bg-[#002eb2] border-t border-white/10"} px-6 py-6 flex flex-col gap-5 md:hidden shadow-xl`}>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-[16px] font-medium ${textColor}`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-[16px] font-normal ${textMuted}`}
          >
            Courses
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-[16px] font-normal ${textMuted}`}
          >
            Creators
          </Link>
          <hr className={isLight ? "border-gray-200 my-1" : "border-white/10 my-1"} />
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-6">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[16px] font-normal ${textColor}`}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[16px] font-normal ${textColor}`}
              >
                Join Us
              </Link>
            </div>
            <button
              type="button"
              aria-label="Cart"
              className={`w-6 h-6 flex items-center justify-center ${isLight ? "invert" : ""}`}
            >
              <Image
                src="/icons/cart-icon.svg"
                alt="Cart"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
