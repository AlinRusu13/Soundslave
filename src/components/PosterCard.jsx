function PosterCard({ band, onSelect, rotate = 0, style = {} }) {
  return (
    <button
      onClick={() => onSelect(band)}
      className="torn-edge poster-paper poster-shadow relative border border-black/50 p-8 pt-10 flex flex-col items-center gap-3 text-left transition-transform hover:z-20"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = `rotate(0deg) scale(1.03)`)}
      onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1)`)}
    >
      <span className="staple" style={{ top: 6, left: 14, transform: 'rotate(-8deg)' }} />
      <span className="staple" style={{ top: 6, right: 14, transform: 'rotate(8deg)' }} />
      <div className="halftone absolute inset-0 opacity-25 pointer-events-none" />

      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center mb-2 border-2"
        style={{ borderColor: band.accent, boxShadow: `0 3px 8px rgba(0,0,0,0.6)` }}
      >
        <span className="distressed-text font-flyer text-3xl" style={{ color: band.accent }}>
          {band.name[0]}
        </span>
      </div>

      <h3 className="distressed-text relative font-flyer text-5xl tracking-wide text-center uppercase leading-none">
        {band.name}
      </h3>
      <p className="relative font-stamp text-smoke text-sm mt-1">
        {band.formed} — {band.disbanded}
      </p>
      <p className="relative text-smoke text-xs mt-2">{band.albums.length} studio albums</p>
    </button>
  )
}

export default PosterCard