import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { trackTrivia } from '../data/trackTrivia'
import TriviaList from './TriviaList'

function AlbumSleeve({ album, accent }) {
  const [isOpen, setIsOpen] = useState(false)
  const trivia = trackTrivia[album.id]

  return (
    <div className="poster-paper poster-shadow border border-black/50 overflow-hidden relative">
      {/* Ticket-stub perforation notches */}
      <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-void" />
      <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-void" />

      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-black/10 transition-colors"
      >
        <div
          className="w-14 h-14 flex items-center justify-center flex-shrink-0 border-2"
          style={{ borderColor: accent, boxShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
        >
          <span className="distressed-text font-flyer text-2xl" style={{ color: accent }}>
            {album.year.toString().slice(2)}
          </span>
        </div>

        <div className="flex-1 min-w-0 border-l border-dashed border-white/15 pl-4">
          <h3 className="distressed-text font-flyer text-3xl tracking-wide truncate uppercase leading-none">
            {album.title}
          </h3>
          <p className="font-stamp text-smoke text-sm mt-1">ADMIT ONE · {album.year}</p>
        </div>

        <ChevronDown
          size={20}
          className={`text-smoke flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="p-4 pt-0">
            <iframe
              src={`https://open.spotify.com/embed/album/${album.spotifyId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-md"
            />
            {trivia && (
              <div className="mt-4">
                <p className="font-stamp text-xs tracking-widest" style={{ color: accent }}>
                  DID YOU KNOW
                </p>
                <TriviaList facts={trivia.facts} accent={accent} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumSleeve