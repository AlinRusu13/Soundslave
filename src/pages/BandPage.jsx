import { useParams, Link } from 'react-router-dom'
import { bands } from '../data/discography'
import { bandHistory } from '../data/bandHistory'
import AlbumSleeve from '../components/AlbumSleeve'
import Timeline from '../components/Timeline'
import ConcertBackground from '../components/ConcertBackground'
import SiteHeader from '../components/SiteHeader'

function BandPage() {
  const { bandId } = useParams()
  const band = bands.find((b) => b.id === bandId)
  const history = bandHistory[bandId]

  if (!band) {
    return (
      <div className="min-h-screen bg-void text-paper flex items-center justify-center">
        <p className="font-stamp text-smoke">Band not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-paper font-body relative">
      <ConcertBackground />
      <div className="grain-overlay" />

      <SiteHeader />

      <header className="relative z-10 px-6 pt-10 pb-8">
        <Link to="/" className="font-stamp text-smoke hover:text-paper text-sm">
          &larr; BACK
        </Link>
        <h1 className="font-flyer text-5xl md:text-6xl tracking-wide mt-4" style={{ color: band.accent }}>
          {band.name}
        </h1>
        <p className="font-stamp text-smoke text-sm mt-2">
          {band.formed} — {band.disbanded} · {band.albums.length} studio albums
        </p>
      </header>

      {history && (
        <section className="relative z-10 max-w-2xl mx-auto px-6 py-6 flex flex-col gap-8">
          <div>
            <h2 className="font-flyer text-2xl tracking-wide mb-3" style={{ color: band.accent }}>
              THE STORY
            </h2>
            <p className="text-paper/80 text-sm leading-relaxed">{history.origin}</p>
          </div>

          <div>
            <h2 className="font-flyer text-2xl tracking-wide mb-3" style={{ color: band.accent }}>
              LINEUP
            </h2>
            <ul className="flex flex-col gap-1.5">
              {history.lineup.map((member) => (
                <li key={member} className="font-stamp text-paper/80 text-sm">{member}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-flyer text-2xl tracking-wide mb-4" style={{ color: band.accent }}>
              TIMELINE
            </h2>
            <Timeline milestones={history.milestones} accent={band.accent} />
          </div>
        </section>
      )}

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <h2 className="font-flyer text-2xl tracking-wide mb-4 mt-4" style={{ color: band.accent }}>
          DISCOGRAPHY
        </h2>
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 pb-10 flex flex-col gap-4">
        {band.albums.map((album) => (
          <AlbumSleeve key={album.id} album={album} accent={band.accent} />
        ))}
      </main>

      <footer className="relative z-10 text-center pb-10">
        <p className="font-stamp text-smoke text-xs">
          // ALBUM PREVIEWS VIA SPOTIFY — FAN PROJECT, NOT AFFILIATED
        </p>
      </footer>
    </div>
  )
}

export default BandPage