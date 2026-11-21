export default function FoodCommunitySection() {
  const venues = [
    {
      mark: "E",
      name: "Ember Kitchen",
      cuisine: "Fire, pizza and plates",
      tag: "Open today · late on weekends",
      hours: "Weekdays from 10am · Thu to Sun from 9am",
      image: "/images/hd/r06-10.jpg",
      link: "#freddys"
    },
    {
      mark: "B",
      name: "The Buzz Tap",
      cuisine: "Taps, music and the game",
      tag: "Wed to Sun · from 11am",
      hours: "House taps, a live set, and the match on the big screen",
      image: "/images/hd/r08-02.jpg",
      link: "#taproom"
    },
    {
      mark: "M",
      name: "Morning Crumb",
      cuisine: "Bread, pies and coffee",
      tag: "Baking until 2pm",
      hours: "Every day from 7am · loaves, pies and a short coffee list",
      image: "/images/hd/r03-07.jpg",
      link: "#bakery"
    },
    {
      mark: "S",
      name: "Sugar Loop",
      cuisine: "Donuts and small sweets",
      tag: "Gluten-free and vegan",
      hours: "Cinnamon dust, chocolate drizzle, and a tray for the table",
      image: "/images/hd/r08-11.jpg",
      link: "#omg"
    }
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Section Head */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-reveal>
        <div className="space-y-3">
          <h2 className="font-['Rufina',serif] text-4xl sm:text-5xl lg:text-6xl text-[#12201b]">
            Four kitchens, <em className="italic font-normal">one</em> address.
          </h2>
          <p className="text-[#6e6357] text-lg max-w-xl font-light">
            Wood fire, cold taps, morning bread and a sweet tray. Stay at one counter, or wander through all four.
          </p>
        </div>

        <a
          href="#food-community"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#12201b] hover:bg-[#12201b] hover:text-[#fffefc] text-[#12201b] font-semibold text-sm transition-all duration-200 w-fit shrink-0 cursor-pointer"
        >
          <span>Meet the kitchens</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
            <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
          </svg>
        </a>
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="stagger">
        {venues.map((venue) => (
          <a
            key={venue.name}
            href={venue.link}
            className="group bg-[#fffefc] rounded-2xl border border-[#e2d8cb] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Visual Media & Logo Badge */}
            <div className="relative aspect-[4/3] bg-[#e2d8cb] overflow-hidden">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md bg-[#12201b] text-[#fffefc] flex items-center justify-center font-['Rufina',serif] text-lg">
                {venue.mark}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <span className="inline-block text-[11px] font-['DM_Mono',monospace] uppercase text-[#c47335] font-semibold tracking-wider">
                  {venue.cuisine}
                </span>
                <h3 className="font-['Rufina',serif] text-2xl font-normal text-[#12201b] group-hover:text-[#c47335] transition-colors">
                  {venue.name}
                </h3>
                <p className="text-xs text-[#6e6357] leading-relaxed pt-1">
                  {venue.hours}
                </p>
              </div>

              {/* Tag / Status */}
              <div className="pt-3 border-t border-[#e2d8cb] flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#dbe7df] text-[#224d35] font-medium text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2ea05f]"></span>
                  {venue.tag}
                </span>

                <span className="text-[#12201b] group-hover:text-[#c47335] font-semibold inline-flex items-center gap-1">
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
