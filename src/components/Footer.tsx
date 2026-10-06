const NAV = {
  Products: ['One Drop', 'HV Gel', 'Woodfill', 'Spray Activator', 'Adhesive Remover'],
  Applications: ['Wood & MDF', 'Footwear', 'Jewellery', 'Automotive', 'Hardware & Repairs'],
  Company: ['About Us', 'Technology', 'Become a Dealer', 'Contact'],
}

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1.5" y="1.5" width="15" height="15" rx="4.5" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="13.5" cy="4.5" r="0.75" fill="currentColor"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="4" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M7 6.5l5 2.5-5 2.5V6.5Z" fill="currentColor"/>
  </svg>
)

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M6 7.5C6 7.5 6.5 10 9 12.5 11 14 12.5 12 12.5 12L11 10.5 9.5 11.5 7 8.5 8 7 6.5 5.5 5.5 6.5 6 7.5Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#082B59' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">

        {/* Main grid */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.375rem',
                  color: '#fff',
                  letterSpacing: '-0.03em',
                }}
              >
                SAT<span style={{ color: '#FFD900' }}>BOND</span>
              </span>
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#FFD900',
                  display: 'inline-block',
                  marginBottom: '2px',
                }}
              />
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
              One Drop Instant Adhesive
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, maxWidth: '280px', marginBottom: '2rem' }}>
              Professional-grade adhesives engineered for strong, reliable and precise bonding. Made in India.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.75rem' }}>
              {[
                { icon: '📞', text: '+91 99999 00000' },
                { icon: '✉️', text: 'info@satbond.in' },
                { icon: '📍', text: 'Delhi, India' },
              ].map(({ text }, i) => (
                <div key={i} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>
                  {text}
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {[
                { label: 'Instagram', Icon: InstagramIcon },
                { label: 'YouTube', Icon: YoutubeIcon },
                { label: 'WhatsApp', Icon: WhatsappIcon },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    color: 'rgba(255,255,255,0.35)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FFD900')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(NAV).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: '0.5625rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.28)',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            padding: '1.25rem 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.28)', fontFamily: 'Inter, sans-serif' }}>
            © 2026 SATBOND. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: '0.6875rem',
                  color: 'rgba(255,255,255,0.28)',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
