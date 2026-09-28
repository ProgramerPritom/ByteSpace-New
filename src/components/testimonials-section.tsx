interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatar: "/testimonial/Ellipse-01.png",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatar: "/testimonial/Ellipse-02.png",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatar: "/testimonial/Ellipse-03.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden py-16 lg:py-[74px]">
      <div className="absolute -top-[140px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[#D4FB20]/25 blur-[140px] pointer-events-none" />
      <div className="absolute -top-[100px] left-[35%] w-[450px] h-[450px] rounded-full bg-[#D4FB20]/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-[120px] -left-[200px] w-[650px] h-[650px] rounded-full bg-[#C7D2FE]/35 blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1204px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[43px] lg:items-end justify-between">
          <h2 className="text-[36px] sm:text-[44px] font-semibold text-[#000000] leading-[1.2] tracking-[-0.44px] font-['Poppins',sans-serif] max-w-[577px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#4F4F4F] leading-[1.6] font-['Satoshi',sans-serif] max-w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 lg:mt-[72px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[41px] items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="w-full max-w-[374px] mx-auto bg-white rounded-[24px] p-6 flex flex-col gap-6 h-full"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-[80px] h-[80px] rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h3 className="text-[20px] font-semibold text-[#000000] font-['Poppins',sans-serif] tracking-[-0.2px] leading-[1.2]">
                  {item.name}
                </h3>
                <span className="text-[16px] sm:text-[18px] text-[#003BE2] font-['Satoshi',sans-serif] leading-[1.6]">
                  {item.role}
                </span>
              </div>

              <p className="text-[16px] sm:text-[18px] text-[#4F4F4F] font-['Satoshi',sans-serif] leading-[1.6]">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
