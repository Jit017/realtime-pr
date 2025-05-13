"use client"

import { useEffect, useRef } from "react"

export function FloatingIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const icons = [
      {
        icon: "code",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.2,
      },
      {
        icon: "zap",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.2,
      },
      {
        icon: "check",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.2,
      },
      {
        icon: "shield",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.2,
      },
      {
        icon: "cpu",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.2,
      },
      {
        icon: "globe",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.2,
      },
      {
        icon: "chart",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        size: 20 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.2,
      },
    ]

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    const drawIcon = (icon: string, x: number, y: number, size: number, opacity: number) => {
      if (!ctx) return

      ctx.globalAlpha = opacity
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#3b82f6"
      ctx.lineWidth = 1.5

      ctx.save()
      ctx.translate(x, y)

      switch (icon) {
        case "code":
          ctx.beginPath()
          ctx.moveTo(-size / 2, 0)
          ctx.lineTo(-size / 4, -size / 2)
          ctx.lineTo(size / 4, -size / 2)
          ctx.lineTo(size / 2, 0)
          ctx.lineTo(size / 4, size / 2)
          ctx.lineTo(-size / 4, size / 2)
          ctx.closePath()
          ctx.stroke()
          break
        case "zap":
          ctx.beginPath()
          ctx.moveTo(0, -size / 2)
          ctx.lineTo(-size / 3, 0)
          ctx.lineTo(-size / 6, 0)
          ctx.lineTo(-size / 3, size / 2)
          ctx.lineTo(size / 3, 0)
          ctx.lineTo(size / 6, 0)
          ctx.closePath()
          ctx.stroke()
          break
        case "check":
          ctx.beginPath()
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
          ctx.moveTo(-size / 4, 0)
          ctx.lineTo(-size / 8, size / 4)
          ctx.lineTo(size / 4, -size / 4)
          ctx.stroke()
          break
        case "shield":
          ctx.beginPath()
          ctx.moveTo(0, -size / 2)
          ctx.lineTo(size / 2, -size / 4)
          ctx.lineTo(size / 2, size / 4)
          ctx.lineTo(0, size / 2)
          ctx.lineTo(-size / 2, size / 4)
          ctx.lineTo(-size / 2, -size / 4)
          ctx.closePath()
          ctx.stroke()
          break
        case "cpu":
          ctx.beginPath()
          ctx.rect(-size / 3, -size / 3, (2 * size) / 3, (2 * size) / 3)
          ctx.moveTo(-size / 2, -size / 6)
          ctx.lineTo(-size / 3, -size / 6)
          ctx.moveTo(-size / 2, size / 6)
          ctx.lineTo(-size / 3, size / 6)
          ctx.moveTo(size / 3, -size / 6)
          ctx.lineTo(size / 2, -size / 6)
          ctx.moveTo(size / 3, size / 6)
          ctx.lineTo(size / 2, size / 6)
          ctx.moveTo(-size / 6, -size / 2)
          ctx.lineTo(-size / 6, -size / 3)
          ctx.moveTo(size / 6, -size / 2)
          ctx.lineTo(size / 6, -size / 3)
          ctx.moveTo(-size / 6, size / 3)
          ctx.lineTo(-size / 6, size / 2)
          ctx.moveTo(size / 6, size / 3)
          ctx.lineTo(size / 6, size / 2)
          ctx.stroke()
          break
        case "globe":
          ctx.beginPath()
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
          ctx.moveTo(-size / 2, 0)
          ctx.lineTo(size / 2, 0)
          ctx.moveTo(0, -size / 2)
          ctx.lineTo(0, size / 2)
          ctx.stroke()
          break
        case "chart":
          ctx.beginPath()
          ctx.moveTo(-size / 2, size / 2)
          ctx.lineTo(-size / 2, -size / 4)
          ctx.lineTo(-size / 6, -size / 4)
          ctx.moveTo(-size / 3, size / 2)
          ctx.lineTo(-size / 3, 0)
          ctx.lineTo(0, 0)
          ctx.moveTo(-size / 6, size / 2)
          ctx.lineTo(-size / 6, size / 4)
          ctx.lineTo(size / 6, size / 4)
          ctx.moveTo(size / 6, size / 2)
          ctx.lineTo(size / 6, -size / 2)
          ctx.lineTo(size / 2, -size / 2)
          ctx.stroke()
          break
      }

      ctx.restore()
      ctx.globalAlpha = 1
    }

    const render = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw icons
      icons.forEach((icon) => {
        icon.x += icon.speedX
        icon.y += icon.speedY

        // Bounce off edges
        if (icon.x < icon.size / 2 || icon.x > canvas.width - icon.size / 2) {
          icon.speedX *= -1
        }
        if (icon.y < icon.size / 2 || icon.y > canvas.height - icon.size / 2) {
          icon.speedY *= -1
        }

        drawIcon(icon.icon, icon.x, icon.y, icon.size, icon.opacity)
      })

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

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}
