function DistressFilters() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <filter id="roughen">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.09" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="roughen-heavy">
        <feTurbulence type="fractalNoise" baseFrequency="0.02 0.15" numOctaves="2" seed="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="paper-tear">
        <feTurbulence type="fractalNoise" baseFrequency="0.015 0.05" numOctaves="3" seed="11" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  )
}

export default DistressFilters