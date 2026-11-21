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
    <header className="sticky top-0 z-50 bg-[#f0e9dd]/90 backdrop-blur-md border-b border-[#e2d8cb] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo */}
        <a
          href="/"
          className="flex-shrink-0 group"
          aria-label="Buzz Box"
        >
          <Logo className="h-9 sm:h-10 md:h-11 w-auto group-hover:opacity-90 transition-opacity" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 font-['Archivo',sans-serif] text-[15px] font-medium text-[#26221d]">
          {/* 1. Plan a gathering Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('plan')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'plan' ? null : 'plan')}
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#c47335] transition-colors cursor-pointer ${
                activeDropdown === 'plan' ? 'text-[#c47335]' : ''
              }`}
            >
              Plan a gathering
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
                <div className="bg-[#fffefc] border border-[#e2d8cb] rounded-xl shadow-xl p-2 flex flex-col gap-0.5">
                  <a href="#adult-birthday" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">Adult Birthday</a>
                  <a href="#weddings" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">Weddings</a>
                  <a href="#kids-birthday" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">Children's Birthday</a>
                  <a href="#engagement" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">Engagement Party</a>
                  <a href="#corporate" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">Corporate Event</a>
                  <a href="#school-formal" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">School Formal</a>
                  <a href="#christmas-party" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">Christmas Party</a>
                  <a href="#celebration-of-life" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">Celebration of Life</a>
                  <a href="#baby-shower" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">Baby Shower</a>

                  <div className="mt-2 pt-2 border-t border-[#e2d8cb] flex flex-col gap-1.5">
                    <a
                      href="#all-events"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f0e9dd] hover:bg-[#ebe4d5] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#12201b] transition-colors"
                    >
                      <span>All event types</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                      </svg>
                    </a>
                    <a
                      href="#brochure"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f5e7db] hover:bg-[#c47335]/20 text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#8b4421] transition-colors"
                    >
                      <span>Room guide</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Book a room Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('space')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'space' ? null : 'space')}
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#c47335] transition-colors cursor-pointer ${
                activeDropdown === 'space' ? 'text-[#c47335]' : ''
              }`}
            >
              Book a room
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
                <div className="bg-[#fffefc] border border-[#e2d8cb] rounded-xl shadow-xl p-2 flex flex-col gap-0.5">
                  <a href="#glass-room" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">The Glass Room</a>

                  <div>
                    <a href="#hive-hall" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors block">Hive Hall</a>
                    <div className="ml-4 pl-3 my-1 border-l border-[#e2d8cb] flex flex-col gap-0.5">
                      <a href="#amber-room" className="px-2 py-1 text-xs text-[#6e6357] hover:text-[#c47335] transition-colors">Amber Room</a>
                      <a href="#cedar-room" className="px-2 py-1 text-xs text-[#6e6357] hover:text-[#c47335] transition-colors">Cedar Room</a>
                      <a href="#loom-room" className="px-2 py-1 text-xs text-[#6e6357] hover:text-[#c47335] transition-colors">Loom Room</a>
                    </div>
                  </div>

                  <div>
                    <a href="#open-deck" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors block">The Open Deck</a>
                    <div className="ml-4 pl-3 my-1 border-l border-[#e2d8cb] flex flex-col gap-0.5">
                      <a href="#north-deck" className="px-2 py-1 text-xs text-[#6e6357] hover:text-[#c47335] transition-colors">North Deck</a>
                      <a href="#south-deck" className="px-2 py-1 text-xs text-[#6e6357] hover:text-[#c47335] transition-colors">South Deck</a>
                    </div>
                  </div>

                  <div>
                    <a href="#lantern-house" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors block">Lantern House</a>
                    <div className="ml-4 pl-3 my-1 border-l border-[#e2d8cb] flex flex-col gap-0.5">
                      <a href="#quiet-booths" className="px-2 py-1 text-xs text-[#6e6357] hover:text-[#c47335] transition-colors">Quiet Booths</a>
                    </div>
                  </div>

                  <a href="#the-nook" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">The Nook</a>

                  <div className="mt-2 pt-2 border-t border-[#e2d8cb] flex flex-col gap-1.5">
                    <a
                      href="#all-spaces"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f0e9dd] hover:bg-[#ebe4d5] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#12201b] transition-colors"
                    >
                      <span>All spaces</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                      </svg>
                    </a>
                    <a
                      href="#brochure"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f5e7db] hover:bg-[#c47335]/20 text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#8b4421] transition-colors"
                    >
                      <span>Room guide</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Reserve a seat */}
          <a href="#book-a-table" className="py-2 hover:text-[#c47335] transition-colors">
            Reserve a seat
          </a>

          {/* 4. This month */}
          <a href="#whats-on" className="py-2 hover:text-[#c47335] transition-colors">
            This month
          </a>

          {/* 5. Food Community Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('food')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'food' ? null : 'food')}
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#c47335] transition-colors cursor-pointer ${
                activeDropdown === 'food' ? 'text-[#c47335]' : ''
              }`}
            >
              Kitchens
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
                <div className="bg-[#fffefc] border border-[#e2d8cb] rounded-xl shadow-xl p-2 flex flex-col gap-1">
                  {/* Freddy's */}
                  <div className="p-2 rounded-lg hover:bg-[#ebe4d5] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#c47335]/15 text-[#c47335] font-bold flex items-center justify-center text-xs border border-[#c47335]/30">
                        E
                      </div>
                      <span className="text-sm font-medium text-[#26221d]">Ember Kitchen</span>
                    </div>
                    <div className="ml-9 mt-1">
                      <a href="#freddys-menu" className="text-xs text-[#6e6357] hover:text-[#c47335]">Menu</a>
                    </div>
                  </div>

                  {/* Taproom on Tench */}
                  <div className="p-2 rounded-lg hover:bg-[#ebe4d5] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#12201b]/10 text-[#12201b] font-bold flex items-center justify-center text-xs border border-[#12201b]/20">
                        B
                      </div>
                      <span className="text-sm font-medium text-[#26221d]">The Buzz Tap</span>
                    </div>
                  </div>

                  {/* Bakery Brothers */}
                  <div className="p-2 rounded-lg hover:bg-[#ebe4d5] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#8b4421]/15 text-[#8b4421] font-bold flex items-center justify-center text-xs border border-[#8b4421]/30">
                        M
                      </div>
                      <span className="text-sm font-medium text-[#26221d]">Morning Crumb</span>
                    </div>
                    <div className="ml-9 mt-1">
                      <a href="#bakery-menu" className="text-xs text-[#6e6357] hover:text-[#c47335]">Baker's list</a>
                    </div>
                  </div>

                  {/* OMG Donuts */}
                  <div className="p-2 rounded-lg hover:bg-[#ebe4d5] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#dbe7df] text-[#224d35] font-bold flex items-center justify-center text-xs border border-[#224d35]/20">
                        S
                      </div>
                      <span className="text-sm font-medium text-[#26221d]">Sugar Loop</span>
                    </div>
                    <div className="ml-9 mt-1">
                      <a href="#omg-menu" className="text-xs text-[#6e6357] hover:text-[#c47335]">Menu</a>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#e2d8cb] flex flex-col gap-1.5">
                    <a
                      href="#food"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f0e9dd] hover:bg-[#ebe4d5] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#12201b] transition-colors"
                    >
                      <span>All food and drink</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
                      </svg>
                    </a>
                    <a
                      href="#giftcards"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f0e9dd] hover:bg-[#ebe4d5] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#12201b] transition-colors"
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
              className={`inline-flex items-center gap-1.5 py-2 hover:text-[#c47335] transition-colors cursor-pointer ${
                activeDropdown === 'menus' ? 'text-[#c47335]' : ''
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
                <div className="bg-[#fffefc] border border-[#e2d8cb] rounded-xl shadow-xl p-3">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Left Col: Café & Restaurant */}
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6e6357] px-3 py-1 font-semibold">
                        Café and restaurant
                      </span>
                      <a href="#freddys" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">
                        Ember Kitchen
                      </a>
                      <a href="#sugar-loop" className="px-3 py-2 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">
                        Sugar Loop
                      </a>
                    </div>

                    {/* Right Col: Event menus (PDF) */}
                    <div className="flex flex-col gap-1 pl-3 border-l border-[#e2d8cb]">
                      <span className="text-[11px] font-['DM_Mono',monospace] uppercase tracking-wider text-[#6e6357] px-3 py-1 font-semibold">
                        Event menus (PDF)
                      </span>
                      <a href="#pdf-corporate" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">
                        <span>Corporate menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#8b4421]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                      <a href="#pdf-kids" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">
                        <span>Children's birthday menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#8b4421]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                      <a href="#pdf-high-tea" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">
                        <span>High tea menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#8b4421]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                      <a href="#pdf-formal" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">
                        <span>School formal menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#8b4421]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                      <a href="#pdf-celebration" className="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#26221d] hover:bg-[#ebe4d5] transition-colors">
                        <span>Celebration of life menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#8b4421]">
                          <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#e2d8cb]">
                    <a
                      href="#menus"
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#f0e9dd] hover:bg-[#ebe4d5] text-xs font-['DM_Mono',monospace] font-semibold uppercase tracking-wider text-[#12201b] transition-colors"
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
          <a href="#catering" className="py-2 hover:text-[#c47335] transition-colors">
            Catering
          </a>
        </nav>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* CTA: Event Enquiry Pill Button */}
          <a
            href="#plan-an-event"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#12201b] hover:bg-[#c47335] active:scale-[0.98] text-[#f9f6f0] hover:text-white font-['Archivo',sans-serif] text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm"
          >
            <span>Send an enquiry</span>
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
            className="xl:hidden p-2.5 rounded-full bg-[#12201b]/10 text-[#12201b] hover:bg-[#12201b]/15 transition-colors cursor-pointer"
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
        <div className="xl:hidden border-t border-[#e2d8cb] bg-[#f9f6f0] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3 font-['Archivo',sans-serif] text-base font-medium text-[#26221d]">
            <a
              href="#plan-an-event"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c47335] transition-colors py-1"
            >
              Plan a gathering
            </a>
            <a
              href="#hire-a-space"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c47335] transition-colors py-1"
            >
              Book a room
            </a>
            <a
              href="#book-a-table"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c47335] transition-colors py-1"
            >
              Reserve a seat
            </a>
            <a
              href="#whats-on"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c47335] transition-colors py-1"
            >
              This month
            </a>
            <a
              href="#food-community"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c47335] transition-colors py-1"
            >
              Kitchens
            </a>
            <a
              href="#menus"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c47335] transition-colors py-1"
            >
              Menus
            </a>
            <a
              href="#catering"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#c47335] transition-colors py-1"
            >
              Catering
            </a>
          </div>

          <div className="pt-4 border-t border-[#e2d8cb] flex flex-col gap-3">
            <a
              href="#plan-an-event"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#c47335] text-white font-semibold text-sm shadow-md"
            >
              <span>Send an enquiry</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M2 12H21" /><path d="M14 5L21 12L14 19" />
              </svg>
            </a>

            <div className="flex flex-col gap-2 pt-2 text-xs font-['DM_Mono',monospace] uppercase tracking-wider text-[#6e6357]">
              <a href="#contact" className="flex items-center gap-2 hover:text-[#12201b]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#c47335]">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
                Call Buzz Box
              </a>
              <a href="#contact" className="hover:text-[#12201b]">Contact Us</a>
              <a href="#giftcards" className="hover:text-[#12201b]">Gift cards</a>
              <a href="#brochure" className="hover:text-[#12201b] flex items-center gap-1.5 text-[#8b4421]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
                </svg>
                Room guide (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
