'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  { text: 'Εξαιρετική καθοδήγηση και υπομονή. Πέρασα εξετάσεις από την πρώτη φορά χάρη στη Δήμητρα.', name: 'Μαρία Κ.', cat: 'Κατηγορία Β' },
  { text: 'Πολύ επαγγελματική σχολή. Ευέλικτα ωράρια που ταίριαξαν με τη δουλειά μου. Τη συνιστώ ανεπιφύλακτα.', name: 'Νίκος Π.', cat: 'Κατηγορία Α' },
  { text: 'Ο καλύτερος εκπαιδευτής που θα μπορούσα να ζητήσω. Ήρεμος, σαφής και πάντα υποστηρικτικός.', name: 'Ελένη Σ.', cat: 'Κατηγορία Β' },
  { text: 'Από τη πρώτη μέρα ένιωσα άνετα. Σπουδαία σχολή με πραγματικό ενδιαφέρον για τον μαθητή.', name: 'Δημήτρης Α.', cat: 'Κατηγορία Γ' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (idx: number) => {
    setDir(idx > current ? 1 : -1)
    setCurrent(idx)
  }
  const prev = () => go(current === 0 ? testimonials.length - 1 : current - 1)
  const next = () => go(current === testimonials.length - 1 ? 0 : current + 1)

  return (
    <section ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Heading + arrows */}
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

          {/* Arrow controls */}
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            {[{ fn: prev, label: '←' }, { fn: next, label: '→' }].map(({ fn, label }) => (
              <button key={label} onClick={fn} style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1px solid var(--color-border)',
                background: 'none', cursor: 'pointer',
                color: 'var(--color-light)', fontSize: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 200ms, background 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-red)'; e.currentTarget.style.color = 'var(--color-red)' }}
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
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '10px', padding: 'clamp(28px, 4vw, 48px)',
              }}>
              <div style={{
                fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--color-red)',
                lineHeight: 1, marginBottom: '20px', opacity: 0.5,
              }}>
                "
              </div>
              <p style={{
                fontSize: 'clamp(16px, 2vw, 22px)', color: 'var(--color-light)',
                lineHeight: 1.7, marginBottom: '32px', fontWeight: 500,
                maxWidth: '800px',
              }}>
                {testimonials[current].text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-light)' }}>
                    {testimonials[current].name}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--color-red-dark)', marginTop: '3px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {testimonials[current].cat}
                  </div>
                </div>

                {/* Dots */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => go(i)} style={{
                      width: i === current ? '24px' : '8px', height: '8px',
                      borderRadius: '4px', border: 'none', cursor: 'pointer',
                      background: i === current ? 'var(--color-red)' : 'var(--color-border-mid)',
                      transition: 'all 300ms ease', padding: 0,
                    }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
