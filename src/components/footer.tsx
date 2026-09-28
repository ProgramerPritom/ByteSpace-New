"use client";

import Image from "next/image";
import Link from "next/link";

const browseLinks = [
  { label: "Featured Courses", href: "#" },
  { label: "Featured Categories", href: "#" },
  { label: "Business", href: "#" },
  { label: "IT", href: "#" },
  { label: "Design", href: "#" },
];

const categoryLinks = [
  { label: "Development", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Photography", href: "#" },
  { label: "Finance", href: "#" },
  { label: "Sport", href: "#" },
];

const platformLinks = [
  { label: "Become a Creator", href: "#" },
  { label: "Affiliate Program", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Help", href: "#" },
  { label: "About", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#242528] border-t border-[#CED0D3] pt-[71px] pb-12">
      <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-[92px] items-start">
          <div className="w-full max-w-[528px] flex flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Link href="/" className="inline-flex items-center gap-2">
                <Image
                  src="/icons/logo-mark.svg"
                  alt="ByteSpace"
                  width={29}
                  height={32}
                  className="w-[29px] h-[32px]"
                />
                <span className="text-[24px] font-bold leading-[30px] text-[#242528] tracking-tight font-['Clash_Display',sans-serif]">
                  ByteSpace
                </span>
              </Link>
              <p className="text-[14px] leading-[1.6] text-[#242528] font-['Satoshi',sans-serif]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-[376px] h-[52px] bg-white border border-[#CED0D3] rounded-[100px] px-6 text-[16px] text-[#242528] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] font-['Satoshi',sans-serif]"
                />
                <button
                  type="submit"
                  className="h-[52px] px-8 bg-[#D4FB20] text-[#242528] font-['Satoshi',sans-serif] font-medium text-[18px] leading-[1.2] rounded-[100px] hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
                >
                  Search
                </button>
              </form>
              <p className="text-[12px] leading-[1.6] text-[#242528] font-['Satoshi',sans-serif] max-w-[504px]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[580px] grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-[40px]">
            <div className="flex flex-col gap-4">
              {browseLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[14px] leading-[1.6] text-[#242528] hover:text-[#003BE2] transition-colors font-['Satoshi',sans-serif]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {categoryLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[14px] leading-[1.6] text-[#242528] hover:text-[#003BE2] transition-colors font-['Satoshi',sans-serif]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {platformLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[14px] leading-[1.6] text-[#242528] hover:text-[#003BE2] transition-colors font-['Satoshi',sans-serif]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-[130px] pt-6 border-t border-[#CED0D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] leading-[1.6] text-[#242528] font-['Satoshi',sans-serif]">
          <span>@ 2023 ByteSpace. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
