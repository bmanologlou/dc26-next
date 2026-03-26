'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  { text: 'Εξαιρετική καθοδήγηση και υπομονή. Πέρασα εξετάσεις από την πρώτη φορά χάρη στη Δήμητρα.', name: 'Μαρία Κ.', cat: 'Κατηγορία Β' },
  { text: 'Πολύ επαγγελματική σχολή. Ευέλικτα ωράρια που ταίριαξαν με τη δουλειά μου. Τη συνιστώ ανεπιφύλακτα.', name: 'Νίκος Π.', cat: 'Κατηγορία Α' },
  { text: 'Ο καλύτερος εκπαιδευτής που θα μπορούσα να ζητήσω. Ήρεμος, σαφής και πάντα υποστηρικτικός.', name: 'Ελένη Σ.', cat: 'Κατηγορία Β' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}>
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
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '10px', padding: '28px 24px',
              }}>
              <div style={{
                fontSize: '32px', color: 'var(--color-red)', lineHeight: 1,
                marginBottom: '16px', opacity: 0.6,
              }}>
                "
              </div>
              <p style={{
                fontSize: '14px', color: 'var(--color-light)',
                lineHeight: 1.75, marginBottom: '24px',
              }}>
                {t.text}
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-light)' }}>{t.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--color-red-dark)', marginTop: '2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t.cat}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
