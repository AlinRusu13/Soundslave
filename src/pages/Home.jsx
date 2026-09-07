import { useNavigate } from 'react-router-dom'
import { bands } from '../data/discography'
import BandCard from '../components/BandCard'
import ConcertBackground from '../components/ConcertBackground'
import SiteHeader from '../components/SiteHeader'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen text-paper font-body relative">
      <ConcertBackground />
      <div className="grain-overlay" />

      <SiteHeader />

      <header className="relative z-10 text-center pt-28 pb-20 px-4">
        <p className="font-stamp text-smoke text-sm tracking-widest mb-4">SEATTLE, WASHINGTON</p>
        <h1 className="font-flyer text-6xl md:text-8xl tracking-wide leading-none mb-4">
          SOUND<span style={{ color: '#D98A3D' }}>SLAVE</span>
        </h1>
        <p className="text-smoke max-w-lg mx-auto">
          A fan hub for Soundgarden and Audioslave — discography, history, and the sound that came out of it.
        </p>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 justify-center">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} onSelect={(b) => navigate(`/band/${b.id}`)} />
        ))}
      </main>

      <footer className="relative z-10 text-center py-16">
        <p className="font-stamp text-smoke text-xs">// FAN PROJECT — NOT AFFILIATED WITH THE BANDS OR THEIR LABELS</p>
      </footer>
    </div>
  )
}

export default Home