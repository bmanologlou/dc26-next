'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onScroll()
    onResize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const showBrandmark = scrolled || isMobile

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1], delay: 0.1 }}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
          padding: '0 clamp(24px, 5vw, 80px)',
          height: '72px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(32,32,39,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
          transition: 'background 300ms ease, border 300ms ease, backdrop-filter 300ms ease',
        }}>

        {/* Logo — switches between full logo and brandmark */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', position: 'relative', height: '40px' }}>
          <AnimatePresence mode="wait">
            {!showBrandmark ? (
              <motion.img
                key="logo"
                src="/assets/dc-logo.svg"
                alt="DC Drive"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
                style={{ height: '34px', width: 'auto', filter: 'invert(1)', position: 'absolute' }}
              />
            ) : (
              <motion.img
                key="brandmark"
                src="/assets/dc-brandmark.svg"
                alt="DC Drive"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
                style={{ height: '32px', width: 'auto', filter: 'invert(1)', position: 'absolute' }}
              />
            )}
          </AnimatePresence>
          {/* Spacer to maintain layout width */}
          <span style={{ display: 'inline-block', height: '34px', width: showBrandmark ? '32px' : '220px', transition: 'width 300ms ease' }} />
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {['Πώς ξεκινάς', 'Διπλώματα', 'Σχολή', 'Επικοινωνία'].map(link => (
            <a key={link} href={link === 'Πώς ξεκινάς' ? '#steps' : link === 'Διπλώματα' ? '#categories' : `#${link.toLowerCase()}`} style={{
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-muted)',
              textDecoration: 'none', transition: 'color 200ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-light)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
              {link}
            </a>
          ))}
          <motion.a href="#contact"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-light)',
              background: 'var(--color-red)', padding: '10px 20px',
              borderRadius: '4px', textDecoration: 'none', display: 'inline-block',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-red-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-red)')}>
            Κλείσε ραντεβού
          </motion.a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="hamburger" style={{
          display: 'none', flexDirection: 'column', gap: '5px',
          background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
        }}>
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--color-light)', transformOrigin: 'center' }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--color-light)' }} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }} style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--color-light)', transformOrigin: 'center' }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: '72px', left: 0, width: '100%', zIndex: 99,
              background: 'rgba(32,32,39,0.97)', backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--color-border)',
              padding: '24px clamp(24px, 5vw, 80px)',
              display: 'flex', flexDirection: 'column', gap: '20px',
            }}>
            {['Πώς ξεκινάς', 'Διπλώματα', 'Σχολή', 'Επικοινωνία'].map((link, i) => (
              <motion.a key={link}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                href={link === 'Πώς ξεκινάς' ? '#steps' : link === 'Διπλώματα' ? '#categories' : `#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '14px', fontWeight: 500, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--color-muted)', textDecoration: 'none',
                }}>
                {link}
              </motion.a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} style={{
              fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-light)',
              background: 'var(--color-red)', padding: '12px 20px',
              borderRadius: '4px', textDecoration: 'none', textAlign: 'center',
            }}>
              Κλείσε ραντεβού
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
