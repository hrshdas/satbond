import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const BENEFITS = [
  {
    id: '01',
    title: 'Instant Bonding',
    description:
      'Sub-30-second cure times deliver the professional pace that demanding workflows require. No waiting. No clamping. No compromise.',
  },
  {
    id: '02',
    title: 'Mighty Strength',
    description:
      'Engineered tensile strength that holds under extreme load, vibration and environmental stress. Tested to ≥8 MPa for demanding industrial applications.',
  },
  {
    id: '03',
    title: 'Precision Application',
    description:
      'One-drop dispensing system ensures controlled, clean application with zero excess — the right amount, every time.',
  },
  {
    id: '04',
    title: 'Clean Finish',
    description:
      'Crystal-clear cure with no residue, no staining and no surface degradation. Professional results visible in the quality of the work.',
  },
  {
    id: '05',
    title: 'Professional Grade',
    description:
      'Formulated to the exacting standards of industrial and commercial professionals. Not a consumer product — a professional tool.',
  },
  {
    id: '06',
    title: 'Built for India',
    description:
      'Engineered to perform under high-humidity, high-temperature Indian working environments where inferior adhesives fail.',
  },
]

export default function Advantage() {
  const [hovered, setHovered] = useState<string | null>(null)
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: '6rem 0', background: '#082B59', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background watermark */}
      <div
        style={{
          position: 'absolute',
          right: '-2%',
          bottom: '-5%',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 900,
          fontSize: '320px',
          color: 'rgba(255,255,255,0.025)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.06em',
          pointerEvents: 'none',
        }}
      >
        06
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 relative z-10">

        {/* Section header + Mascot showcase card */}
        <div
          className={`reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${inView ? 'in-view' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          {/* Header left */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="yellow-bar" />
              <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                The SATBOND Advantage
              </span>
            </div>
            <h2
              className="heading-section"
              style={{ fontSize: 'clamp(36px, 5vw, 58px)', color: '#fff', lineHeight: 1.05 }}
            >
              MIGHTY STRENGTH.<br />
              <span className="text-[#FFD900]">UNBEATABLE HOLD.</span>
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Engineered with extreme tensile power. SATBOND creates molecular bonds built to withstand heavy mechanical load, vibration, and extreme Indian weather.
            </p>
          </div>

          {/* Elephant Mascot Card right */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#041A38]/90 to-[#082B59]/90 border border-amber-400/30 shadow-2xl backdrop-blur-md max-w-[340px] w-full flex flex-col items-center text-center overflow-hidden">
              
              {/* Radial glow background behind mascot */}
              <div className="absolute inset-0 bg-radial from-amber-400/10 via-transparent to-transparent pointer-events-none" />

              {/* Mascot image */}
              <div className="relative z-10 w-full max-w-[220px] aspect-square flex items-center justify-center p-2 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/mascot-elephant.jpg"
                  alt="SATBOND Mighty Mascot Elephant"
                  className="w-full h-full object-contain rounded-xl drop-shadow-[0_16px_32px_rgba(255,217,0,0.25)]"
                />
              </div>

              {/* Mascot badge title */}
              <div className="relative z-10 mt-3 pt-3 border-t border-white/10 w-full">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD900] text-[#041A38] text-[11px] font-extrabold tracking-wider uppercase font-['Manrope'] mb-1">
                  💪 Elephant Hold Power
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Tested to ≥ 8 MPa Industrial Tensile Strength
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div
          className={`reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10 ${inView ? 'in-view' : ''}`}
        >
          {BENEFITS.map((b, i) => (
            <div
              key={b.id}
              onMouseEnter={() => setHovered(b.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '2.5rem 2rem',
                borderRight: (i % 3 !== 2) ? '1px solid rgba(255,255,255,0.07)' : 'none',
                borderBottom: (i < 3) ? '1px solid rgba(255,255,255,0.07)' : 'none',
                background: hovered === b.id ? 'rgba(255,255,255,0.03)' : 'transparent',
                transition: 'background 0.3s',
                cursor: 'default',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 900,
                  fontSize: '72px',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: hovered === b.id ? '#FFD900' : 'rgba(255,255,255,0.06)',
                  transition: 'color 0.35s',
                  marginBottom: '1.25rem',
                  userSelect: 'none',
                }}
              >
                {b.id}
              </div>

              {/* Animated line */}
              <div
                style={{
                  height: '1.5px',
                  background: '#FFD900',
                  marginBottom: '1.25rem',
                  transformOrigin: 'left center',
                  width: hovered === b.id ? '100%' : '28px',
                  transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  color: '#fff',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.75rem',
                }}
              >
                {b.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                  transition: 'opacity 0.3s',
                  opacity: hovered === b.id ? 0.8 : 0.5,
                }}
              >
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

