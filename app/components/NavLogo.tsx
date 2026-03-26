'use client'

const RED = 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)'

export default function NavLogo({ isMobile }: { isMobile: boolean }) {
  return (
    <a href="/" style={{ textDecoration: 'none', display: 'block', flexShrink: 0 }}>
      {isMobile ? (
        /* Mobile — brandmark only */
        <img
          src="/assets/dc-brandmark.svg"
          alt="DC Drive"
          style={{ height: '44px', width: 'auto', filter: RED, display: 'block' }}
        />
      ) : (
        /* Desktop — full logotype (brandmark + text as one SVG) */
        <img
          src="/assets/dc-logotype.svg"
          alt="DC Drive"
          style={{ height: '52px', width: 'auto', filter: RED, display: 'block' }}
        />
      )}
    </a>
  )
}
