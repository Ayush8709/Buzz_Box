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
                "Annual meeting", "Awards night", "Day hire boardroom",
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
    <footer className="bg-[#12201b] text-[#c5d5cb] pt-16 pb-12 border-t border-[#233a30]" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12" data-reveal>
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <a href="/" className="inline-block" aria-label="Buzz Box">
              <Logo className="h-10 w-auto" variant="light" />
            </a>

            <p className="text-sm text-[#9fb3a7] leading-relaxed max-w-sm font-light">
              Buzz Box is where the booking starts. 8 Market Lane, Riverside Quarter. Parking is on us.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/events_by_buzzbox/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buzz Box on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#c47335] hover:text-[#c47335] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#contact"
                aria-label="Buzz Box on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#c47335] hover:text-[#c47335] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Col 1: Plan */}
          <div className="space-y-4">
            <h4 className="text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#df9557] font-semibold">
              Plan
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#plan-an-event" className="hover:text-white transition-colors">Plan a gathering</a></li>
              <li><a href="#hire-a-space" className="hover:text-white transition-colors">Book a room</a></li>
              <li><a href="#book-a-table" className="hover:text-white transition-colors">Reserve a seat</a></li>
              <li><a href="#menus" className="hover:text-white transition-colors">Menus</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Event Packages</a></li>
              <li>
                <a href="#brochure" className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-[#df9557]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                  </svg>
                  Room guide (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Discover */}
          <div className="space-y-4">
            <h4 className="text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#df9557] font-semibold">
              Discover
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#whats-on" className="hover:text-white transition-colors">This month</a></li>
              <li><a href="#food-community" className="hover:text-white transition-colors">Kitchens</a></li>
              <li><a href="#ember-kitchen" className="hover:text-white transition-colors">Ember Kitchen</a></li>
              <li><a href="#buzz-tap" className="hover:text-white transition-colors">The Buzz Tap</a></li>
              <li><a href="#morning-crumb" className="hover:text-white transition-colors">Morning Crumb</a></li>
              <li><a href="#sugar-loop" className="hover:text-white transition-colors">Sugar Loop</a></li>
              <li><a href="#map" className="hover:text-white transition-colors">Grounds map</a></li>
              <li><a href="#play-green" className="hover:text-white transition-colors">Play Green</a></li>
            </ul>
          </div>

          {/* Nav Col 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#df9557] font-semibold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a href="#contact" className="hover:text-white transition-colors font-medium text-white flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#c47335]">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                  Call Buzz Box
                </a>
              </li>
              <li>
                <a href="mailto:hello@buzzbox.venue" className="hover:text-white transition-colors">
                  hello@buzzbox.venue
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
              <span className="text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#df9557] font-semibold">
                Occasions Directory
              </span>
              <h3 className="font-['Rufina',serif] text-xl text-[#fffefc] group-hover:text-[#df9557] transition-colors">
                Pick an occasion
              </h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[#c47335]">
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
                  <ul className="space-y-1.5 text-xs text-[#9fb3a7]">
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
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9fb3a7] font-light">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            © 2026 Buzz Box. All rights reserved. Outside drinks stay outside.
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
