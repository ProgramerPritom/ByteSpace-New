export default function CtaSection() {
  return (
    <section className="relative w-full bg-[#003BE2] overflow-hidden min-h-[488px] flex items-center justify-center">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative w-[1440px] h-[488px] shrink-0 pointer-events-none">
        {/* 1. White Zigzag Spring (top-left) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "24px", top: "16px", width: "175px" }}
        >
          <img
            src="/hero/ornament-zigzag.png"
            alt=""
            className="w-full h-auto object-contain -rotate-[35deg]"
          />
        </div>

        {/* 2. Lime Donut (bottom-left) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "-45px", bottom: "-60px", width: "230px" }}
        >
          <img
            src="/hero/ornament-donut-lime.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* 3. Lime Pyramid (top-right) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ left: "1040px", top: "25px", width: "140px" }}
        >
          <img
            src="/hero/ornament-pyramid-lime.png"
            alt=""
            className="w-full h-auto object-contain rotate-[10deg]"
          />
        </div>

        {/* 4. White Cylinder (top-right corner) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ right: "-40px", top: "-45px", width: "270px" }}
        >
          <img
            src="/hero/ornament-cylinder-white.png"
            alt=""
            className="w-full h-auto object-contain rotate-[30deg]"
          />
        </div>

        {/* 5. Lime Spring (bottom-right) */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{ right: "75px", bottom: "-45px", width: "220px" }}
        >
          <img
            src="/hero/lime-spring.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-auto z-20">
          <h2 className="text-[38px] sm:text-[44px] font-semibold text-[#F5F5F6] leading-[1.2] tracking-tight font-['Poppins',sans-serif] max-w-[700px]">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p className="mt-5 text-[16px] sm:text-[18px] text-[#F5F5F6]/90 leading-[1.6] max-w-[820px] font-normal font-['Satoshi',sans-serif]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="mt-8">
            <button
              type="button"
              className="bg-[#D4FB20] text-[#111215] font-medium text-[16px] sm:text-[18px] leading-[1.2] px-7 py-3 rounded-full hover:brightness-105 active:scale-95 transition-all shadow-lg cursor-pointer font-['Satoshi',sans-serif]"
            >
              Join as Creator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
