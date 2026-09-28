"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-[120px] flex items-center relative z-50">
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
          <span className="text-[24px] font-bold leading-[30px] text-[#F5F5F6] tracking-tight font-['Clash_Display',sans-serif]">
            ByteSpace
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-[16px] font-medium leading-[19px] text-[#F5F5F6] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-[16px] font-normal leading-[26px] text-[#F5F5F6]/90 hover:text-[#F5F5F6] transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className="text-[16px] font-normal leading-[26px] text-[#F5F5F6]/90 hover:text-[#F5F5F6] transition-colors"
          >
            Creators
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="text-[16px] font-normal leading-[24px] text-[#F5F5F6] hover:opacity-80 transition-opacity"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-[16px] font-normal leading-[24px] text-[#F5F5F6] hover:opacity-80 transition-opacity"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Cart"
            className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
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
          className="md:hidden text-[#F5F5F6] p-2"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-[120px] left-0 w-full bg-[#002eb2] px-6 py-6 flex flex-col gap-5 md:hidden border-t border-white/10 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium text-[#F5F5F6]"
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-normal text-[#F5F5F6]/90"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-normal text-[#F5F5F6]/90"
          >
            Creators
          </Link>
          <hr className="border-white/10 my-1" />
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-6">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-normal text-[#F5F5F6]"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-normal text-[#F5F5F6]"
              >
                Join Us
              </Link>
            </div>
            <button
              type="button"
              aria-label="Cart"
              className="w-6 h-6 flex items-center justify-center"
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
