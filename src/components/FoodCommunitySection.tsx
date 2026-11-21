export default function FoodCommunitySection() {
  const venues = [
    {
      name: "Freddy's @ The Orchard",
      cuisine: "Pizzeria & Restaurant",
      tag: "Open now · until late",
      hours: "Mon to Wed 10am to 2pm · Thu to Sun 9am to late",
      image: "https://www.theorchardpenrith.com.au/_astro/freddys-grill.Di7p99Qp_ZhcDr0.webp",
      logo: "https://www.theorchardpenrith.com.au/_astro/logo-freddys.DoEukAtD_Z1iyUUy.webp",
      link: "#freddys"
    },
    {
      name: "Taproom on Tench",
      cuisine: "Pub · Live music and sport",
      tag: "Wed to Sun 11am to late",
      hours: "Craft beers, NRL live on big screens, riverside views",
      image: "https://www.theorchardpenrith.com.au/_astro/taproom-interior.DFb_V5Y-_Z1qP63U.webp",
      logo: "https://www.theorchardpenrith.com.au/_astro/logo-taproom-badge.BvtIH56k_ZqgacM.webp",
      link: "#taproom"
    },
    {
      name: "Bakery Brothers",
      cuisine: "Bakery · Pies · Coffee",
      tag: "Open now · until 2pm",
      hours: "Mon to Sun 7am to 2pm · Fresh artisanal baked sourdough",
      image: "https://www.theorchardpenrith.com.au/_astro/bakery-brothers-hero.Bqt6Cu4v_sgSKu.webp",
      logo: "https://www.theorchardpenrith.com.au/_astro/logo-bakery-ig.tJh5jLCy_FfvuA.webp",
      link: "#bakery"
    },
    {
      name: "OMG Decadent Donuts",
      cuisine: "Donuts & sweet treats",
      tag: "100% Gluten-free & Vegan",
      hours: "Hot fresh dusted cinnamon donuts, allergen-friendly",
      image: "https://www.theorchardpenrith.com.au/_astro/omg-choc-drizzle.BL5cmrRe_EvuaA.webp",
      logo: "https://www.theorchardpenrith.com.au/_astro/logo-omg-ig.2DeuV4CI_ZYuDJj.webp",
      link: "#omg"
    }
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Section Head */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#22302b]">
            Food <em className="italic font-normal">everyone</em> loves.
          </h2>
          <p className="text-[#6f665a] text-lg max-w-xl font-light">
            Casual café eats, craft beer on tap, wood-fired mains and artisan sweets. All in one spot.
          </p>
        </div>

        <a
          href="#food-community"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#22302b] hover:bg-[#22302b] hover:text-[#fffdf9] text-[#22302b] font-semibold text-sm transition-all duration-200 w-fit shrink-0 cursor-pointer"
        >
          <span>Explore the precinct</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
            <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
          </svg>
        </a>
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {venues.map((venue) => (
          <a
            key={venue.name}
            href={venue.link}
            className="group bg-[#fffdf9] rounded-2xl border border-[#e9e1d2] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Visual Media & Logo Badge */}
            <div className="relative aspect-[4/3] bg-[#e9e1d2] overflow-hidden">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md bg-white overflow-hidden">
                <img
                  src={venue.logo}
                  alt={`${venue.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <span className="inline-block text-[11px] font-['DM_Mono',monospace] uppercase text-[#fa7238] font-semibold tracking-wider">
                  {venue.cuisine}
                </span>
                <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#22302b] group-hover:text-[#fa7238] transition-colors">
                  {venue.name}
                </h3>
                <p className="text-xs text-[#6f665a] leading-relaxed pt-1">
                  {venue.hours}
                </p>
              </div>

              {/* Tag / Status */}
              <div className="pt-3 border-t border-[#e9e1d2] flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e3eadb] text-[#2f4a2a] font-medium text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3f8f3a]"></span>
                  {venue.tag}
                </span>

                <span className="text-[#22302b] group-hover:text-[#fa7238] font-semibold inline-flex items-center gap-1">
                  View
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                    <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
