import { useNavigate } from 'react-router-dom'
import { bands } from '../data/discography'
import PosterCard from '../components/PosterCard'
import ConcertBackground from '../components/ConcertBackground'
import SiteHeader from '../components/SiteHeader'
import ConnectionsSection from '../components/ConnectionsSection'
import StickerTag from '../components/StickerTag'
import DistressFilters from '../components/DistressFilters'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen text-paper font-body relative">
      <DistressFilters />
      <ConcertBackground />
      <div className="grain-overlay" />

      <SiteHeader />

      <header className="relative z-10 text-center pt-24 pb-16 px-4">
        <p className="font-stamp text-smoke text-sm tracking-widest mb-3">SEATTLE, WASHINGTON</p>
        <h1 className="distressed-text-heavy font-flyer text-8xl md:text-9xl tracking-wide leading-none mb-3">
          SOUND<span style={{ color: '#8C4A2F' }}>SLAVE</span>
        </h1>
        <p className="font-poster text-smoke max-w-lg mx-auto text-lg">
          A fan hub for Soundgarden and Audioslave — discography, history, and the sound that came out of it.
        </p>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-4">
        <div className="relative">
          <StickerTag text="Seattle '91" top={-24} left={-30} rotate={-10} accent="#8C4A2F" />
          <PosterCard band={bands[0]} onSelect={(b) => navigate(`/band/${b.id}`)} rotate={-3} style={{ minWidth: 280 }} />
        </div>

        <div className="relative md:-ml-4 md:mt-10">
          <StickerTag text="est. 2001" top={-20} right={-20} rotate={8} accent="#445265" />
          <PosterCard band={bands[1]} onSelect={(b) => navigate(`/band/${b.id}`)} rotate={2} style={{ minWidth: 280 }} />
        </div>
      </main>

      <ConnectionsSection />

      <footer className="relative z-10 text-center py-16">
        <p className="font-stamp text-smoke text-xs">// FAN PROJECT — NOT AFFILIATED WITH THE BANDS OR THEIR LABELS</p>
      </footer>
    </div>
  )
}

export default Home