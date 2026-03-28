export const metadata = { title: 'Preview — DC Drive' }

export default function Preview() {
  return (
    <main style={{ background: '#0f0f12', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <div style={{ flex: 1, padding: '80px 48px', color: 'rgba(247,247,248,0.2)', fontSize: '13px', textAlign: 'center' }}>
        ↑ περιεχόμενο σελίδας
      </div>

      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', gap: '48px' }}>

        {/* Option A */}
        <div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            A — radial bottom center, static
          </div>
          <div style={{ height: '200px', borderRadius: '12px', background: '#0f0f12', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            {/* Large outer glow */}
            <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '200px', background: 'radial-gradient(ellipse at center, rgba(196,48,16,0.1) 0%, transparent 70%)', animation: 'pulseGlow 8s ease-in-out infinite' }} />
            {/* Small inner core */}
            <div style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '120px', background: 'radial-gradient(ellipse at center, rgba(255,66,18,0.2) 0%, transparent 70%)', animation: 'pulseGlow 8s ease-in-out infinite 4s' }} />
            <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '11px', whiteSpace: 'nowrap' }}>footer content</div>
          </div>
        </div>

        {/* Option B */}
        <div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            B — animated pulse αργό (8s)
          </div>
          <div style={{ height: '200px', borderRadius: '12px', background: '#0f0f12', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '200px', background: 'radial-gradient(ellipse at center, rgba(196,48,16,0.1) 0%, transparent 70%)', animation: 'pulseGlow 8s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '11px', whiteSpace: 'nowrap' }}>footer content</div>
          </div>
        </div>

        {/* Option C */}
        <div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            C — two orbs αριστερά + δεξιά, animated
          </div>
          <div style={{ height: '200px', borderRadius: '12px', background: '#0f0f12', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '300px', height: '200px', background: 'radial-gradient(ellipse at center, rgba(196,48,16,0.1) 0%, transparent 70%)', animation: 'pulseGlow 10s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', bottom: '-80px', right: '-40px', width: '300px', height: '200px', background: 'radial-gradient(ellipse at center, rgba(255,66,18,0.06) 0%, transparent 70%)', animation: 'pulseGlow 10s ease-in-out infinite 5s' }} />
            <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '11px', whiteSpace: 'nowrap' }}>footer content</div>
          </div>
        </div>

        {/* Option D */}
        <div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            D — horizontal glow line
          </div>
          <div style={{ height: '200px', borderRadius: '12px', background: '#0f0f12', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, rgba(196,48,16,0.08) 0%, transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: '119px', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,66,18,0.3), transparent)' }} />
            <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '11px', whiteSpace: 'nowrap' }}>footer content</div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </main>
  )
}
