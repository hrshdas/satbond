import { useInView } from '../hooks/useInView'
import SatbondBottle from './SatbondBottle'

const STAGES = [
  { label: 'Surface Contact', detail: 'Adhesive wets both surfaces at the molecular level, filling micro-pores.' },
  { label: 'Adhesive Layer', detail: 'Cyanoacrylate fills micro-gaps between surfaces, creating a continuous film.' },
  { label: 'Cure', detail: 'Moisture triggers ionic polymerization, forming a cross-linked polymer network.' },
  { label: 'Final Bond', detail: 'Full tensile strength achieved in under 60 seconds. Permanent at the molecular level.' },
]

/* Simplified bond diagram */
const BondDiagram = () => (
  <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
    {/* Surface A */}
    <rect x="18" y="16" width="384" height="64" rx="5" fill="#082B59"/>
    {/* Surface A texture */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
      <rect key={`ta${i}`} x={38 + i * 36} y="76" width="1.5" height="10" rx="0.75" fill="rgba(255,255,255,0.15)"/>
    ))}
    <text x="210" y="50" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="2">SURFACE  A</text>

    {/* Bond layer label on left */}
    <line x1="8" y1="50" x2="8" y2="270" stroke="rgba(8,43,89,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
    <text x="6" y="160" fill="#667085" fontSize="8" fontFamily="Inter, sans-serif" transform="rotate(-90 6 160)" textAnchor="middle" letterSpacing="1.5">BOND SYSTEM</text>

    {/* Adhesive layer */}
    <rect x="18" y="130" width="384" height="58" rx="3" fill="#FFD900"/>
    {/* Adhesive texture: dots */}
    {[0,1,2,3,4,5,6,7,8].map(i =>
      [0,1].map(j => (
        <circle key={`dot${i}${j}`} cx={42 + i * 40} cy={150 + j * 18} r="2.5" fill="rgba(4,26,56,0.12)"/>
      ))
    )}
    <text x="210" y="163" textAnchor="middle" fill="#041A38" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="2">SATBOND  ADHESIVE  LAYER</text>

    {/* Connecting bond lines between surfaces and adhesive */}
    {[50, 90, 130, 170, 210, 250, 290, 330, 370].map((x, i) => (
      <g key={`bl${i}`}>
        <line x1={x} y1="80" x2={x} y2="130" stroke="#FFD900" strokeWidth="1" opacity="0.45" strokeDasharray="3 2"/>
        <line x1={x} y1="188" x2={x} y2="240" stroke="#FFD900" strokeWidth="1" opacity="0.45" strokeDasharray="3 2"/>
      </g>
    ))}

    {/* Surface B texture */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
      <rect key={`tb${i}`} x={38 + i * 36} y="240" width="1.5" height="10" rx="0.75" fill="rgba(255,255,255,0.15)"/>
    ))}
    {/* Surface B */}
    <rect x="18" y="240" width="384" height="64" rx="5" fill="#082B59"/>
    <text x="210" y="275" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="2">SURFACE  B</text>

    {/* Annotation lines right side */}
    <line x1="402" y1="48" x2="416" y2="48" stroke="rgba(8,43,89,0.25)" strokeWidth="1"/>
    <line x1="402" y1="159" x2="416" y2="159" stroke="rgba(8,43,89,0.25)" strokeWidth="1"/>
    <line x1="402" y1="272" x2="416" y2="272" stroke="rgba(8,43,89,0.25)" strokeWidth="1"/>
  </svg>
)

export default function TechnologyStory() {
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
              <span className="eyebrow">Technology</span>
            </div>
            <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', color: '#082B59', marginBottom: '1.5rem' }}>
              THE SCIENCE<br />BEHIND THE<br />BOND.
            </h2>
            <p style={{ color: '#667085', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
              SATBOND adhesives are engineered at the molecular level. Our cyanoacrylate formulations initiate ionic polymerization on contact with surface moisture — creating a polymer chain that physically links two surfaces with exceptional tensile strength.
            </p>
            <p style={{ color: '#667085', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '2.5rem' }}>
              Every SATBOND product is formulated and tested specifically for Indian working conditions — high humidity, extreme temperature variation and demanding surface types.
            </p>

            {/* Process stages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {STAGES.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '0.875rem 0',
                    borderBottom: '1px solid rgba(8,43,89,0.07)',
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#FFD900',
                      flexShrink: 0,
                      marginTop: '5px',
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#082B59', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px', fontFamily: 'Manrope, sans-serif' }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#667085', lineHeight: 1.6 }}>
                      {s.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical diagram */}
          <div
            className={`reveal ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div
              style={{
                background: '#F6F7F8',
                borderRadius: '6px',
                padding: '1.5rem 1.5rem 1.25rem',
                border: '1px solid rgba(8,43,89,0.07)',
              }}
            >
              <BondDiagram />

              {/* Responsive Stats row */}
              <div
                className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4"
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(8,43,89,0.08)',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.5625rem', letterSpacing: '0.16em', color: '#667085', textTransform: 'uppercase', marginBottom: '3px' }}>Bond Mechanism</div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#082B59', fontFamily: 'Manrope, sans-serif' }}>Cyanoacrylate Polymerization</div>
                </div>
                <div className="hidden sm:block" style={{ width: '1px', height: '32px', background: 'rgba(8,43,89,0.1)' }} />
                <div className="text-left sm:text-right">
                  <div style={{ fontSize: '0.5625rem', letterSpacing: '0.16em', color: '#667085', textTransform: 'uppercase', marginBottom: '3px' }}>Tensile Strength</div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#082B59', fontFamily: 'Manrope, sans-serif' }}>≥ 8 MPa</div>
                </div>
                <div className="hidden sm:block" style={{ width: '1px', height: '32px', background: 'rgba(8,43,89,0.1)' }} />
                <div className="text-left sm:text-right">
                  <div style={{ fontSize: '0.5625rem', letterSpacing: '0.16em', color: '#667085', textTransform: 'uppercase', marginBottom: '3px' }}>Full Cure</div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#082B59', fontFamily: 'Manrope, sans-serif' }}>≤ 60 Seconds</div>
                </div>
              </div>

              {/* V7 Bottle Product Banner */}
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '1rem 1.25rem',
                  background: 'white',
                  borderRadius: '4px',
                  border: '1px solid rgba(8,43,89,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div style={{ width: '40px', height: '80px', flexShrink: 0 }}>
                  <SatbondBottle />
                </div>
                <div>
                  <div style={{ fontSize: '0.625rem', letterSpacing: '0.12em', color: '#003E92', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'Manrope, sans-serif' }}>
                    SATBOND V7 Multi Purpose
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#101828', fontWeight: 700, margin: '2px 0' }}>
                    Precision Nozzle & Instant Curing Formula
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
