export default function EventsSection() {
  const events = [
    {
      title: "AMA Fresh Produce Markets",
      meta: "EVERY FRIDAY · The lawns",
      desc: "Fresh produce, bread and local makers on the lawns.",
      image: "https://www.theorchardpenrith.com.au/_astro/ama-markets.BuHkKybZ_21jVaB.webp",
      link: "#market"
    },
    {
      title: "Better Days Gala Night",
      meta: "THU 3 DEC · The John Farragher Woolshed",
      desc: "Christmas gala dinner for Better Days, 3 December.",
      image: "https://www.theorchardpenrith.com.au/_astro/fbbaa2d6d7f066532eaf0e81326c18af95d74a7f-2400x1200_ZPoQ1d.webp",
      link: "#gala"
    },
    {
      title: "Terry Reilly Convoy Xmas Special",
      meta: "SAT 5 DEC · Buzz Box",
      desc: "The Terry Reilly Convoy Xmas Special comes to Buzz Box on Saturday 5 December.",
      image: "https://www.theorchardpenrith.com.au/_astro/1b237fbf350db40f332b9e6131cb21b54546c527-1600x1067_Z11q5HG.webp",
      link: "#convoy"
    }
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Section Head */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b]">
            What's on <em className="italic font-normal">this month</em>
          </h2>
          <p className="text-[#6e6357] text-lg max-w-xl font-light">
            Live music, grower markets, seasonal celebrations and community gatherings by the river.
          </p>
        </div>

        <a
          href="#whats-on"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#12201b] hover:bg-[#12201b] hover:text-[#fffefc] text-[#12201b] font-semibold text-sm transition-all duration-200 w-fit shrink-0 cursor-pointer"
        >
          <span>Full calendar</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
            <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
          </svg>
        </a>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <a
            key={event.title}
            href={event.link}
            className="group bg-[#fffefc] rounded-2xl border border-[#e2d8cb] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] bg-[#e2d8cb] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-['DM_Mono',monospace] uppercase text-[#c47335] font-semibold tracking-wider">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{event.meta}</span>
                </div>

                <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#12201b] group-hover:text-[#c47335] transition-colors">
                  {event.title}
                </h3>

                <p className="text-sm text-[#6e6357] leading-relaxed">
                  {event.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e2d8cb] flex items-center justify-between text-xs font-semibold text-[#12201b] group-hover:text-[#c47335]">
                <span>View event</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
