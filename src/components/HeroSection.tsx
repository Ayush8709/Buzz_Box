import { useState } from 'react'

export default function HeroSection() {
  const [occasion, setOccasion] = useState('')
  const [guests, setGuests] = useState('80')

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-12 max-w-[1440px] mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-[#22302b] text-white min-h-[640px] lg:min-h-[720px] flex flex-col justify-end p-6 sm:p-10 lg:p-14 shadow-2xl">
        {/* Real Orchard Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.theorchardpenrith.com.au/_astro/guests-garden-picnic-table.cgjWlzZa_SJ9bx.png"
            alt="Friends gathered at a dressed picnic table under the trees in the gardens at The Orchard Penrith"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Natural Vignette & Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#15201c] via-[#22302b]/65 to-transparent"></div>
          <div className="absolute inset-0 bg-[#22302b]/25"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Google Reviews Badge */}
          <a
            href="https://share.google/q229HOl1Kos4ftPgT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-white/90 hover:bg-black/60 transition-colors w-fit"
          >
            <div className="flex text-[#fa7238] text-sm tracking-tighter">
              {'★★★★★'}
            </div>
            <span className="font-['DM_Mono',monospace] tracking-wider uppercase text-[11px] font-medium">
              5 star Google reviews
            </span>
          </a>

          {/* Headline */}
          <h1 className="font-['Rufina',serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.05] tracking-tight">
            THE Place<br />
            To <em className="italic font-normal text-[#fa9a6e]">Celebrate.</em>
          </h1>

          {/* Event Search Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-[#fffdf9] p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-[#e9e1d2] text-[#2e2a25] flex flex-col sm:flex-row gap-2.5 max-w-2xl"
          >
            {/* Event Type Select */}
            <div className="flex-1 px-3.5 py-2.5 bg-[#f4eee3]/60 rounded-xl">
              <label className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a] font-semibold">
                Event type
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-[#22302b] outline-none cursor-pointer mt-0.5"
              >
                <option value="">What are you planning?</option>
                <optgroup label="Birthdays & Milestones">
                  <option value="adult-birthday">Adult Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="children-s-birthday">Children's Birthday</option>
                  <option value="cocktail-party">Cocktail Party</option>
                  <option value="gender-reveal">Gender Reveal</option>
                  <option value="leaving-party">Leaving Party</option>
                  <option value="retirement-party">Retirement Party</option>
                  <option value="reunion">Reunion</option>
                </optgroup>
                <optgroup label="Weddings & Engagements">
                  <option value="wedding">Wedding</option>
                  <option value="engagement-party">Engagement Party</option>
                  <option value="bridal-shower">Bridal Shower</option>
                  <option value="high-tea">High Tea</option>
                  <option value="hens-party">Hens Party</option>
                </optgroup>
                <optgroup label="Corporate & Business">
                  <option value="corporate-event">Corporate Event</option>
                  <option value="conference-offsite">Conference Offsite</option>
                  <option value="boardroom-for-a-day">Boardroom for a Day</option>
                  <option value="awards-ceremony">Awards Ceremony</option>
                  <option value="team-building">Team Building</option>
                  <option value="staff-party">Staff Party</option>
                </optgroup>
                <optgroup label="Christmas & Seasonal">
                  <option value="christmas-party">Christmas Party</option>
                  <option value="new-year-s-eve-party">New Year's Eve Party</option>
                </optgroup>
                <optgroup label="Community & Culture">
                  <option value="backyard-bbq">Backyard BBQ</option>
                  <option value="charity-event">Charity Event</option>
                  <option value="christening">Christening</option>
                  <option value="school-formal">School Formal</option>
                </optgroup>
                <optgroup label="Farewells">
                  <option value="celebration-of-life">Celebration of Life</option>
                  <option value="wake">Wake</option>
                </optgroup>
              </select>
            </div>

            {/* Guests Input */}
            <div className="w-full sm:w-28 px-3.5 py-2.5 bg-[#f4eee3]/60 rounded-xl">
              <label className="block text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a] font-semibold">
                Guests
              </label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="300"
                placeholder="80"
                className="w-full bg-transparent text-sm font-medium text-[#22302b] outline-none mt-0.5"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-[#fa7238] hover:bg-[#e05f27] active:scale-[0.98] text-white font-['Archivo',sans-serif] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#fa7238]/30"
            >
              <span>Start planning</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
              </svg>
            </button>
          </form>

          {/* Quick Paths */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <a
              href="#plan-an-event"
              className="group p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#fa7238]/60 transition-all"
            >
              <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:text-[#fa9a6e] transition-colors">
                <span>Plan an Event</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </div>
              <p className="text-xs text-white/70 mt-1 line-clamp-2">
                Tell us the occasion. We'll match the space, menu and setup.
              </p>
            </a>

            <a
              href="#hire-a-space"
              className="group p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#fa7238]/60 transition-all"
            >
              <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:text-[#fa9a6e] transition-colors">
                <span>Hire a Space</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </div>
              <p className="text-xs text-white/70 mt-1 line-clamp-2">
                12 spaces, from the 200-guest Pavilion to the VIP Suite.
              </p>
            </a>

            <a
              href="#book-a-table"
              className="group p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#fa7238]/60 transition-all"
            >
              <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:text-[#fa9a6e] transition-colors">
                <span>Book a Table</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </div>
              <p className="text-xs text-white/70 mt-1 line-clamp-2">
                Live availability across our restaurants. Book in a minute.
              </p>
            </a>

            <a
              href="#menus"
              className="group p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#fa7238]/60 transition-all"
            >
              <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:text-[#fa9a6e] transition-colors">
                <span>Menus</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform">
                  <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                </svg>
              </div>
              <p className="text-xs text-white/70 mt-1 line-clamp-2">
                Explore Freddy's, Taproom, Bakery Brothers and event menus.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
