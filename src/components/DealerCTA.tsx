import { useInView } from '../hooks/useInView'

const BENEFITS = ['Attractive Margins', 'Growing Demand', 'Marketing Support', 'Pan-India Supply']

const STATS = [
  { value: '500+', label: 'Active Dealers' },
  { value: '20+', label: 'States Covered' },
  { value: '5+', label: 'Years in Market' },
  { value: '10L+', label: 'Bottles Sold' },
]

export default function DealerCTA() {
  const { ref, inView } = useInView()

  return (
    <section
      id="become-a-dealer"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: '6rem 0',
        background: '#041A38',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          pointerEvents: 'none',
        }}
      />

      {/* Yellow accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,217,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14" style={{ position: 'relative' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div className={`reveal ${inView ? 'in-view' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-[#FFD900] text-xs font-bold font-['Manrope'] mb-4">
              <img src="/mascot-elephant.jpg" alt="Mascot" className="w-5 h-5 rounded-full object-cover border border-amber-400/40" />
              <span>SATBOND Mighty Mascot Approved</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="yellow-bar" />
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Partner Programme
              </span>
            </div>

            <h2
              className="heading-section"
              style={{ fontSize: 'clamp(38px, 5vw, 58px)', color: '#fff', marginBottom: '1.25rem' }}
            >
              WANT SATBOND<br />IN YOUR CITY?
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '2.5rem', maxWidth: '440px' }}>
              Partner with a growing adhesive brand and bring professional bonding solutions to your market. We support our dealers every step of the way.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {BENEFITS.map((b) => (
                <div key={b} style={{ display: 'flex', items: 'center', gap: '0.625rem' }}>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#FFD900',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
              Become a Dealer
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2 7.5h11M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: Stat grid */}
          <div
            className={`reveal ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="grid grid-cols-2 gap-[1px] bg-white/10 rounded overflow-hidden border border-white/10">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    background: '#041A38',
                    padding: '2.5rem 2rem',
                    borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 900,
                      fontSize: '2.75rem',
                      color: '#FFD900',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p
              style={{
                marginTop: '1rem',
                fontSize: '0.6875rem',
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.6,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              * Indicative figures. Actual margins and supply terms subject to dealership agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
