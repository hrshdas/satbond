import React from 'react'

interface SatbondBottleProps {
  className?: string
  style?: React.CSSProperties
  productName?: string
  subtitle?: string
  badgeText?: string
  primaryColor?: string
  accentColor?: string
}

export default function SatbondBottle({
  className = '',
  style = {},
  productName = 'Multi Purpose',
  subtitle = 'For Industrial Use',
  badgeText = 'V7',
  primaryColor = '#FFD900',
  accentColor = '#003E92',
}: SatbondBottleProps) {
  return (
    <svg
      viewBox="0 0 200 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    >
      <defs>
        {/* Yellow Nozzle Gradient */}
        <linearGradient id="yellowCapGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E6B800" />
          <stop offset="25%" stopColor="#FFDC00" />
          <stop offset="50%" stopColor="#FFE655" />
          <stop offset="75%" stopColor="#FFDC00" />
          <stop offset="100%" stopColor="#D9A800" />
        </linearGradient>

        {/* Ribbed White Collar Gradient */}
        <linearGradient id="collarGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D5DBE1" />
          <stop offset="25%" stopColor="#F5F7FA" />
          <stop offset="60%" stopColor="#FFFFFF" />
          <stop offset="85%" stopColor="#E4E8ED" />
          <stop offset="100%" stopColor="#C8D0D9" />
        </linearGradient>

        {/* White Bottle Body 3D Gradient */}
        <linearGradient id="bottleBodyGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#DEE2E8" />
          <stop offset="15%" stopColor="#F7F9FB" />
          <stop offset="48%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#F0F3F7" />
          <stop offset="100%" stopColor="#D2D7E0" />
        </linearGradient>

        {/* Yellow Label Gradient */}
        <linearGradient id="yellowLabelGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E6B800" />
          <stop offset="18%" stopColor="#FFDC00" />
          <stop offset="50%" stopColor="#FFE54D" />
          <stop offset="82%" stopColor="#FFDC00" />
          <stop offset="100%" stopColor="#E6B800" />
        </linearGradient>

        {/* Blue V7 Stripe Gradient */}
        <linearGradient id="v7StripeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#002D6B" />
          <stop offset="35%" stopColor="#004CB7" />
          <stop offset="70%" stopColor="#0055D4" />
          <stop offset="100%" stopColor="#002D6B" />
        </linearGradient>

        {/* Bottle Drop Shadow */}
        <filter id="bottleShadow" x="-30%" y="-15%" width="160%" height="130%">
          <feDropShadow dx="0" dy="20" stdDeviation="28" floodColor="#082B59" floodOpacity="0.22" />
        </filter>
      </defs>

      <g filter="url(#bottleShadow)">
        {/* --- 1. TAPERED CONICAL YELLOW NOZZLE CAP --- */}
        {/* Top Nozzle Tip */}
        <path d="M94 8 Q100 4 106 8 L113 45 L87 45 Z" fill="url(#yellowCapGrad)" />
        <ellipse cx="100" cy="8" rx="6" ry="2.5" fill="#FFF2B2" opacity="0.9" />

        {/* Main Conical Yellow Body */}
        <path d="M87 45 L113 45 L124 144 L76 144 Z" fill="url(#yellowCapGrad)" />
        {/* Nozzle Specular Highlight */}
        <path d="M92 48 L94 140" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />

        {/* Nozzle Base Rim */}
        <rect x="73" y="142" width="54" height="14" rx="3" fill="url(#yellowCapGrad)" />
        <rect x="73" y="153" width="54" height="3" fill="#C99700" opacity="0.35" />

        {/* --- 2. RIBBED WHITE COLLAR CAP --- */}
        <rect x="66" y="156" width="68" height="60" rx="4" fill="url(#collarGrad)" />
        {/* Vertical ridges on collar */}
        {[72, 78, 84, 90, 96, 102, 108, 114, 120, 126].map(x => (
          <rect key={x} x={x} y="158" width="2" height="56" rx="1" fill="#B4BECB" opacity="0.5" />
        ))}
        {/* Collar highlight */}
        <rect x="74" y="156" width="6" height="60" fill="#FFFFFF" opacity="0.6" />

        {/* --- 3. MAIN BOTTLE BODY (PURE WHITE PLASTIC) --- */}
        <path
          d="M66 214 Q36 224 28 260 L28 510 Q28 536 56 536 L144 536 Q172 536 172 510 L172 260 Q164 224 134 214 Z"
          fill="url(#bottleBodyGrad)"
        />
        {/* Body Edge Highlight (Left) */}
        <path d="M35 262 L35 510" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        {/* Body Edge Shadow (Right) */}
        <path d="M165 262 L165 510" stroke="#B8C1CC" strokeWidth="3" strokeLinecap="round" opacity="0.4" />

        {/* --- 4. BRIGHT YELLOW LABEL --- */}
        <rect x="36" y="270" width="128" height="235" rx="6" fill={primaryColor.startsWith('#FF') ? 'url(#yellowLabelGrad)' : primaryColor} />

        {/* Label top soft highlight */}
        <rect x="36" y="270" width="128" height="4" fill="#FFFFFF" opacity="0.3" />

        {/* Brand: SATBOND ® */}
        <text
          x="100"
          y="306"
          textAnchor="middle"
          fill={accentColor}
          fontSize="21"
          fontWeight="900"
          fontFamily="Manrope, Arial Black, sans-serif"
          letterSpacing="-0.5"
        >
          SATBOND<tspan fontSize="11" dy="-8">®</tspan>
        </text>

        {/* Subtitle: One Drop Instant Adhesive */}
        <text
          x="100"
          y="323"
          textAnchor="middle"
          fill="#111111"
          fontSize="8.5"
          fontWeight="700"
          fontFamily="Inter, Arial, sans-serif"
          letterSpacing="0.2"
        >
          One Drop Instant Adhesive
        </text>

        {/* Main Title: Multi Purpose */}
        <text
          x="100"
          y="348"
          textAnchor="middle"
          fill="#000000"
          fontSize="16"
          fontWeight="900"
          fontFamily="Manrope, Arial Black, sans-serif"
          letterSpacing="-0.3"
        >
          {productName}
        </text>

        {/* Application: For Industrial Use */}
        <text
          x="100"
          y="366"
          textAnchor="middle"
          fill="#111111"
          fontSize="9.5"
          fontWeight="800"
          fontFamily="Inter, Arial, sans-serif"
        >
          {subtitle}
        </text>

        {/* Warning: Keep out of reach from children */}
        <text
          x="100"
          y="385"
          textAnchor="middle"
          fill="#222222"
          fontSize="6.5"
          fontWeight="600"
          fontFamily="Inter, Arial, sans-serif"
        >
          Keep out of reach from children
        </text>

        {/* Guarantee: FOR AN EASY, QUICK AND RELIABLE BOND. */}
        <text
          x="100"
          y="401"
          textAnchor="middle"
          fill="#111111"
          fontSize="6.2"
          fontWeight="800"
          fontFamily="Inter, Arial, sans-serif"
          letterSpacing="0.1"
        >
          FOR AN EASY, QUICK AND
        </text>
        <text
          x="100"
          y="410"
          textAnchor="middle"
          fill="#111111"
          fontSize="6.2"
          fontWeight="800"
          fontFamily="Inter, Arial, sans-serif"
          letterSpacing="0.1"
        >
          RELIABLE BOND.
        </text>

        {/* Storage: Store at below 20°C */}
        <text
          x="100"
          y="425"
          textAnchor="middle"
          fill="#222222"
          fontSize="7.5"
          fontWeight="700"
          fontFamily="Inter, Arial, sans-serif"
        >
          Store at below 20°C
        </text>

        {/* --- BLUE V7 STRIPE --- */}
        <rect x="36" y="435" width="128" height="28" fill="url(#v7StripeGrad)" />
        <text
          x="100"
          y="455"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="19"
          fontWeight="900"
          fontFamily="Manrope, Arial Black, sans-serif"
          letterSpacing="0.5"
        >
          {badgeText}
        </text>

        {/* Yellow bottom label extension continues beneath blue stripe */}
      </g>
    </svg>
  )
}
