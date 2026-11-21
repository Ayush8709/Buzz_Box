export default function FeatureStories() {
  return (
    <div className="space-y-12 sm:space-y-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pb-16">
      {/* 1. Christmas Parties (Tuscan Terracotta Theme) */}
      <section className="bg-[#f5e7db] text-[#26221d] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#c47335]/20 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#8b4421] text-xs font-['DM_Mono',monospace] uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c47335]"></span>
              Festive at Buzz Box
            </div>
            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b] leading-[1.1]">
              End-of-year parties, done properly.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6357] leading-relaxed max-w-xl">
              Staff drinks, family lunches and long tables. Take the Glass Room, Hive Hall, or the Open Deck, all on the one Buzz Box block.
            </p>
            <div>
              <a
                href="#christmas-party"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c47335] hover:bg-[#aa5e27] text-white font-semibold text-sm transition-all shadow-md shadow-[#c47335]/20 cursor-pointer"
              >
                <span>Hold a festive date</span>
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
                alt="Guests beside the tree on the Open Deck"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/christmas-seafood-feast.CxaxBHEp_yYtgS.webp"
                  alt="A shared seafood spread for a festive lunch"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/christmas-guests-thumbs-up.DALDVg2S_Z23STPD.webp"
                  alt="Guests at a festive lunch table"
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
              Offsites people still mention on Monday.
            </h2>
            <p className="text-base sm:text-lg text-[#c5d5cb] leading-relaxed max-w-xl font-light">
              A working day in a quiet room, or a party for the whole company. Screens, a kitchen on site, and lawns for the part after the agenda.
            </p>
            <div>
              <a
                href="#corporate"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c47335] hover:bg-[#aa5e27] text-white font-semibold text-sm transition-all shadow-md shadow-[#c47335]/30 cursor-pointer"
              >
                <span>Plan the offsite</span>
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
                alt="A team gathered for a talk in the Glass Room"
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
              Birthday noise, grown-up calm.
            </h2>
            <p className="text-base sm:text-lg text-[#355342] leading-relaxed max-w-xl">
              A fenced play lawn sits beside the party rooms. Pizza and sweets from our kitchens, coffee for the adults, and we clear the room when you leave.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#kids-party"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#12201b] hover:bg-[#c47335] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Plan the birthday</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
              <a
                href="#stables"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#12201b] hover:text-[#c47335] transition-colors"
              >
                See the Amber Room
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
                alt="A balloon arch set for a first birthday"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/torc-hero-5.OVrZJUC9_Z1wgGuI.webp"
                  alt="Families sitting on the lawn at Buzz Box"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/kids-jumping-castle.e6yFpeRH_ZUpFF9.webp"
                  alt="A jumping castle set up on the grass"
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
              Reserve a seat
            </div>
            <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b] leading-[1.1]">
              Morning tables, held early.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6357] leading-relaxed max-w-xl">
              See which kitchen still has seats. Ember Kitchen, The Buzz Tap, or a table on the Open Deck.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#book-a-table"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#12201b] hover:bg-[#c47335] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Reserve a seat</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </a>
              <a
                href="#menus"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#12201b] hover:text-[#c47335] transition-colors"
              >
                View the Ember menu
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
                alt="Steak, chips and a glass of red at Ember Kitchen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/freddys-burger-beer.Cn3Xfah5_Z2pCdVz.webp"
                  alt="A burger and a beer on the Open Deck"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video sm:aspect-square bg-black/5 shadow-sm">
                <img
                  src="https://www.theorchardpenrith.com.au/_astro/freddys-brunch-table.owUNE_6h_20b3qN.webp"
                  alt="A brunch spread at Ember Kitchen"
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
              Boxes that travel well.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6357] leading-relaxed max-w-xl">
              Office lunches, home barbecues and share platters from our kitchens. Order ahead, then collect from Buzz Box.
            </p>
            <div>
              <a
                href="#shop-catering"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c47335] hover:bg-[#aa5e27] text-white font-semibold text-sm transition-all shadow-md shadow-[#c47335]/20 cursor-pointer"
              >
                <span>Order a box</span>
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
                alt="Catering boxes laid out on the lawn"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
