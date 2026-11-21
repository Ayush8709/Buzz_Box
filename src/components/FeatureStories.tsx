export default function FeatureStories() {
  return (
    <div className="space-y-12 sm:space-y-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pb-16">
      {/* 1. Christmas Parties (Tuscan Terracotta Theme) */}
      <section className="bg-[#f5e7db] text-[#26221d] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#c47335]/20 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#8b4421] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c47335]"></span>
              Christmas in Penrith
            </div>
            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b] leading-[1.1]">
              Christmas parties at Buzz Box.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6357] leading-relaxed max-w-xl">
              Work Christmas parties, end-of-year drinks and family lunches in The Pavilion, The Woolshed or on the Alfresco, all on the one estate in Penrith.
            </p>
            <div>
              <a
                href="#christmas-party"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c47335] hover:bg-[#aa5e27] text-white font-semibold text-sm transition-all shadow-md shadow-[#c47335]/20 cursor-pointer"
              >
                <span>Book your Christmas party</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1 rounded-2xl overflow-hidden aspect-[4/5] bg-black/5 shadow-sm">
              <img
                src="https://www.theorchardpenrith.com.au/_astro/christmas-santa-guests.CFlr1P3f_Z1kOgYb.webp"
                alt="Santa with guests by the Christmas tree on the Alfresco"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/christmas-seafood-feast.CxaxBHEp_yYtgS.webp"
                  alt="Prawns, oysters and a Christmas seafood feast"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/christmas-guests-thumbs-up.DALDVg2S_Z23STPD.webp"
                  alt="Guests giving thumbs up at Christmas lunch"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Corporate Offsites (Deep Botanical Obsidian Theme) */}
      <section className="bg-[#12201b] text-[#fffefc] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#233a30] shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#192b23] text-[#9fb3a7] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c47335]"></span>
              Corporate at Buzz Box
            </div>
            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#fffefc] leading-[1.1]">
              Corporate offsites your team will actually talk about.
            </h2>
            <p className="text-base sm:text-lg text-[#c5d5cb] leading-relaxed max-w-xl font-light">
              Boardroom-for-a-day to 200-person staff parties, with AV, in-house catering and a whole precinct for the after-hours bit.
            </p>
            <div>
              <a
                href="#corporate"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c47335] hover:bg-[#aa5e27] text-white font-semibold text-sm transition-all shadow-md shadow-[#c47335]/30 cursor-pointer"
              >
                <span>Plan a corporate event</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-black/20 shadow-2xl border border-white/10">
              <img
                src="https://www.theorchardpenrith.com.au/_astro/corporate-drinks.BU6jAGyo_ZVayNl.webp"
                alt="Conference offsite in the Pavilion, diverse team, presenter on stage"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Kids' Parties (Eucalyptus Garden Theme) */}
      <section className="bg-[#dbe7df] text-[#26221d] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#224d35]/20 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#224d35] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#2ea05f]"></span>
              Kids' parties at Buzz Box
            </div>
            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b] leading-[1.1]">
              Kids' parties, minus the hard work.
            </h2>
            <p className="text-base sm:text-lg text-[#355342] leading-relaxed max-w-xl">
              A fenced playground and party spaces right beside both. Pizza and donuts from the precinct, coffee for the grown-ups, and our team handles setup and pack-down.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#kids-party"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#12201b] hover:bg-[#c47335] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Plan a kids' party</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
              <a
                href="#stables"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#12201b] hover:text-[#c47335] transition-colors"
              >
                See the Stables
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1 rounded-2xl overflow-hidden aspect-[4/5] bg-black/5 shadow-sm">
              <img
                src="https://www.theorchardpenrith.com.au/_astro/kids-balloon-arch.BG5jcvli_Z2n5qQC.webp"
                alt="Pastel balloon arch and 1st birthday backdrop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/torc-hero-5.OVrZJUC9_Z1wgGuI.webp"
                  alt="Families on the lawn at Buzz Box"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/kids-jumping-castle.e6yFpeRH_ZUpFF9.webp"
                  alt="Jumping castle on the lawn"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Breakfast & Lunch? Sorted. (Warm Alabaster Theme) */}
      <section className="bg-[#f0e9dd] text-[#26221d] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#e2d8cb] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#224d35] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#2ea05f]"></span>
              Book a table
            </div>
            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b] leading-[1.1]">
              Breakfast & Lunch? Sorted.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6357] leading-relaxed max-w-xl">
              Real-time availability across the whole precinct. Book Freddy's, Taproom on Tench or riverside alfresco dining in a few taps.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#book-a-table"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#12201b] hover:bg-[#c47335] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Book a table</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
              <a
                href="#menus"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#12201b] hover:text-[#c47335] transition-colors"
              >
                View Freddy's menu
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1 rounded-2xl overflow-hidden aspect-[4/5] bg-black/5 shadow-sm">
              <img
                src="https://www.theorchardpenrith.com.au/_astro/freddys-steak.B8MyK1z3_Z15TBa2.webp"
                alt="Freddy's steak, chips and a glass of red on the table"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/freddys-burger-beer.Cn3Xfah5_Z2pCdVz.webp"
                  alt="Burger and beer on the Alfresco"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/freddys-brunch-table.owUNE_6h_20b3qN.webp"
                  alt="Brunch spread at Freddy's"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Catering Boxes (Artisan Sand Theme) */}
      <section className="bg-[#ebe4d5] text-[#26221d] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#e2d8cb] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#6e6357] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c47335]"></span>
              Order online
            </div>
            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b] leading-[1.1]">
              Catering Boxes for any occasion.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6357] leading-relaxed max-w-xl">
              Boardroom lunches, backyard BBQs and grazing boxes from Freddy's and our partner kitchens. Order online, then pick up from Buzz Box.
            </p>
            <div>
              <a
                href="#shop-catering"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c47335] hover:bg-[#aa5e27] text-white font-semibold text-sm transition-all shadow-md shadow-[#c47335]/20 cursor-pointer"
              >
                <span>Shop catering boxes</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-black/10 shadow-lg">
              <img
                src="https://www.theorchardpenrith.com.au/_astro/catering-boxes.CS4lYgYy_Z2mHTuo.webp"
                alt="Catering boxes from above on the lawn"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
