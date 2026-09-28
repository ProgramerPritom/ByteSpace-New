import Image from "next/image";

const PARTNERS = [
  { name: "Logoipsum", icon: "/hero/vector-0.png" },
  { name: "Logoipsum", icon: "/hero/vector-1.png" },
  { name: "Logoipsum", icon: "/hero/vector-2.png" },
  { name: "Logoipsum", icon: "/hero/vector-3.png" },
  { name: "Logoipsum", icon: "/hero/vector-0.png" },
];

export default function LogoPartners() {
  return (
    <section className="w-full h-[180px] sm:h-[202px] bg-[#F5F5F6] flex items-center justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-between gap-6 sm:gap-8 opacity-70">
        {PARTNERS.map((partner, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <Image
              src={partner.icon}
              alt={partner.name}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="text-[20px] sm:text-[22px] font-bold text-[#111215] tracking-tight">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
