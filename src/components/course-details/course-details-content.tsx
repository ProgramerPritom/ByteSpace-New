"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Share2,
  BarChart,
  Star,
  Users,
  FolderOpen,
  Video,
  Award,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const SNEAK_PEAKS = [
  { id: 1, src: "/course-details/peak-01.png", alt: "Design Wireframe Sketch" },
  { id: 2, src: "/course-details/peak-02.png", alt: "Laptop UI Mockup" },
  { id: 3, src: "/course-details/peak-03.png", alt: "Design System Screen" },
  { id: 4, src: "/course-details/peak-04.png", alt: "Mobile App Interfaces" },
];

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const LESSON_MODULES = [
  {
    id: 1,
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    id: 2,
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    id: 3,
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    id: 4,
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    id: 5,
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    id: 6,
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const RATING_DISTRIBUTION = [
  { stars: 5, percentage: "85%", count: 720 },
  { stars: 4, percentage: "32%", count: 120 },
  { stars: 3, percentage: "10%", count: 21 },
  { stars: 2, percentage: "4%", count: 12 },
  { stars: 1, percentage: "5%", count: 16 },
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    avatar: "/course-details/Ellipse-review.png",
    comment:
      '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    avatar: "/course-details/Ellipse-review-02.png",
    comment:
      '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    avatar: "/course-details/Ellipse-review-03.png",
    comment:
      '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."',
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    avatar: "/course-details/elipse-reivew-05.png",
    comment:
      '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."',
  },
  {
    id: 5,
    name: "Kristin Watson",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 4,
    avatar: "/testimonial/Ellipse-01.png",
    comment:
      '"Great foundational knowledge and practical design exercises. The digital asset structure is well organized and easy to follow."',
  },
  {
    id: 6,
    name: "Jacob Jones",
    role: "Product Designer",
    date: "a year ago",
    rating: 3,
    avatar: "/testimonial/Ellipse-02.png",
    comment:
      '"Solid foundation and clear instruction. Would love to see even more in-depth real world case studies in the advanced sections."',
  },
];

export default function CourseDetailsContent() {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");
  const [reviewFilter, setReviewFilter] = useState<number | "all">("all");

  return (
    <div className="min-h-screen bg-white text-[#111215] flex flex-col justify-between">
      <section className="relative w-full bg-[#003BE2] overflow-visible">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative z-30">
          <Navbar />
        </div>

        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 xl:px-0 pt-4 pb-12 lg:pb-14">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-[780px]">
              <h1 className="text-[34px] sm:text-[44px] font-semibold text-white tracking-tight leading-[1.2] font-['Poppins',sans-serif]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-3 text-[16px] sm:text-[18px] text-white/90 leading-[1.5] font-['Satoshi',sans-serif]">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-3 text-[14px] text-white/80 font-['Satoshi',sans-serif]">
                by{" "}
                <span className="text-[#D4FB20] font-medium hover:underline cursor-pointer">
                  purepearl studio
                </span>
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 text-[#242528] text-[14px] font-medium shadow-sm font-['Satoshi',sans-serif]">
                  <BarChart className="w-4 h-4 text-[#242528]" />
                  <span>Intermediate</span>
                </div>

                <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 text-[#242528] text-[14px] font-medium shadow-sm font-['Satoshi',sans-serif]">
                  <Star className="w-4 h-4 fill-[#003BE2] text-[#003BE2]" />
                  <span>4.8 (172 reviews)</span>
                </div>

                <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 text-[#242528] text-[14px] font-medium shadow-sm font-['Satoshi',sans-serif]">
                  <Users className="w-4 h-4 text-[#242528]" />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="self-start bg-[#D4FB20] text-[#111215] font-['Satoshi',sans-serif] font-medium text-[15px] px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shadow-sm shrink-0"
            >
              <Share2 className="w-4 h-4 text-[#111215]" />
              <span>Share</span>
            </button>
          </div>

          <div className="mt-10 relative flex flex-col lg:flex-row items-start justify-between gap-10">
            <div className="w-full lg:w-[720px] shrink-0">
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[479px] rounded-[24px] overflow-hidden">
                <img
                  src="/course-details/girl.png"
                  alt="Build Digital Asset Video Preview"
                  className="w-full h-full object-cover object-top"
                />
                <button
                  type="button"
                  aria-label="Play course preview video"
                  className="absolute inset-0 m-auto w-[76px] h-[76px] rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer drop-shadow-2xl"
                >
                  <img
                    src="/course-details/Auto Layout Horizontal.png"
                    alt="Play"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[440px] shrink-0 lg:absolute lg:top-0 lg:right-0 z-30">
              <div className="w-full bg-white rounded-[24px] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-[#CED0D3] flex flex-col gap-6">
                <div>
                  <h3 className="text-[20px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                    112 Lessons (24 hours)
                  </h3>

                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#242528] font-medium font-['Satoshi',sans-serif]">
                        01 Introduction to Digital Assets
                      </span>
                      <span className="text-[#003BE2] font-semibold font-['Satoshi',sans-serif] shrink-0 ml-2">
                        12 mins
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#242528] font-medium font-['Satoshi',sans-serif]">
                        02 Design Principles for Impacts
                      </span>
                      <span className="text-[#003BE2] font-semibold font-['Satoshi',sans-serif] shrink-0 ml-2">
                        21 mins
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#242528] font-medium font-['Satoshi',sans-serif]">
                        03 Advanced Techniques in Digital Creation
                      </span>
                      <span className="text-[#003BE2] font-semibold font-['Satoshi',sans-serif] shrink-0 ml-2">
                        16 mins
                      </span>
                    </div>

                    <button
                      type="button"
                      className="text-left text-[14px] text-[#003BE2] font-semibold font-['Satoshi',sans-serif] hover:underline mt-1 cursor-pointer"
                    >
                      99 more videos
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[13px] text-[#565A65] font-['Satoshi',sans-serif] leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <div className="mt-3 flex items-baseline">
                    <span className="text-[36px] font-bold text-[#003BE2] font-['Poppins',sans-serif] leading-none">
                      $25
                    </span>
                    <span className="text-[14px] text-[#82868E] font-medium ml-1.5 font-['Satoshi',sans-serif]">
                      /lifetime
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-4 w-full h-[52px] bg-[#D4FB20] text-[#111215] font-semibold text-[16px] rounded-full hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer font-['Satoshi',sans-serif]"
                  >
                    Enroll Now
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-[16px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                    This course include
                  </h4>

                  <ul className="mt-3.5 flex flex-col gap-3 text-[14px] text-[#242528] font-['Satoshi',sans-serif]">
                    <li className="flex items-center gap-3">
                      <FolderOpen className="w-5 h-5 text-[#003BE2] shrink-0" />
                      <span>Learning Resources</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-[#003BE2] shrink-0" />
                      <span>Quality Lesson Videos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#003BE2] shrink-0" />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Headphones className="w-5 h-5 text-[#003BE2] shrink-0" />
                      <span>Private Consultation</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  <div className="w-[52px] h-[52px] rounded-full overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src="/course-details/Ellipse.png"
                      alt="PurePearl Studio"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-[16px] font-semibold text-[#040819] leading-tight font-['Poppins',sans-serif]">
                      PurePearl Studio
                    </h5>
                    <p className="text-[13px] text-[#82868E] font-['Satoshi',sans-serif] mt-0.5">
                      Professional Creator
                    </p>
                  </div>
                </div>

                <div className="pt-1 flex flex-col gap-3">
                  <p className="text-[13px] text-[#565A65] font-['Satoshi',sans-serif] leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>
                  <Link
                    href="/creators/1"
                    className="w-[139px] h-[35px] px-4 py-2 rounded-full border border-[#CED0D3] bg-white text-[13px] font-medium text-[#242528] hover:bg-gray-50 transition-colors font-['Satoshi',sans-serif] cursor-pointer flex items-center justify-center shrink-0"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white flex-1">
        <div className="w-full max-w-[1200px] mx-auto px-6 xl:px-0 pt-8 pb-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            <div className="w-full lg:w-[720px] shrink-0">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("about")}
                  className={`h-[42px] px-6 rounded-full text-[15px] font-medium transition-colors font-['Satoshi',sans-serif] cursor-pointer ${
                    activeTab === "about"
                      ? "bg-[#D4FB20] text-[#111215]"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E7EB] hover:text-[#111215]"
                  }`}
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("lessons")}
                  className={`h-[42px] px-6 rounded-full text-[15px] font-medium transition-colors font-['Satoshi',sans-serif] cursor-pointer ${
                    activeTab === "lessons"
                      ? "bg-[#D4FB20] text-[#111215]"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E7EB] hover:text-[#111215]"
                  }`}
                >
                  Lesson
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("reviews")}
                  className={`h-[42px] px-6 rounded-full text-[15px] font-medium transition-colors font-['Satoshi',sans-serif] cursor-pointer ${
                    activeTab === "reviews"
                      ? "bg-[#D4FB20] text-[#111215]"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E7EB] hover:text-[#111215]"
                  }`}
                >
                  Reviews
                </button>
              </div>

              {activeTab === "about" && (
                <>
                  <div className="mt-8">
                    <h2 className="text-[22px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      Description
                    </h2>
                    <div className="mt-4 flex flex-col gap-4 text-[15px] sm:text-[16px] text-[#4B4C53] font-['Satoshi',sans-serif] leading-[1.6]">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-[20px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      Sneak Peak
                    </h3>
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {SNEAK_PEAKS.map((item) => (
                        <div
                          key={item.id}
                          className="w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-[20px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      Key Points
                    </h3>
                    <div className="mt-5 flex flex-col gap-3.5">
                      {KEY_POINTS.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white fill-[#003BE2] shrink-0" />
                          <span className="text-[15px] sm:text-[16px] font-medium text-[#242528] font-['Satoshi',sans-serif]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "lessons" && (
                <div className="mt-8 flex flex-col">
                  <div>
                    <h2 className="text-[22px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      Explore the Modules
                    </h2>
                    <p className="mt-3 text-[15px] sm:text-[16px] text-[#4B4C53] font-['Satoshi',sans-serif] leading-[1.6]">
                      Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      Lesson List
                    </h3>

                    <div className="mt-6 flex flex-col gap-6">
                      {LESSON_MODULES.map((module) => (
                        <div key={module.id} className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-[16px] bg-[#D4FB20] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <Video className="w-5 h-5 text-[#111215]" />
                          </div>
                          <div>
                            <h4 className="text-[15px] sm:text-[16px] font-semibold text-[#040819] font-['Poppins',sans-serif] leading-snug">
                              {module.title}
                            </h4>
                            <p className="mt-1 text-[14px] text-[#565A65] font-['Satoshi',sans-serif] leading-[1.6]">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      Lesson Content
                    </h3>
                    <p className="mt-3 text-[15px] sm:text-[16px] text-[#4B4C53] font-['Satoshi',sans-serif] leading-[1.6]">
                      Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      Lesson Progress Tracking
                    </h3>
                    <p className="mt-3 text-[15px] sm:text-[16px] text-[#4B4C53] font-['Satoshi',sans-serif] leading-[1.6]">
                      Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                    </p>

                    <div className="mt-6 w-full rounded-[20px] border border-[#CED0D3] p-6 bg-white shadow-sm">
                      <span className="text-[14px] font-medium text-[#565A65] font-['Satoshi',sans-serif]">
                        Learning Progress
                      </span>
                      <div className="text-[32px] sm:text-[36px] font-bold text-[#040819] font-['Poppins',sans-serif] leading-tight mt-1">
                        55%
                      </div>
                      <div className="mt-4 w-full h-[10px] bg-[#E5E7EB] rounded-full overflow-hidden">
                        <div className="h-full w-[55%] bg-[#D4FB20] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="mt-8 flex flex-col">
                  <div>
                    <h2 className="text-[22px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      What Learners Are Saying
                    </h2>
                    <p className="mt-3 text-[15px] sm:text-[16px] text-[#4B4C53] font-['Satoshi',sans-serif] leading-[1.6]">
                      Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                    </p>
                  </div>

                  <div className="mt-8 w-full rounded-[24px] border border-[#CED0D3] p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    <div className="w-[140px] h-[140px] rounded-[20px] bg-[#D4FB20] flex flex-col items-center justify-center shrink-0">
                      <span className="text-[14px] text-[#111215] font-medium font-['Satoshi',sans-serif]">
                        Ratings
                      </span>
                      <span className="text-[44px] font-bold text-[#111215] font-['Poppins',sans-serif] leading-none mt-1">
                        4.7
                      </span>
                    </div>

                    <div className="w-full flex-1 flex flex-col gap-3">
                      {RATING_DISTRIBUTION.map((item) => (
                        <div key={item.stars} className="flex items-center gap-4">
                          <div className="flex-1 h-[8px] bg-[#E5E7EB] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#D4FB20] rounded-full"
                              style={{ width: item.percentage }}
                            />
                          </div>
                          <div className="flex items-center gap-1 text-[#242528] shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-[#242528]" />
                            ))}
                          </div>
                          <span className="text-[13px] font-medium text-[#4B4C53] w-8 text-right font-['Satoshi',sans-serif] shrink-0">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#040819] font-['Poppins',sans-serif]">
                      Individual Reviews:
                    </h3>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setReviewFilter("all")}
                        className={`h-[40px] px-5 rounded-full text-[14px] font-medium transition-colors font-['Satoshi',sans-serif] cursor-pointer ${
                          reviewFilter === "all"
                            ? "bg-[#D4FB20] text-[#111215]"
                            : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E7EB] hover:text-[#111215]"
                        }`}
                      >
                        All rating
                      </button>
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <button
                          key={stars}
                          type="button"
                          onClick={() => setReviewFilter(stars)}
                          className={`h-[40px] px-4 rounded-full text-[14px] font-medium transition-colors font-['Satoshi',sans-serif] cursor-pointer flex items-center gap-1.5 ${
                            reviewFilter === stars
                              ? "bg-[#D4FB20] text-[#111215]"
                              : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E7EB] hover:text-[#111215]"
                          }`}
                        >
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{stars}</span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-6">
                      {(reviewFilter === "all"
                        ? REVIEWS_DATA
                        : REVIEWS_DATA.filter((r) => r.rating === reviewFilter)
                      ).length === 0 ? (
                        <div className="p-8 rounded-[24px] border border-[#CED0D3] bg-white text-center text-[#565A65] font-['Satoshi',sans-serif]">
                          No reviews found for this rating filter.
                        </div>
                      ) : (
                        (reviewFilter === "all"
                          ? REVIEWS_DATA
                          : REVIEWS_DATA.filter((r) => r.rating === reviewFilter)
                        ).map((rev) => (
                          <div
                            key={rev.id}
                            className="w-full rounded-[24px] border border-[#CED0D3] p-6 sm:p-7 bg-white flex flex-col gap-4 shadow-sm"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3.5">
                                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-100">
                                  <img
                                    src={rev.avatar}
                                    alt={rev.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="text-[16px] font-semibold text-[#040819] font-['Poppins',sans-serif] leading-tight">
                                    {rev.name}
                                  </h4>
                                  <p className="text-[13px] text-[#565A65] font-['Satoshi',sans-serif] mt-0.5">
                                    {rev.role}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[13px] sm:text-[14px] text-[#82868E] font-['Satoshi',sans-serif] shrink-0">
                                {rev.date}
                              </span>
                            </div>

                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-[18px] h-[18px] ${
                                    i < rev.rating
                                      ? "fill-[#242528] text-[#242528]"
                                      : "fill-gray-200 text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>

                            <p className="text-[14px] sm:text-[15px] text-[#4B4C53] font-['Satoshi',sans-serif] leading-[1.6]">
                              {rev.comment}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:block w-[440px] shrink-0 pointer-events-none" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
