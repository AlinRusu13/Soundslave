function TriviaList({ facts, accent }) {
  if (!facts || facts.length === 0) return null

  return (
    <div className="mt-3 pl-4 border-l-2 flex flex-col gap-2" style={{ borderColor: accent }}>
      {facts.map((fact, i) => (
        <p key={i} className="text-paper/70 text-xs leading-relaxed">
          {fact}
        </p>
      ))}
    </div>
  )
}

export default TriviaList