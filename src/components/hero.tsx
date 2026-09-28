import Image from "next/image";
import { Search, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[904px] overflow-hidden bg-[#003BE2]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
          backgroundSize: "120px 120px"
        }}
      />

      <div className="relative w-[1440px] h-full mx-auto">
        <div className="relative z-20 pt-[49px] text-center">
          <h1 className="text-[64px] font-bold text-white tracking-tight leading-[1.12] font-['Clash_Display',sans-serif]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="mt-4 text-[18px] text-[#F5F5F6]/90 max-w-[680px] mx-auto leading-relaxed font-normal">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form className="mt-7 max-w-[540px] mx-auto bg-white rounded-full p-2 pl-6 flex items-center justify-between shadow-2xl">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Search className="w-5 h-5 text-[#82868E] shrink-0" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-[15px] text-[#111215] placeholder:text-[#82868E] outline-none font-normal"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4FB20] text-[#111215] font-semibold text-[15px] px-8 py-3.5 rounded-full hover:brightness-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        <div className="absolute top-[462px] left-1/2 -translate-x-1/2 w-[1149px] h-[1149px] rounded-full bg-[#D4FB20] pointer-events-none" />

        <div className="absolute top-[101px] left-1/2 -translate-x-1/2 w-[1719px] h-[803px] pointer-events-none z-10">
          <Image
            src="/hero/3d-ornaments.png"
            alt="3D decorations"
            width={1719}
            height={803}
            className="w-full h-full object-contain block"
            priority
          />
        </div>

        <div className="absolute bottom-[-118px] left-1/2 -translate-x-1/2 w-[578px] z-20 pointer-events-none flex justify-center items-end">
          <Image
            src="/hero/student.png"
            alt="Student with laptop"
            width={578}
            height={580}
            className="w-full h-auto object-contain block object-bottom"
            priority
          />
        </div>

        <div className="absolute left-[336px] top-[519px] w-[208px] h-[70px] bg-white rounded-[16px] px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex flex-col justify-center z-30">
          <h4 className="text-[16px] font-bold text-[#18191D] leading-tight">
            UI/UX Design
          </h4>
          <p className="text-[12px] text-[#666973] mt-1 font-normal">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        <div className="absolute left-[883px] top-[531px] w-[232px] h-[131px] bg-white rounded-[20px] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] z-30">
          <p className="text-[14px] font-medium text-[#666973]">
            Learning Progress
          </p>
          <h3 className="text-[36px] font-bold text-[#18191D] leading-none my-2.5 tracking-tight">
            55%
          </h3>
          <div className="w-full bg-[#F5F5F6] h-2.5 rounded-full overflow-hidden mt-3">
            <div className="bg-[#D4FB20] h-full w-[55%] rounded-full" />
          </div>
        </div>

        <div className="absolute left-[259px] top-[717px] w-[258px] h-[121px] bg-white rounded-[20px] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.12)] z-30">
          <h4 className="text-[16px] font-bold text-[#18191D] leading-tight">
            Happy Students
          </h4>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[14px] font-bold text-[#18191D]">4.5</span>
            <span className="text-[13px] text-[#82868E]">(240)</span>
            <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
          </div>
          <div className="mt-2.5">
            <Image
              src="/hero/avatars-row.png"
              alt="Students"
              width={226}
              height={38}
              className="w-[226px] h-[38px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
