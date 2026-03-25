'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY
        heroRef.current.style.transform = `translateY(${y * 0.4}px)`
        heroRef.current.style.opacity = `${1 - y / 600}`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '0 clamp(24px, 5vw, 80px)',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `radial-gradient(ellipse at 70% 50%, rgba(196,48,16,0.15) 0%, transparent 60%),
                     radial-gradient(ellipse at 20% 80%, rgba(255,66,18,0.08) 0%, transparent 50%)`,
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
                          linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      <div ref={heroRef} style={{ position: 'relative', zIndex: 1, maxWidth: '720px' }}>
        <div style={{
          fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--color-red-dark)',
          marginBottom: '20px',
        }}>
          Σχολή Οδηγών · Αθήνα · Από το 1979
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 900, lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: 'var(--color-light)',
          marginBottom: '12px',
        }}>
          Μάθε να οδηγείς
        </h1>
        <h1 style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 900, lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: 'var(--color-red)',
          marginBottom: '28px',
        }}>
          με σιγουριά.
        </h1>

        <p style={{
          fontSize: 'clamp(15px, 2vw, 17px)',
          color: 'var(--color-muted)', lineHeight: 1.7,
          maxWidth: '460px', marginBottom: '40px',
        }}>
          Σύγχρονη εκπαίδευση με έμφαση στην ασφάλεια,
          την ψυχραιμία και την αυτοπεποίθηση.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--color-red)', color: 'var(--color-light)',
            padding: '14px 28px', borderRadius: '4px',
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'all 250ms ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-red-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-red)'; e.currentTarget.style.transform = 'translateY(0)' }}>
            Κλείσε ραντεβού
            <span style={{ fontSize: '14px' }}>→</span>
          </a>
          <a href="#categories" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'transparent', color: 'var(--color-muted)',
            padding: '14px 28px', borderRadius: '4px',
            border: '1.5px solid var(--color-border-mid)',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'all 250ms ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(247,247,248,0.3)'; e.currentTarget.style.color = 'var(--color-light)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-mid)'; e.currentTarget.style.color = 'var(--color-muted)' }}>
            Δες τις κατηγορίες
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        color: 'var(--color-subtle)', fontSize: '9px', letterSpacing: '0.16em',
        textTransform: 'uppercase',
      }}>
        <span>Scroll</span>
        <div style={{
          width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--color-red-dark), transparent)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  )
}
