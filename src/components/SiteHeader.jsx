import { useState } from 'react'
import { Link } from 'react-router-dom'

function BandLogo({ name, src, accent }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="font-flyer text-xl md:text-2xl tracking-wide" style={{ color: accent }}>
        {name}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      onError={() => setFailed(true)}
      className="h-8 md:h-10 w-auto object-contain"
      style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.6))' }}
    />
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-void/70 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-stamp text-smoke text-xs tracking-widest hover:text-paper transition-colors">
          SOUNDSLAVE
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/band/soundgarden">
            <BandLogo name="SOUNDGARDEN" src="/logos/soundgarden-logo.png" accent="#D98A3D" />
          </Link>
          <span className="text-ash text-lg">×</span>
          <Link to="/band/audioslave">
            <BandLogo name="AUDIOSLAVE" src="/logos/audioslave-logo.png" accent="#3D5A73" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader