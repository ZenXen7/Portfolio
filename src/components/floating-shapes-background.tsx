'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from "next-themes"

interface FloatingShapesBackgroundProps {
  className?: string
}

export function FloatingShapesBackground({ className }: FloatingShapesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    
    // Create shapes
    const shapes: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      type: 'circle' | 'square' | 'triangle'
      color: string
      rotation: number
      rotationSpeed: number
    }[] = []
    
    const getLightModeColors = () => [
      'rgba(239, 68, 68, 0.2)',  // Red
      'rgba(249, 115, 22, 0.15)', // Orange
      'rgba(234, 179, 8, 0.1)'    // Yellow
    ]
    
    const getDarkModeColors = () => [
      'rgba(109, 40, 217, 0.2)', // Purple
      'rgba(79, 70, 229, 0.15)', // Indigo
      'rgba(37, 99, 235, 0.1)'   // Blue
    ]
    
    const types = ['circle', 'square', 'triangle']
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Reset shapes on resize
      shapes.length = 0
      
      const colors = theme === 'dark' ? getDarkModeColors() : getLightModeColors()
      
      // Create new shapes
      for (let i = 0; i < 20; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 50 + 20,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          type: types[Math.floor(Math.random() * types.length)] as 'circle' | 'square' | 'triangle',
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01
        })
      }
    }
    
    const drawShape = (shape: typeof shapes[0]) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.fillStyle = shape.color
      
      switch (shape.type) {
        case 'circle':
          ctx.beginPath()
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
          ctx.fill()
          break
          
        case 'square':
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          break
          
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(0, -shape.size / 2)
          ctx.lineTo(shape.size / 2, shape.size / 2)
          ctx.lineTo(-shape.size / 2, shape.size / 2)
          ctx.closePath()
          ctx.fill()
          break
      }
      
      ctx.restore()
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      shapes.forEach(shape => {
        // Update position
        shape.x += shape.speedX
        shape.y += shape.speedY
        shape.rotation += shape.rotationSpeed
        
        // Bounce off edges
        if (shape.x < -shape.size || shape.x > canvas.width + shape.size) {
          shape.speedX *= -1
        }
        
        if (shape.y < -shape.size || shape.y > canvas.height + shape.size) {
          shape.speedY *= -1
        }
        
        drawShape(shape)
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 -z-10 ${className}`}
    />
  )
}
