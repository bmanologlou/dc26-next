'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function HeroImage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{
      padding: 'clamp(20px, 5vw, 64px) clamp(12px, 5vw, 80px) 0',
      boxSizing: 'border-box', width: '100%',
      borderTop: '1px solid var(--color-border)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '1440px', margin: '0 auto',
          borderRadius: '12px', overflow: 'hidden', width: '100%',
          aspectRatio: '16/7',
          minHeight: 'clamp(260px, 40vw, 520px)',
          background: 'var(--color-dark-elevated)',
          border: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>

        <img
          src="/assets/intro_img.webp"
          alt="DC Drive — Μαθητής με δίπλωμα"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />

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
