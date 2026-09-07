import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function AlbumSleeve({ album, accent }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="torn-edge bg-panel-raised border border-black/40 overflow-hidden">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-white/5 transition-colors"
      >
        <div
          className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0 border-2"
          style={{ borderColor: accent }}
        >
          <span className="font-flyer text-xl" style={{ color: accent }}>
            {album.year.toString().slice(2)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-flyer text-2xl tracking-wide truncate">{album.title}</h3>
          <p className="font-stamp text-bone text-sm">{album.year}</p>
        </div>

        <ChevronDown
          size={20}
          className={`text-bone flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumSleeve