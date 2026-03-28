'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  'Δίπλωμα Β', 'Δίπλωμα Α', 'Δίπλωμα ΑΜ', 'Δίπλωμα Γ/Δ',
  'Επέκταση διπλώματος', 'Ανανέωση διπλώματος',
  'Μετεκπαίδευση', 'Διεκπεραιώσεις', 'Άλλο',
]

const inputStyle = {
  width: '100%', padding: '12px 16px',
  background: 'var(--color-dark-elevated)',
  border: '1px solid var(--color-border)',
  borderRadius: '4px', color: 'var(--color-light)',
  fontSize: '14px', outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 200ms',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}>
          <div className="t-eyebrow-line" style={{ marginBottom: '12px' }}>Επικοινωνία</div>
          <h2 className="t-h2">Επικοινωνήστε μαζί μας</h2>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
        }} className="contact-grid">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { label: 'Τηλέφωνο', value: '210 571 8756', href: 'tel:+302105718756' },
              { label: 'Email', value: '[ΑΝΑΜΟΝΗ]', href: 'mailto:' },
              { label: 'Διεύθυνση', value: '[ΑΝΑΜΟΝΗ]', href: '#' },
              { label: 'Ωράριο', value: '[ΑΝΑΜΟΝΗ]', href: null },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <div style={{
                  fontSize: '9px', fontWeight: 600, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--color-red-dark)', marginBottom: '6px',
                }}>
                  {label}
                </div>
                {href ? (
                  <a href={href} style={{
                    fontSize: '18px', fontWeight: 600, color: 'var(--color-light)',
                    textDecoration: 'none', transition: 'color 200ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-red)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-light)')}>
                    {value}
                  </a>
                ) : (
                  <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-light)' }}>
                    {value}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Name */}
            <div>
              <label style={{
                display: 'block', fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-muted)', marginBottom: '8px',
              }}>Όνομα</label>
              <input
                type="text"
                placeholder="Το όνομά σου"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-red)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Phone */}
            <div>
              <label style={{
                display: 'block', fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-muted)', marginBottom: '8px',
              }}>Τηλέφωνο</label>
              <input
                type="tel"
                placeholder="69X XXX XXXX"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-red)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Service */}
            <div>
              <label style={{
                display: 'block', fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-muted)', marginBottom: '8px',
              }}>Ενδιαφέρομαι για</label>
              <div style={{ position: 'relative' }}>
                <select
                  defaultValue="" onChange={e => { e.currentTarget.style.color = e.currentTarget.value ? "#f7f7f8" : "rgba(247,247,248,0.45)" }}
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    paddingRight: '40px',
                    cursor: 'pointer',
                    accentColor: '#8a1f00',
                  }}
>
                  <option value="" disabled style={{ color: 'var(--color-muted)' }}>Επιλέξτε υπηρεσία</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div style={{
                  position: 'absolute', right: '14px', top: '50%',
                  transform: 'translateY(-50%)', pointerEvents: 'none',
                  color: 'rgba(247,247,248,0.4)',
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={{
                display: 'block', fontSize: '10px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-muted)', marginBottom: '8px',
              }}>Μήνυμα (προαιρετικό)</label>
              <textarea
                placeholder="Πες μας κάτι..."
                rows={4}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-red)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ y: -2, backgroundColor: 'var(--color-red-dark)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'var(--color-red)', color: 'var(--color-light)',
                padding: '14px 28px', borderRadius: '4px', border: 'none',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer', width: '100%',
                fontFamily: 'inherit',
              }}>
              Αποστολή
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        select { color: rgba(247,247,248,0.45) !important; accent-color: #c43010; }
        select option { color: #f7f7f8 !important; background: #1a1a20 !important; }
        select option:checked, select option:hover { background: #c43010 !important; color: #f7f7f8 !important; }
        select:focus { outline: none !important; border-color: #c43010 !important; box-shadow: 0 0 0 2px rgba(196,48,16,0.25) !important; }
      `}</style>
    </section>
  )
}
