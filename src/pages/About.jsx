import { Link } from 'react-router-dom'
import ConcertBackground from '../components/ConcertBackground'
import SiteHeader from '../components/SiteHeader'
import Reveal from '../components/Reveal'
import SectionDivider from '../components/SectionDivider'
import DistressFilters from '../components/DistressFilters'

function About() {
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
        <h1 className="distressed-text-heavy font-flyer text-7xl md:text-8xl tracking-wide mt-4">ABOUT</h1>
      </header>

      <main className="relative z-10 max-w-xl mx-auto px-6 pb-16 flex flex-col gap-10">
        <Reveal>
          <div>
            <SectionDivider label="What This Is" accent="#8C4A2F" />
            <p className="text-paper/80 text-sm leading-relaxed">
              Soundslave is an independent fan project built to explore the discography and
              history of Soundgarden and Audioslave in one place. It's not affiliated with
              either band, their labels, or estates — just a tribute built by a fan.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <SectionDivider label="Music & Sources" accent="#8C4A2F" />
            <p className="text-paper/80 text-sm leading-relaxed">
              Album previews are embedded directly via Spotify's official player. Historical
              facts and dates are drawn from publicly available band history. No copyrighted
              lyrics, artwork, or official photography are reproduced on this site.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div>
            <SectionDivider label="A Note" accent="#8C4A2F" />
            <p className="text-paper/80 text-sm leading-relaxed">
              Built as a personal project by a fan of both bands, and of the sound that ran
              through them.
            </p>
          </div>
        </Reveal>
      </main>
    </div>
  )
}

export default About