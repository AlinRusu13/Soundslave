function Timeline({ milestones, accent }) {
  return (
    <div className="relative pl-6 flex flex-col gap-6">
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10" />
      {milestones.map((m, i) => (
        <div key={i} className="relative">
          <span
            className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2"
            style={{ borderColor: accent, background: '#0D0D0E' }}
          />
          <p className="font-stamp text-sm" style={{ color: accent }}>{m.year}</p>
          <p className="text-paper/90 text-sm mt-1">{m.event}</p>
        </div>
      ))}
    </div>
  )
}

export default Timeline