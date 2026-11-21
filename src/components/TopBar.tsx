export default function TopBar() {
  return (
    <div className="bg-[#12201b] text-[#9fb3a7] font-['DM_Mono',monospace] text-[11px] uppercase tracking-[0.06em] py-2 px-4 sm:px-8 border-b border-[#1c2e27] transition-colors">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Event Ticker with Live Dot */}
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c47335] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c47335]"></span>
          </span>
          <a
            href="#events"
            className="group inline-flex items-center gap-1.5 hover:text-[#fffefc] transition-colors truncate"
          >
            <strong className="text-[#fffefc] font-medium">Next up:</strong>
            <span className="truncate">Friday Growers' Stall · Fri 27 Nov</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform shrink-0"
            >
              <path d="M2 12H21" />
              <path d="M14 5L21 12L14 19" />
            </svg>
          </a>
        </div>

        {/* Right: Navigation Links & Phone */}
        <div className="hidden sm:flex items-center gap-6 shrink-0">
          <a
            href="#careers"
            className="hover:text-[#fffefc] transition-colors"
          >
            Join Our Team
          </a>
          <a
            href="#contact"
            className="hover:text-[#fffefc] transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[#fffefc] font-['Archivo',sans-serif] text-xs font-semibold normal-case tracking-normal hover:text-[#c47335] transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#c47335]"
            >
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
            </svg>
            Call Buzz Box
          </a>
        </div>
      </div>
    </div>
  )
}
