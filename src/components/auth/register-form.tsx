"use client";

import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-[500px] sm:w-[500px] lg:w-[520px] xl:w-[540px] bg-white rounded-[36px] sm:rounded-[40px] p-8 sm:p-11 xl:p-12 shadow-2xl flex flex-col justify-between min-h-[580px] sm:min-h-[620px]">
      <div>
        <span className="text-[#003BE2] text-[15px] sm:text-[16px] font-semibold font-['Satoshi',sans-serif]">
          Create an Account
        </span>

        <h2 className="text-[34px] sm:text-[40px] xl:text-[44px] font-bold text-[#040819] font-['Poppins',sans-serif] leading-[1.15] mt-1 tracking-tight">
          Welcome to
          <br />
          ByteSpace
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-[14px] font-medium text-[#242528] font-['Satoshi',sans-serif] mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Jamie Davis"
              className="w-full h-[54px] rounded-[16px] border border-[#CED0D3] px-5 text-[15px] text-[#111215] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] font-['Satoshi',sans-serif] transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[14px] font-medium text-[#242528] font-['Satoshi',sans-serif] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="designer@example.com"
              className="w-full h-[54px] rounded-[16px] border border-[#CED0D3] px-5 text-[15px] text-[#111215] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] font-['Satoshi',sans-serif] transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-[14px] font-medium text-[#242528] font-['Satoshi',sans-serif] mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full h-[54px] rounded-[16px] border border-[#CED0D3] px-5 text-[15px] text-[#111215] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] font-['Satoshi',sans-serif] transition-colors"
            />
          </div>

          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="h-[48px] px-9 rounded-full bg-[#D4FB20] text-[#111215] font-semibold text-[15px] hover:opacity-90 active:scale-95 transition-all font-['Satoshi',sans-serif] shadow-sm cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      <div className="text-center pt-8 border-t border-transparent text-[14px] text-[#565A65] font-['Satoshi',sans-serif]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#003BE2] font-semibold hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
