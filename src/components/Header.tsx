import { useState, useRef, useEffect } from 'react'
import Logo from './Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-[#f4eee3]/90 backdrop-blur-md border-b border-[#e9e1d2] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo */}
        <a
          href="/"
          className="flex-shrink-0 group"
          aria-label="The Orchard Penrith"
        >
          <Logo className="h-9 sm:h-10 md:h-11 w-auto group-hover:opacity-90 transition-opacity" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 font-['Archivo',sans-serif] text-[15px] font-medium text-[#2e2a25]">
          {/* 1. Plan an Event Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('plan')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'plan' ? null : 'plan')}
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#fa7238] transition-colors cursor-pointer ${
                activeDropdown === 'plan' ? 'text-[#fa7238]' : ''
              }`}
            >
              Plan an Event
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'plan' ? 'rotate-180' : ''
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {activeDropdown === 'plan' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-[#fffdf9] border border-[#e9e1d2] rounded-xl shadow-xl p-2 flex flex-col gap-0.5">
                  <a href="#adult-birthday" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">Adult Birthday</a>
                  <a href="#weddings" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">Weddings</a>
                  <a href="#kids-birthday" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">Children's Birthday</a>
                  <a href="#engagement" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">Engagement Party</a>
                  <a href="#corporate" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">Corporate Event</a>
                  <a href="#school-formal" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">School Formal</a>
                  <a href="#christmas-party" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">Christmas Party</a>
                  <a href="#celebration-of-life" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">Celebration of Life</a>
                  <a href="#baby-shower" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">Baby Shower</a>

                  <div className="mt-2 pt-2 border-t border-[#e9e1d2] flex flex-col gap-1.5">
                    <a
                      href="#all-events"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f4eee3] hover:bg-[#f1ead9] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#22302b] transition-colors"
                    >
                      <span>All event types</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                      </svg>
                    </a>
                    <a
                      href="#brochure"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#fbe3d4] hover:bg-[#fa7238]/20 text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#9a3f17] transition-colors"
                    >
                      <span>All venues brochure</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Hire a Space Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('space')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'space' ? null : 'space')}
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#fa7238] transition-colors cursor-pointer ${
                activeDropdown === 'space' ? 'text-[#fa7238]' : ''
              }`}
            >
              Hire a Space
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'space' ? 'rotate-180' : ''
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {activeDropdown === 'space' && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-[#fffdf9] border border-[#e9e1d2] rounded-xl shadow-xl p-2 flex flex-col gap-0.5">
                  <a href="#pavilion" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">The Pavilion</a>

                  <div>
                    <a href="#woolshed" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors block">The John Farragher Woolshed</a>
                    <div className="ml-4 pl-3 my-1 border-l border-[#e9e1d2] flex flex-col gap-0.5">
                      <a href="#stables" className="px-2 py-1 text-xs text-[#6f665a] hover:text-[#fa7238] transition-colors">The Stables</a>
                      <a href="#shearing-shed" className="px-2 py-1 text-xs text-[#6f665a] hover:text-[#fa7238] transition-colors">The Shearing Shed</a>
                      <a href="#wool-room" className="px-2 py-1 text-xs text-[#6f665a] hover:text-[#fa7238] transition-colors">The Wool Room</a>
                    </div>
                  </div>

                  <div>
                    <a href="#alfresco" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors block">The Alfresco</a>
                    <div className="ml-4 pl-3 my-1 border-l border-[#e9e1d2] flex flex-col gap-0.5">
                      <a href="#alfresco-1" className="px-2 py-1 text-xs text-[#6f665a] hover:text-[#fa7238] transition-colors">Alfresco 1 (Riverside)</a>
                      <a href="#alfresco-2" className="px-2 py-1 text-xs text-[#6f665a] hover:text-[#fa7238] transition-colors">Alfresco 2 (Orchard)</a>
                    </div>
                  </div>

                  <div>
                    <a href="#farmhouse" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors block">The Farmhouse</a>
                    <div className="ml-4 pl-3 my-1 border-l border-[#e9e1d2] flex flex-col gap-0.5">
                      <a href="#semi-private" className="px-2 py-1 text-xs text-[#6f665a] hover:text-[#fa7238] transition-colors">Semi-Private Rooms</a>
                    </div>
                  </div>

                  <a href="#cosy-corner" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">The Cosy Corner</a>

                  <div className="mt-2 pt-2 border-t border-[#e9e1d2] flex flex-col gap-1.5">
                    <a
                      href="#all-spaces"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f4eee3] hover:bg-[#f1ead9] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#22302b] transition-colors"
                    >
                      <span>All spaces</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                      </svg>
                    </a>
                    <a
                      href="#brochure"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#fbe3d4] hover:bg-[#fa7238]/20 text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#9a3f17] transition-colors"
                    >
                      <span>All venues brochure</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Book a Table */}
          <a href="#book-a-table" className="py-2 hover:text-[#fa7238] transition-colors">
            Book a Table
          </a>

          {/* 4. What's On */}
          <a href="#whats-on" className="py-2 hover:text-[#fa7238] transition-colors">
            What's On
          </a>

          {/* 5. Food Community Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('food')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'food' ? null : 'food')}
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#fa7238] transition-colors cursor-pointer ${
                activeDropdown === 'food' ? 'text-[#fa7238]' : ''
              }`}
            >
              Food Community
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'food' ? 'rotate-180' : ''
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {activeDropdown === 'food' && (
              <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-[#fffdf9] border border-[#e9e1d2] rounded-xl shadow-xl p-2 flex flex-col gap-1">
                  {/* Freddy's */}
                  <div className="p-2 rounded-lg hover:bg-[#f1ead9] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#fa7238]/15 text-[#fa7238] font-bold flex items-center justify-center text-xs border border-[#fa7238]/30">
                        F
                      </div>
                      <span className="text-sm font-medium text-[#2e2a25]">Freddy's @ The Orchard</span>
                    </div>
                    <div className="ml-9 mt-1">
                      <a href="#freddys-menu" className="text-xs text-[#6f665a] hover:text-[#fa7238]">Menu</a>
                    </div>
                  </div>

                  {/* Taproom on Tench */}
                  <div className="p-2 rounded-lg hover:bg-[#f1ead9] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#22302b]/10 text-[#22302b] font-bold flex items-center justify-center text-xs border border-[#22302b]/20">
                        T
                      </div>
                      <span className="text-sm font-medium text-[#2e2a25]">Taproom on Tench</span>
                    </div>
                  </div>

                  {/* Bakery Brothers */}
                  <div className="p-2 rounded-lg hover:bg-[#f1ead9] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#9a3f17]/15 text-[#9a3f17] font-bold flex items-center justify-center text-xs border border-[#9a3f17]/30">
                        B
                      </div>
                      <span className="text-sm font-medium text-[#2e2a25]">Bakery Brothers</span>
                    </div>
                    <div className="ml-9 mt-1">
                      <a href="#bakery-menu" className="text-xs text-[#6f665a] hover:text-[#fa7238]">Wholesale menu</a>
                    </div>
                  </div>

                  {/* OMG Donuts */}
                  <div className="p-2 rounded-lg hover:bg-[#f1ead9] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#e3eadb] text-[#2f4a2a] font-bold flex items-center justify-center text-xs border border-[#2f4a2a]/20">
                        O
                      </div>
                      <span className="text-sm font-medium text-[#2e2a25]">OMG Decadent Donuts</span>
                    </div>
                    <div className="ml-9 mt-1">
                      <a href="#omg-menu" className="text-xs text-[#6f665a] hover:text-[#fa7238]">Menu</a>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#e9e1d2] flex flex-col gap-1.5">
                    <a
                      href="#food"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f4eee3] hover:bg-[#f1ead9] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#22302b] transition-colors"
                    >
                      <span>All food and drink</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                      </svg>
                    </a>
                    <a
                      href="#giftcards"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f4eee3] hover:bg-[#f1ead9] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#22302b] transition-colors"
                    >
                      <span>Gift cards</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. Menus (2 Columns Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('menus')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'menus' ? null : 'menus')}
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#fa7238] transition-colors cursor-pointer ${
                activeDropdown === 'menus' ? 'text-[#fa7238]' : ''
              }`}
            >
              Menus
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'menus' ? 'rotate-180' : ''
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {activeDropdown === 'menus' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[32rem] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-[#fffdf9] border border-[#e9e1d2] rounded-xl shadow-xl p-3">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Left Col: Café & Restaurant */}
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a] px-3 py-1 font-semibold">
                        Café and restaurant
                      </span>
                      <a href="#freddys" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">
                        Freddy's @ The Orchard
                      </a>
                      <a href="#omg" className="px-3 py-2 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">
                        OMG Decadent Donuts
                      </a>
                    </div>

                    {/* Right Col: Event menus (PDF) */}
                    <div className="flex flex-col gap-1 pl-3 border-l border-[#e9e1d2]">
                      <span className="text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a] px-3 py-1 font-semibold">
                        Event menus (PDF)
                      </span>
                      <a href="#pdf-corporate" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">
                        <span>Corporate menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#9a3f17]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                      <a href="#pdf-kids" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">
                        <span>Children's birthday menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#9a3f17]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                      <a href="#pdf-high-tea" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">
                        <span>High tea menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#9a3f17]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                      <a href="#pdf-formal" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">
                        <span>School formal menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#9a3f17]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                      <a href="#pdf-celebration" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#2e2a25] hover:bg-[#f1ead9] transition-colors">
                        <span>Celebration of life menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#9a3f17]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#e9e1d2]">
                    <a
                      href="#menus"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f4eee3] hover:bg-[#f1ead9] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#22302b] transition-colors"
                    >
                      <span>All menus</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 7. Catering */}
          <a href="#catering" className="py-2 hover:text-[#fa7238] transition-colors">
            Catering
          </a>
        </nav>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* CTA: Event Enquiry Pill Button */}
          <a
            href="#plan-an-event"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#22302b] hover:bg-[#fa7238] active:scale-[0.98] text-[#fbf8f2] hover:text-white font-['Archivo',sans-serif] text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm"
          >
            <span>Event Enquiry</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M2 12H21" />
              <path d="M14 5L21 12L14 19" />
            </svg>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-full bg-[#22302b]/10 text-[#22302b] hover:bg-[#22302b]/15 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sliding Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#e9e1d2] bg-[#fbf8f2] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3 font-['Archivo',sans-serif] text-base font-medium text-[#2e2a25]">
            <a
              href="#plan-an-event"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fa7238] transition-colors py-1"
            >
              Plan an Event
            </a>
            <a
              href="#hire-a-space"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fa7238] transition-colors py-1"
            >
              Hire a Space
            </a>
            <a
              href="#book-a-table"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fa7238] transition-colors py-1"
            >
              Book a Table
            </a>
            <a
              href="#whats-on"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fa7238] transition-colors py-1"
            >
              What's On
            </a>
            <a
              href="#food-community"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fa7238] transition-colors py-1"
            >
              Food Community
            </a>
            <a
              href="#menus"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fa7238] transition-colors py-1"
            >
              Menus
            </a>
            <a
              href="#catering"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fa7238] transition-colors py-1"
            >
              Catering
            </a>
          </div>

          <div className="pt-4 border-t border-[#e9e1d2] flex flex-col gap-3">
            <a
              href="#plan-an-event"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#fa7238] text-white font-semibold text-sm shadow-md"
            >
              <span>Event Enquiry</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
              </svg>
            </a>

            <div className="flex flex-col gap-2 pt-2 text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#6f665a]">
              <a href="tel:1300513884" className="flex items-center gap-2 hover:text-[#22302b]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#fa7238]">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
                1300 513 884
              </a>
              <a href="#contact" className="hover:text-[#22302b]">Contact Us</a>
              <a href="#giftcards" className="hover:text-[#22302b]">Gift cards</a>
              <a href="#brochure" className="hover:text-[#22302b] flex items-center gap-1.5 text-[#9a3f17]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                </svg>
                Venue Brochure (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
