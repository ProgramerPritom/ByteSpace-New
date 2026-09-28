"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFoundContent() {
  return (
    <div className="min-h-screen bg-white text-[#111215] flex flex-col justify-between">
      <section className="relative w-full bg-[#003BE2] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative z-30">
          <Navbar variant="blue" />
        </div>

        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 xl:px-0 pt-4 pb-16 lg:pb-24 flex flex-col items-center justify-center text-center">
          <div className="relative select-none flex items-center justify-center w-full">
            <span
              className="text-[200px] sm:text-[320px] md:text-[400px] lg:text-[460px] font-extrabold tracking-tight leading-[0.82] select-none font-['Poppins',sans-serif]"
              style={{
                background:
                  "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.6) 55%, rgba(212, 251, 32, 0.15) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </span>

            <div className="absolute inset-x-0 bottom-1 sm:bottom-3 md:bottom-5 lg:bottom-7 flex flex-col items-center text-center px-4 pointer-events-none">
              <h1 className="text-[30px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-bold text-white tracking-tight leading-[1.12] font-['Poppins',sans-serif]">
                The page you are looking
                <br />
                for doesn&apos;t exist
              </h1>
            </div>
          </div>

          <p className="mt-8 text-[15px] sm:text-[17px] text-white/85 font-['Satoshi',sans-serif] max-w-[560px] leading-relaxed">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex items-center justify-center h-[46px] sm:h-[48px] px-8 rounded-full bg-[#D4FB20] text-[#111215] font-semibold text-[15px] hover:opacity-90 active:scale-95 transition-all font-['Satoshi',sans-serif] shadow-sm cursor-pointer"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
