'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence, useDragControls } from 'framer-motion'

const testimonials = [
  { text: 'Εξαιρετική καθοδήγηση και υπομονή. Πέρασα εξετάσεις από την πρώτη φορά χάρη στη Δήμητρα.', name: 'Μαρία Κ.' },
  { text: 'Πολύ επαγγελματική σχολή. Ευέλικτα ωράρια που ταίριαξαν με τη δουλειά μου. Τη συνιστώ ανεπιφύλακτα.', name: 'Νίκος Π.' },
  { text: 'Ο καλύτερος εκπαιδευτής που θα μπορούσα να ζητήσω. Ήρεμος, σαφής και πάντα υποστηρικτικός.', name: 'Ελένη Σ.' },
  { text: 'Από τη πρώτη μέρα ένιωσα άνετα. Σπουδαία σχολή με πραγματικό ενδιαφέρον για τον μαθητή.', name: 'Δημήτρης Α.' },
]

const AUTO_INTERVAL = 5000

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

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, AUTO_INTERVAL)
    return () => clearInterval(t)
  }, [current])

  return (
    <section ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Heading + desktop arrows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', marginBottom: '48px', gap: '24px',
          }}>
          <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '24px', display: 'block' }}><circle cx="20" cy="20" r="20" fill="#ff4212"/></svg>
              <p style={{
                fontSize: 'clamp(16px, 2vw, 22px)', color: 'var(--color-light)',
                lineHeight: 1.7, marginBottom: '32px', fontWeight: 500,
                maxWidth: '800px',
              }}>
                {testimonials[current].text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                {/* Name only — red */}
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-red)' }}>
                  {testimonials[current].name}
                </div>

                {/* Small dots */}
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => go(i)} style={{
                      width: i === current ? '16px' : '5px',
                      height: '5px',
                      borderRadius: '3px', border: 'none', cursor: 'pointer',
                      background: i === current ? 'var(--color-red)' : 'rgba(255,255,255,0.2)',
                      transition: 'all 300ms ease', padding: 0,
                    }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
