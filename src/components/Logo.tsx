interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
}

export default function Logo({ className = "h-8 md:h-10 w-auto", variant = 'dark' }: LogoProps) {
  const isDark = variant === 'dark'
  const textColor = isDark ? '#14201b' : '#faf6f0'
  const accentColor = '#c47335' // Artisan Terracotta Copper

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Botanical Grove Emblem (Custom, Copyright-Safe) */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 sm:w-10 sm:h-10"
          aria-hidden="true"
        >
          {/* Emblem Circular Base with Warm Gradient */}
          <circle cx="24" cy="24" r="22" fill={accentColor} />
          {/* Inner Ring */}
          <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          
          {/* Stylized Botanical Laurel / Orchard Branch Motif */}
          <path
            d="M24 10V38M24 14C21 16 17 17 15 21C18 22 22 20 24 18M24 22C20 24 16 26 15 31C18 31 22 28 24 26M24 18C27 20 31 21 33 25C30 26 26 24 24 22M24 26C28 28 32 30 33 35C30 35 26 32 24 30"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Crown Accent Star */}
          <circle cx="24" cy="10" r="1.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Distinct Typography */}
      <div className="flex flex-col">
        <span
          className="font-serif font-normal tracking-[-0.01em] text-[1.35rem] sm:text-2xl normal-case leading-none transition-colors"
          style={{ color: textColor }}
        >
          Buzz Box
        </span>
        <span
          className="font-['DM_Mono',monospace] text-[9px] uppercase tracking-[0.28em] text-[#8a7f72] mt-1 leading-none font-medium"
        >
          Rooms & kitchens
        </span>
      </div>
    </div>
  )
}
