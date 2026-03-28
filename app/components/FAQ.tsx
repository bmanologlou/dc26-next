'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Πόσο διαρκεί η εκπαίδευση για απόκτηση διπλώματος;', a: 'Η διάρκεια ποικίλλει ανάλογα με το πρόγραμμα του κάθε υποψηφίου. Συνήθως διαρκεί 1,5 έως 2 μήνες.' },
  { q: 'Αν κοπώ στα σήματα, τι γίνεται;', a: 'Μετά από μια εβδομάδα προγραμματίζουμε ξανά τη θεωρητική εξέταση, με κόστος ένα παράβολο.' },
  { q: 'Πότε λήγει η καρτέλα μου;', a: 'Η καρτέλα ισχύει για 3 έτη από την ημερομηνία έκδοσής της.' },
  { q: 'Μπορώ να κάνω πρακτικά μαζί με θεωρητικά;', a: 'Τα πρακτικά μαθήματα ξεκινούν μετά την ολοκλήρωση των θεωρητικών.' },
  { q: 'Τι ώρες και μέρες γίνονται τα μαθήματα;', a: 'Καθημερινά σε όλη τη διάρκεια της μέρας και Σάββατα, ανάλογα με το πρόγραμμά σου.' },
  { q: 'Μπορώ να οδηγήσω αμέσως μετά τις πρακτικές εξετάσεις;', a: 'Εντός 2-3 εργάσιμων ημερών εκδίδεται προσωρινή άδεια οδήγησης μέσω της εφαρμογής GOV και μπορείς να οδηγείς κανονικά έως την έκδοση του επίσημου εγγράφου.' },
]

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px' }}>
          <div className="t-eyebrow-line" style={{ marginBottom: '12px' }}>FAQ</div>
          <h2 className="t-h2">Συχνές ερωτήσεις</h2>
        </motion.div>

        {/* Grid: accordion + side SVG */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '64px', alignItems: 'center' }} className="faq-grid">

          {/* Accordion */}
          <div style={{ maxWidth: '800px', width: '100%' }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none',
                    cursor: 'pointer', padding: '24px 0',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: '24px',
                    textAlign: 'left',
                  }}>
                  <span style={{
                    fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600,
                    color: open === i ? '#ff4212' : '#f7f7f8',
                    lineHeight: 1.4, transition: 'color 200ms',
                  }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ fontSize: '20px', color: '#ff4212', flexShrink: 0, lineHeight: 1, display: 'block' }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}>
                      <p style={{
                        fontSize: 'clamp(14px, 1.6vw, 16px)',
                        color: 'rgba(247,247,248,0.55)',
                        lineHeight: 1.75, paddingBottom: '24px',
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Side SVG — desktop only */}
          <div className="faq-side" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/FAQ_Side.svg"
              alt=""
              style={{ width: '200px', opacity: 0.12, filter: 'brightness(0) invert(1)', display: 'block' }}
            />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
          .faq-side { display: none !important; }
        }
      `}</style>
    </section>
  )
}
