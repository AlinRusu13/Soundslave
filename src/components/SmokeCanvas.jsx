import { useRef, useEffect } from 'react'

function SmokeCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animationId

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function spawnParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        radius: 80 + Math.random() * 160,
        speedY: 0.15 + Math.random() * 0.35,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: 0.03 + Math.random() * 0.05,
        life: 0,
        maxLife: 600 + Math.random() * 400,
      }
    }

    particles = Array.from({ length: 14 }, () => {
      const p = spawnParticle()
      p.y = Math.random() * canvas.height
      p.life = Math.random() * p.maxLife
      return p
    })

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.y -= p.speedY
        p.x += p.speedX
        p.life += 1

        const fadeIn = Math.min(1, p.life / 100)
        const fadeOut = Math.min(1, (p.maxLife - p.life) / 150)
        const currentOpacity = p.opacity * fadeIn * Math.max(0, fadeOut)

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        gradient.addColorStop(0, `rgba(120,115,105,${currentOpacity})`)
        gradient.addColorStop(1, 'rgba(120,115,105,0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        if (p.life >= p.maxLife) Object.assign(p, spawnParticle())
      })

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1]" style={{ mixBlendMode: 'screen' }} />
}

export default SmokeCanvas