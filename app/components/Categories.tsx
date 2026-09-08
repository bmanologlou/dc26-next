'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const main: { cat: string; title: string; desc: string; age?: string; lessons?: string; note?: string }[] = [
  { cat: 'Κατηγορία Β', title: 'Αυτοκίνητο', desc: 'Η πιο δημοφιλής επιλογή για νέους οδηγούς. Ξεκίνα σήμερα.', age: 'Από 17 ετών', lessons: '21 θεωρητικά · 25 πρακτικά' },
  { cat: 'Κατηγορίες ΑΜ, Α1, Α2, Α', title: 'Μοτοσυκλέτα', desc: 'Για κάθε επίπεδο, από μοτοποδήλατο ΑΜ μέχρι Α πλήρης. Διαθέσιμες επεκτάσεις κατηγορίας: ΑΜ→Α1, Α1→Α2 και Α2→Α.', age: 'Από 16 ετών' },
  { cat: 'Κατηγορίες Γ, Δ, Ε', title: 'Επαγγελματικά', desc: 'Φορτηγό, λεωφορείο, νταλίκα και ΠΕΙ για επαγγελματική αναβάθμιση.', note: 'Κατοχή Β κατηγορίας' },
]

const extra = [
  { icon: '↑', title: 'Επεκτάσεις', desc: 'Αναβάθμισε το δίπλωμά σου με νέες κατηγορίες.' },
  { icon: '↻', title: 'Ανανεώσεις', desc: 'Ανανέωση & επανέκδοση άδειας εύκολα και γρήγορα.' },
  { icon: '⟳', title: 'Μετεκπαίδευση', desc: 'Επαναληπτικά μαθήματα για οδηγούς που θέλουν να νιώσουν ξανά σιγουριά.' },
  { icon: '✦', title: 'Διεκπεραιώσεις', desc: 'Άδεια ταξί, ψηφιακός ταχογράφος, αντικατάσταση άδειας.' },
]

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="categories" ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '48px' }}>
          <div style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--color-red-dark)',
            marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
            Διπλώματα
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--color-red)', lineHeight: 1.1,
          }}>
            Τι δίπλωμα θέλεις;
          </h2>
        </motion.div>

        {/* Main cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '12px', marginBottom: '12px',
        }}>
          {main.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.14)' }}
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
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.65, marginBottom: '16px', minHeight: '44px' }}>
                {c.desc}
              </p>
              <div style={{ minHeight: '28px', marginBottom: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                {c.age && (
                  <span style={{ fontSize: '11px', color: 'rgba(247,247,248,0.55)', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>
                    {c.age}
                  </span>
                )}
                {c.lessons && (
                  <span style={{ fontSize: '11px', color: 'rgba(247,247,248,0.55)', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2C6.48 2 2 6.48 2 12"/><path d="M12 2C17.52 2 22 6.48 22 12"/></svg>
                    {c.lessons}
                  </span>
                )}
                {c.note && (
                  <span style={{ fontSize: '11px', color: 'rgba(247,247,248,0.55)', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>
                    {c.note}
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Extra services — smaller cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '8px',
        }}>
          {extra.map((e, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.07 }}
              whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.12)' }}
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: '8px', padding: '18px 20px', cursor: 'pointer',
                display: 'flex', gap: '14px', alignItems: 'flex-start',
              }}>
              <span style={{
                fontSize: '16px', color: 'var(--color-red-dark)',
                flexShrink: 0, marginTop: '2px', lineHeight: 1,
              }}>
                {e.icon}
              </span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-light)', marginBottom: '4px' }}>
                  {e.title}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  {e.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
