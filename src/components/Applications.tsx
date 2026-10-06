import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'

const APPS = [
  {
    id: 'wood',
    label: 'Wood & MDF',
    description:
      'Clean, reliable bonding for furniture, cabinetry and professional woodworking. SATBOND delivers the precision and hold that master craftsmen demand.',
    product: 'Woodfill / One Drop',
    image: 'https://images.unsplash.com/photo-1621295693450-080546d2ec8e?w=1200&h=800&fit=crop&auto=format',
  },
  {
    id: 'footwear',
    label: 'Footwear',
    description:
      'Reliable adhesive performance for footwear manufacturing and repair. Bonds leather, rubber and synthetic materials with lasting, flexible strength.',
    product: 'One Drop / HV Gel',
    image: 'https://images.unsplash.com/photo-1563433337461-5b65f0834f3a?w=1200&h=800&fit=crop&auto=format',
  },
  {
    id: 'jewellery',
    label: 'Jewellery',
    description:
      'Precision bonding for delicate jewellery components. Crystal-clear cure, invisible finish and lasting hold on metals, stones and beads.',
    product: 'One Drop',
    image: 'https://images.unsplash.com/photo-1601121141418-c1caa10a2a0b?w=1200&h=800&fit=crop&auto=format',
  },
  {
    id: 'automotive',
    label: 'Automotive',
    description:
      'Precision bonding solutions for automotive components and repairs. Engineered for performance under heat, vibration and mechanical stress.',
    product: 'HV Gel / Spray Activator',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200&h=800&fit=crop&auto=format',
  },
  {
    id: 'pvc',
    label: 'PVC & Plastic',
    description:
      'Strong, clean bonding for PVC pipes, plastic components and polymer surfaces. Works where ordinary adhesives fail to grip.',
    product: 'One Drop / HV Gel',
    image: 'https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=1200&h=800&fit=crop&auto=format',
  },
  {
    id: 'hardware',
    label: 'Hardware & Repairs',
    description:
      'The trusted choice for hardware professionals, handymen and repair specialists across India. Fast, strong, dependable every time.',
    product: 'One Drop / Spray Activator',
    image: 'https://images.unsplash.com/photo-1659930087003-2d64e33181f7?w=1200&h=800&fit=crop&auto=format',
  },
]

export default function Applications() {
  const [active, setActive] = useState(0)
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true)
  const userInteractedRef = useRef<number>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { ref, inView } = useInView()

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Combine refs for both inView and scroll tracking
  const setCombinedRef = (node: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node
    ;(ref as React.MutableRefObject<HTMLElement | null>).current = node
  }

  // Scroll-driven sticky navigation through the parts
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isDesktop) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const trackHeight = rect.height - windowHeight

      if (trackHeight <= 0) return

      // Measure scroll distance relative to the sticky section top
      const scrolled = -rect.top
      const progress = Math.min(Math.max(scrolled / trackHeight, 0), 0.999)

      if (Date.now() - userInteractedRef.current > 500) {
        const targetIdx = Math.floor(progress * APPS.length)
        if (targetIdx !== active && targetIdx >= 0 && targetIdx < APPS.length) {
          setActive(targetIdx)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active, isDesktop])

  const handleSelect = (idx: number) => {
    userInteractedRef.current = Date.now()
    setActive(idx)

    // Smooth scroll to the corresponding position within the sticky track
    if (sectionRef.current && isDesktop) {
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const sectionTop = rect.top + scrollTop
      const trackHeight = rect.height - window.innerHeight
      const targetScroll = sectionTop + (idx / APPS.length) * trackHeight + 10

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      })
    }
  }

  const current = APPS[active]

  return (
    <section
      id="applications"
      ref={setCombinedRef}
      style={{ position: 'relative', height: isDesktop ? '220vh' : 'auto', background: '#F6F7F8' }}
    >
      {/* Sticky viewport frame that locks in place while scrolling through parts */}
      <div
        style={{
          position: isDesktop ? 'sticky' : 'relative',
          top: isDesktop ? '0px' : 'auto',
          height: isDesktop ? '100vh' : 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isDesktop ? '1.5rem 0' : '4rem 0',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 w-full">

          {/* Header */}
          <div className={`reveal ${inView ? 'in-view' : ''}`} style={{ marginBottom: '2.5rem' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="yellow-bar" />
              <span className="eyebrow">Where SATBOND Works</span>
            </div>
            <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#082B59' }}>
              BUILT FOR THE REAL WORLD.
            </h2>
          </div>

          {/* Main layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? '300px 1fr' : '1fr',
              gap: '1.75rem',
              alignItems: 'stretch',
            }}
            className={`reveal ${inView ? 'in-view' : ''}`}
          >

            {/* Desktop Application list */}
            {isDesktop ? (
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#fff',
                  border: '1px solid rgba(8,43,89,0.09)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(8,43,89,0.04)',
                }}
              >
                {/* Sliding Navy Highlight Box */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: `${100 / APPS.length}%`,
                    background: '#082B59',
                    transform: `translateY(${active * 100}%)`,
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

                {APPS.map((app, i) => (
                  <button
                    key={app.id}
                    onClick={() => handleSelect(i)}
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.05rem 1.4rem',
                      background: 'transparent',
                      cursor: 'pointer',
                      border: 'none',
                      borderBottom: i < APPS.length - 1 ? '1px solid rgba(8,43,89,0.07)' : 'none',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '0.5625rem',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: i === active ? '#FFD900' : '#667085',
                          marginBottom: '2px',
                          fontFamily: 'Inter, sans-serif',
                          transition: 'color 0.3s ease',
                          fontWeight: i === active ? 700 : 500,
                        }}
                      >
                        0{i + 1}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          color: i === active ? '#ffffff' : '#082B59',
                          fontFamily: 'Manrope, sans-serif',
                          letterSpacing: '-0.01em',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {app.label}
                      </div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        color: i === active ? '#FFD900' : 'rgba(8,43,89,0.3)',
                        transform: i === active ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), color 0.35s ease',
                      }}
                    >
                      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            ) : (
              /* Mobile horizontal tab pills */
              <div className="flex flex-row overflow-x-auto gap-2 p-1.5 bg-white border border-slate-200 rounded-lg shadow-sm no-scrollbar">
                {APPS.map((app, i) => (
                  <button
                    key={app.id}
                    onClick={() => handleSelect(i)}
                    className={`flex-shrink-0 px-4 py-2.5 rounded-md text-xs font-bold transition-all ${
                      i === active
                        ? 'bg-[#082B59] text-white shadow-sm'
                        : 'bg-transparent text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className={i === active ? 'text-[#FFD900] mr-1.5' : 'text-slate-400 mr-1.5'}>
                      0{i + 1}
                    </span>
                    {app.label}
                  </button>
                ))}
              </div>
            )}

            {/* Image panel with smooth cross-fade animation */}
            <div
              style={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                minHeight: '440px',
                background: '#082B59',
                boxShadow: '0 16px 40px rgba(8,43,89,0.12)',
              }}
            >
              {/* Background images with cross-fade & smooth scale */}
              {APPS.map((app, i) => (
                <img
                  key={app.id}
                  src={app.image}
                  alt={app.label}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? 'scale(1.02)' : 'scale(1.07)',
                    transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                    pointerEvents: 'none',
                  }}
                />
              ))}

              {/* Overlay gradients */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(4,26,56,0.95) 0%, rgba(4,26,56,0.45) 55%, rgba(4,26,56,0.15) 100%)',
                }}
              />

              {/* Content with animated transitions */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2.5rem',
                  zIndex: 2,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div style={{ width: '20px', height: '2px', background: '#FFD900' }} />
                  <span style={{ fontSize: '0.5625rem', letterSpacing: '0.22em', color: '#FFD900', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                    Application 0{active + 1}
                  </span>
                </div>
                <h3
                  key={`title-${current.id}`}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(30px, 3.8vw, 48px)',
                    color: '#fff',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.0,
                    marginBottom: '0.875rem',
                    animation: 'fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) both',
                  }}
                >
                  {current.label}
                </h3>
                <p
                  key={`desc-${current.id}`}
                  style={{
                    color: 'rgba(255,255,255,0.72)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    maxWidth: '520px',
                    marginBottom: '1.25rem',
                    animation: 'fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.08s both',
                  }}
                >
                  {current.description}
                </p>
                <div
                  key={`prod-${current.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    animation: 'fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.16s both',
                  }}
                >
                  <span style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
                    Recommended Formula
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#FFD900', fontFamily: 'Manrope, sans-serif' }}>
                    {current.product}
                  </span>
                </div>
              </div>

              {/* Application counter & scroll progress indicator */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'rgba(4,26,56,0.65)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  zIndex: 2,
                }}
              >
                <div style={{ width: '48px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${((active + 1) / APPS.length) * 100}%`,
                      background: '#FFD900',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  0{active + 1} / 0{APPS.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
