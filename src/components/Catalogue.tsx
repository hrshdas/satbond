import { useInView } from '../hooks/useInView'
import SatbondBottle from './SatbondBottle'

const PRODUCT_TAGS = ['One Drop', 'HV Gel', 'Woodfill', 'Spray Activator', 'Remover']

export default function Catalogue() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: '6rem 0', background: '#ffffff' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className={`reveal ${inView ? 'in-view' : ''}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="yellow-bar" />
              <span className="eyebrow">Catalogue</span>
            </div>
            <h2
              className="heading-section"
              style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', color: '#082B59', marginBottom: '1.25rem' }}
            >
              EXPLORE THE<br />SATBOND<br />CATALOGUE.
            </h2>
            <p style={{ color: '#667085', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '2.5rem', maxWidth: '420px' }}>
              Discover our complete range of professional adhesive solutions — with technical specifications, surface compatibility charts and application guides.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href="#"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                onClick={e => e.preventDefault()}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 1v9M3.5 7l4 4 4-4M1.5 13h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Catalogue
              </a>
              <a href="#products" className="btn-ghost">
                View Products
              </a>
            </div>
          </div>

          {/* Right: Catalogue visual */}
          <div
            className={`reveal ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
              {/* Shadow pages behind */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  right: '-10px',
                  height: '100%',
                  background: 'white',
                  border: '1px solid rgba(8,43,89,0.09)',
                  borderRadius: '4px',
                  boxShadow: '0 2px 16px rgba(8,43,89,0.05)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  left: '5px',
                  right: '-5px',
                  height: '100%',
                  background: 'white',
                  border: '1px solid rgba(8,43,89,0.09)',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(8,43,89,0.05)',
                }}
              />

              {/* Front cover */}
              <div
                style={{
                  position: 'relative',
                  background: '#082B59',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(8,43,89,0.22)',
                }}
              >
                {/* Cover grid texture */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Cover content */}
                <div
                  style={{
                    position: 'relative',
                    padding: '2.5rem',
                    minHeight: '360px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Top: Logo */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1.5rem' }}>
                      <span
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontWeight: 900,
                          fontSize: '1.5rem',
                          color: '#fff',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        SAT<span style={{ color: '#FFD900' }}>BOND</span>
                      </span>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FFD900', display: 'inline-block', marginBottom: '2px' }} />
                    </div>

                    {/* Yellow rule */}
                    <div style={{ width: '40px', height: '2px', background: '#FFD900', marginBottom: '1.25rem' }} />

                    <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                      Professional Adhesive Solutions
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
                      Product Catalogue 2026
                    </div>
                  </div>

                  {/* Middle: Product tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {PRODUCT_TAGS.map(t => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.625rem',
                          padding: '0.25rem 0.625rem',
                          border: '1px solid rgba(255,255,255,0.18)',
                          color: 'rgba(255,255,255,0.45)',
                          borderRadius: '2px',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom: V7 Bottle Showcase */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.5625rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '4px' }}>
                        FLAGSHIP ADHESIVE
                      </div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#FFD900', fontFamily: 'Manrope, sans-serif' }}>
                        SATBOND V7
                      </div>
                      <div style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.5)' }}>
                        Multi-Purpose Formula
                      </div>
                    </div>
                    <div style={{ width: '60px', height: '110px' }}>
                      <SatbondBottle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
