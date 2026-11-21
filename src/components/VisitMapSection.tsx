export default function VisitMapSection() {
  const mapHotspots = [
    { name: "The Glass Room", desc: "Tall windows and a private bar", cap: "200 cap", link: "#glass-room" },
    { name: "Hive Hall", desc: "Amber, Cedar and Loom rooms", cap: "200 cap", link: "#hive-hall" },
    { name: "Lantern House", desc: "Home of Ember Kitchen and The Buzz Tap", cap: "100 cap", link: "#lantern-house" },
    { name: "The Open Deck", desc: "Covered tables in the open air", cap: "200 cap", link: "#open-deck" },
    { name: "Play Green", desc: "A fenced lawn for every age", cap: "All ages", link: "#play-green" },
    { name: "Morning Crumb & Sugar Loop", desc: "Bread in the morning, sweets after", cap: "Open daily", link: "#morning-crumb" },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-[#f0e9dd] rounded-3xl border border-[#e2d8cb] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
        {/* Left: Info */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#224d35] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#2ea05f]"></span>
              Visit Buzz Box
            </div>

            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl text-[#12201b] leading-[1.1]">
              Come and <em className="italic font-normal">find us</em>.
            </h2>

            <ul className="space-y-4 pt-2">
              {/* Address */}
              <li className="flex items-start gap-3.5 text-[#26221d]">
                <div className="w-8 h-8 rounded-full bg-[#dbe7df] text-[#224d35] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <span>8 Market Lane, Riverside Quarter</span>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3.5 text-[#26221d]">
                <div className="w-8 h-8 rounded-full bg-[#dbe7df] text-[#224d35] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <span>Open every day. Each kitchen keeps its own hours.</span>
              </li>

              {/* Parking */}
              <li className="flex items-start gap-3.5 text-[#26221d]">
                <div className="w-8 h-8 rounded-full bg-[#dbe7df] text-[#224d35] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 17V8h4a2.5 2.5 0 0 1 0 5H9" />
                  </svg>
                </div>
                <span>Parking on site is free</span>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3.5 text-[#26221d]">
                <div className="w-8 h-8 rounded-full bg-[#dbe7df] text-[#224d35] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <a href="#contact" className="font-semibold hover:text-[#c47335] transition-colors">
                  Call Buzz Box
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c47335] hover:bg-[#aa5e27] text-white font-semibold text-sm transition-all shadow-md shadow-[#c47335]/20 cursor-pointer"
            >
              <span>Ask for directions</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
              </svg>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#12201b] hover:bg-[#12201b] hover:text-white text-[#12201b] font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Write to us</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Interactive Site Precinct Map / Hotspots Overview */}
        <div className="lg:col-span-7 bg-[#12201b] text-white p-8 sm:p-12 relative flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-['DM_Mono',monospace] text-xs uppercase tracking-wider text-[#9fb3a7]">
                Buzz Box grounds map
              </span>
              <span className="text-xs text-[#df9557] font-['DM_Mono',monospace]">
                Garden frontage
              </span>
            </div>

            <p className="text-sm text-[#c5d5cb] font-light">
              Twelve rooms, shaded lawns, dining terraces and a play green, all inside the Buzz Box grounds.
            </p>

            {/* Hotspots Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {mapHotspots.map((spot) => (
                <a
                  key={spot.name}
                  href={spot.link}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c47335] hover:bg-white/10 transition-all block"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-[#fffefc] group-hover:text-[#df9557]">
                    <span>{spot.name}</span>
                    <span className="text-[10px] font-['DM_Mono',monospace] px-2 py-0.5 rounded bg-white/10 text-[#c5d5cb]">
                      {spot.cap}
                    </span>
                  </div>
                  <p className="text-xs text-[#9fb3a7] mt-1 line-clamp-1">
                    {spot.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-[#9fb3a7] font-['DM_Mono',monospace]">
            <span>PARKING · ENTER FROM MARKET LANE</span>
            <span className="text-[#df9557]">★ 8 MARKET LANE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
