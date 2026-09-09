function QuoteBlock({ quote, accent }) {
  return (
    <div className="poster-paper poster-shadow relative py-8 px-6 border-l-4" style={{ borderColor: accent }}>
      <span
        className="distressed-text-heavy absolute -top-5 left-2 font-flyer font-semibold text-6xl opacity-25"
        style={{ color: accent }}
      >
        "
      </span>
      <p className="font-stamp text-paper/90 text-lg leading-relaxed relative z-10">{quote}</p>
    </div>
  )
}

export default QuoteBlock