export const metadata = { title: 'Typography — DC Drive' }

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div style={{ marginBottom: '64px' }}>
    <div style={{
      fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
      marginBottom: '24px', paddingBottom: '12px',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      {title}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {children}
    </div>
  </div>
)

const Row = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', alignItems: 'start' }}>
    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', paddingTop: '4px' }}>
      .{label}
    </div>
    <div>{children}</div>
  </div>
)

export default function Typography() {
  return (
    <main style={{ background: '#0f0f12', minHeight: '100vh', padding: 'clamp(48px, 8vw, 96px) clamp(24px, 5vw, 80px)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <div style={{ marginBottom: '80px' }}>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '8px' }}>
            DC Drive — Typography System
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
            Όλα τα typographic elements του site. Αλλαγές στο <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '3px', fontSize: '11px' }}>globals.css</code> εφαρμόζονται παντού αυτόματα.
          </div>
        </div>

        {/* Headings */}
        <Section title="Headings">
          <Row label="t-display">
            <p className="t-display" style={{ margin: 0 }}>Μάθε να οδηγείς.</p>
          </Row>
          <Row label="t-h1">
            <p className="t-h1" style={{ margin: 0 }}>Μάθε να οδηγείς.</p>
          </Row>
          <Row label="t-h2">
            <p className="t-h2" style={{ margin: 0 }}>Τι δίπλωμα θέλεις;</p>
          </Row>
          <Row label="t-h3">
            <p className="t-h3" style={{ margin: 0 }}>Κατηγορία Β — Αυτοκίνητο</p>
          </Row>
          <Row label="t-h4">
            <p className="t-h4" style={{ margin: 0 }}>Εμπειρία από το 1979</p>
          </Row>
        </Section>

        {/* Labels */}
        <Section title="Labels & Eyebrows">
          <Row label="t-eyebrow">
            <p className="t-eyebrow" style={{ margin: 0 }}>Σχολή Οδηγών · Αθήνα</p>
          </Row>
          <Row label="t-eyebrow-line">
            <p className="t-eyebrow-line" style={{ margin: 0 }}>Κατηγορίες</p>
          </Row>
          <Row label="t-label">
            <p className="t-label" style={{ margin: 0 }}>Τηλέφωνο επικοινωνίας</p>
          </Row>
        </Section>

        {/* Body */}
        <Section title="Body Text">
          <Row label="t-body-lg">
            <p className="t-body-lg" style={{ margin: 0 }}>Σύγχρονη εκπαίδευση με έμφαση στην ασφάλεια, την ψυχραιμία και την αυτοπεποίθηση. Είμαστε δίπλα σου σε κάθε βήμα.</p>
          </Row>
          <Row label="t-body">
            <p className="t-body" style={{ margin: 0 }}>Η σχολή ιδρύθηκε το 1979 από τον πατέρα μου, Δημήτρη Χρηστοθανόπουλο. Συνεχίζω την ίδια παράδοση — με σύγχρονη προσέγγιση, τον ίδιο σεβασμό στον μαθητή.</p>
          </Row>
          <Row label="t-body-sm">
            <p className="t-body-sm" style={{ margin: 0 }}>Η πιο δημοφιλής επιλογή για νέους οδηγούς. Ξεκίνα σήμερα και πάρε το δίπλωμά σου γρήγορα.</p>
          </Row>
          <Row label="t-caption">
            <p className="t-caption" style={{ margin: 0 }}>© 2026 DC Drive — Dimitra Christothanopoulou</p>
          </Row>
        </Section>

        {/* Stats */}
        <Section title="Stat Numbers">
          <Row label="t-stat">
            <div style={{ display: 'flex', gap: '48px' }}>
              <div><p className="t-stat" style={{ margin: 0 }}>1979</p><p className="t-caption" style={{ margin: '4px 0 0' }}>Από το έτος</p></div>
              <div><p className="t-stat" style={{ margin: 0 }}>85%</p><p className="t-caption" style={{ margin: '4px 0 0' }}>Επιτυχία</p></div>
              <div><p className="t-stat" style={{ margin: 0 }}>2k+</p><p className="t-caption" style={{ margin: '4px 0 0' }}>Απόφοιτοι</p></div>
            </div>
          </Row>
        </Section>

        {/* Colors */}
        <Section title="Color Utilities">
          <Row label="t-red">
            <p className="t-h3 t-red" style={{ margin: 0 }}>Accent Red #ff4212</p>
          </Row>
          <Row label="t-red-dark">
            <p className="t-h3 t-red-dark" style={{ margin: 0 }}>Dark Red #c43010</p>
          </Row>
          <Row label="t-light">
            <p className="t-h3 t-light" style={{ margin: 0 }}>Light #f7f7f8</p>
          </Row>
          <Row label="t-muted">
            <p className="t-h3 t-muted" style={{ margin: 0 }}>Muted rgba(247,247,248,0.45)</p>
          </Row>
          <Row label="t-subtle">
            <p className="t-h3 t-subtle" style={{ margin: 0 }}>Subtle rgba(247,247,248,0.22)</p>
          </Row>
        </Section>

        {/* Combined example */}
        <Section title="Combined — Section Header">
          <Row label="example">
            <div>
              <p className="t-eyebrow-line" style={{ margin: '0 0 12px' }}>Κατηγορίες</p>
              <p className="t-h2" style={{ margin: '0 0 16px' }}>Τι δίπλωμα θέλεις;</p>
              <p className="t-body-lg" style={{ margin: 0 }}>Διάλεξε την κατηγορία που σε ενδιαφέρει και δες τι χρειάζεται για να ξεκινήσεις.</p>
            </div>
          </Row>
        </Section>

      </div>
    </main>
  )
}
