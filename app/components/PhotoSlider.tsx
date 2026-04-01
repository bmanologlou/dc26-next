'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/assets/Slider_01.webp', pos: 'center' },
  { src: '/assets/Slider_02.webp', pos: 'center' },
  { src: '/assets/Slider_03.webp', pos: 'center 70%' },
  { src: '/assets/Slider_04.webp', pos: 'center 75%' },
  { src: '/assets/Slider_05.webp', pos: 'center' },
  { src: '/assets/Slider_06.webp', pos: '20% top' },
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
    <div className="photo-slider-wrap" style={{
      borderRadius: '10px',
      marginBottom: '56px', position: 'relative',
      aspectRatio: '16/7', minHeight: '300px',
      background: 'var(--color-dark-elevated)',
      overflow: 'hidden',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: dir > 0 ? '100%' : '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: dir > 0 ? '-100%' : '100%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          }}>
          <img
            src={photos[current].src}
            alt={`DC Drive ${current + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: photos[current].pos, display: 'block' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div style={{
        position: 'absolute', bottom: '16px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '6px', zIndex: 10,
      }}>
        {photos.map((_, i) => (
          <button key={i} onClick={() => go(i, i > current ? 1 : -1)} style={{
            width: i === current ? '16px' : '5px', height: '5px',
            borderRadius: '3px', border: 'none', cursor: 'pointer',
            background: i === current ? '#ff4212' : 'rgba(255,255,255,0.5)',
            transition: 'all 300ms ease', padding: 0,
          }} />
        ))}
      </div>

      {/* Desktop arrows */}
      <button className="slider-arrow" onClick={prev} style={{
        position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
        zIndex: 10, width: '36px', height: '36px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.2)',
        background: 'rgba(15,15,18,0.6)', cursor: 'pointer',
        color: '#f7f7f8', fontSize: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>←</button>
      <button className="slider-arrow" onClick={next} style={{
        position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
        zIndex: 10, width: '36px', height: '36px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.2)',
        background: 'rgba(15,15,18,0.6)', cursor: 'pointer',
        color: '#f7f7f8', fontSize: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>→</button>

      <style>{`@media (max-width: 768px) { .slider-arrow { display: none !important; } .photo-slider-wrap { aspect-ratio: 4/3 !important; min-height: 340px !important; max-width: 100% !important; } }`}</style>
    </div>
  )
}
