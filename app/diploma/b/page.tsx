import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Δίπλωμα Κατηγορίας Β — Αυτοκίνητο',
  description: 'Όλα όσα χρειάζεσαι για να βγάλεις δίπλωμα αυτοκινήτου Κατηγορίας Β. Δικαιολογητικά, ηλικία, μαθήματα. Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου, Περιστέρι.',
}

const docs = [
  '2 έγχρωμες φωτογραφίες τύπου διαβατηρίου',
  'Φωτοαντίγραφο αστυνομικής ταυτότητας ή διαβατηρίου',
  'Βεβαίωση απόδοσης ΑΦΜ',
  'Πιστοποιητικά υγείας από Παθολόγο και Οφθαλμίατρο',
]

const faqs = [
  { q: 'Από ποια ηλικία μπορώ να ξεκινήσω;', a: 'Από τα 18 σου. Αν έχεις συμπληρώσει το 17ο έτος, μπορείς να ξεκινήσεις με τη σύμφωνη γνώμη και υπογραφή των γονέων σου.' },
  { q: 'Πόσα μαθήματα χρειάζονται;', a: '21 θεωρητικά μαθήματα και 15 πρακτικά. Κάθε διδακτική ώρα ισούται με 45 λεπτά.' },
  { q: 'Πόσο διαρκεί η όλη διαδικασία;', a: 'Κατά μέσο όρο 1,5 έως 2 μήνες, ανάλογα με το πρόγραμμά σου. Προσαρμαζόμαστε στις ανάγκες σου.' },
  { q: 'Τι γίνεται αν κοπώ στις εξετάσεις;', a: 'Αν κοπείς στα σήματα, μετά από μια εβδομάδα προγραμματίζουμε ξανά τη θεωρητική εξέταση με κόστος ένα παράβολο.' },
  { q: 'Μπορώ να οδηγήσω αμέσως μετά τις εξετάσεις;', a: 'Εντός 2-3 εργάσιμων ημερών εκδίδεται προσωρινή άδεια μέσω της εφαρμογής GOV και μπορείς να οδηγείς κανονικά.' },
]

export default function DiplomaB() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--color-dark)', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          padding: 'clamp(120px, 15vw, 180px) clamp(24px, 5vw, 80px) clamp(64px, 8vw, 100px)',
          borderBottom: '1px solid var(--color-border)',
          maxWidth: '1440px', margin: '0 auto',
        }}>
          <div style={{
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--color-red-dark)',
            marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
            Διπλώματα
          </div>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 900,
            letterSpacing: '-0.03em', color: 'var(--color-light)',
            lineHeight: 1.05, marginBottom: '8px',
          }}>
            Κατηγορία Β
          </h1>
          <h2 style={{
            fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--color-red)',
            lineHeight: 1.1, marginBottom: '24px',
          }}>
            Δίπλωμα Αυτοκινήτου
          </h2>
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'var(--color-muted)',
            lineHeight: 1.75, maxWidth: '600px', marginBottom: '40px',
          }}>
            Η πιο δημοφιλής κατηγορία για νέους οδηγούς. Με εμπειρία από το 1979, σε βοηθάμε να αποκτήσεις το δίπλωμά σου γρήγορα και σωστά.
          </p>
          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--color-red)', color: 'var(--color-light)',
              padding: '14px 28px', borderRadius: '4px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Κλείσε ραντεβού →
            </a>
            <a href="/assets/pdfs/diploma-b.pdf" download style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent', color: 'rgba(247,247,248,0.6)',
              padding: '14px 28px', borderRadius: '4px',
              border: '1.5px solid rgba(255,255,255,0.12)',
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Κατέβασε PDF
            </a>
          </div>
        </section>

        {/* Stats cards */}
        <section style={{
          padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <div style={{
            maxWidth: '1440px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }} className="diploma-stats">
            {[
              { label: 'Ελάχιστη ηλικία', value: '18', note: 'από 17 με γονική συναίνεση' },
              { label: 'Θεωρητικά μαθήματα', value: '21', note: 'διδακτικές ώρες των 45\''},
              { label: 'Πρακτικά μαθήματα', value: '15', note: 'διδακτικές ώρες των 45\''},
            ].map((s, i) => (
              <div key={i} style={{
                background: 'var(--color-dark-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px', padding: 'clamp(24px, 3vw, 40px)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-red-dark)', marginBottom: '12px' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 900, color: 'var(--color-red-dark)', lineHeight: 1, marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
                  {s.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Δικαιολογητικά */}
        <section style={{
          padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="docs-grid">
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-red-dark)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
                Απαιτούμενα
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-red)', lineHeight: 1.1, marginBottom: '32px' }}>
                Δικαιολογητικά
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {docs.map((doc, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(196,48,16,0.15)', border: '1px solid rgba(196,48,16,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', fontWeight: 700, color: 'var(--color-red-dark)',
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ fontSize: '15px', color: 'var(--color-light)', lineHeight: 1.6, margin: 0 }}>
                      {doc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: 'var(--color-dark-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: '10px', padding: 'clamp(24px, 3vw, 40px)',
            }}>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-red-dark)', marginBottom: '16px' }}>
                Σημαντικό
              </div>
              <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '16px', margin: 0 }}>
                Αναλαμβάνουμε εμείς τη διεκπεραίωση όλης της γραφειοκρατίας. Δεν χρειάζεται να ασχοληθείς με τα χαρτιά — εστίαζε στην οδήγηση.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{
          padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-red-dark)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--color-red-dark)', display: 'inline-block' }} />
              Ερωτήσεις
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-red)', lineHeight: 1.1, marginBottom: '48px' }}>
              Συχνές ερωτήσεις
            </h2>
            <div style={{ maxWidth: '800px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--color-border)', padding: '24px 0' }}>
                  <div style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: 'var(--color-light)', marginBottom: '12px' }}>
                    {faq.q}
                  </div>
                  <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(247,247,248,0.55)', lineHeight: 1.75, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" style={{
          padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px)',
        }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }} className="cta-bottom">
            <div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--color-red)', marginBottom: '8px' }}>
                Έτοιμος να ξεκινήσεις;
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-muted)', margin: 0 }}>
                Καλέστε μας ή στείλτε μήνυμα — απαντάμε άμεσα.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="tel:+302105752780" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--color-red)', color: 'var(--color-light)',
                padding: '14px 28px', borderRadius: '4px',
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none',
              }}>
                210 575 2780
              </a>
              <a href="/" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: 'rgba(247,247,248,0.6)',
                padding: '14px 28px', borderRadius: '4px',
                border: '1.5px solid rgba(255,255,255,0.12)',
                fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none',
              }}>
                ← Επιστροφή
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .diploma-stats { grid-template-columns: 1fr !important; }
          .docs-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .cta-bottom { flex-direction: column !important; }
        }
      `}</style>
    </>
  )
}
