export const metadata = { title: 'Typography — DC Drive' }

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div style={{ marginBottom: '80px' }}>
    <div style={{
      fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
      marginBottom: '32px', paddingBottom: '16px',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      {title}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {children}
    </div>
  </div>
)

const Row = ({ label, spec, children }: { label: string, spec?: string, children: React.ReactNode }) => (
  <div>
    <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '12px' }}>
      <code style={{
        fontSize: '13px', fontFamily: 'monospace',
        color: '#ff4212', background: 'rgba(255,66,18,0.1)',
        padding: '3px 8px', borderRadius: '4px',
      }}>
        .{label}
      </code>
      {spec && (
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
          {spec}
        </span>
      )}
    </div>
    <div style={{ paddingLeft: '0' }}>{children}</div>
  </div>
)

const RED_FILTER = 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)'

export default function Typography() {
  return (
    <main style={{ background: '#0f0f12', minHeight: '100vh', padding: 'clamp(48px, 8vw, 96px) clamp(24px, 5vw, 80px)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <img src="/assets/dc-logotype.svg" alt="DC Drive" style={{ height: '40px', filter: RED_FILTER, marginBottom: '24px', display: 'block' }} />
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#f7f7f8', marginBottom: '8px' }}>Typography System</div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
            Όλα τα typographic elements του site. Αλλαγές στο{' '}
            <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '3px' }}>globals.css</code>
            {' '}εφαρμόζονται παντού αυτόματα.
          </div>
        </div>

        {/* HEADINGS */}
        <Section title="Headings">
          <Row label="t-display" spec="clamp(48px→104px) · weight 900 · tracking -0.03em">
            <p className="t-display" style={{ margin: 0 }}>Μάθε να οδηγείς.</p>
          </Row>
          <Row label="t-h1" spec="clamp(40px→80px) · weight 900 · tracking -0.025em">
            <p className="t-h1" style={{ margin: 0 }}>Μάθε να οδηγείς.</p>
          </Row>
          <Row label="t-h2" spec="clamp(28px→52px) · weight 800 · tracking -0.02em · color: red">
            <p className="t-h2" style={{ margin: 0 }}>Τι δίπλωμα θέλεις;</p>
          </Row>
          <Row label="t-h3" spec="clamp(18px→24px) · weight 700 · tracking -0.01em">
            <p className="t-h3" style={{ margin: 0 }}>Κατηγορία Β — Αυτοκίνητο</p>
          </Row>
          <Row label="t-h4" spec="clamp(15px→18px) · weight 700">
            <p className="t-h4" style={{ margin: 0 }}>Εμπειρία από το 1979</p>
          </Row>
        </Section>

        {/* LABELS */}
        <Section title="Labels & Eyebrows">
          <Row label="t-eyebrow" spec="10px · weight 600 · tracking 0.16em · uppercase · color: red-dark">
            <p className="t-eyebrow" style={{ margin: 0 }}>Σχολή Οδηγών · Αθήνα</p>
          </Row>
          <Row label="t-eyebrow-line" spec="10px · με γραμμή αριστερά">
            <p className="t-eyebrow-line" style={{ margin: 0 }}>Κατηγορίες</p>
          </Row>
          <Row label="t-label" spec="10px · weight 600 · tracking 0.1em · uppercase — για φόρμες, nav">
            <p className="t-label" style={{ margin: 0 }}>Τηλέφωνο επικοινωνίας</p>
          </Row>
          <Row label="t-stat" spec="clamp(32px→48px) · weight 900 · color: red-dark — για στατιστικά">
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              {['1979', '85%', '2k+', '6'].map(n => (
                <div key={n}>
                  <p className="t-stat" style={{ margin: 0 }}>{n}</p>
                  <p className="t-caption" style={{ margin: '4px 0 0' }}>label</p>
                </div>
              ))}
            </div>
          </Row>
        </Section>

        {/* BODY */}
        <Section title="Body Text">
          <Row label="t-body-lg" spec="clamp(15px→18px) · weight 400 · line-height 1.75 — lead paragraphs">
            <p className="t-body-lg" style={{ margin: 0 }}>Σύγχρονη εκπαίδευση με έμφαση στην ασφάλεια, την ψυχραιμία και την αυτοπεποίθηση. Είμαστε δίπλα σου σε κάθε βήμα της διαδρομής.</p>
          </Row>
          <Row label="t-body" spec="clamp(13px→15px) · weight 400 · line-height 1.7 — standard text">
            <p className="t-body" style={{ margin: 0 }}>Η σχολή ιδρύθηκε το 1979 από τον πατέρα μου, Δημήτρη Χρηστοθανόπουλο. Συνεχίζω την ίδια παράδοση με σύγχρονη προσέγγιση, τον ίδιο σεβασμό στον μαθητή και την ίδια αγάπη για τη δουλειά.</p>
          </Row>
          <Row label="t-body-sm" spec="13px · weight 400 · line-height 1.65 — card descriptions">
            <p className="t-body-sm" style={{ margin: 0 }}>Η πιο δημοφιλής επιλογή για νέους οδηγούς. Ξεκίνα σήμερα και πάρε το δίπλωμά σου γρήγορα.</p>
          </Row>
          <Row label="t-caption" spec="11px · weight 500 · color: subtle — meta, footer">
            <p className="t-caption" style={{ margin: 0 }}>© 2026 DC Drive — Dimitra Christothanopoulou · Σχεδιασμός: Eternal Optimists</p>
          </Row>
        </Section>

        {/* BUTTONS */}
        <Section title="Buttons">
          <Row label="btn-primary" spec="bg: red · text: white · padding 14px 28px · radius 4px · weight 700 · uppercase · tracking 0.1em">
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#ff4212', color: '#f7f7f8',
              padding: '14px 28px', borderRadius: '4px',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Κλείσε ραντεβού →
            </a>
          </Row>
          <Row label="btn-ghost" spec="bg: transparent · border: rgba white 0.12 · padding 14px 28px">
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: 'rgba(247,247,248,0.5)',
              padding: '14px 28px', borderRadius: '4px',
              border: '1.5px solid rgba(255,255,255,0.12)',
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Δες τις κατηγορίες
            </a>
          </Row>
          <Row label="btn-sm" spec="mobile CTA — padding 8px 14px · font 10px">
            <a href="#" style={{
              display: 'inline-flex',
              background: '#ff4212', color: '#f7f7f8',
              padding: '8px 14px', borderRadius: '4px',
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Ραντεβού
            </a>
          </Row>
        </Section>

        {/* NAV */}
        <Section title="Navigation">
          <Row label="nav-link" spec="11px · weight 500 · tracking 0.1em · uppercase · color: muted → light on hover">
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {['Πώς ξεκινάς', 'Διπλώματα', 'Σχολή', 'FAQ', 'Επικοινωνία'].map(l => (
                <span key={l} style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(247,247,248,0.5)' }}>{l}</span>
              ))}
            </div>
          </Row>
          <Row label="nav-mobile-link" spec="clamp(32px→52px) · weight 800 · tracking -0.02em — fullscreen menu">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {['Πώς ξεκινάς', 'Διπλώματα'].map(l => (
                <span key={l} style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#f7f7f8', lineHeight: 1.15 }}>{l}</span>
              ))}
            </div>
          </Row>
        </Section>

        {/* FORM */}
        <Section title="Form Elements">
          <Row label="form-label" spec="10px · weight 600 · tracking 0.1em · uppercase · color: muted">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '400px' }}>
              <label style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(247,247,248,0.5)' }}>
                Τηλέφωνο
              </label>
              <input type="text" placeholder="69X XXX XXXX" style={{
                width: '100%', padding: '12px 16px',
                background: '#1a1a20', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '4px', color: '#f7f7f8', fontSize: '14px', outline: 'none',
              }} />
            </div>
          </Row>
          <Row label="form-select" spec="ίδιο με input">
            <select style={{
              width: '100%', maxWidth: '400px', padding: '12px 16px',
              background: '#1a1a20', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '4px', color: '#f7f7f8', fontSize: '14px', outline: 'none',
            }}>
              <option>Κατηγορία Β</option>
              <option>Κατηγορία Α</option>
            </select>
          </Row>
          <Row label="form-textarea" spec="ίδιο με input · min-height 120px">
            <textarea placeholder="Μήνυμα..." rows={3} style={{
              width: '100%', maxWidth: '400px', padding: '12px 16px',
              background: '#1a1a20', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '4px', color: '#f7f7f8', fontSize: '14px', outline: 'none',
              resize: 'vertical', fontFamily: 'inherit',
            }} />
          </Row>
        </Section>

        {/* FOOTER */}
        <Section title="Footer">
          <Row label="footer-heading" spec="10px · weight 600 · tracking 0.12em · uppercase · color: red-dark">
            <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c43010', margin: 0 }}>
              Διπλώματα
            </p>
          </Row>
          <Row label="footer-link" spec="13px · weight 400 · color: muted → light on hover">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Αυτοκίνητο', 'Μοτοσυκλέτα', 'Επαγγελματικά'].map(l => (
                <span key={l} style={{ fontSize: '13px', color: 'rgba(247,247,248,0.45)' }}>{l}</span>
              ))}
            </div>
          </Row>
          <Row label="footer-tagline" spec="13px · color: muted · line-height 1.6">
            <p style={{ fontSize: '13px', color: 'rgba(247,247,248,0.45)', lineHeight: 1.6, margin: 0 }}>
              Learn Smart, Drive Safe.<br />Σχολή Οδηγών στην Αθήνα από το 1979.
            </p>
          </Row>
          <Row label="footer-copyright" spec="12px · color: subtle">
            <p style={{ fontSize: '12px', color: 'rgba(247,247,248,0.22)', margin: 0 }}>
              © 2026 DC Drive — Dimitra Christothanopoulou
            </p>
          </Row>
        </Section>

        {/* COLOR PALETTE */}
        <Section title="Color Utilities">
          {[
            { cls: 't-red', hex: '#ff4212', label: 'Red — CTAs, section headings' },
            { cls: 't-red-dark', hex: '#c43010', label: 'Red Dark — eyebrows, stats, accents' },
            { cls: 't-light', hex: '#f7f7f8', label: 'Light — headlines, card titles' },
            { cls: 't-muted', hex: 'rgba(247,247,248,0.45)', label: 'Muted — body text, descriptions' },
            { cls: 't-subtle', hex: 'rgba(247,247,248,0.22)', label: 'Subtle — captions, placeholders' },
          ].map(({ cls, hex, label }) => (
            <Row key={cls} label={cls} spec={hex}>
              <p className={`t-h3 ${cls}`} style={{ margin: 0 }}>{label}</p>
            </Row>
          ))}
        </Section>

        {/* COMBINED EXAMPLE */}
        <Section title="Combined — Section Header Example">
          <Row label="example">
            <div style={{ maxWidth: '600px' }}>
              <p className="t-eyebrow-line" style={{ margin: '0 0 12px' }}>Κατηγορίες</p>
              <p className="t-h2" style={{ margin: '0 0 16px' }}>Τι δίπλωμα θέλεις;</p>
              <p className="t-body-lg" style={{ margin: '0 0 32px' }}>Διάλεξε την κατηγορία που σε ενδιαφέρει και δες τι χρειάζεται για να ξεκινήσεις.</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ff4212', color: '#f7f7f8', padding: '14px 28px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Κλείσε ραντεβού →
                </a>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: 'rgba(247,247,248,0.5)', padding: '14px 28px', borderRadius: '4px', border: '1.5px solid rgba(255,255,255,0.12)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Δες τις κατηγορίες
                </a>
              </div>
            </div>
          </Row>
        </Section>

      </div>
    </main>
  )
}
