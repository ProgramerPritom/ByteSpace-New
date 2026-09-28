"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthVisualCluster from "@/components/auth/auth-visual-cluster";

interface AuthPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthPageLayout({
  title,
  subtitle,
  children,
}: AuthPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#003BE2] relative overflow-x-hidden flex flex-col justify-between">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <header className="relative z-30 w-full max-w-[1240px] mx-auto px-6 xl:px-8 pt-8 sm:pt-10 flex items-center">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/icons/logo-mark.svg"
            alt="ByteSpace"
            width={34}
            height={38}
            className="w-[32px] sm:w-[36px] h-auto"
            priority
          />
        </Link>
      </header>

      <main className="relative z-20 w-full max-w-[1240px] mx-auto px-6 xl:px-8 py-6 sm:py-8 lg:py-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 xl:gap-20">
        <div className="w-full lg:w-[490px] xl:w-[510px] flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
          <h1 className="text-[34px] sm:text-[40px] xl:text-[44px] font-bold text-white font-['Poppins',sans-serif] tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-[15px] sm:text-[16px] text-white/85 font-['Satoshi',sans-serif] leading-[1.6] max-w-[460px]">
            {subtitle}
          </p>

          <AuthVisualCluster />
        </div>

        <div className="w-full lg:w-auto flex justify-center shrink-0">
          {children}
        </div>
      </main>

      <div className="h-6" />
    </div>
  );
}
