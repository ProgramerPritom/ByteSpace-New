import { CheckCircle2, Star, BarChart } from "lucide-react";

export default function GrowthFeaturesSection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden py-24 lg:py-32">
      {/* Background ambient glow blobs */}
      <div className="absolute top-10 -left-40 w-[550px] h-[550px] rounded-full bg-[#D4FB20]/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] rounded-full bg-[#BFDBFE]/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 -left-32 w-[500px] h-[500px] rounded-full bg-[#D4FB20]/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-80px] w-[600px] h-[600px] rounded-full bg-[#C7D2FE]/30 blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1258px] mx-auto px-6 flex flex-col gap-24 lg:gap-[120px]">
        {/* Row A: Your Path to Professional Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[63px] items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-[36px] sm:text-[44px] font-semibold text-[#040819] leading-[1.2] tracking-tight font-['Poppins',sans-serif] max-w-[577px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#565A65] leading-[1.6] max-w-[477px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            <div className="mt-10 flex items-end gap-10 sm:gap-[56px]">
              <div>
                <span className="block text-[32px] sm:text-[36px] font-medium text-[#003BE2] leading-[1.2] font-['Poppins',sans-serif]">
                  12K
                </span>
                <span className="block text-[16px] sm:text-[18px] text-[#565A65] mt-1 font-['Satoshi',sans-serif]">
                  Students
                </span>
              </div>
              <div>
                <span className="block text-[32px] sm:text-[36px] font-medium text-[#003BE2] leading-[1.2] font-['Poppins',sans-serif]">
                  70+
                </span>
                <span className="block text-[16px] sm:text-[18px] text-[#565A65] mt-1 font-['Satoshi',sans-serif]">
                  Courses
                </span>
              </div>
              <div>
                <span className="block text-[32px] sm:text-[36px] font-medium text-[#003BE2] leading-[1.2] font-['Poppins',sans-serif]">
                  16
                </span>
                <span className="block text-[16px] sm:text-[18px] text-[#565A65] mt-1 font-['Satoshi',sans-serif]">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Composite */}
          <div className="lg:col-span-6 relative w-full max-w-[580px] h-[520px] mx-auto flex items-center justify-center">
            {/* Background Course Card */}
            <div className="absolute top-2 left-2 sm:left-4 w-[280px] sm:w-[320px] bg-white rounded-[24px] p-3 border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.04)] z-0 opacity-95">
              <div className="relative w-full aspect-[4/2.5] rounded-[14px] overflow-hidden bg-[#F3F4F6]">
                <img
                  src="/courses/course-1.png"
                  alt="Learn Figma from Basic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-[11px] text-[#3A3B3F]">
                  <span className="bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 whitespace-nowrap">
                    17 Lessons
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 whitespace-nowrap">
                    2 hours 16 mins
                  </span>
                </div>
              </div>
              <div className="mt-3 px-1 pb-1">
                <h4 className="text-[15px] font-bold text-[#111215] truncate">
                  Learn Figma from Basic
                </h4>
                <p className="text-[12px] text-[#666973] mt-0.5">
                  by <span className="text-[#003BE2]">purepearl studio</span>
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1.5 bg-[#F5F5F6] px-2.5 py-1 rounded-full text-[11px] text-[#4B4C53]">
                    <BarChart className="w-3 h-3 text-[#4B4C53]" />
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center -space-x-2">
                    <div className="w-[50px] h-6 rounded-l-full overflow-hidden relative">
                      <img
                        src="/hero/avatars-row.png"
                        alt="Students"
                        className="w-[140px] max-w-none h-full object-cover object-left"
                      />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#D4FB20] border-2 border-white flex items-center justify-center text-[8px] font-bold text-[#111215]">
                      26+
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-[16px] font-bold text-[#003BE2]">$25</span>
                  <span className="text-[12px] text-[#82868E]">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Lime Spring 3D Ornament */}
            <div className="absolute -top-4 right-6 sm:right-10 w-[140px] sm:w-[170px] z-10 pointer-events-none">
              <img
                src="/hero/lime-spring.png"
                alt="3D Ornament"
                className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(212,251,32,0.35)]"
              />
            </div>

            {/* Student Photo */}
            <div className="relative z-20 w-[380px] sm:w-[460px] h-[480px] flex items-end justify-center pointer-events-none">
              <img
                src="/hero/student.png"
                alt="Student with laptop"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Learning Progress Card */}
            <div className="absolute bottom-6 right-0 sm:right-2 z-30 bg-white rounded-[16px] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-black/[0.04] w-[210px] sm:w-[232px]">
              <span className="text-[14px] font-medium text-[#242528] block">
                Learning Progress
              </span>
              <span className="text-[40px] sm:text-[48px] font-semibold text-[#242528] leading-[1.1] tracking-tight font-['Poppins',sans-serif] block mt-1">
                55%
              </span>
              <div className="mt-3 w-full h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Row B: Create & Manage Courses Easily */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[79px] items-center">
          {/* Left Visual Composite */}
          <div className="order-2 lg:order-1 lg:col-span-6 relative w-full max-w-[540px] h-[560px] mx-auto flex items-center justify-center">
            {/* Total Revenue Card */}
            <div className="absolute top-4 left-0 sm:left-2 z-10 bg-[#003BE2] text-white rounded-[16px] p-4 shadow-[0_16px_36px_rgba(0,59,226,0.3)] w-[190px] sm:w-[220px]">
              <div className="flex items-center justify-between text-[11px] text-white/80">
                <span className="font-medium text-[13px] text-white">Total Revenue</span>
                <span>July 1-28</span>
              </div>
              <div className="mt-2 text-[22px] sm:text-[24px] font-semibold tracking-tight font-['Poppins',sans-serif]">
                $120.29
              </div>
              <div className="mt-2.5 w-full h-1.5 bg-white/25 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4FB20] rounded-full w-[60%]" />
              </div>
            </div>

            {/* Year to Date Card */}
            <div className="absolute top-40 left-0 sm:left-2 z-10 bg-[#003BE2] text-white rounded-[16px] p-4 shadow-[0_16px_36px_rgba(0,59,226,0.3)] w-[140px] sm:w-[155px]">
              <div className="flex items-center justify-between text-[10px] text-white/80">
                <span className="font-medium text-[12px] text-white">Year to Date</span>
                <span>2025</span>
              </div>
              <div className="mt-1.5 text-[20px] sm:text-[22px] font-semibold tracking-tight font-['Poppins',sans-serif]">
                $1,200.38
              </div>
              <span className="mt-2 inline-block bg-[#D4FB20] text-[#242528] rounded-full text-[10px] font-bold px-2 py-0.5">
                +12%
              </span>
            </div>

            {/* Lime Spring 3D Ornament */}
            <div className="absolute top-28 right-4 sm:right-8 w-[130px] sm:w-[160px] z-10 pointer-events-none">
              <img
                src="/hero/lime-spring.png"
                alt="3D Ornament"
                className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(212,251,32,0.35)]"
              />
            </div>

            {/* Woman Photo */}
            <div className="relative z-20 w-[340px] sm:w-[420px] h-[540px] flex items-end justify-center pointer-events-none">
              <img
                src="/hero/Girl-tab.png"
                alt="Creator with tablet"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Happy Students Card */}
            <div className="absolute bottom-6 right-0 sm:right-2 z-30 bg-white rounded-[16px] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-black/[0.04] w-[230px] sm:w-[258px]">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-medium text-[#242528]">
                  Happy Students
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#242528]">
                <span className="font-bold">4.8</span>
                <span className="text-[#82868E]">(212)</span>
                <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
              </div>
              <div className="mt-3 flex items-center -space-x-2">
                <div className="w-[120px] sm:w-[140px] h-7 rounded-l-full overflow-hidden relative">
                  <img
                    src="/hero/avatars-row.png"
                    alt="Happy Students"
                    className="w-[180px] max-w-none h-full object-cover object-left"
                  />
                </div>
                <div className="relative z-10 w-7 h-7 rounded-full bg-[#D4FB20] border-2 border-white flex items-center justify-center shrink-0">
                  <span className="text-[9px] font-bold text-[#111215]">2k+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-[36px] sm:text-[44px] font-semibold text-[#040819] leading-[1.2] tracking-tight font-['Poppins',sans-serif] max-w-[420px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#565A65] leading-[1.6] max-w-[574px]">
              <strong className="text-[#040819] font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#003BE2] fill-[#003BE2] stroke-white shrink-0" />
                  <span className="text-[17px] sm:text-[18px] font-medium text-[#040819]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
