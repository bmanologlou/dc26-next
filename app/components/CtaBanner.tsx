'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CtaBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1440px', margin: '0 auto',
          border: '1px solid var(--color-border)',
          borderRadius: '12px', padding: 'clamp(40px, 6vw, 80px)',
          background: 'var(--color-dark-elevated)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap',
        }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--color-light)', lineHeight: 1.1,
            marginBottom: '12px',
          }}>
            Έτοιμος να ξεκινήσεις;
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
            Επικοινώνησε μαζί μας σήμερα και κλείσε το πρώτο σου μάθημα.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', flexShrink: 0 }}>
          <motion.a href="#contact"
            whileHover={{ y: -2, backgroundColor: 'var(--color-red-dark)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'var(--color-red)', color: 'var(--color-light)',
              padding: '14px 28px', borderRadius: '4px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
            Κλείσε ραντεβού →
          </motion.a>
          <motion.a href="tel:+30"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent', color: 'var(--color-muted)',
              padding: '14px 28px', borderRadius: '4px',
              border: '1px solid var(--color-border-mid)',
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
            Καλέστε μας
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
