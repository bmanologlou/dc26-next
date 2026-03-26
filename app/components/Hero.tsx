'use client'
import { useRef, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

const GradientBg = lazy(() => import('./GradientBg'))

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '0 clamp(24px, 5vw, 80px)',
    }}>

      {/* ShaderGradient background */}
      <Suspense fallback={
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: `radial-gradient(ellipse at 65% 45%, rgba(196,48,16,0.2) 0%, transparent 55%)`,
        }} />
      }>
        <GradientBg />
      </Suspense>

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1], delay: 0.1 }}
          style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--color-red-dark)',
            marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
          <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
          Σχολή Οδηγών · Αθήνα · Από το 1979
        </motion.div>

        <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            style={{
              fontSize: 'clamp(52px, 8.5vw, 104px)', fontWeight: 900,
              lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--color-light)', margin: 0,
            }}>
            Μάθε να οδηγείς
          </motion.h1>
        </div>

        <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
            style={{
              fontSize: 'clamp(52px, 8.5vw, 104px)', fontWeight: 900,
              lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--color-red)', margin: 0,
            }}>
            με σιγουριά.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1], delay: 0.55 }}
          style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'var(--color-muted)',
            lineHeight: 1.7, maxWidth: '440px', marginBottom: '40px',
          }}>
          Σύγχρονη εκπαίδευση με έμφαση στην ασφάλεια,
          την ψυχραιμία και την αυτοπεποίθηση.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1], delay: 0.68 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>

          <motion.a href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--color-red)', color: 'var(--color-light)',
              padding: '14px 28px', borderRadius: '4px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
            Κλείσε ραντεβού <span>→</span>
          </motion.a>

          <motion.a href="#categories"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: 'var(--color-muted)',
              padding: '14px 28px', borderRadius: '4px',
              border: '1.5px solid var(--color-border-mid)',
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
            Δες τις κατηγορίες
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'var(--color-subtle)', fontSize: '9px', letterSpacing: '0.16em',
          textTransform: 'uppercase', zIndex: 2,
        }}>
        <span>Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--color-red-dark), transparent)', transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
