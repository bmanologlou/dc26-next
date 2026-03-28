'use client'
import { Suspense, lazy } from 'react'
const GradientFooter = lazy(() => import('../components/GradientFooter'))

export default function Preview() {
  return (
    <main style={{ background: '#0f0f12', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Simulate page content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(247,247,248,0.15)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        ↑ περιεχόμενο σελίδας
      </div>

      {/* Full width footer preview */}
      <footer style={{
        position: 'relative', overflow: 'hidden',
        padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 80px) clamp(24px, 4vw, 40px)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}>
        <Suspense fallback={<div />}>
          <GradientFooter />
        </Suspense>

        {/* Dummy footer content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '48px' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'rgba(247,247,248,0.45)', lineHeight: 1.6, maxWidth: '260px' }}>
                Learn Smart, Drive Safe.<br />
                Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου<br />
                Αθήνα · Από το 1979.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '60px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c43010', marginBottom: '16px' }}>Διπλώματα</div>
                {['Αυτοκίνητο', 'Μοτοσυκλέτα', 'Επαγγελματικά', 'Ανανεώσεις'].map(l => (
                  <div key={l} style={{ fontSize: '13px', color: 'rgba(247,247,248,0.45)', marginBottom: '10px' }}>{l}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c43010', marginBottom: '16px' }}>Σχολή</div>
                {['Πώς ξεκινάς', 'Γιατί εμείς', 'FAQ', 'Επικοινωνία'].map(l => (
                  <div key={l} style={{ fontSize: '13px', color: 'rgba(247,247,248,0.45)', marginBottom: '10px' }}>{l}</div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ fontSize: '12px', color: 'rgba(247,247,248,0.22)' }}>© 2026 Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου</div>
            <div style={{ fontSize: '12px', color: 'rgba(247,247,248,0.22)' }}>Σχεδιασμός: Eternal Optimists</div>
          </div>
        </div>
      </footer>

    </main>
  )
}
