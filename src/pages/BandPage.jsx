import { useParams, Link } from 'react-router-dom'
import { bands } from '../data/discography'
import { bandHistory } from '../data/bandHistory'
import AlbumSleeve from '../components/AlbumSleeve'
import Timeline from '../components/Timeline'
import MemberCard from '../components/MemberCard'
import QuoteBlock from '../components/QuoteBlock'
import ConcertBackground from '../components/ConcertBackground'
import SiteHeader from '../components/SiteHeader'
import Reveal from '../components/Reveal'
import SectionDivider from '../components/SectionDivider'
import DistressFilters from '../components/DistressFilters'

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
      <DistressFilters />
      <ConcertBackground />
      <div className="grain-overlay" />

      <SiteHeader />

      <header className="relative z-10 px-6 pt-10 pb-8">
        <Link to="/" className="font-stamp text-smoke hover:text-paper text-sm">
          &larr; BACK
        </Link>
        <h1
          className="distressed-text-heavy font-flyer text-7xl md:text-8xl tracking-wide mt-4 uppercase leading-none"
          style={{ color: band.accent }}
        >
          {band.name}
        </h1>
        <p className="font-stamp text-smoke text-sm mt-3">
          {band.formed} — {band.disbanded} · {band.albums.length} studio albums
        </p>
      </header>

      {history && (
        <section className="relative z-10 max-w-2xl mx-auto px-6 py-6 flex flex-col gap-12">
          <Reveal>
            <div>
              <SectionDivider label="The Story" accent={band.accent} />
              <p className="text-paper/80 text-sm leading-relaxed">{history.origin}</p>
            </div>
          </Reveal>

          {history.quote && (
            <Reveal delay={100}>
              <QuoteBlock quote={history.quote} accent={band.accent} />
            </Reveal>
          )}

          <Reveal delay={150}>
            <div>
              <SectionDivider label="Lineup" accent={band.accent} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {history.lineup.map((member) => (
                  <MemberCard
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    photoSrc={member.photo}
                    accent={band.accent}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <SectionDivider label="Timeline" accent={band.accent} />
              <Timeline milestones={history.milestones} accent={band.accent} />
            </div>
          </Reveal>
        </section>
      )}

      <div className="relative z-10 max-w-2xl mx-auto px-6 mt-4">
        <SectionDivider label="Discography" accent={band.accent} />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 pb-16 flex flex-col gap-5">
        {band.albums.map((album, i) => (
          <Reveal key={album.id} delay={i * 60}>
            <AlbumSleeve album={album} accent={band.accent} />
          </Reveal>
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