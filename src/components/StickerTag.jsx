function StickerTag({ text, rotate = -6, top, left, right, accent = '#8C4A2F' }) {
  return (
    <div
      className="absolute font-marker text-lg select-none pointer-events-none opacity-70"
      style={{ top, left, right, transform: `rotate(${rotate}deg)`, color: accent }}
    >
      {text}
    </div>
  )
}

export default StickerTag