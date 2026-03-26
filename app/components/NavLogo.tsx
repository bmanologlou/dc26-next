'use client'
import { motion } from 'framer-motion'

interface NavLogoProps {
  scrolled: boolean
}

// DC Logo SVG split: symbol always visible, text fades on scroll
export default function NavLogo({ scrolled }: NavLogoProps) {
  const redFilter = "brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1234%) hue-rotate(353deg) brightness(95%) contrast(110%)"

  return (
    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '0' }}>
      {/* Brandmark — always visible */}
      <img
        src="/assets/dc-brandmark.svg"
        alt="DC Drive"
        style={{ height: '36px', width: 'auto', filter: redFilter, flexShrink: 0 }}
      />
      {/* Logo text — fades out on scroll */}
      <motion.img
        src="/assets/dc-logo-text.svg"
        alt=""
        animate={{ 
          opacity: scrolled ? 0 : 1,
          width: scrolled ? '0px' : 'auto',
          marginLeft: scrolled ? '0px' : '10px',
        }}
        transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
        style={{ height: '28px', filter: redFilter, flexShrink: 0, overflow: 'hidden' }}
      />
    </a>
  )
}
