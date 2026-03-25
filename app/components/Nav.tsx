'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
      padding: '0 clamp(24px, 5vw, 80px)',
      height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(32,32,39,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      transition: 'all 300ms ease',
    }}>
      <div style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.04em', color: 'var(--color-light)' }}>
        DC<span style={{ color: 'var(--color-red)' }}>Drive</span>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="nav-links">
        {['Κατηγορίες', 'Σχολή', 'Επικοινωνία'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--color-muted)',
            transition: 'color 200ms ease', textDecoration: 'none',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-light)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
            {link}
          </a>
        ))}
        <a href="#contact" style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--color-light)',
          background: 'var(--color-red)', padding: '10px 20px',
          borderRadius: '4px', textDecoration: 'none',
          transition: 'background 200ms ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-red-dark)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-red)')}>
          Κλείσε ραντεβού
        </a>
      </div>
    </nav>
  )
}
