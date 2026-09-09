function SectionDivider({ label, accent }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-2 h-2 rotate-45" style={{ background: accent }} />
      <h2 className="distressed-text font-flyer text-3xl tracking-wide uppercase" style={{ color: accent }}>
        {label}
      </h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}

export default SectionDivider