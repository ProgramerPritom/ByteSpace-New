import Link from "next/link";
import { Star, BarChart } from "lucide-react";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const COURSES = [
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

export default function CoursesSection() {
  return (
    <section className="w-full bg-white pt-24 pb-32">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[44px] font-bold text-[#111215] leading-[1.2] tracking-tight font-['Clash_Display',sans-serif]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-5 text-[16px] text-[#666973] leading-[1.6] font-normal px-8 max-w-[700px] mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-[920px] mx-auto">
          {CATEGORIES.map((category, index) => {
            const isFeatured = category === "Featured";
            return (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                  isFeatured
                    ? "bg-[#D4FB20] text-[#111215]"
                    : "bg-[#F5F5F6] text-[#111215] hover:bg-[#E5E7EB]"
                }`}
              >
                {category}
              </button>
            );
          })}
          <button className="px-4 py-2 text-[14px] font-semibold text-[#003BE2] hover:opacity-80 transition-opacity">
            + More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="w-full bg-white rounded-[24px] p-3.5 border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#CED0D3] transition-all block cursor-pointer"
            >
              <div className="relative w-full aspect-[4/2.6] rounded-[16px] overflow-hidden bg-[#F3F4F6]">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
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
                      by <span className="text-[#003BE2] font-medium">{course.author}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 pt-0.5">
                    <span className="text-[14px] font-bold text-[#111215]">{course.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-[#D1D5DB] text-[#D1D5DB]" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 bg-[#F5F5F6] px-3 py-1.5 rounded-full whitespace-nowrap">
                      <BarChart className="w-3.5 h-3.5 text-[#4B4C53]" />
                      <span className="text-[12px] font-normal text-[#4B4C53]">{course.level}</span>
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
                        <span className="text-[9px] font-bold text-[#111215]">{course.students}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-1">
                  <p>
                    <span className="text-[20px] font-bold text-[#003BE2]">{course.price}</span>
                    <span className="text-[13px] text-[#82868E] font-medium">/lifetime</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
