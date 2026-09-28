"use client";

import { Star, BarChart } from "lucide-react";

export default function AuthVisualCluster() {
  return (
    <div className="relative w-[320px] xs:w-[380px] sm:w-[480px] lg:w-[490px] h-[470px] sm:h-[490px] select-none mt-6 sm:mt-8">
      {/* 3D Lime Donut: 100% unclipped full ring framing top-left of front card */}
      <div className="absolute -top-7 sm:-top-8 left-[25px] sm:left-[68px] z-30 w-24 h-24 sm:w-28 sm:h-28 pointer-events-none">
        <img
          src="/hero/ornament-donut-lime-full.png"
          alt="Lime Donut"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Back Course Card: Build Digital Asset */}
      <div className="absolute top-10 left-0 sm:left-2 z-10 w-[240px] sm:w-[285px] bg-white rounded-[26px] p-3 sm:p-3.5 border border-[#E5E7EB] shadow-lg">
        <div className="relative w-full aspect-[4/2.6] rounded-[16px] overflow-hidden bg-[#F3F4F6]">
          <img
            src="/courses/course-2.png"
            alt="Build Digital Asset"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2.5 left-2.5">
            <span className="bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 text-[11px] font-normal text-[#3A3B3F]">
              17 Lessons
            </span>
          </div>
        </div>

        <div className="mt-3 px-1 pb-1">
          <h4 className="text-[16px] font-bold text-[#111215] leading-snug">
            Build Digit...
          </h4>
          <p className="text-[12px] text-[#666973] mt-0.5">by purepearl studio</p>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1 bg-[#F5F5F6] px-2.5 py-1 rounded-full text-[11px] text-[#4B4C53]">
              <BarChart className="w-3 h-3 text-[#4B4C53]" />
              <span>Beginner</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-[#111215] text-white text-[9px] font-bold flex items-center justify-center">
              26+
            </div>
          </div>
          <div className="mt-3">
            <span className="text-[17px] font-bold text-[#003BE2]">$25</span>
            <span className="text-[12px] text-[#82868E]">/lifetime</span>
          </div>
        </div>
      </div>

      {/* Front Course Card: the Power of Big Data */}
      <div className="absolute top-0 left-[75px] sm:left-[135px] z-20 w-[270px] sm:w-[325px] bg-white rounded-[30px] p-3.5 sm:p-4 border border-[#CED0D3] shadow-2xl">
        <div className="relative w-full aspect-[4/2.6] rounded-[18px] overflow-hidden bg-[#F3F4F6]">
          <img
            src="/courses/course-3.png"
            alt="the Power of Big Data"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 inset-x-2 flex items-center justify-between gap-1">
            <span className="bg-white/85 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] text-[#3A3B3F] font-medium">
              17 Lessons
            </span>
            <span className="bg-white/85 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] text-[#3A3B3F] font-medium">
              2 hours 16 mins
            </span>
            <span className="bg-white/85 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] text-[#3A3B3F] font-medium">
              59 Comments
            </span>
          </div>
        </div>

        <div className="mt-3 px-1 pb-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#111215] leading-snug">
                the Power of Big Data
              </h3>
              <p className="text-[12px] text-[#666973] mt-0.5">
                by <span className="text-[#003BE2] font-medium">purepearl studio</span>
              </p>
            </div>
            <div className="flex items-center gap-1 text-[13px] font-bold text-[#111215]">
              <span>4.5</span>
              <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-3.5">
            <div className="flex items-center gap-1.5 bg-[#F5F5F6] px-3 py-1.5 rounded-full text-[11px] sm:text-[12px] text-[#4B4C53]">
              <BarChart className="w-3.5 h-3.5 text-[#4B4C53]" />
              <span>Beginner</span>
            </div>

            <div className="flex items-center -space-x-1.5">
              <div className="w-[66px] h-7 rounded-l-full overflow-hidden relative">
                <img
                  src="/hero/avatars-row.png"
                  alt="Students"
                  className="w-[160px] max-w-none h-full object-cover object-left"
                />
              </div>
              <div className="relative z-10 w-7 h-7 rounded-full bg-[#111215] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                26+
              </div>
            </div>
          </div>

          <div className="mt-3.5 pt-0.5">
            <span className="text-[19px] sm:text-[20px] font-bold text-[#003BE2]">$25</span>
            <span className="text-[12px] sm:text-[13px] text-[#82868E] font-medium ml-1">/lifetime</span>
          </div>
        </div>
      </div>

      {/* 3D Lime Pyramid: 100% unclipped full pyramid */}
      <div className="absolute bottom-2 sm:bottom-3 -left-5 sm:-left-7 z-30 w-32 h-32 sm:w-36 sm:h-36 pointer-events-none">
        <img
          src="/hero/ornament-pyramid-lime-full.png"
          alt="Lime Pyramid"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      {/* 3D White Zigzag: 100% unclipped full zigzag ribbon */}
      <div className="absolute bottom-20 sm:bottom-24 -right-3 sm:-right-6 z-30 w-24 h-24 sm:w-28 sm:h-28 pointer-events-none">
        <img
          src="/hero/ornament-zigzag-full.png"
          alt="White Zigzag Ribbon"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Happy Students Floating Card: wide lime card bottom-right */}
      <div className="absolute -bottom-3 sm:-bottom-4 left-[85px] sm:left-[135px] z-30 w-[270px] sm:w-[325px] bg-[#D4FB20] rounded-[22px] p-3.5 sm:p-4 shadow-xl border border-white/30">
        <div className="flex flex-col">
          <span className="text-[14px] sm:text-[15px] font-bold text-[#111215] font-['Poppins',sans-serif]">
            Happy Students
          </span>
          <div className="flex items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold text-[#111215] mt-0.5">
            <span>4.5</span>
            <span className="text-[#565A65] font-normal">(240)</span>
            <Star className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]" />
          </div>
          <div className="mt-2.5 flex items-center -space-x-1.5 overflow-hidden">
            <div className="w-[170px] sm:w-[200px] h-7 sm:h-8 overflow-hidden relative shrink-0">
              <img
                src="/hero/avatars-row.png"
                alt="Students"
                className="h-full w-auto max-w-none object-cover object-left"
                style={{ clipPath: "inset(0 13% 0 0)" }}
              />
            </div>
            <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#111215] text-white text-[10px] sm:text-[11px] font-bold flex items-center justify-center shrink-0 shadow-md">
              2K+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
