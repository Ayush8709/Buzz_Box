export default function SpacesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Section Head */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#22302b]">
            <em className="italic font-normal">Spaces</em> built for a crowd.
          </h2>
          <p className="text-[#6f665a] text-lg max-w-xl font-light">
            Every space, every layout, 1 venue. Flexible packages for a range of budgets.
          </p>
        </div>

        <a
          href="#all-spaces"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#22302b] hover:bg-[#22302b] hover:text-[#fffdf9] text-[#22302b] font-semibold text-sm transition-all duration-200 w-fit shrink-0 cursor-pointer"
        >
          <span>View all 12 spaces</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
            <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
          </svg>
        </a>
      </div>

      {/* Grid of Spaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. The John Farragher Woolshed */}
        <div className="bg-[#fffdf9] rounded-2xl border border-[#e9e1d2] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e1d2]">
            <img
              src="https://www.theorchardpenrith.com.au/_astro/woolshed-exterior.jGfhh8_5_2avO6F.webp"
              alt="The Woolshed set for a seated dinner"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#22302b]">
                The John Farragher Woolshed
              </h3>
              <p className="text-sm text-[#6f665a] mt-2 leading-relaxed">
                Rustic character meets modern comfort. Divides into 3 rooms, each with its own feel.
              </p>
            </div>

            {/* Sub-rooms */}
            <div className="pt-2 border-t border-[#e9e1d2] space-y-2">
              <span className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a] font-semibold">
                Rooms you can hire
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#fbf8f2]">
                  <span className="font-medium text-[#2e2a25]">Stables</span>
                  <span className="text-[#6f665a]">50 seated</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#fbf8f2]">
                  <span className="font-medium text-[#2e2a25]">Shearing Shed</span>
                  <span className="text-[#6f665a]">50 seated</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#fbf8f2]">
                  <span className="font-medium text-[#2e2a25]">Wool Room</span>
                  <span className="text-[#6f665a]">50 seated</span>
                </div>
              </div>
            </div>

            {/* Foot info */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3eadb] text-[#2f4a2a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6" />
                </svg>
                Up to 200
              </span>
              <a href="#woolshed" className="text-[#22302b] hover:text-[#fa7238] inline-flex items-center gap-1 font-semibold transition-colors">
                View space
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 2. The Farmhouse */}
        <div className="bg-[#fffdf9] rounded-2xl border border-[#e9e1d2] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e1d2]">
            <img
              src="https://www.theorchardpenrith.com.au/_astro/farmhouse-interior.4PfutBNt_1N5IlX.webp"
              alt="Inside The Farmhouse, home of Taproom on Tench"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#22302b]">
                The Farmhouse
              </h3>
              <p className="text-sm text-[#6f665a] mt-2 leading-relaxed">
                Pub-style function space, home of Freddy's and Taproom on Tench: live music, NRL on the big screens, craft beer.
              </p>
            </div>

            {/* Sub-rooms */}
            <div className="pt-2 border-t border-[#e9e1d2] space-y-2">
              <span className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a] font-semibold">
                Rooms you can hire
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#fbf8f2]">
                  <span className="font-medium text-[#2e2a25]">Semi-Private Rooms</span>
                  <span className="text-[#6f665a]">12 seated</span>
                </div>
              </div>
            </div>

            {/* Foot info */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3eadb] text-[#2f4a2a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6" />
                </svg>
                Up to 100
              </span>
              <a href="#farmhouse" className="text-[#22302b] hover:text-[#fa7238] inline-flex items-center gap-1 font-semibold transition-colors">
                View space
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 3. The Alfresco */}
        <div className="bg-[#fffdf9] rounded-2xl border border-[#e9e1d2] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e1d2]">
            <img
              src="https://www.theorchardpenrith.com.au/_astro/alfresco-2.D5E9REfR_ZokURC.webp"
              alt="Guests sharing a long lunch table in The Alfresco"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#22302b]">
                The Alfresco
              </h3>
              <p className="text-sm text-[#6f665a] mt-2 leading-relaxed">
                Outdoor and undercover, high ceilings, exposed beams. Heated in winter, fans in summer.
              </p>
            </div>

            {/* Sub-rooms */}
            <div className="pt-2 border-t border-[#e9e1d2] space-y-2">
              <span className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a] font-semibold">
                Rooms you can hire
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#fbf8f2]">
                  <span className="font-medium text-[#2e2a25]">Alfresco 1 (Riverside)</span>
                  <span className="text-[#6f665a]">75 seated</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#fbf8f2]">
                  <span className="font-medium text-[#2e2a25]">Alfresco 2 (Orchard)</span>
                  <span className="text-[#6f665a]">75 seated</span>
                </div>
              </div>
            </div>

            {/* Foot info */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3eadb] text-[#2f4a2a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6" />
                </svg>
                Up to 200
              </span>
              <a href="#alfresco" className="text-[#22302b] hover:text-[#fa7238] inline-flex items-center gap-1 font-semibold transition-colors">
                View space
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 4. The Pavilion */}
        <div className="bg-[#fffdf9] rounded-2xl border border-[#e9e1d2] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e1d2]">
            <img
              src="https://www.theorchardpenrith.com.au/_astro/pavilion.CHgyaRww_2d8vSb.webp"
              alt="Pavilion interior, natural light"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#22302b]">
                The Pavilion
              </h3>
              <p className="text-sm text-[#6f665a] mt-2 leading-relaxed">
                Soaring ceilings, floor-to-ceiling windows and views across the grounds. Contemporary design meets nature.
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-2 border-t border-[#e9e1d2] space-y-2">
              <span className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a] font-semibold">
                Venue features
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="text-xs py-1 px-2 rounded-lg bg-[#fbf8f2] text-[#2e2a25]">
                  Private bar, expansive natural lawn views
                </div>
                <div className="text-xs py-1 px-2 rounded-lg bg-[#fbf8f2] text-[#2e2a25]">
                  Integrated state-of-the-art AV & acoustics
                </div>
              </div>
            </div>

            {/* Foot info */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3eadb] text-[#2f4a2a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6" />
                </svg>
                Up to 200
              </span>
              <a href="#pavilion" className="text-[#22302b] hover:text-[#fa7238] inline-flex items-center gap-1 font-semibold transition-colors">
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
