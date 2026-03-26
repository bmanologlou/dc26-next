'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', title: 'Επικοινωνείς μαζί μας', desc: 'Μας καλείς ή συμπληρώνεις τη φόρμα. Σου εξηγούμε τα πάντα χωρίς υποχρέωση.' },
  { num: '02', title: 'Ξεκινάς θεωρητική εκπαίδευση', desc: 'Μαθαίνεις τον Κώδικα Οδικής Κυκλοφορίας με σύγχρονο εξοπλισμό και καθοδήγηση.' },
  { num: '03', title: 'Μαθαίνεις στην πράξη', desc: 'Οδηγείς με έμπειρο εκπαιδευτή στον δικό σου ρυθμό, με υπομονή και ασφάλεια.' },
  { num: '04', title: 'Δίνεις εξετάσεις με σιγουριά', desc: 'Είσαι έτοιμος. Το υψηλό ποσοστό επιτυχίας μας το αποδεικνύει κάθε χρόνο.' },
]

export default function Steps() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="steps" ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      background: 'var(--color-dark-elevated)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '64px' }}>
          <div style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--color-red-dark)',
            marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
            Η Διαδικασία
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--color-red)', lineHeight: 1.1,
          }}>
            Πώς ξεκινάς;
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute', top: '20px', left: '0', right: '0',
            height: '1px', background: 'var(--color-border)',
            display: 'none',
          }} className="connector-line" />

          {steps.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.12 }}
              style={{
                padding: '0 32px 0 0',
                borderRight: i < 3 ? '1px solid var(--color-border)' : 'none',
                paddingRight: i < 3 ? '32px' : '0',
                paddingLeft: i > 0 ? '32px' : '0',
              }}>

              {/* Number */}
              <div style={{
                fontSize: 'clamp(48px, 5vw, 64px)', fontWeight: 900,
                color: 'var(--color-red-dark)', lineHeight: 1,
                marginBottom: '20px', letterSpacing: '-0.02em',
                opacity: 0.35,
              }}>
                {step.num}
              </div>

              <h3 style={{
                fontSize: '16px', fontWeight: 700,
                color: 'var(--color-light)', marginBottom: '10px', lineHeight: 1.3,
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: '13px', color: 'var(--color-muted)',
                lineHeight: 1.7,
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
