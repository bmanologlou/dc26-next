'use client'

const RED = 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)'

export default function NavLogo() {
  return (
    <a href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'block' }}>
      {/* Desktop logotype — hidden on mobile via CSS */}
      <img
        src="/assets/dc-logotype.svg"
        alt="DC Drive"
        className="logo-desktop"
        style={{ height: '52px', width: 'auto', filter: RED, display: 'block' }}
      />
      {/* Mobile brandmark — hidden on desktop via CSS */}
      <img
        src="/assets/dc-brandmark.svg"
        alt="DC Drive"
        className="logo-mobile"
        style={{ height: '44px', width: 'auto', filter: RED, display: 'none' }}
      />
      <style>{`
        @media (max-width: 768px) {
          .logo-desktop { display: none !important; }
          .logo-mobile  { display: block !important; }
        }
      `}</style>
    </a>
  )
}
