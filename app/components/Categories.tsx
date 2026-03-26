'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  { cat: 'Κατηγορία Β', title: 'Αυτοκίνητο', desc: 'Η πιο δημοφιλής επιλογή για νέους οδηγούς. Ξεκίνα σήμερα.' },
  { cat: 'Κατηγορία Α', title: 'Μοτοσυκλέτα', desc: 'Για κάθε επίπεδο εμπειρίας — από ΑΜ μέχρι Α πλήρης.' },
  { cat: 'Κατηγορία Γ/Δ', title: 'Επαγγελματικά', desc: 'Φορτηγά, λεωφορεία και ΠΕΙ για επαγγελματική αναβάθμιση.' },
]

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="categories" ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '56px' }}>
          <div style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--color-red-dark)',
            marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
            Κατηγορίες
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--color-red)', lineHeight: 1.1,
          }}>
            Τι δίπλωμα θέλεις;
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {categories.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.14)' }}
              style={{
                background: 'var(--color-dark-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px', padding: '28px 24px', cursor: 'pointer',
              }}>
              <div style={{
                fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--color-red-dark)', marginBottom: '12px',
              }}>
                {c.cat}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-light)', marginBottom: '10px' }}>
                {c.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                {c.desc}
              </p>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                style={{
                  marginTop: '20px', fontSize: '11px', fontWeight: 700,
                  color: 'var(--color-red)', letterSpacing: '0.04em',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                Μάθε περισσότερα <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
