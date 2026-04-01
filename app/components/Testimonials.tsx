'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  { text: 'Μετά από δύο αποτυχημένες προσπάθειες να μάθω να οδηγώ, ευτυχώς βρήκα την Δήμητρα και τα κατάφερα! Ήρεμη, μεταδοτική, σε κάνει να νιώθεις ασφάλεια. Καταπληκτική!', name: 'Πηνελόπη Κ.' },
  { text: 'Η Δήμητρα είναι εξαιρετική δασκάλα, υπομονετική και μεταδοτική! Η ηρεμία της σε κάνει να αισθάνεσαι ασφάλεια και σιγουριά πολύ σημαντικό όταν πιάνεις το τιμόνι για πρώτη φορά!', name: 'Μαρία Β.' },
  { text: 'Μετά από αναβλητικότητα χρόνων αποφάσισα να πάω σε αυτή τη σχολή. Η Δήμητρα είναι φοβερή στη δουλειά της, με επαγγελματισμό και καλή διάθεση σε κάνει να μην θες να τελειώσουν τα μαθήματα!', name: 'Vaso P.' },
  { text: 'Εξαιρετική η εμπειρία μου! Η Δήμητρα είναι δασκάλα που σου εμπνέει εμπιστοσύνη από την πρώτη στιγμή και σε διδάσκει πώς να είσαι πραγματικά σωστός οδηγός. Την προτείνω ανεπιφύλακτα!', name: 'Artemis D.' },
  { text: 'Παρόλο που πήγα για δίπλωμα σε σχετικά μεγάλη ηλικία, με έκανε να αισθανθώ πολύ άνετα από την αρχή και να ξεπεράσω όλους τους φόβους μου. Δήμητρα σε ευχαριστώ για όλα!', name: 'Filio R.' },
  { text: 'Η καλύτερη δασκάλα που θα μπορούσα να έχω! Μεταδοτική και ήρεμη πράγμα που σου προσφέρει αίσθημα σιγουριάς και ασφάλειας κατά τη διάρκεια του μαθήματος.', name: 'Theodora L.' },
  { text: 'Η καλύτερη δασκάλα! Συνεργάσιμη, ψύχραιμη και πάντα πρόθυμη να σου εξηγήσει και να σε βοηθήσει σε ό,τι απορία έχεις.', name: 'Mariaanna' },
  { text: 'Η Δήμητρα είναι τόσο γλυκιά, υπομονετική, μεταδοτική και άψογη επαγγελματίας που δεν θέλεις να τελειώσει το μάθημα.', name: 'Ntina D.' },
  { text: 'Ίσως και η καλύτερη σχολή οδηγών στην Αθήνα. Η κυρία Δήμητρα ήταν πολύ εξυπηρετική και πάντα με χαμόγελο σε κάθε μάθημα. Πήρα το δίπλωμα και έμαθα να οδηγώ άψογα.', name: 'Nikos V.' },
  { text: 'Εξαιρετική σχολή και υπέροχη δασκάλα! Πάντα υπομονετική, ευγενική και κατανοητή. Με βοήθησε να νιώσω άνετη και έτοιμη για τις εξετάσεις. Τη συνιστώ ανεπιφύλακτα!', name: 'Λέτα Π.' },
  { text: 'Η Δήμητρα είναι top σε αυτό που κάνει! Φουλ βοηθητική και υποστηρικτική σε όλα, από τα γραφειοκρατικά μέχρι τα πρακτικά!', name: 'Gerasimos S.' },
  { text: 'Η καλύτερη δασκάλα, με πολύ μεταδοτικότητα και μεγάλη υπομονή! Έχοντας δοκιμάσει αρχικά και σε άλλες σχολές, η καλύτερη με διαφορά!', name: 'Katerina D.' },
]

const QuoteIcon = () => (
  <img src="/assets/dc-eisagogika.svg" alt="" style={{ height: '22px', width: 'auto', display: 'block', marginBottom: '20px', filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)', alignSelf: 'flex-start' }} />
)

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div style={{
    border: '1px solid var(--color-border)',
    borderRadius: '10px', padding: 'clamp(24px, 3vw, 36px)',
    display: 'flex', flexDirection: 'column',
    minHeight: '280px',
  }}>
    <QuoteIcon />
    <p style={{
      fontSize: 'clamp(14px, 1.5vw, 17px)', color: 'var(--color-light)',
      lineHeight: 1.75, flex: 1, fontWeight: 500,
    }}>
      {t.text}
    </p>
    <div style={{ fontSize: '13px', fontWeight: 700, color: '#ff4212', marginTop: '20px' }}>
      {t.name}
    </div>
  </div>
)

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (idx: number, d?: number) => {
    setDir(d ?? (idx > current ? 1 : -1))
    setCurrent(idx)
  }
  const next = () => go(current === testimonials.length - 1 ? 0 : current + 1, 1)
  const prev = () => go(current === 0 ? testimonials.length - 1 : current - 1, -1)

  useEffect(() => {
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [current])

  // Desktop: show 2 at a time
  const next1 = (current + 1) % testimonials.length

  return (
    <section ref={ref} style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      borderTop: '1px solid var(--color-border)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', gap: '24px' }}>
          <div>
            <div className="t-eyebrow-line" style={{ marginBottom: '12px' }}>Μαθητές</div>
            <h2 className="t-h2">Τι λένε οι μαθητές μας</h2>
          </div>
          {/* Desktop arrows */}
          <div className="desktop-arrows" style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            {[{ fn: prev, label: '←' }, { fn: next, label: '→' }].map(({ fn, label }) => (
              <button key={label} onClick={fn} style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1px solid var(--color-border)',
                background: 'none', cursor: 'pointer',
                color: 'var(--color-light)', fontSize: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 200ms, color 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff4212'; e.currentTarget.style.color = '#ff4212' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-light)' }}>
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Desktop: 2 cards */}
        <div className="testimonials-desktop" style={{ overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ x: dir * 100 }}
              animate={{ x: 0 }}
              exit={{ x: dir * -100 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <Card t={testimonials[current]} />
              <Card t={testimonials[next1]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: 1 card swipeable */}
        <div className="testimonials-mobile" style={{ overflow: 'hidden', display: 'none' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ x: dir * 100 }}
              animate={{ x: 0 }}
              exit={{ x: dir * -100 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next()
                else if (info.offset.x > 50) prev()
              }}
              style={{ cursor: 'grab', userSelect: 'none' }}>
              <Card t={testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '40px' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => go(i)} style={{
              width: i === current ? '16px' : '5px', height: '5px',
              borderRadius: '3px', border: 'none', cursor: 'pointer',
              background: i === current ? '#ff4212' : 'rgba(255,255,255,0.2)',
              transition: 'all 300ms ease', padding: 0,
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-arrows { display: none !important; }
          .testimonials-desktop { display: none !important; }
          .testimonials-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}
