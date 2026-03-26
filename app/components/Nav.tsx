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

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1], delay: 0.1 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
          height: '72px',
          padding: '0 clamp(24px, 5vw, 80px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'linear-gradient(to bottom, rgba(32,32,39,0.96) 0%, rgba(32,32,39,0.6) 70%, transparent 100%)',
        }}>

        <NavLogo isMobile={isMobile} />

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-muted)',
              textDecoration: 'none', transition: 'color 200ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-light)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
              {label}
            </a>
          ))}
          <motion.a href="#contact"
            whileHover={{ y: -1, backgroundColor: 'var(--color-red-dark)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-light)',
              background: 'var(--color-red)', padding: '10px 20px',
              borderRadius: '4px', textDecoration: 'none',
            }}>
            Κλείσε ραντεβού
          </motion.a>
        </div>

        {/* Mobile — CTA + Burger */}
        <div className="mobile-actions" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
          <a href="#contact" onClick={() => setOpen(false)} style={{
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--color-light)',
            background: 'var(--color-red)', padding: '8px 14px',
            borderRadius: '4px', textDecoration: 'none',
          }}>
            Ραντεβού
          </a>
          <button
            onClick={() => setOpen(prev => !prev)}
            aria-label="Menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', display: 'flex', flexDirection: 'column',
              gap: '5px', zIndex: 110, position: 'relative',
            }}>
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }}
              style={{ display: 'block', width: '22px', height: '2px', background: 'var(--color-red)', transformOrigin: 'center', borderRadius: '2px' }} />
            <motion.span animate={{ opacity: open ? 0 : 1 }}
              style={{ display: 'block', width: '22px', height: '2px', background: 'var(--color-red)', borderRadius: '2px' }} />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }}
              style={{ display: 'block', width: '22px', height: '2px', background: 'var(--color-red)', transformOrigin: 'center', borderRadius: '2px' }} />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 105,
              background: 'var(--color-dark)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(24px, 6vw, 48px)',
            }}>

            {/* Brandmark top-left */}
            <div style={{ position: 'absolute', top: '17px', left: 'clamp(24px, 6vw, 48px)' }}>
              <img
                src="/assets/dc-brandmark.svg"
                alt="DC Drive"
                style={{ height: '36px', width: 'auto', filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)' }}
              />
            </div>

            {/* X button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--color-muted)', fontSize: '24px',
                lineHeight: 1, zIndex: 106,
              }}>
              ✕
            </button>

            {/* Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 800,
                    letterSpacing: '-0.02em', color: 'var(--color-light)',
                    textDecoration: 'none', lineHeight: 1.2,
                    padding: '12px 0',
                    borderBottom: '1px solid var(--color-border)',
                    transition: 'color 200ms ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-red)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-light)')}>
                  {label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{
                marginTop: '40px', display: 'block', textAlign: 'center',
                background: 'var(--color-red)', color: 'var(--color-light)',
                padding: '16px 28px', borderRadius: '4px',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none',
              }}>
              Κλείσε ραντεβού
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
      `}</style>
    </>
  )
}
