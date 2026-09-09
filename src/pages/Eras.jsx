import { Link } from 'react-router-dom'
import { eras } from '../data/eras'
import ConcertBackground from '../components/ConcertBackground'
import SiteHeader from '../components/SiteHeader'
import Reveal from '../components/Reveal'
import DistressFilters from '../components/DistressFilters'

function Eras() {
  return (
    <div className="min-h-screen text-paper font-body relative">
      <DistressFilters />
      <ConcertBackground />
      <div className="grain-overlay" />
      <SiteHeader />

      <header className="relative z-10 px-6 pt-10 pb-8 text-center">
        <Link to="/" className="font-stamp text-smoke hover:text-paper text-sm">
          &larr; BACK
        </Link>
        <h1 className="distressed-text-heavy font-flyer text-7xl md:text-8xl tracking-wide mt-4">ERAS</h1>
        <p className="font-stamp text-smoke text-sm mt-2">// ONE TIMELINE, TWO BANDS</p>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto px-6 pb-16">
        <div className="relative pl-8 flex flex-col gap-8">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-white/10" />
          {eras.map((e, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="relative">
                <span className="rivet absolute -left-8 top-1 w-4 h-4 rounded-full" />
                <div className="flex items-baseline gap-3">
                  <p className="distressed-text font-flyer text-3xl" style={{ color: e.accent }}>{e.year}</p>
                  <p className="font-stamp text-smoke text-xs uppercase tracking-wide">{e.band}</p>
                </div>
                <p className="text-paper/85 text-sm mt-1">{e.event}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Eras