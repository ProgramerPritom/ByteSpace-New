import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111215]">
      <div className="w-full bg-[#003BE2] text-[#F5F5F6]">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
