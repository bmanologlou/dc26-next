'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavLogo from './NavLogo'

const LINKS = [
  { label: 'Πώς ξεκινάς', href: '#steps' },
  { label: 'Διπλώματα', href: '#categories' },
  { label: 'Σχολή', href: '#school' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Επικοινωνία', href: '#contact' },
]

const RED_FILTER = 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)'

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Lock scroll when menu open — no padding compensation
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
    return () => { document.documentElement.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── NAV BAR ─────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: '88px',
        padding: '0 clamp(24px, 5vw, 80px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, rgba(32,32,39,0.96) 0%, rgba(32,32,39,0.55) 70%, transparent 100%)',
      }}>

        <NavLogo />

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(247,247,248,0.5)',
              textDecoration: 'none', transition: 'color 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f7f7f8')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,247,248,0.5)')}>
              {label}
            </a>
          ))}
          <a href="#contact" style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#f7f7f8',
            background: '#ff4212', padding: '10px 20px',
            borderRadius: '4px', textDecoration: 'none',
            transition: 'background 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#c43010')}
          onMouseLeave={e => (e.currentTarget.style.background = '#ff4212')}>
            Κλείσε ραντεβού
          </a>
        </div>

        {/* Mobile right side — CTA + Burger */}
        <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
          {!open && (
            <a href="#contact" style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#f7f7f8',
              background: '#ff4212', padding: '8px 14px',
              borderRadius: '4px', textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              Ραντεβού
            </a>
          )}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px', flexShrink: 0,
              display: 'flex', flexDirection: 'column', gap: '5px',
            }}>
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: '#ff4212', borderRadius: '2px',
              transition: 'transform 250ms, opacity 250ms',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: '#ff4212', borderRadius: '2px',
              transition: 'opacity 250ms',
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: '#ff4212', borderRadius: '2px',
              transition: 'transform 250ms, opacity 250ms',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* ── FULLSCREEN MOBILE MENU ──────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'fixed', inset: 0, zIndex: 190,
              background: '#202027',
              display: 'flex', flexDirection: 'column',
              padding: '100px clamp(24px, 6vw, 48px) 60px',
              overflowY: 'auto',
            }}>

            {/* Brandmark top-left */}
            <div style={{ position: 'absolute', top: '16px', left: 'clamp(24px, 6vw, 48px)' }}>
              <img
                src="/assets/dc-brandmark.svg"
                alt="DC Drive"
                style={{ height: '44px', width: 'auto', filter: RED_FILTER }}
              />
            </div>

            {/* Links */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              {LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: 'clamp(32px, 8vw, 52px)', fontWeight: 800,
                    letterSpacing: '-0.02em', color: '#f7f7f8',
                    textDecoration: 'none', lineHeight: 1.15,
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}>
                  {label}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              style={{
                marginTop: '32px', display: 'block', textAlign: 'center',
                background: '#ff4212', color: '#f7f7f8',
                padding: '16px', borderRadius: '4px',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none',
              }}>
              Κλείσε ραντεβού
            </motion.a>

            {/* Bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
              background: 'linear-gradient(to top, #202027, transparent)',
              pointerEvents: 'none',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav   { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav   { display: flex !important; }
        }
      `}</style>
    </>
  )
}
