import { useEffect, useState } from 'react'
import SatbondBottle from './SatbondBottle'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2.5 8h11M9 3.5l4.5 4.5L9 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TechLabel = ({
  children,
  side = 'left',
  top,
  mounted,
  delay,
}: {
  children: React.ReactNode
  side?: 'left' | 'right'
  top: string
  mounted: boolean
  delay: string
}) => (
  <div
    className="hidden lg:flex absolute items-center gap-2"
    style={{
      top,
      [side === 'left' ? 'left' : 'right']: '-120px',
      flexDirection: side === 'right' ? 'row-reverse' : 'row',
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateX(0)' : `translateX(${side === 'left' ? '16px' : '-16px'})`,
      transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
    }}
  >
    <div style={{ textAlign: side === 'right' ? 'left' : 'right' }}>{children}</div>
    <div style={{ width: '28px', height: '1px', background: 'rgba(8,43,89,0.2)', flexShrink: 0 }} />
    <div
      style={{
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        border: '1px solid rgba(8,43,89,0.3)',
        background: 'white',
        flexShrink: 0,
      }}
    />
  </div>
)

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120)
    return () => clearTimeout(t)
  }, [])

  const line = (text: string, delay: string, yellow = false) => (
    <div style={{ overflow: 'visible', paddingRight: '0.25em' }}>
      <h1
        className="heading-display"
        style={{
          fontSize: 'clamp(22px, 7.2vw, 108px)',
          color: yellow ? '#FFD900' : '#082B59',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(100%)',
          transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}`,
          whiteSpace: 'nowrap',
          lineHeight: 1.0,
        }}
      >
        {text}
      </h1>
    </div>
  )

  return (
    <section className="relative min-h-screen tech-grid overflow-x-hidden flex items-center pt-20 pb-16 lg:pt-24 lg:pb-16">

      {/* Animated yellow accent line (desktop only) */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          left: 0,
          top: '52%',
          height: '1.5px',
          background: '#FFD900',
          width: mounted ? '38%' : '0',
          transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) 1.0s',
          transformOrigin: 'left center',
        }}
      />

      {/* Subtle circle ornaments */}
      <div
        className="hidden sm:block"
        style={{
          position: 'absolute',
          right: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '640px',
          height: '640px',
          borderRadius: '50%',
          border: '1px solid rgba(8,43,89,0.05)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[calc(100vh-100px)] py-4 lg:py-12">

          {/* Left: Typography block */}
          <div className="w-full max-w-full">

            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-amber-300/15 border border-amber-300/40"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#FFD900] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#082B59] font-['Inter']">
                Professional-Grade Adhesive Technology
              </span>
            </div>

            {/* Big headline — line by line */}
            <div className="mb-6 sm:mb-8 max-w-full">
              {line('BOND', '0.2s', true)}
              {line('WITHOUT', '0.32s')}
              {line('COMPROMISE.', '0.44s')}
            </div>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
              style={{
                fontFamily: 'Inter, sans-serif',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s',
              }}
            >
              Precision cyanoacrylate adhesives engineered for master craftsmen, builders and repair specialists.
            </p>

            {/* Mobile-friendly CTAs */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 0.72s, transform 0.7s ease 0.72s',
              }}
            >
              <a href="#products" className="btn-primary justify-center text-center py-3.5 px-7 text-sm font-bold shadow-lg shadow-navy-900/10">
                Explore Products
                <ArrowRight />
              </a>
              <a
                href="#become-a-dealer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded text-sm font-semibold text-[#082B59] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-center"
              >
                Become a Dealer
                <span className="text-amber-500 font-bold">&rarr;</span>
              </a>
            </div>

            {/* Mobile-optimized stat cards */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm max-w-xl"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 0.7s ease 0.9s',
              }}
            >
              {[
                { label: 'Cure Time', value: '< 30 sec', sub: 'Instant Bond' },
                { label: 'Strength', value: '≥ 8 MPa', sub: 'High Tensile' },
                { label: 'Dosage', value: '1 Drop', sub: 'Precision Cap' },
              ].map((d, i) => (
                <div key={i} className="flex flex-col text-center sm:text-left py-1">
                  <div className="text-[10px] sm:text-xs tracking-wider text-slate-400 uppercase font-semibold mb-0.5">
                    {d.label}
                  </div>
                  <div className="text-xs sm:text-base font-extrabold text-[#082B59] font-['Manrope']">
                    {d.value}
                  </div>
                  <div className="hidden sm:block text-[10px] text-slate-400 font-medium">
                    {d.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product visual showcase */}
          <div className="flex flex-col justify-center items-center relative py-4 lg:py-0 w-full">
            {/* Glowing product card frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none flex justify-center items-center">

              {/* Background ambient radial glow */}
              <div
                style={{
                  position: 'absolute',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,217,0,0.22) 0%, rgba(8,43,89,0.06) 60%, transparent 80%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Product bottle */}
              <div
                style={{
                  width: 'clamp(170px, 46vw, 230px)',
                  position: 'relative',
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
                  transition: 'opacity 1.0s cubic-bezier(0.16,1,0.3,1) 0.4s, transform 1.0s cubic-bezier(0.16,1,0.3,1) 0.4s',
                  filter: 'drop-shadow(0 24px 48px rgba(8,43,89,0.2))',
                  margin: '1rem auto',
                }}
                className="anim-float z-10"
              >
                <SatbondBottle />

                {/* Tech annotations (desktop only) */}
                <TechLabel side="left" top="13%" mounted={mounted} delay="1.0s">
                  <div style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: '#667085', textTransform: 'uppercase', marginBottom: '2px' }}>Cure Time</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#082B59', fontFamily: 'Manrope, sans-serif' }}>&lt; 30 Seconds</div>
                </TechLabel>

                <TechLabel side="right" top="38%" mounted={mounted} delay="1.1s">
                  <div style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: '#667085', textTransform: 'uppercase', marginBottom: '2px' }}>Bond Strength</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#082B59', fontFamily: 'Manrope, sans-serif' }}>High Tensile</div>
                </TechLabel>

                <TechLabel side="left" top="62%" mounted={mounted} delay="1.2s">
                  <div style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: '#667085', textTransform: 'uppercase', marginBottom: '2px' }}>Surface Type</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#082B59', fontFamily: 'Manrope, sans-serif' }}>Multi-Surface</div>
                </TechLabel>
              </div>
            </div>

            {/* Mobile feature pill badge below bottle */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-[#082B59] font-['Manrope']">SATBOND V7</span>
              <span className="text-slate-300">|</span>
              <span className="text-[11px] font-medium text-slate-500">Precision Nozzle & Instant Cure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div
        className="hidden lg:flex"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: mounted ? 0.6 : 0,
          transition: 'opacity 0.8s ease 1.4s',
        }}
      >
        <span style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: '#667085', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '36px',
            background: 'linear-gradient(to bottom, rgba(8,43,89,0.4), transparent)',
          }}
        />
      </div>
    </section>
  )
}

