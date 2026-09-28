const CATEGORIES = [
  {
    id: "design",
    name: "Design",
    icon: "/categories/design.svg",
  },
  {
    id: "development",
    name: "Development",
    icon: "/categories/development.svg",
  },
  {
    id: "it-software",
    name: "IT & Software",
    icon: "/categories/it-software.svg",
  },
  {
    id: "business",
    name: "Business",
    icon: "/categories/business.svg",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "/categories/marketing.svg",
  },
  {
    id: "photography",
    name: "Photography",
    icon: "/categories/photography.svg",
  },
];

export default function DiversePathsSection() {
  return (
    <section className="w-full bg-white pt-20 pb-28">
      <div className="w-full max-w-[1202px] mx-auto px-6">
        <div className="max-w-[917px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[36px] font-semibold text-[#040819] leading-[1.2] tracking-tight font-['Poppins',sans-serif]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-[#82868E] leading-[1.6] font-normal max-w-[917px] mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-[40px] justify-items-center">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="w-full max-w-[167px] h-[167px] bg-white rounded-[24px] border border-[#CED0D3] flex flex-col items-center justify-center p-4 transition-all duration-200 hover:border-[#040819] hover:shadow-sm cursor-pointer"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-[#D4FB20] flex items-center justify-center shrink-0">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="mt-3 text-[18px] md:text-[20px] font-medium text-[#242528] leading-[24px] text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
