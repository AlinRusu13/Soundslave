function BandCard({ band, onSelect }) {
  return (
    <button
      onClick={() => onSelect(band)}
      className="torn-edge group relative flex-1 min-w-[260px] max-w-sm bg-panel-raised/80 backdrop-blur-sm border border-white/10 p-8 flex flex-col items-center gap-3 text-left transition-transform hover:-translate-y-1"
    >
      <div className="halftone absolute inset-0 opacity-30 pointer-events-none" />

      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center mb-2 border-2"
        style={{ borderColor: band.accent, boxShadow: `0 0 24px ${band.accent}55` }}
      >
        <span className="font-flyer text-2xl" style={{ color: band.accent }}>
          {band.name[0]}
        </span>
      </div>

      <h3 className="relative font-flyer text-3xl tracking-wide text-center">{band.name}</h3>
      <p className="relative font-stamp text-smoke text-sm">
        {band.formed} — {band.disbanded}
      </p>
      <p className="relative text-smoke text-xs mt-2">{band.albums.length} studio albums</p>
    </button>
  )
}

export default BandCard