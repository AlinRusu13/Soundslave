import SmokeCanvas from './SmokeCanvas'

function ConcertBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="brick-wall absolute inset-0" />
      <div className="wall-streaks" />

      {/* Hanging bulb + light cone */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-16 bg-black/60" />
        <div
          className="bulb-flicker w-3 h-4 rounded-full"
          style={{ background: '#F0E6C8', boxShadow: '0 0 20px 6px rgba(240,230,200,0.5)' }}
        />
      </div>
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[800px] opacity-[0.18]"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, transparent 35%, rgba(240,230,200,0.5) 50%, transparent 65%)',
        }}
      />

      <SmokeCanvas />

      <div
        className="absolute inset-0 z-[2]"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)' }}
      />
    </div>
  )
}

export default ConcertBackground