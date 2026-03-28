'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Πόσο διαρκεί η εκπαίδευση;', a: 'Εξαρτάται από τον ρυθμό σου και την κατηγορία διπλώματος. Κατά μέσο όρο, για την κατηγορία Β χρειάζονται 2-4 μήνες. Εμείς προσαρμαζόμαστε στο δικό σου πρόγραμμα.' },
  { q: 'Πόσο κοστίζει το δίπλωμα;', a: 'Το κόστος ποικίλλει ανάλογα με την κατηγορία και τον αριθμό μαθημάτων. Επικοινώνησε μαζί μας για αναλυτική ενημέρωση — δεν υπάρχουν κρυφές χρεώσεις.' },
  { q: 'Τι έγγραφα χρειάζομαι για εγγραφή;', a: 'Αστυνομική ταυτότητα, πιστοποιητικό υγείας από παθολόγο και οφθαλμίατρο, και δύο φωτογραφίες ταυτότητας. Αναλαμβάνουμε εμείς τη διεκπεραίωση των υπολοίπων.' },
  { q: 'Πότε μπορώ να ξεκινήσω;', a: 'Οποτεδήποτε! Δεν υπάρχει αναμονή — μόλις ολοκληρωθεί η εγγραφή σου, ξεκινάμε αμέσως με το θεωρητικό μέρος.' },
  { q: 'Έχετε αυτόματο αυτοκίνητο;', a: 'Ναι, διαθέτουμε αυτόματο όχημα για όσους το προτιμούν. Το δίπλωμα με αυτόματο ισχύει μόνο για αυτόματα οχήματα — ενημέρωσέ μας κατά την εγγραφή.' },
  { q: 'Τι γίνεται αν αποτύχω στις εξετάσεις;', a: 'Δεν είναι τέλος του κόσμου — συμβαίνει! Κάνουμε επιπλέον μαθήματα για να ενισχύσουμε τα αδύνατα σημεία και επανεξετάζεσαι.' },
  { q: 'Τι ωράρια έχετε;', a: 'Κάνουμε μαθήματα πρωί, απόγευμα και Σαββατοκύριακο. Βρίσκουμε πάντα κάτι που ταιριάζει στο πρόγραμμά σου.' },
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '80px', alignItems: 'center' }} className="faq-grid">

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
              style={{ width: '160px', opacity: 0.07, filter: 'invert(1)' }}
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
