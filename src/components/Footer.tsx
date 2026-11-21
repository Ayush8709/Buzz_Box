import { useState } from 'react'
import Logo from './Logo'

export default function Footer() {
  const [occasionsOpen, setOccasionsOpen] = useState(false)

  const occasionGroups = [
    {
      title: "Birthdays & Milestones",
      links: [
        "Adult Birthday", "Anniversary", "Baby Shower", "Children's Birthday",
        "Cocktail Party", "Gender Reveal", "Leaving Party", "Retirement Party", "Reunion"
      ]
    },
    {
      title: "Weddings & Engagements",
      links: [
        "Bachelor Party", "Bridal Shower", "Engagement Party",
        "Hens Party", "High Tea", "Wedding"
      ]
    },
    {
      title: "Corporate & Business",
      links: [
        "Annual General Meeting (AGM)", "Awards Ceremony", "Boardroom for a Day",
        "Company Fun Day", "Conference Offsite", "Corporate Event", "Creative Space",
        "Launch Event", "Markets", "Pop-Up Store", "Staff Party", "Team Building", "Training Room"
      ]
    },
    {
      title: "Christmas & Seasonal",
      links: ["Christmas Party", "New Year's Eve Party"]
    },
    {
      title: "Community & Culture",
      links: [
        "Backyard BBQ", "Charity Event", "Christening", "Community Event",
        "End of Season Presentation", "Fundraiser Gala", "Karaoke Night", "School Formal", "Wine Tasting"
      ]
    },
    {
      title: "Farewells",
      links: ["Celebration of Life", "Wake"]
    }
  ]

  return (
    <footer className="bg-[#22302b] text-[#cdd8cd] pt-16 pb-12 border-t border-[#35463f]" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <a href="/" className="inline-block" aria-label="The Orchard Penrith">
              <Logo className="h-10 w-auto" variant="light" />
            </a>

            <p className="text-sm text-[#aebcae] leading-relaxed max-w-sm font-light">
              THE place to celebrate.{' '}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=50+Tench+Ave,+Jamisontown+NSW+2750"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                50 Tench Ave, Jamisontown NSW 2750
              </a>
              . Free parking on site.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/theorchard_penrith/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Orchard on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#fa7238] hover:text-[#fa7238] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/theorchardpenrith/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Orchard on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#fa7238] hover:text-[#fa7238] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Col 1: Plan */}
          <div className="space-y-4">
            <h4 className="text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#fa9a6e] font-semibold">
              Plan
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#plan-an-event" className="hover:text-white transition-colors">Plan an Event</a></li>
              <li><a href="#hire-a-space" className="hover:text-white transition-colors">Hire a Space</a></li>
              <li><a href="#book-a-table" className="hover:text-white transition-colors">Book a Table</a></li>
              <li><a href="#menus" className="hover:text-white transition-colors">Menus</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Event Packages</a></li>
              <li>
                <a href="#brochure" className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-[#fa9a6e]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                  </svg>
                  All Venues Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Discover */}
          <div className="space-y-4">
            <h4 className="text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#fa9a6e] font-semibold">
              Discover
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#whats-on" className="hover:text-white transition-colors">What's On</a></li>
              <li><a href="#food-community" className="hover:text-white transition-colors">Food Community</a></li>
              <li><a href="#freddys" className="hover:text-white transition-colors">Freddy's @ The Orchard</a></li>
              <li><a href="#taproom" className="hover:text-white transition-colors">Taproom on Tench</a></li>
              <li><a href="#bakery" className="hover:text-white transition-colors">Bakery Brothers</a></li>
              <li><a href="#omg" className="hover:text-white transition-colors">OMG Decadent Donuts</a></li>
              <li><a href="#map" className="hover:text-white transition-colors">The Precinct Map</a></li>
              <li><a href="#playground" className="hover:text-white transition-colors">Playground & Grounds</a></li>
            </ul>
          </div>

          {/* Nav Col 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#fa9a6e] font-semibold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a href="tel:1300513884" className="hover:text-white transition-colors font-medium text-white flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#fa7238]">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                  1300 513 884
                </a>
              </li>
              <li>
                <a href="mailto:functions@theorchardpenrith.com.au" className="hover:text-white transition-colors">
                  functions@theorchardpenrith.com.au
                </a>
              </li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Join Our Team</a></li>
              <li><a href="#giftcards" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>
        </div>

        {/* Expandable Occasions Directory */}
        <div className="border border-white/10 rounded-2xl bg-white/[0.02] p-6 transition-all">
          <button
            onClick={() => setOccasionsOpen(!occasionsOpen)}
            className="w-full flex items-center justify-between text-left cursor-pointer group"
          >
            <div className="space-y-1">
              <span className="text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#fa9a6e] font-semibold">
                Occasions Directory
              </span>
              <h3 className="font-['Rufina',serif] text-xl text-[#fffdf9] group-hover:text-[#fa9a6e] transition-colors">
                Browse celebrations by event type
              </h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[#fa7238]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`w-4 h-4 transition-transform duration-200 ${occasionsOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </button>

          {occasionsOpen && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-6 mt-6 border-t border-white/10 animate-in fade-in duration-200">
              {occasionGroups.map((group) => (
                <div key={group.title} className="space-y-2.5">
                  <h5 className="text-[11px] font-['DM_Mono',monospace] uppercase font-semibold text-white/90">
                    {group.title}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#aebcae]">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} className="hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Legal & Acknowledgement of Country */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#aebcae] font-light">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            © 2026 The Orchard Penrith. All rights reserved. We acknowledge the Darug people, traditional owners of the land on which we gather. Alcohol may not be brought onto the premises.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <a href="#terms" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
              Terms & Conditions
            </a>
            <a href="#privacy" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
