'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function HeroImage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      padding: '0 clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '1440px', margin: '0 auto',
          borderRadius: '12px', overflow: 'hidden',
          aspectRatio: '16/7',
          background: 'var(--color-dark-elevated)',
          border: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>

        {/* Placeholder — replace with actual image */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '12px',
          color: 'var(--color-subtle)',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Φωτογραφία σύντομα
          </span>
        </div>

        {/* Subtle gradient overlay at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(15,15,18,0.6), transparent)',
          pointerEvents: 'none',
        }} />
      </motion.div>
    </section>
  )
}
