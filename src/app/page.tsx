import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LogoPartners from "@/components/logo-partners";
import CoursesSection from "@/components/courses-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111215]">
      <div className="w-full bg-[#003BE2] text-[#F5F5F6]">
        <Navbar />
        <Hero />
      </div>
      <LogoPartners />
      <CoursesSection />
    </main>
  );
}
