export default function MilestonesSection() {
  const photos = [
    {
      src: "https://www.theorchardpenrith.com.au/_astro/56df36d16f29330cb0ad150c05ca6618a7da8d7e-1200x797_Z1shwiY.webp",
      alt: "A twenty-first birthday on the dance floor",
      caption: "A 21st on the dance floor"
    },
    {
      src: "https://www.theorchardpenrith.com.au/_astro/ca8cab382d68b7ae1a569f561b3e3dd0a879ea38-1200x801_21dqQn.webp",
      alt: "Friends laughing together at the bar",
      caption: "Friends around the bar"
    },
    {
      src: "https://www.theorchardpenrith.com.au/_astro/d0cadece88d1ad933e3c41bf5bbb4777336f3e07-1200x800_27eNgg.webp",
      alt: "Lanterns lit for a night on the lawn",
      caption: "Lantern night on the lawn"
    },
    {
      src: "https://www.theorchardpenrith.com.au/_astro/7b33420c15d94007f02a4f4ed255b32147c5a6f1-1200x800_1xviUh.webp",
      alt: "A family gathered around a birthday cake",
      caption: "Cake at the family table"
    }
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-[#fffefc] rounded-3xl border border-[#e2d8cb] p-8 sm:p-12 lg:p-16 shadow-sm space-y-12">
        {/* Intro */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0e9dd] text-[#6e6357] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#c47335]"></span>
            Every kind of night
          </div>

          <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b] leading-[1.1]">
            Bring your people. <em className="italic font-normal">We'll set the table.</em>
          </h2>

          <p className="text-base sm:text-lg text-[#6e6357] leading-relaxed font-light">
            Birthdays, festivals, farewells and first dances. If it matters to your people, Buzz Box makes room for it.
          </p>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#e2d8cb] shadow-sm"
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
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c47335] hover:bg-[#aa5e27] text-white font-semibold text-sm transition-all shadow-md shadow-[#c47335]/20 cursor-pointer"
          >
            <span>Start a booking</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
            </svg>
          </a>

          <a
            href="#all-spaces"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#12201b] hover:bg-[#12201b] hover:text-white text-[#12201b] font-semibold text-sm transition-all cursor-pointer"
          >
            <span>Look through the rooms</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
