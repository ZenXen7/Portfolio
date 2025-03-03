"use client"

import { useEffect, useRef } from "react"

interface GradientWaveBackgroundProps {
  className?: string
}

export function GradientWaveBackground({ className }: GradientWaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(109, 40, 217, 0.5)") // Purple
      gradient.addColorStop(0.5, "rgba(79, 70, 229, 0.3)") // Indigo
      gradient.addColorStop(1, "rgba(37, 99, 235, 0.2)") // Blue

      ctx.fillStyle = gradient

      // Draw waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()

        const amplitude = 50 - i * 10
        const frequency = 0.005 + i * 0.002
        const speed = time * (0.2 + i * 0.1)

        ctx.moveTo(0, canvas.height / 2)

        for (let x = 0; x < canvas.width; x += 5) {
          const y = Math.sin(x * frequency + speed) * amplitude + canvas.height / 2
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed inset-0 -z-10 ${className}`} />
}

