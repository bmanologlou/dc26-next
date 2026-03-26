'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Dimitra() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="dimitra" ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(48px, 6vw, 96px)', alignItems: 'center',
      }} className="dimitra-grid">

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            aspectRatio: '4/5',
            background: 'var(--color-dark-elevated)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
          {/* Placeholder */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
            color: 'var(--color-subtle)',
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Φωτογραφία σύντομα
            </span>
          </div>

          {/* Decorative accent */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(196,48,16,0.08), transparent)',
          }} />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>

          <div style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--color-red-dark)',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
            Η Σχολή
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--color-light)',
            lineHeight: 1.15, marginBottom: '24px',
          }}>
            Δίπλα σου<br />
            <span style={{ color: 'var(--color-red)' }}>σε κάθε βήμα.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'var(--color-muted)',
            lineHeight: 1.8, marginBottom: '20px',
          }}>
            Μεγάλωσα μέσα σε αυτή τη σχολή. Ξέρω τι σημαίνει να μαθαίνεις να οδηγείς — και τι σημαίνει να διδάσκεις σωστά.
          </p>

          <p style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'var(--color-muted)',
            lineHeight: 1.8, marginBottom: '36px',
          }}>
            Η σχολή ιδρύθηκε το 1979 από τον πατέρα μου, Δημήτρη Χρηστοθανόπουλο. Συνεχίζω την ίδια παράδοση — με σύγχρονη προσέγγιση, τον ίδιο σεβασμό στον μαθητή και την ίδια αγάπη για τη δουλειά.
          </p>

          {/* Signature area */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '4px',
            paddingTop: '24px', borderTop: '1px solid var(--color-border)',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-light)' }}>
              Dimitra Christothanopoulou
            </div>
            <div style={{
              fontSize: '11px', color: 'var(--color-red-dark)',
              letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
            }}>
              Ιδιοκτήτρια & Εκπαιδεύτρια, DC Drive
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dimitra-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
