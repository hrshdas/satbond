import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'

const NAV_ITEMS = ['Products', 'Applications', 'Technology', 'About', 'Become a Dealer']

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || open ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        boxShadow: scrolled || open ? '0 1px 12px rgba(8,43,89,0.08)' : 'none',
        borderBottom: scrolled || open ? '1px solid rgba(8,43,89,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 flex-shrink-0 z-10">
            <span
              className="text-xl font-black tracking-tight"
              style={{
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '-0.03em',
                color: '#082B59',
              }}
            >
              SAT<span style={{ color: '#FFD900' }}>BOND</span>
            </span>
            <span
              className="w-[6px] h-[6px] rounded-full inline-block"
              style={{ background: '#FFD900', marginBottom: '2px' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="nav-link text-sm font-medium"
                style={{ color: '#101828', fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              aria-label="Search"
              style={{ color: '#667085', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#082B59')}
              onMouseLeave={e => (e.currentTarget.style.color = '#667085')}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="m13 13 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </button>
            <a href="#contact" className="btn-primary" style={{ paddingTop: '0.6rem', paddingBottom: '0.6rem' }}>
              Enquire Now
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 text-[#082B59] focus:outline-none flex items-center justify-center rounded-md hover:bg-slate-100/60 transition-colors z-10"
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className="lg:hidden"
        style={{
          overflow: 'hidden',
          maxHeight: open ? '480px' : '0',
          transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(16px)',
          borderTop: open ? '1px solid rgba(8,43,89,0.08)' : '1px solid transparent',
        }}
      >
        <div className="px-6 py-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-[#082B59] hover:text-[#FFD900] transition-colors border-b border-slate-100"
            >
              {item}
            </a>
          ))}
          <div className="pt-4">
            <a href="#contact" className="btn-primary w-full justify-center text-center py-3" onClick={() => setOpen(false)}>
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
