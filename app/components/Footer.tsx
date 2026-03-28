'use client'
import { Suspense, lazy } from 'react'
const GradientFooter = lazy(() => import('./GradientFooter'))

const RED_FILTER = 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      position: 'relative', overflow: 'hidden',
      borderTop: '1px solid var(--color-border)',
      padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 80px) clamp(24px, 4vw, 40px)',
    }}>
      <Suspense fallback={<div />}>
        <GradientFooter />
      </Suspense>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto' }}>

        {/* Top — logo + links */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          {/* Logo + tagline */}
          <div>
            <img src="/assets/dc-logotype.svg" alt="DC Drive"
              style={{ height: '40px', width: 'auto', filter: RED_FILTER, marginBottom: '16px', display: 'block' }} />
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, maxWidth: '260px' }}>
              Γνώση, Εμπειρία, Εμπιστοσύνη.<br />
              Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου<br />
              Περιστέρι · Από το 1979.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--color-red-dark)', marginBottom: '16px',
              }}>Διπλώματα</div>
              {['Αυτοκίνητο', 'Μοτοσυκλέτα', 'Επαγγελματικά', 'Ανανεώσεις'].map(l => (
                <a key={l} href="#categories" style={{
                  display: 'block', fontSize: '13px', color: 'var(--color-muted)',
                  textDecoration: 'none', marginBottom: '10px', transition: 'color 200ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
                  {l}
                </a>
              ))}
            </div>
            <div>
              <div style={{
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--color-red-dark)', marginBottom: '16px',
              }}>Σχολή</div>
              {[
                { label: 'Πώς ξεκινάς', href: '#steps' },
                { label: 'Γιατί εμείς', href: '#why-us' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Επικοινωνία', href: '#contact' },
              ].map(l => (
                <a key={l.label} href={l.href} style={{
                  display: 'block', fontSize: '13px', color: 'var(--color-muted)',
                  textDecoration: 'none', marginBottom: '10px', transition: 'color 200ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--color-border)', paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: '16px', flexWrap: 'wrap',
        }}>
          {/* Copyright + social */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '12px', color: 'var(--color-subtle)' }}>
              © {year} Σχολή Οδηγών Δήμητρα Χριστοθανοπούλου
            </div>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=100054459879464"
                target="_blank" rel="noreferrer"
                title="Facebook"
                style={{ color: 'rgba(247,247,248,0.35)', transition: 'color 200ms', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f7f7f8')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,247,248,0.35)')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram — soon */}
              <span title="Instagram — σύντομα"
                style={{ color: 'rgba(247,247,248,0.2)', display: 'block', cursor: 'default' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </span>
            </div>
          </div>

          {/* EO credit */}
          <div style={{ fontSize: '12px', color: 'var(--color-subtle)' }}>
            Σχεδιασμός:{' '}
            <a href="https://eternaloptimists.com" target="_blank" rel="noreferrer"
              style={{ color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 200ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
              Eternal Optimists
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
