"use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full max-w-[500px] sm:w-[500px] lg:w-[520px] xl:w-[540px] bg-white rounded-[36px] sm:rounded-[40px] p-8 sm:p-11 xl:p-12 shadow-2xl flex flex-col justify-between min-h-[580px] sm:min-h-[620px]">
      <div>
        <span className="text-[#003BE2] text-[15px] sm:text-[16px] font-semibold font-['Satoshi',sans-serif]">
          Sign In
        </span>

        <h2 className="text-[34px] sm:text-[40px] xl:text-[44px] font-bold text-[#040819] font-['Poppins',sans-serif] leading-[1.15] mt-1 tracking-tight">
          Welcome Back
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="loginEmail"
              className="text-[14px] font-medium text-[#242528] font-['Satoshi',sans-serif] mb-2"
            >
              Email
            </label>
            <input
              id="loginEmail"
              type="email"
              placeholder="designer@example.com"
              className="w-full h-[54px] rounded-[16px] border border-[#CED0D3] px-5 text-[15px] text-[#111215] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] font-['Satoshi',sans-serif] transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="loginPassword"
              className="text-[14px] font-medium text-[#242528] font-['Satoshi',sans-serif] mb-2"
            >
              Password
            </label>
            <input
              id="loginPassword"
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
              Sign In
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center my-8">
          <div className="border-t border-[#CED0D3] w-full" />
          <span className="bg-white px-4 text-[13px] text-[#82868E] absolute font-['Satoshi',sans-serif]">
            or
          </span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="w-[58px] h-[58px] rounded-[20px] border border-[#CED0D3] flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-[#111215]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Sign in with Google"
            className="w-[58px] h-[58px] rounded-[20px] border border-[#CED0D3] flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.15 0 9.99 0 12s.45 3.85 1.24 5.42l4.04-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-center pt-8 text-[14px] text-[#565A65] font-['Satoshi',sans-serif]">
        New user?{" "}
        <Link
          href="/register"
          className="text-[#003BE2] font-semibold hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}
