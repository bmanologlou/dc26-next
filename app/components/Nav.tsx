'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/assets/dc-logo.svg"
            alt="DC Drive"
            style={{ height: '36px', width: 'auto', filter: 'invert(1)' }}
          />
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {['Κατηγορίες', 'Σχολή', 'Επικοινωνία'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
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
            whileHover={{ backgroundColor: 'var(--color-red-dark)', y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-light)',
              background: 'var(--color-red)', padding: '10px 20px',
              borderRadius: '4px', textDecoration: 'none', display: 'inline-block',
            }}>
            Κλείσε ραντεβού
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', flexDirection: 'column', gap: '5px',
          background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px',
              background: 'var(--color-light)', transition: 'all 250ms ease',
            }} />
          ))}
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
            {['Κατηγορίες', 'Σχολή', 'Επικοινωνία'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: '14px', fontWeight: 500, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--color-muted)', textDecoration: 'none',
                }}>
                {link}
              </a>
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
