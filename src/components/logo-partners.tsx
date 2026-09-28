export default function LogoPartners() {
  return (
    <section className="w-full h-[202px] bg-[#F5F5F6] flex items-center justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between opacity-60 grayscale">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#111215" strokeWidth="2"/>
              <path d="M8 12L12 8L16 12M12 16V8" stroke="#111215" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[22px] font-bold text-[#111215] tracking-tight">Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
}
