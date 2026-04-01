'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  '/assets/Slider_01.webp',
  '/assets/Slider_02.webp',
  '/assets/Slider_03.webp',
  '/assets/Slider_04.webp',
  '/assets/Slider_05.webp',
  '/assets/Slider_06.webp',
]

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (idx: number, d: number) => { setDir(d); setCurrent(idx) }
  const next = () => go(current === photos.length - 1 ? 0 : current + 1, 1)
  const prev = () => go(current === 0 ? photos.length - 1 : current - 1, -1)

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [current])

  return (
    <div style={{
      borderRadius: '10px', overflow: 'hidden',
      marginBottom: '56px', position: 'relative',
      aspectRatio: '21/9', minHeight: '280px',
      background: 'var(--color-dark-elevated)',
      cursor: 'grab',
    }}>
      <AnimatePresence mode="wait" custom={dir}>
        <motion.img
          key={current}
          src={photos[current]}
          alt={`Σχολή Οδηγών DC Drive ${current + 1}`}
          initial={{ x: dir > 0 ? '100%' : '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: dir > 0 ? '-100%' : '100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) next()
            else if (info.offset.x > 50) prev()
          }}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            userSelect: 'none',
          }}
        />
      </AnimatePresence>

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: '16px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '6px', zIndex: 2,
      }}>
        {photos.map((_, i) => (
          <button key={i} onClick={() => go(i, i > current ? 1 : -1)} style={{
            width: i === current ? '16px' : '5px', height: '5px',
            borderRadius: '3px', border: 'none', cursor: 'pointer',
            background: i === current ? '#ff4212' : 'rgba(255,255,255,0.4)',
            transition: 'all 300ms ease', padding: 0,
          }} />
        ))}
      </div>

      {/* Desktop arrows */}
      <div className="slider-arrows" style={{
        position: 'absolute', top: '50%', transform: 'translateY(-50%)',
        width: '100%', display: 'flex', justifyContent: 'space-between',
        padding: '0 16px', boxSizing: 'border-box', zIndex: 2,
        pointerEvents: 'none',
      }}>
        {[{ fn: prev, label: '←' }, { fn: next, label: '→' }].map(({ fn, label }) => (
          <button key={label} onClick={fn} style={{
            width: '36px', height: '36px', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(15,15,18,0.6)', cursor: 'pointer',
            color: '#f7f7f8', fontSize: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'all', transition: 'background 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,66,18,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(15,15,18,0.6)')}>
            {label}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .slider-arrows { display: none !important; } }
      `}</style>
    </div>
  )
}
