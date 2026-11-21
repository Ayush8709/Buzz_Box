export default function MilestonesSection() {
  const photos = [
    {
      src: "https://www.theorchardpenrith.com.au/_astro/56df36d16f29330cb0ad150c05ca6618a7da8d7e-1200x797_Z1shwiY.webp",
      alt: "Pasifika 21st celebration, dancing with leis",
      caption: "Pasifika 21st Milestone"
    },
    {
      src: "https://www.theorchardpenrith.com.au/_astro/ca8cab382d68b7ae1a569f561b3e3dd0a879ea38-1200x801_21dqQn.webp",
      alt: "Wheelchair user and friends laughing at Taproom on Tench bar",
      caption: "Accessible Riverside Gatherings"
    },
    {
      src: "https://www.theorchardpenrith.com.au/_astro/d0cadece88d1ad933e3c41bf5bbb4777336f3e07-1200x800_27eNgg.webp",
      alt: "Diwali community night on the lawn with lanterns",
      caption: "Diwali Community Lights"
    },
    {
      src: "https://www.theorchardpenrith.com.au/_astro/7b33420c15d94007f02a4f4ed255b32147c5a6f1-1200x800_1xviUh.webp",
      alt: "Kids' birthday: Chinese-Australian family, cake moment",
      caption: "Multigenerational Birthdays"
    }
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-[#fffdf9] rounded-3xl border border-[#e9e1d2] p-8 sm:p-12 lg:p-16 shadow-sm space-y-12">
        {/* Intro */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4eee3] text-[#6f665a] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#fa7238]"></span>
            Everyone celebrates here
          </div>

          <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#22302b] leading-[1.1]">
            Your people. Your culture. <em className="italic font-normal">Your party.</em>
          </h2>

          <p className="text-base sm:text-lg text-[#6f665a] leading-relaxed font-light">
            Milestones from every corner of Western Sydney: every culture, every generation, every ability. If it matters to you, it matters to us.
          </p>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#e9e1d2] shadow-sm"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-medium text-white/90 drop-shadow">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#plan-an-event"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#fa7238] hover:bg-[#e05f27] text-white font-semibold text-sm transition-all shadow-md shadow-[#fa7238]/20 cursor-pointer"
          >
            <span>Start planning your celebration</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
            </svg>
          </a>

          <a
            href="#all-spaces"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#22302b] hover:bg-[#22302b] hover:text-white text-[#22302b] font-semibold text-sm transition-all cursor-pointer"
          >
            <span>Browse all 12 spaces</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
