'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  { num: '01', title: 'Εμπειρία από το 1979', desc: 'Δεκαετίες παρουσίας στους δρόμους της Αθήνας. Ξέρουμε ακριβώς τι χρειάζεται για να περάσεις.' },
  { num: '02', title: 'Υψηλό ποσοστό επιτυχίας', desc: 'Το 85% των μαθητών μας περνάει από την πρώτη φορά. Δεν είναι τύχη — είναι μέθοδος.' },
  { num: '03', title: 'Υπομονή & Ευγένεια', desc: 'Καθένας μαθαίνει με τον δικό του ρυθμό. Είμαστε εδώ σε κάθε βήμα, χωρίς πίεση.' },
  { num: '04', title: 'Ευέλικτα ωράρια', desc: 'Πρωί, απόγευμα, Σαββατοκύριακο. Βρίσκουμε μαζί αυτό που ταιριάζει στη ζωή σου.' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

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
            Γιατί εμείς
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--color-red)', lineHeight: 1.1,
          }}>
            Η Δήμητρα &amp; η ομάδα της
          </h2>
        </motion.div>

        {/* Photo slider placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            width: '100%', aspectRatio: '21/9',
            minHeight: 'clamp(200px, 30vw, 400px)',
            background: 'var(--color-dark-elevated)',
            border: '1px solid var(--color-border)',
            borderRadius: '10px', marginBottom: '64px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '12px',
            color: 'var(--color-subtle)',
          }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Φωτογραφίες σχολής — σύντομα
          </span>
        </motion.div>

                <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0',
          overflow: 'hidden',
        }}>
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className={`why-item why-item-${i}`}
              style={{
                padding: '0 32px 0 0',
                paddingLeft: i > 0 ? '32px' : '0',
                borderRight: i < 3 ? '1px solid var(--color-border)' : 'none',
              }}>
              <div style={{
                fontSize: 'clamp(56px, 6vw, 72px)', fontWeight: 900,
                color: 'var(--color-red-dark)', lineHeight: 1,
                marginBottom: '20px', opacity: 0.25, letterSpacing: '-0.02em',
              }}>
                {f.num}
              </div>
              <h3 style={{
                fontSize: '16px', fontWeight: 700,
                color: 'var(--color-light)', marginBottom: '10px',
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .why-item { border-right: none !important; padding: 24px 0 !important; border-bottom: 1px solid var(--color-border); }
          .why-item:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}
