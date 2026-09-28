"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  SlidersHorizontal,
  BarChart,
  LayoutGrid,
  Menu,
  Star,
} from "lucide-react";

const CREATOR_COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    students: "26+",
    thumbnail: "/courses/course-1.png",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    students: "26+",
    thumbnail: "/courses/course-2.png",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    students: "26+",
    thumbnail: "/courses/course-3.png",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    students: "26+",
    thumbnail: "/courses/course-4.png",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    students: "26+",
    thumbnail: "/courses/course-5.png",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    students: "26+",
    thumbnail: "/courses/course-6.png",
  },
];

export default function CreatorProfileContent() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(12);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

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

        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 xl:px-0 pt-4 pb-14">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] rounded-[24px] overflow-hidden shrink-0 shadow-sm">
              <img
                src="/creators/profile.png"
                alt="PurePearl Studio"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h1 className="text-[28px] sm:text-[36px] font-bold text-white font-['Poppins',sans-serif] tracking-tight leading-tight">
                  PurePearl Studio
                </h1>
                <span className="bg-[#D4FB20] text-[#111215] text-[13px] font-semibold px-3 py-1 rounded-full font-['Satoshi',sans-serif]">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-[15px] sm:text-[16px] text-white/90 font-['Satoshi',sans-serif]">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          <div className="mt-6 max-w-[950px] flex flex-col gap-3 text-[14px] sm:text-[15px] text-white/85 font-['Satoshi',sans-serif] leading-[1.6]">
            <p>
              Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#242528] rounded-full px-5 py-2 text-[14px] font-medium font-['Satoshi',sans-serif] shadow-sm flex items-center gap-1.5">
                <span className="font-bold text-[#003BE2]">3</span>
                <span>Products</span>
              </div>

              <div className="bg-white text-[#242528] rounded-full px-5 py-2 text-[14px] font-medium font-['Satoshi',sans-serif] shadow-sm flex items-center gap-1.5">
                <span className="font-bold text-[#003BE2]">{followersCount}</span>
                <span>Followers</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFollowToggle}
              className={`h-[44px] px-8 rounded-full font-semibold text-[15px] transition-all font-['Satoshi',sans-serif] shadow-sm cursor-pointer ${
                isFollowing
                  ? "bg-white text-[#003BE2] hover:bg-gray-100"
                  : "bg-[#D4FB20] text-[#111215] hover:opacity-90 active:scale-95"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white flex-1 py-12">
        <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="h-[42px] px-5 rounded-full border border-[#CED0D3] bg-white text-[14px] font-medium text-[#242528] flex items-center gap-2 hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#242528]" />
                <span>Filter</span>
              </button>

              <button
                type="button"
                className="h-[42px] px-5 rounded-full border border-[#CED0D3] bg-white text-[14px] font-medium text-[#242528] flex items-center gap-2 hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer"
              >
                <BarChart className="w-4 h-4 text-[#242528]" />
                <span>Level</span>
              </button>

              <button
                type="button"
                className="h-[42px] px-5 rounded-full border border-[#CED0D3] bg-white text-[14px] font-medium text-[#242528] flex items-center gap-2 hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer"
              >
                <LayoutGrid className="w-4 h-4 text-[#242528]" />
                <span>Category</span>
              </button>
            </div>

            <button
              type="button"
              className="h-[42px] px-5 rounded-full border border-[#CED0D3] bg-white text-[14px] font-medium text-[#242528] flex items-center gap-2 hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer"
            >
              <Menu className="w-4 h-4 text-[#242528]" />
              <span>Most relevant</span>
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREATOR_COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="w-full bg-white rounded-[24px] p-3.5 border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#CED0D3] transition-all block cursor-pointer"
              >
                <div className="relative w-full aspect-[4/2.6] rounded-[16px] overflow-hidden bg-[#F3F4F6]">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
                    <span className="bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 text-[12px] leading-[1.2] font-normal text-[#3A3B3F] whitespace-nowrap">
                      {course.lessons}
                    </span>
                    <span className="bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 text-[12px] leading-[1.2] font-normal text-[#3A3B3F] whitespace-nowrap">
                      {course.duration}
                    </span>
                    <span className="bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 text-[12px] leading-[1.2] font-normal text-[#3A3B3F] whitespace-nowrap">
                      {course.comments}
                    </span>
                  </div>
                </div>

                <div className="mt-4 px-1 pb-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[18px] font-bold text-[#111215] leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-[13px] text-[#666973] mt-1">
                        by{" "}
                        <span className="text-[#003BE2] font-medium">
                          {course.author}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 pt-0.5">
                      <span className="text-[14px] font-bold text-[#111215]">
                        {course.rating}
                      </span>
                      <Star className="w-3.5 h-3.5 fill-[#D1D5DB] text-[#D1D5DB]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 bg-[#F5F5F6] px-3 py-1.5 rounded-full whitespace-nowrap">
                        <BarChart className="w-3.5 h-3.5 text-[#4B4C53]" />
                        <span className="text-[12px] font-normal text-[#4B4C53]">
                          {course.level}
                        </span>
                      </div>

                      <div className="flex items-center -space-x-2">
                        <div className="w-[72px] h-7 rounded-l-full overflow-hidden relative">
                          <img
                            src="/hero/avatars-row.png"
                            alt="Students"
                            className="w-[180px] max-w-none h-full object-cover object-left"
                          />
                        </div>
                        <div className="relative z-10 w-7 h-7 rounded-full bg-[#D4FB20] border-2 border-white flex items-center justify-center shrink-0">
                          <span className="text-[9px] font-bold text-[#111215]">
                            {course.students}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-1">
                    <p>
                      <span className="text-[20px] font-bold text-[#003BE2]">
                        {course.price}
                      </span>
                      <span className="text-[13px] text-[#82868E] font-medium">
                        /lifetime
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
