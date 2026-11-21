export default function SpacesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Section Head */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b]">
            <em className="italic font-normal">Rooms</em> for any guest list.
          </h2>
          <p className="text-[#6e6357] text-lg max-w-xl font-light">
            One address, several layouts. Packages that bend with the budget.
          </p>
        </div>

        <a
          href="#all-spaces"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#12201b] hover:bg-[#12201b] hover:text-[#fffefc] text-[#12201b] font-semibold text-sm transition-all duration-200 w-fit shrink-0 cursor-pointer"
        >
          <span>See every room</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
            <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
          </svg>
        </a>
      </div>

      {/* Grid of Spaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. The John Farragher Woolshed */}
        <div className="bg-[#fffefc] rounded-2xl border border-[#e2d8cb] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e2d8cb]">
            <img
              src="https://www.theorchardpenrith.com.au/_astro/woolshed-exterior.jGfhh8_5_2avO6F.webp"
              alt="Hive Hall dressed for a seated dinner"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#12201b]">
                Hive Hall
              </h3>
              <p className="text-sm text-[#6e6357] mt-2 leading-relaxed">
                Warm timber and low light. Three rooms that can stay separate or open into one long dinner.
              </p>
            </div>

            {/* Sub-rooms */}
            <div className="pt-2 border-t border-[#e2d8cb] space-y-2">
              <span className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6e6357] font-semibold">
                Rooms you can hire
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#f9f6f0]">
                  <span className="font-medium text-[#26221d]">Amber Room</span>
                  <span className="text-[#6e6357]">50 seated</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#f9f6f0]">
                  <span className="font-medium text-[#26221d]">Cedar Room</span>
                  <span className="text-[#6e6357]">50 seated</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#f9f6f0]">
                  <span className="font-medium text-[#26221d]">Loom Room</span>
                  <span className="text-[#6e6357]">50 seated</span>
                </div>
              </div>
            </div>

            {/* Foot info */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbe7df] text-[#224d35]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6" />
                </svg>
                Up to 200
              </span>
              <a href="#woolshed" className="text-[#12201b] hover:text-[#c47335] inline-flex items-center gap-1 font-semibold transition-colors">
                View space
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 2. The Farmhouse */}
        <div className="bg-[#fffefc] rounded-2xl border border-[#e2d8cb] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e2d8cb]">
            <img
              src="https://www.theorchardpenrith.com.au/_astro/farmhouse-interior.4PfutBNt_1N5IlX.webp"
              alt="Inside Lantern House, home of The Buzz Tap"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#12201b]">
                Lantern House
              </h3>
              <p className="text-sm text-[#6e6357] mt-2 leading-relaxed">
                The social room. Live sets, a screen for the game, and Ember Kitchen just through the door.
              </p>
            </div>

            {/* Sub-rooms */}
            <div className="pt-2 border-t border-[#e2d8cb] space-y-2">
              <span className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6e6357] font-semibold">
                Rooms you can hire
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#f9f6f0]">
                  <span className="font-medium text-[#26221d]">Quiet Booths</span>
                  <span className="text-[#6e6357]">12 seated</span>
                </div>
              </div>
            </div>

            {/* Foot info */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbe7df] text-[#224d35]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6" />
                </svg>
                Up to 100
              </span>
              <a href="#farmhouse" className="text-[#12201b] hover:text-[#c47335] inline-flex items-center gap-1 font-semibold transition-colors">
                View space
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 3. The Alfresco */}
        <div className="bg-[#fffefc] rounded-2xl border border-[#e2d8cb] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e2d8cb]">
            <img
              src="https://www.theorchardpenrith.com.au/_astro/alfresco-2.D5E9REfR_ZokURC.webp"
              alt="A long lunch on the Open Deck"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#12201b]">
                The Open Deck
              </h3>
              <p className="text-sm text-[#6e6357] mt-2 leading-relaxed">
                Covered outdoor tables under tall beams. Heaters in the cold months, fans when the day runs hot.
              </p>
            </div>

            {/* Sub-rooms */}
            <div className="pt-2 border-t border-[#e2d8cb] space-y-2">
              <span className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6e6357] font-semibold">
                Rooms you can hire
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#f9f6f0]">
                  <span className="font-medium text-[#26221d]">North Deck</span>
                  <span className="text-[#6e6357]">75 seated</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#f9f6f0]">
                  <span className="font-medium text-[#26221d]">South Deck</span>
                  <span className="text-[#6e6357]">75 seated</span>
                </div>
              </div>
            </div>

            {/* Foot info */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbe7df] text-[#224d35]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6" />
                </svg>
                Up to 200
              </span>
              <a href="#alfresco" className="text-[#12201b] hover:text-[#c47335] inline-flex items-center gap-1 font-semibold transition-colors">
                View space
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 4. The Pavilion */}
        <div className="bg-[#fffefc] rounded-2xl border border-[#e2d8cb] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e2d8cb]">
            <img
              src="https://www.theorchardpenrith.com.au/_astro/pavilion.CHgyaRww_2d8vSb.webp"
              alt="The Glass Room in daylight"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#12201b]">
                The Glass Room
              </h3>
              <p className="text-sm text-[#6e6357] mt-2 leading-relaxed">
                A bright hall with tall windows, a private bar, and the lawn right outside. Made for the bigger bookings.
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-2 border-t border-[#e2d8cb] space-y-2">
              <span className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6e6357] font-semibold">
                Venue features
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="text-xs py-1 px-2 rounded-lg bg-[#f9f6f0] text-[#26221d]">
                  Private bar with a clear view of the lawn
                </div>
                <div className="text-xs py-1 px-2 rounded-lg bg-[#f9f6f0] text-[#26221d]">
                  Screens and sound already in the room
                </div>
              </div>
            </div>

            {/* Foot info */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbe7df] text-[#224d35]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6" />
                </svg>
                Up to 200
              </span>
              <a href="#pavilion" className="text-[#12201b] hover:text-[#c47335] inline-flex items-center gap-1 font-semibold transition-colors">
                View space
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
