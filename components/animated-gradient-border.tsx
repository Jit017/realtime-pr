"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientBorder({ children, className = "" }: AnimatedGradientBorderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let hue = 0

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        // Set canvas dimensions to match parent element
        canvas.width = rect.width
        canvas.height = rect.height

        // Set CSS dimensions to match parent element
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`
      }
    }

    const render = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient border - using a thinner line
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `hsla(${hue}, 100%, 60%, 0.7)`)
      gradient.addColorStop(0.5, `hsla(${hue + 120}, 100%, 60%, 0.7)`)
      gradient.addColorStop(1, `hsla(${hue + 240}, 100%, 60%, 0.7)`)

      // Draw a single pixel border
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1

      // Draw rounded rectangle with proper border radius
      const radius = 8
      ctx.beginPath()
      ctx.moveTo(radius, 0)
      ctx.lineTo(canvas.width - radius, 0)
      ctx.quadraticCurveTo(canvas.width, 0, canvas.width, radius)
      ctx.lineTo(canvas.width, canvas.height - radius)
      ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - radius, canvas.height)
      ctx.lineTo(radius, canvas.height)
      ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius)
      ctx.lineTo(0, radius)
      ctx.quadraticCurveTo(0, 0, radius, 0)
      ctx.closePath()
      ctx.stroke()

      hue = (hue + 0.5) % 360

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 rounded-lg"
        style={{ width: "100%", height: "100%" }}
      />
      {children}
    </div>
  )
}
