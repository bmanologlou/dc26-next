'use client'

const RED = 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)'

export default function NavLogo({ isMobile }: { isMobile: boolean }) {
  return (
    <a href="/" style={{
      display: 'flex', alignItems: 'center',
      gap: '12px', textDecoration: 'none',
      flexShrink: 0,
    }}>
      <img
        src="/assets/dc-brandmark.svg"
        alt="DC Drive"
        className="nav-brandmark"
        style={{ width: 'auto', filter: RED, flexShrink: 0, display: 'block' }}
      />
      {!isMobile && (
        <img
          src="/assets/dc-wordmark.svg"
          alt="DC Christothanopoulou"
          style={{ height: '38px', width: 'auto', filter: RED, flexShrink: 0, display: 'block' }}
        />
      )}
      <style>{`
        .nav-brandmark { height: 38px; }
        @media (max-width: 768px) {
          .nav-brandmark { height: 44px; }
        }
      `}</style>
    </a>
  )
}
