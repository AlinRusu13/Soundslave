import { useState } from 'react'

function MemberCard({ name, role, photoSrc, accent }) {
  const [failed, setFailed] = useState(!photoSrc)

  return (
    <div className="poster-paper poster-shadow flex items-center gap-4 border border-black/40 rounded p-4">
      <div
        className="w-14 h-14 rounded-full flex-shrink-0 border-2 overflow-hidden flex items-center justify-center"
        style={{ borderColor: accent }}
      >
        {!failed ? (
          <img
            src={photoSrc}
            alt={name}
            onError={() => setFailed(true)}
            className="w-full h-full object-cover grayscale contrast-110"
          />
        ) : (
          <span className="distressed-text font-flyer font-semibold text-lg" style={{ color: accent }}>
            {name[0]}
          </span>
        )}
      </div>
      <div>
        <p className="font-medium text-paper">{name}</p>
        <p className="font-stamp text-smoke text-xs mt-0.5">{role}</p>
      </div>
    </div>
  )
}

export default MemberCard