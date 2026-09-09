import { Link } from 'react-router-dom'
import Reveal from './Reveal'

function ConnectionsSection() {
  return (
    <Reveal>
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="font-stamp text-smoke text-sm tracking-widest mb-4">THE THROUGHLINE</p>
        <h2 className="distressed-text font-flyer font-semibold text-4xl md:text-5xl tracking-wide mb-6 uppercase">
          ONE VOICE, <span style={{ color: '#8C4A2F' }}>TWO BANDS</span>
        </h2>
        <p className="text-paper/80 max-w-xl mx-auto leading-relaxed mb-8">
          Chris Cornell stood at the center of both stories — from Soundgarden's role in
          defining Seattle's sound, to reshaping his voice entirely alongside three quarters
          of Rage Against the Machine in Audioslave. Two bands, one unmistakable throughline.
        </p>
        <div className="flex items-center justify-center gap-6">
          <Link
            to="/band/soundgarden"
            className="stamped-btn font-stamp text-sm px-6 py-3 border-2 transition-colors hover:bg-white/5"
            style={{ borderColor: '#8C4A2F', color: '#8C4A2F' }}
          >
            SOUNDGARDEN
          </Link>
          <span className="text-ash">→</span>
          <Link
            to="/band/audioslave"
            className="stamped-btn font-stamp text-sm px-6 py-3 border-2 transition-colors hover:bg-white/5"
            style={{ borderColor: '#445265', color: '#445265' }}
          >
            AUDIOSLAVE
          </Link>
        </div>
      </section>
    </Reveal>
  )
}

export default ConnectionsSection