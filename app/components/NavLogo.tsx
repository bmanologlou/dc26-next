'use client'

const RED = 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)'

export default function NavLogo({ isMobile }: { isMobile: boolean }) {
  return (
    <a href="/" style={{
      display: 'flex', alignItems: 'center',
      gap: '18px', textDecoration: 'none',
    }}>
      {/* Brandmark — always visible */}
      <img
        src="/assets/dc-brandmark.svg"
        alt="DC Drive"
        style={{ height: '36px', width: 'auto', filter: RED, flexShrink: 0 }}
      />
      {/* Wordmark — hidden on mobile, always shown on desktop */}
      {!isMobile && (
        <img
          src="/assets/dc-wordmark.svg"
          alt="DC Christothanopoulou"
          style={{ height: '30px', width: 'auto', filter: RED, flexShrink: 0 }}
        />
      )}
    </a>
  )
}
