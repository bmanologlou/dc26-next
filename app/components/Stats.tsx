'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { num: '1979', label: 'Από το έτος' },
  { num: '85%', label: 'Επιτυχία' },
  { num: '2k+', label: 'Απόφοιτοι' },
  { num: '6', label: 'Κατηγορίες' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} style={{
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      padding: '0 clamp(24px, 5vw, 80px)',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        maxWidth: '1440px', margin: '0 auto',
      }}>
        {stats.map((stat, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: i * 0.08 }}
            style={{
              padding: '36px 0', textAlign: 'center',
              borderRight: i < 3 ? '1px solid var(--color-border)' : 'none',
            }}>
            <div style={{
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900,
              color: 'var(--color-red-dark)', lineHeight: 1, marginBottom: '8px',
            }}>
              {stat.num}
            </div>
            <div style={{
              fontSize: '9px', fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--color-subtle)',
            }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
