'use client'
import { motion } from 'framer-motion'

const RED = 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)'

export default function NavLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <a href="/" style={{
      display: 'flex', alignItems: 'center',
      gap: '18px', textDecoration: 'none',
    }}>
      {/* Brandmark — always visible, never moves */}
      <img
        src="/assets/dc-brandmark.svg"
        alt="DC Drive"
        style={{ height: '36px', width: 'auto', filter: RED, flexShrink: 0 }}
      />
      {/* Wordmark — fades out on scroll, same position */}
      <motion.img
        src="/assets/dc-wordmark.svg"
        alt="DC Christothanopoulou"
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
        style={{ height: '30px', width: 'auto', filter: RED, flexShrink: 0 }}
      />
    </a>
  )
}
