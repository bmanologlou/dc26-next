'use client'
const categories = [
  { cat: 'Κατηγορία Β', title: 'Αυτοκίνητο', desc: 'Η πιο δημοφιλής επιλογή για νέους οδηγούς. Ξεκίνα σήμερα.' },
  { cat: 'Κατηγορία Α', title: 'Μοτοσυκλέτα', desc: 'Για κάθε επίπεδο εμπειρίας — από ΑΜ μέχρι Α πλήρης.' },
  { cat: 'Κατηγορία Γ/Δ', title: 'Επαγγελματικά', desc: 'Φορτηγά, λεωφορεία και ΠΕΙ για επαγγελματική αναβάθμιση.' },
]

export default function Categories() {
  return (
    <section id="κατηγορίες" style={{
      padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--color-red-dark)',
            marginBottom: '12px',
          }}>
            Κατηγορίες
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--color-red)',
            lineHeight: 1.1,
          }}>
            Τι δίπλωμα θέλεις;
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {categories.map((c, i) => (
            <div key={i} style={{
              background: 'var(--color-dark-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: '10px', padding: '28px 24px',
              transition: 'all 300ms ease', cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-border-mid)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{
                fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--color-red-dark)',
                marginBottom: '12px',
              }}>
                {c.cat}
              </div>
              <h3 style={{
                fontSize: '20px', fontWeight: 700, color: 'var(--color-light)',
                marginBottom: '10px',
              }}>
                {c.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                {c.desc}
              </p>
              <div style={{
                marginTop: '20px', fontSize: '11px', fontWeight: 700,
                color: 'var(--color-red)', letterSpacing: '0.04em',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                Μάθε περισσότερα <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
