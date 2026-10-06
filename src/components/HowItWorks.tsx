import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import SatbondBottle from './SatbondBottle'

const STEPS = [
  {
    id: '01',
    verb: 'APPLY',
    title: 'Apply',
    description: 'Apply a small amount of SATBOND to one surface. One drop is all you need for most applications.',
    detail: 'Less is more. The precision nozzle ensures clean, controlled application with zero excess — saving product and keeping surfaces clean.',
    image: 'https://images.unsplash.com/photo-1659930087003-2d64e33181f7?w=900&h=640&fit=crop&auto=format',
  },
  {
    id: '02',
    verb: 'ALIGN',
    title: 'Align',
    description: 'Bring surfaces together and align them precisely before the adhesive fully cures.',
    detail: 'Positioning matters. SATBOND provides a brief window for perfect alignment before the ionic polymerization locks the bond in place.',
    image: 'https://images.unsplash.com/photo-1544164560-adac3045edb2?w=900&h=640&fit=crop&auto=format',
  },
  {
    id: '03',
    verb: 'BOND',
    title: 'Bond',
    description: 'Get an instant, strong and durable bond within seconds. No clamping. No waiting.',
    detail: 'The cure is permanent and molecular. SATBOND bonds form at the polymer chain level — delivering full tensile strength in under 60 seconds.',
    image: 'https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=900&h=640&fit=crop&auto=format',
  },
]

export default function HowItWorks() {
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

  // Combined ref setter for scroll tracking & reveal hook
  const setCombinedRef = (node: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node
    ;(ref as React.MutableRefObject<HTMLElement | null>).current = node
  }

  // Scroll-driven sticky navigation for the 3 steps
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isDesktop) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const trackHeight = rect.height - windowHeight

      if (trackHeight <= 0) return

      const scrolled = -rect.top
      const progress = Math.min(Math.max(scrolled / trackHeight, 0), 0.999)

      if (Date.now() - userInteractedRef.current > 500) {
        const targetIdx = Math.floor(progress * STEPS.length)
        if (targetIdx !== active && targetIdx >= 0 && targetIdx < STEPS.length) {
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

    // Smooth scroll to the step position inside the sticky track
    if (sectionRef.current && isDesktop) {
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const sectionTop = rect.top + scrollTop
      const trackHeight = rect.height - window.innerHeight
      const targetScroll = sectionTop + (idx / STEPS.length) * trackHeight + 10

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      })
    }
  }

  const step = STEPS[active]

  return (
    <section
      id="how-it-works"
      ref={setCombinedRef}
      style={{ position: 'relative', height: isDesktop ? '180vh' : 'auto', background: '#ffffff' }}
    >
      {/* Sticky viewport frame that locks in place while scrolling through steps */}
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
              <span className="eyebrow">Process</span>
            </div>
            <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#082B59' }}>
              THREE STEPS. ONE STRONG BOND.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? '1fr 1.5fr' : '1fr',
              gap: isDesktop ? '3.5rem' : '2rem',
              alignItems: 'center',
            }}
            className={`reveal ${inView ? 'in-view' : ''}`}
          >

            {/* Steps list with smooth animated progress bar */}
            <div style={{ position: 'relative' }}>
              {/* Animated step connection line */}
              <div
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '28px',
                  bottom: '28px',
                  width: '3px',
                  background: 'rgba(8,43,89,0.08)',
                  borderRadius: '2px',
                  zIndex: 0,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: `${((active + 1) / STEPS.length) * 100}%`,
                    background: '#FFD900',
                    borderRadius: '2px',
                    transition: 'height 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              </div>

              {STEPS.map((s, i) => (
                <div
                  key={s.id}
                  onClick={() => handleSelect(i)}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    borderTop: '1px solid rgba(8,43,89,0.08)',
                    padding: '1.5rem 0 1.5rem 1.25rem',
                    cursor: 'pointer',
                    opacity: (i === active || !isDesktop) ? 1 : 0.45,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    transform: i === active ? 'translateX(6px)' : 'translateX(0)',
                  }}
                  onMouseEnter={e => {
                    if (i !== active && isDesktop) e.currentTarget.style.opacity = '0.75'
                  }}
                  onMouseLeave={e => {
                    if (i !== active && isDesktop) e.currentTarget.style.opacity = '0.45'
                  }}
                >
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    {/* Step number */}
                    <span
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 900,
                        fontSize: '44px',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: i === active ? '#FFD900' : '#082B59',
                        transition: 'color 0.35s ease, transform 0.35s ease',
                        transform: i === active ? 'scale(1.08)' : 'scale(1)',
                        flexShrink: 0,
                      }}
                    >
                      {s.id}
                    </span>

                    <div style={{ width: '100%' }}>
                      <h3
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontWeight: 800,
                          fontSize: '1.25rem',
                          color: '#082B59',
                          letterSpacing: '-0.02em',
                          marginBottom: '0.35rem',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {s.verb}
                      </h3>
                      <p style={{ fontSize: '0.84375rem', color: '#667085', lineHeight: 1.65 }}>
                        {s.description}
                      </p>

                      {/* Smoothly expanded detail accordion */}
                      <div
                        style={{
                          overflow: 'hidden',
                          maxHeight: (i === active || !isDesktop) ? '200px' : '0',
                          opacity: (i === active || !isDesktop) ? 1 : 0,
                          transform: (i === active || !isDesktop) ? 'translateY(0)' : 'translateY(-6px)',
                          transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease, transform 0.4s ease',
                        }}
                      >
                        <div
                          style={{
                            marginTop: '0.75rem',
                            borderLeft: '3px solid #FFD900',
                            paddingLeft: '0.875rem',
                            fontSize: '0.8125rem',
                            color: '#101828',
                            lineHeight: 1.65,
                            background: 'rgba(255,217,0,0.06)',
                            padding: '0.65rem 0.875rem',
                            borderRadius: '0 4px 4px 0',
                          }}
                        >
                          {s.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Bottom border */}
              <div style={{ borderTop: '1px solid rgba(8,43,89,0.08)' }} />
            </div>

            {/* Visual section with cross-fade image transition */}
            <div
              style={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                background: '#F6F7F8',
                aspectRatio: '4/3',
                maxHeight: '440px',
                boxShadow: '0 16px 40px rgba(8,43,89,0.1)',
              }}
            >
              {/* Cross-fading background images */}
              {STEPS.map((s, i) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt={s.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? 'scale(1.02)' : 'scale(1.06)',
                    transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              ))}

              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(4,26,56,0.82) 0%, rgba(4,26,56,0.12) 60%)',
                }}
              />

              {/* Product Bottle Badge Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  zIndex: 2,
                }}
              >
                <div style={{ width: '24px', height: '48px' }}>
                  <SatbondBottle />
                </div>
                <div>
                  <div style={{ fontSize: '0.625rem', fontWeight: 800, color: '#003E92', fontFamily: 'Manrope, sans-serif' }}>
                    SATBOND V7
                  </div>
                  <div style={{ fontSize: '0.5625rem', color: '#667085', fontWeight: 500 }}>
                    Instant Adhesive
                  </div>
                </div>
              </div>

              {/* Large number watermark */}
              <div
                key={`watermark-${step.id}`}
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.5rem',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 900,
                  fontSize: '96px',
                  lineHeight: 1,
                  color: 'rgba(255,255,255,0.14)',
                  letterSpacing: '-0.05em',
                  userSelect: 'none',
                  animation: 'fadeInUp 0.5s ease both',
                }}
              >
                {step.id}
              </div>

              {/* Step label */}
              <div
                key={`label-${step.id}`}
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '0.2em',
                  animation: 'fadeInUp 0.5s ease both',
                  zIndex: 2,
                }}
              >
                <span style={{ fontSize: '0.5625rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
                  Step {step.id}
                </span>
                <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '1.125rem', color: '#FFD900', letterSpacing: '-0.01em' }}>
                  {step.verb}
                </span>
              </div>

              {/* Step dots */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  display: 'flex',
                  gap: '6px',
                  zIndex: 2,
                }}
              >
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    style={{
                      width: i === active ? '24px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      background: i === active ? '#FFD900' : 'rgba(255,255,255,0.4)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'width 0.35s ease, background 0.35s ease',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
