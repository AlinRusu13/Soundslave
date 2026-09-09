import { useState } from 'react'
import { Link } from 'react-router-dom'
import DistressFilters from './DistressFilters'

function BandLogo({ name, src, accent }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="distressed-text font-flyer font-semibold text-xl md:text-2xl tracking-wide uppercase" style={{ color: accent }}>
        {name}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      onError={() => setFailed(true)}
      className="h-8 md:h-10 w-auto object-contain grayscale contrast-125"
      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.7))' }}
    />
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-void/80 border-b border-white/10">
      <DistressFilters />
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <Link to="/" className="font-stamp text-smoke text-xs tracking-widest hover:text-paper transition-colors">
            SOUNDSLAVE
          </Link>
          <Link to="/eras" className="hidden sm:block font-stamp text-smoke text-xs tracking-widest hover:text-paper transition-colors">
            ERAS
          </Link>
          <Link to="/about" className="hidden sm:block font-stamp text-smoke text-xs tracking-widest hover:text-paper transition-colors">
            ABOUT
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <Link to="/band/soundgarden">
            <BandLogo name="SOUNDGARDEN" src="/logos/soundgarden-logo.png" accent="#8C4A2F" />
          </Link>
          <span className="text-ash text-lg">×</span>
          <Link to="/band/audioslave">
            <BandLogo name="AUDIOSLAVE" src="/logos/audioslave-logo.png" accent="#445265" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader