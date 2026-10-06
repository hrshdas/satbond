import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import SatbondBottle from './SatbondBottle'

const PRODUCTS = [
  {
    id: '01',
    slug: 'one-drop',
    name: 'One Drop Instant Adhesive',
    tagline: 'The original. The strongest.',
    description:
      'Precision-formula cyanoacrylate adhesive engineered for immediate bonding across a wide range of surfaces. One drop is all it takes — no clamping, no waiting.',
    applications: ['Wood', 'Plastic', 'Metal', 'Rubber', 'Ceramic', 'Leather'],
    specs: { 'Cure Time': '< 30s', 'Viscosity': 'Low', 'Volume': '20g' },
    labelColor: '#FFD900',
    textColor: '#041A38',
  },
  {
    id: '02',
    slug: 'hv-gel',
    name: 'HV Gel',
    tagline: 'Thick. Controlled. Reliable.',
    description:
      'High-viscosity gel formula for vertical surfaces, porous materials and gap-filling applications. No dripping, complete control. Ideal for demanding professional use.',
    applications: ['Leather', 'Foam', 'Cork', 'Vertical Surfaces', 'Gap Fill'],
    specs: { 'Cure Time': '45–60s', 'Viscosity': 'Gel', 'Volume': '20g' },
    labelColor: '#082B59',
    textColor: '#FFD900',
  },
  {
    id: '03',
    slug: 'woodfill',
    name: 'Woodfill',
    tagline: 'Engineered for wood.',
    description:
      'Specially formulated adhesive for wood substrates, MDF and natural fibre composites. Colour-matched for clean, invisible repairs and precise furniture joinery.',
    applications: ['Furniture', 'MDF', 'Cabinetry', 'Joints', 'Repair'],
    specs: { 'Cure Time': '30–45s', 'Viscosity': 'Medium', 'Volume': '20g' },
    labelColor: '#8B5E3C',
    textColor: '#FFFFFF',
  },
  {
    id: '04',
    slug: 'spray-activator',
    name: 'Spray Activator',
    tagline: 'Accelerate. Instantly.',
    description:
      'Professional-grade activator that instantly cures all SATBOND adhesives on contact. Designed for high-pace production environments and rapid repairs.',
    applications: ['All SATBOND Products', 'Production Lines', 'Fast Repair'],
    specs: { 'Cure Time': 'Instant', 'Viscosity': 'Spray', 'Volume': '150ml' },
    labelColor: '#E2E8F0',
    textColor: '#082B59',
  },
  {
    id: '05',
    slug: 'remover',
    name: 'Adhesive Remover',
    tagline: 'Clean. Precise. Safe.',
    description:
      'Professional debonder for removing cured cyanoacrylate adhesive from surfaces and skin. Non-damaging formulation for precision rework and surface cleaning.',
    applications: ['Excess Adhesive', 'Skin Contact', 'Rework', 'Cleaning'],
    specs: { 'Cure Time': 'N/A', 'Viscosity': 'Liquid', 'Volume': '50ml' },
    labelColor: '#F0FDF4',
    textColor: '#14532D',
  },
]

type Product = typeof PRODUCTS[0]

const ProductBottle = ({ product }: { product: Product }) => {
  const { labelColor, textColor, id, name, slug } = product

  const shortName = slug === 'one-drop'
    ? 'Multi Purpose'
    : slug === 'spray-activator'
    ? 'Spray Activator'
    : name

  const subtitle = slug === 'one-drop'
    ? 'For Industrial Use'
    : 'Professional Grade'

  const badgeText = slug === 'one-drop' ? 'V7' : id

  return (
    <div style={{ width: '100%', maxWidth: '200px', margin: '0 auto' }}>
      <SatbondBottle
        productName={shortName}
        subtitle={subtitle}
        badgeText={badgeText}
        primaryColor={labelColor}
        accentColor={slug === 'one-drop' ? '#003E92' : textColor}
      />
    </div>
  )
}

export default function ProductSystem() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true)
  const userInteractedRef = useRef<number>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { ref, inView } = useInView()

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const setCombinedRef = (node: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node
    ;(ref as React.MutableRefObject<HTMLElement | null>).current = node
  }

  // Scroll-driven sticky product navigation
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
        const targetIdx = Math.floor(progress * PRODUCTS.length)
        if (targetIdx !== activeIdx && targetIdx >= 0 && targetIdx < PRODUCTS.length) {
          setActiveIdx(targetIdx)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeIdx, isDesktop])

  const handleSelect = (idx: number) => {
    userInteractedRef.current = Date.now()
    setActiveIdx(idx)

    // Smooth scroll to the corresponding position inside the sticky track
    if (sectionRef.current && isDesktop) {
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const sectionTop = rect.top + scrollTop
      const trackHeight = rect.height - window.innerHeight
      const targetScroll = sectionTop + (idx / PRODUCTS.length) * trackHeight + 10

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      })
    }
  }

  const product = PRODUCTS[activeIdx]

  return (
    <section
      id="products"
      ref={setCombinedRef}
      style={{ position: 'relative', height: isDesktop ? '200vh' : 'auto', background: '#ffffff' }}
    >
      {/* Sticky viewport frame that locks in place while scrolling through products */}
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

          {/* Section header */}
          <div className={`reveal ${inView ? 'in-view' : ''}`} style={{ marginBottom: '2.5rem' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="yellow-bar" />
              <span className="eyebrow">Product System</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                gap: '2rem',
                alignItems: 'flex-end',
              }}
              className="max-lg:grid-cols-1"
            >
              <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#082B59' }}>
                ONE SYSTEM. EVERY BOND.
              </h2>
            <p style={{ color: '#667085', lineHeight: 1.7, maxWidth: '360px', fontSize: '0.9375rem' }} className="lg:ml-auto">
              Professional adhesive solutions engineered for different materials, surfaces and working conditions.
            </p>
          </div>
        </div>

        {/* Product showcase */}
        <div
          className={`reveal grid grid-cols-1 lg:grid-cols-2 ${inView ? 'in-view' : ''}`}
          style={{
            border: '1px solid rgba(8,43,89,0.1)',
            borderRadius: '6px',
            overflow: 'hidden',
            transitionDelay: '0.1s',
            boxShadow: '0 8px 30px rgba(8,43,89,0.06)',
          }}
        >

          {/* Left: Product visual */}
          <div
            style={{
              position: 'relative',
              background: '#F6F7F8',
              minHeight: isDesktop ? '500px' : '320px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '2rem 1rem',
            }}
          >
            {/* Large background number */}
            <span
              style={{
                position: 'absolute',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(140px, 20vw, 220px)',
                color: 'rgba(8,43,89,0.035)',
                lineHeight: 1,
                userSelect: 'none',
                letterSpacing: '-0.05em',
                transition: 'opacity 0.4s',
              }}
            >
              {product.id}
            </span>

            {/* Bottle */}
            <div
              key={activeIdx}
              style={{ position: 'relative', zIndex: 1 }}
              className="product-enter"
            >
              <ProductBottle product={product} />
            </div>

            {/* Spec chips */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                zIndex: 2,
              }}
            >
              {Object.entries(product.specs).map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(8,43,89,0.08)',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: '#667085', textTransform: 'uppercase', marginBottom: '1px' }}>{k}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#082B59', fontFamily: 'Manrope, sans-serif' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            {/* Tab navigation bar with touch scrolling */}
            <div
              style={{
                borderBottom: '1px solid rgba(8,43,89,0.09)',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                display: 'flex',
                background: '#fafafa',
              }}
            >
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => handleSelect(i)}
                  style={{
                    flexShrink: 0,
                    padding: '1rem 1.25rem',
                    background: i === activeIdx ? 'rgba(255,217,0,0.04)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                    border: 'none',
                    borderBottom: `2px solid ${i === activeIdx ? '#FFD900' : 'transparent'}`,
                  }}
                >
                  <div style={{ fontSize: '0.5625rem', letterSpacing: '0.12em', color: '#667085', marginBottom: '2px', fontFamily: 'Inter, sans-serif' }}>
                    {p.id}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: i === activeIdx ? '#082B59' : '#667085',
                      fontFamily: 'Manrope, sans-serif',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.name.split(' ').slice(0, 2).join(' ')}
                  </div>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div style={{ flex: 1, padding: isDesktop ? '2.5rem' : '1.5rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: '#FFD900', fontWeight: 700, textTransform: 'uppercase' }}>
                  {product.id}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(26px, 3vw, 36px)',
                  color: '#082B59',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem',
                }}
              >
                {product.name}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#667085', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                {product.tagline}
              </p>
              <p style={{ fontSize: '0.875rem', color: '#101828', lineHeight: 1.75, marginBottom: '2rem', flex: 1 }}>
                {product.description}
              </p>

              {/* Applications */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.5625rem', letterSpacing: '0.16em', color: '#667085', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Applications
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {product.applications.map((a) => (
                    <span
                      key={a}
                      style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        color: '#082B59',
                        border: '1px solid rgba(8,43,89,0.18)',
                        borderRadius: '2px',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a href="#contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Enquire About This Product
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M2 7.5h11M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
