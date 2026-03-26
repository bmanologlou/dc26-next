'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  { text: 'Εξαιρετική καθοδήγηση και υπομονή. Πέρασα εξετάσεις από την πρώτη φορά χάρη στη Δήμητρα.', name: 'Μαρία Κ.' },
  { text: 'Πολύ επαγγελματική σχολή. Ευέλικτα ωράρια που ταίριαξαν με τη δουλειά μου. Τη συνιστώ ανεπιφύλακτα.', name: 'Νίκος Π.' },
  { text: 'Ο καλύτερος εκπαιδευτής που θα μπορούσα να ζητήσω. Ήρεμος, σαφής και πάντα υποστηρικτικός.', name: 'Ελένη Σ.' },
  { text: 'Από τη πρώτη μέρα ένιωσα άνετα. Σπουδαία σχολή με πραγματικό ενδιαφέρον για τον μαθητή.', name: 'Δημήτρης Α.' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (idx: number, d?: number) => {
    setDir(d ?? (idx > current ? 1 : -1))
    setCurrent(idx)
  }
  const next = () => go(current === testimonials.length - 1 ? 0 : current + 1, 1)
  const prev = () => go(current === 0 ? testimonials.length - 1 : current - 1, -1)

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [current])

  return (
    <section ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', marginBottom: '48px', gap: '24px',
          }}>
          <div>
            <div style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'var(--color-red-dark)',
              marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
              Μαθητές
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
              letterSpacing: '-0.02em', color: 'var(--color-red)', lineHeight: 1.1,
            }}>
              Τι λένε οι μαθητές μας
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="desktop-arrows" style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            {[{ fn: prev, label: '←' }, { fn: next, label: '→' }].map(({ fn, label }) => (
              <button key={label} onClick={fn} style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1px solid var(--color-border)',
                background: 'none', cursor: 'pointer',
                color: 'var(--color-light)', fontSize: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 200ms, color 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff4212'; e.currentTarget.style.color = '#ff4212' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-light)' }}>
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Slider */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ opacity: 0, x: dir * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -50 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next()
                else if (info.offset.x > 50) prev()
              }}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '10px', padding: 'clamp(28px, 4vw, 48px)',
                userSelect: 'none', cursor: 'grab',
                minHeight: '280px',
                display: 'flex', flexDirection: 'column',
              }}>

              {/* Quote icon placeholder — replace with custom SVG */}
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" style={{ marginBottom: '24px', display: 'block' }}>
                <circle cx="20" cy="20" r="20" fill="#ff4212" />
              </svg>

              <p style={{
                fontSize: 'clamp(16px, 2vw, 22px)', color: 'var(--color-light)',
                lineHeight: 1.7, marginBottom: '32px', fontWeight: 500,
                maxWidth: '800px', flex: 1,
              }}>
                {testimonials[current].text}
              </p>

              <div style={{ fontSize: '14px', fontWeight: 700, color: '#ff4212' }}>
                {testimonials[current].name}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots — outside slider, always visible */}
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '24px' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => go(i)} style={{
              width: i === current ? '16px' : '5px', height: '5px',
              borderRadius: '3px', border: 'none', cursor: 'pointer',
              background: i === current ? '#ff4212' : 'rgba(255,255,255,0.2)',
              transition: 'all 300ms ease', padding: 0,
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-arrows { display: none !important; }
        }
      `}</style>
    </section>
  )
}
