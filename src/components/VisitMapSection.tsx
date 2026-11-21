export default function VisitMapSection() {
  const mapHotspots = [
    { name: "The Pavilion", desc: "Soaring ceilings, floor-to-ceiling windows", cap: "200 cap", link: "#pavilion" },
    { name: "The Woolshed", desc: "Stables, Shearing Shed & Wool Room", cap: "200 cap", link: "#woolshed" },
    { name: "The Farmhouse", desc: "Home of Freddy's & Taproom on Tench", cap: "100 cap", link: "#farmhouse" },
    { name: "The Alfresco", desc: "High ceilings, outdoor undercover dining", cap: "200 cap", link: "#alfresco" },
    { name: "Playground & Farmyard", desc: "Fully fenced all-ages kids play zone", cap: "All ages", link: "#playground" },
    { name: "Bakery Brothers & OMG", desc: "Fresh artisan sourdough & donuts", cap: "Open daily", link: "#bakery" },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-[#f4eee3] rounded-3xl border border-[#e9e1d2] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
        {/* Left: Info */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#2f4a2a] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#3f8f3a]"></span>
              Visit The Orchard
            </div>

            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl text-[#22302b] leading-[1.1]">
              Find your way <em className="italic font-normal">around</em>.
            </h2>

            <ul className="space-y-4 pt-2">
              {/* Address */}
              <li className="flex items-start gap-3.5 text-[#2e2a25]">
                <div className="w-8 h-8 rounded-full bg-[#e3eadb] text-[#2f4a2a] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=50+Tench+Ave,+Jamisontown+NSW+2750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fa7238] transition-colors underline underline-offset-4 decoration-[#e9e1d2] hover:decoration-[#fa7238]"
                >
                  50 Tench Ave, Jamisontown NSW 2750
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3.5 text-[#2e2a25]">
                <div className="w-8 h-8 rounded-full bg-[#e3eadb] text-[#2f4a2a] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <span>Open 7 days. Hours vary by kitchen.</span>
              </li>

              {/* Parking */}
              <li className="flex items-start gap-3.5 text-[#2e2a25]">
                <div className="w-8 h-8 rounded-full bg-[#e3eadb] text-[#2f4a2a] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 17V8h4a2.5 2.5 0 0 1 0 5H9" />
                  </svg>
                </div>
                <span>Free parking on site</span>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3.5 text-[#2e2a25]">
                <div className="w-8 h-8 rounded-full bg-[#e3eadb] text-[#2f4a2a] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <a href="tel:1300513884" className="font-semibold hover:text-[#fa7238] transition-colors">
                  1300 513 884
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=50+Tench+Ave,+Jamisontown+NSW+2750"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#fa7238] hover:bg-[#e05f27] text-white font-semibold text-sm transition-all shadow-md shadow-[#fa7238]/20 cursor-pointer"
            >
              <span>Get directions</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
              </svg>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#22302b] hover:bg-[#22302b] hover:text-white text-[#22302b] font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Contact us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Interactive Site Precinct Map / Hotspots Overview */}
        <div className="lg:col-span-7 bg-[#22302b] text-white p-8 sm:p-12 relative flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-['DM_Mono',monospace] text-xs uppercase tracking-wider text-[#aebcae]">
                The Orchard Precinct Map
              </span>
              <span className="text-xs text-[#fa9a6e] font-['DM_Mono',monospace]">
                Nepean River Frontage
              </span>
            </div>

            <p className="text-sm text-[#cdd8cd] font-light">
              50 Tench Avenue is situated directly along the scenic Nepean River trail, hosting 12 independent spaces, shaded groves, dining terraces, and recreation lawns.
            </p>

            {/* Hotspots Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {mapHotspots.map((spot) => (
                <a
                  key={spot.name}
                  href={spot.link}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#fa7238] hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-[#fffdf9] group-hover:text-[#fa9a6e]">
                    <span>{spot.name}</span>
                    <span className="text-[10px] font-['DM_Mono',monospace] px-2 py-0.5 rounded bg-white/10 text-[#cdd8cd]">
                      {spot.cap}
                    </span>
                  </div>
                  <p className="text-xs text-[#aebcae] mt-1 line-clamp-1">
                    {spot.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-[#aebcae] font-['DM_Mono',monospace]">
            <span>PARKING · ENTRANCE ON TENCH AVE</span>
            <span className="text-[#fa7238]">★ 50 TENCH AVE, JAMISONTOWN</span>
          </div>
        </div>
      </div>
    </section>
  )
}
