function ConcertBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient — dark stage void with a hint of warm haze rising from the "stage" */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(217,138,61,0.12), transparent 60%), radial-gradient(ellipse at 50% 0%, rgba(61,90,115,0.1), transparent 55%), #0D0D0E',
        }}
      />

      {/* Sweeping spotlight beams */}
      <div
        className="beam"
        style={{ left: '20%', background: 'linear-gradient(to bottom, rgba(217,138,61,0.25), transparent 70%)', animationDuration: '9s' }}
      />
      <div
        className="beam"
        style={{ left: '55%', background: 'linear-gradient(to bottom, rgba(179,52,31,0.2), transparent 70%)', animationDuration: '11s', animationDelay: '2s' }}
      />
      <div
        className="beam"
        style={{ left: '75%', background: 'linear-gradient(to bottom, rgba(61,90,115,0.2), transparent 70%)', animationDuration: '13s', animationDelay: '4s' }}
      />

      {/* Drifting smoke layers */}
      <div
        className="smoke-layer-1 absolute -inset-1/4 opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 60%, rgba(107,106,102,0.4), transparent 60%)' }}
      />
      <div
        className="smoke-layer-2 absolute -inset-1/4 opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle at 70% 40%, rgba(61,60,58,0.5), transparent 55%)' }}
      />

      {/* Crowd silhouette along the bottom edge */}
      <svg
        className="crowd-silhouette absolute bottom-0 left-0 right-0 w-full"
        height="120"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <rect x="0" y="60" width="1200" height="60" fill="#0D0D0E" />
        {Array.from({ length: 60 }).map((_, i) => {
          const x = i * 20 + (i % 3) * 4
          const headR = 8 + (i % 4)
          const armUp = i % 5 === 0
          return (
            <g key={i} fill="#000000" opacity="0.85">
              <circle cx={x} cy={70 - headR} r={headR} />
              <rect x={x - 6} y={70} width="12" height="30" rx="4" />
              {armUp && <rect x={x - 2} y={45} width="5" height="25" rx="2" transform={`rotate(-15 ${x} 60)`} />}
            </g>
          )
        })}
      </svg>

      {/* Vignette to keep edges dark and focus center */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }}
      />
    </div>
  )
}

export default ConcertBackground