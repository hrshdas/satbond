import { useInView } from '../hooks/useInView'

const PROS = [
  {
    id: 'carpenters',
    label: 'Carpenters',
    tagline: 'Built for those who build.',
    image: 'https://images.unsplash.com/photo-1659930087003-2d64e33181f7?w=500&h=700&fit=crop&auto=format',
    offset: false,
  },
  {
    id: 'shoemakers',
    label: 'Shoe Makers',
    tagline: 'Crafted for the craftsmen.',
    image: 'https://images.unsplash.com/photo-1563433337461-5b65f0834f3a?w=500&h=700&fit=crop&auto=format',
    offset: true,
  },
  {
    id: 'jewellers',
    label: 'Jewellers',
    tagline: 'Precision at every scale.',
    image: 'https://images.unsplash.com/photo-1601121141418-c1caa10a2a0b?w=500&h=700&fit=crop&auto=format',
    offset: false,
  },
  {
    id: 'hardware',
    label: 'Hardware Professionals',
    tagline: 'The professional choice.',
    image: 'https://images.unsplash.com/photo-1544164560-adac3045edb2?w=500&h=700&fit=crop&auto=format',
    offset: true,
  },
]

export default function Professionals() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: '6rem 0', background: '#F6F7F8' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div
          className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-end mb-10 lg:mb-14 ${inView ? 'in-view' : ''}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="yellow-bar" />
              <span className="eyebrow">Trusted By</span>
            </div>
            <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#082B59' }}>
              TRUSTED BY<br />PEOPLE WHO<br />BUILD.
            </h2>
          </div>
          <p
            style={{
              color: '#667085',
              lineHeight: 1.7,
              maxWidth: '380px',
              fontSize: '0.9375rem',
            }}
            className="lg:ml-auto"
          >
            From furniture makers to footwear professionals, SATBOND supports the people who build, repair and create across India.
          </p>
        </div>

        {/* Photo grid — staggered on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {PROS.map((p, i) => (
            <div
              key={p.id}
              className={`reveal ${p.offset ? 'lg:mt-10' : ''} ${inView ? 'in-view' : ''}`}
              style={{
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  background: '#082B59',
                  cursor: 'default',
                }}
                className="group"
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) { img.style.opacity = '1'; img.style.transform = 'scale(1.04)' }
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) { img.style.opacity = '0.82'; img.style.transform = 'scale(1)' }
                }}
              >
                {/* Photo */}
                <div style={{ aspectRatio: '3/4' }}>
                  <img
                    src={p.image}
                    alt={p.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.82,
                      transform: 'scale(1)',
                      transition: 'opacity 0.6s ease, transform 0.6s ease',
                    }}
                  />
                </div>

                {/* Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(4,26,56,0.85) 0%, rgba(4,26,56,0.2) 55%, transparent 100%)',
                  }}
                />

                {/* Labels */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.25rem 1.125rem',
                  }}
                >
                  {/* Yellow accent line */}
                  <div style={{ width: '20px', height: '1.5px', background: '#FFD900', marginBottom: '0.5rem' }} />
                  <h3
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      color: '#fff',
                      letterSpacing: '-0.01em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {p.label}
                  </h3>
                  <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
                    {p.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
