"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Search, ChevronDown, ChevronLeft, ChevronRight, Star, BarChart, Filter } from "lucide-react";

const SEARCH_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const SEARCH_COURSES = [
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
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
  {
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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

export default function SearchPageContent() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white text-[#111215] flex flex-col justify-between">
      <div>
        <div className="relative w-full bg-[#003BE2] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />

          <Navbar />

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-6 pb-20 md:pb-24 flex flex-col items-center text-center">
            <h1 className="text-[36px] sm:text-[44px] font-semibold text-white tracking-tight leading-[1.2] font-['Poppins',sans-serif]">
              Find Your Next Course
            </h1>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 w-full max-w-[624px] h-[52px] bg-white rounded-full p-1.5 pl-6 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0 pr-3">
                <Search className="w-5 h-5 text-[#82868E] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full bg-transparent text-[16px] text-[#242528] placeholder:text-[#82868E] outline-none font-['Satoshi',sans-serif]"
                />
              </div>

              <button
                type="button"
                className="bg-[#D4FB20] text-[#111215] font-['Satoshi',sans-serif] font-medium text-[16px] px-6 h-[40px] rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shrink-0"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-[#111215]" />
              </button>
            </form>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0 mt-12 md:mt-[72px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="h-[48px] px-5 rounded-full border border-[#CED0D3] bg-white flex items-center gap-2 text-[15px] font-medium text-[#242528] hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer"
              >
                <Filter className="w-4 h-4 text-[#242528]" />
                <span>Filter</span>
              </button>

              <button
                type="button"
                className="h-[48px] px-5 rounded-full border border-[#CED0D3] bg-white flex items-center gap-2 text-[15px] font-medium text-[#242528] hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer"
              >
                <BarChart className="w-4 h-4 text-[#242528]" />
                <span>Level</span>
              </button>

              <button
                type="button"
                className="h-[48px] px-5 rounded-full border border-[#CED0D3] bg-white flex items-center gap-2 text-[15px] font-medium text-[#242528] hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#242528]"
                >
                  <path d="M12 3v6M12 9l-5 5M12 9l5 5" />
                  <rect x="10" y="2" width="4" height="4" rx="1" />
                  <rect x="5" y="14" width="4" height="4" rx="1" />
                  <rect x="15" y="14" width="4" height="4" rx="1" />
                </svg>
                <span>Category</span>
              </button>
            </div>

            <button
              type="button"
              className="h-[48px] px-5 rounded-full border border-[#CED0D3] bg-white flex items-center gap-2 text-[15px] font-medium text-[#242528] hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer shrink-0"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#242528]"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="16" y2="12" />
                <line x1="4" y1="18" x2="12" y2="18" />
              </svg>
              <span>Most relevant</span>
            </button>
          </div>

          <div
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                e.currentTarget.scrollLeft += e.deltaY;
              }
            }}
            className="mt-8 overflow-x-auto no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-max">
              {SEARCH_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`h-[43px] px-5 rounded-full text-[15px] font-medium transition-colors font-['Satoshi',sans-serif] cursor-pointer flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-[#D4FB20] text-[#111215]"
                        : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E7EB] hover:text-[#111215]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 lg:mt-[72px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {SEARCH_COURSES.map((course) => (
              <div
                key={course.id}
                className="w-full max-w-[373px] bg-white rounded-[24px] p-3.5 border border-[#CED0D3] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
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
                  </div>
                </div>

                <div className="mt-5 px-1 pt-1 border-t border-gray-100 flex items-center justify-between">
                  <p>
                    <span className="text-[20px] font-bold text-[#003BE2]">
                      {course.price}
                    </span>
                    <span className="text-[13px] text-[#82868E] font-medium ml-1">
                      /lifetime
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 lg:mt-[72px] mb-16 lg:mb-24 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-[48px] h-[48px] rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5 text-[#242528]" />
            </button>

            <div className="flex items-center gap-6">
              {[1, 2, 3, 4, 5].map((page) => {
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`text-[18px] font-bold font-['Poppins',sans-serif] transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#CED0D3]"
                        : "text-[#242528] hover:text-[#003BE2]"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => p + 1)}
              className="w-[48px] h-[48px] rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5 text-[#242528]" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
