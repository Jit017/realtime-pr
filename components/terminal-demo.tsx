"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function TerminalDemo() {
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const fullText = `$ realtimepr app.js

Analyzing app.js...

✅ No syntax errors detected
⚠️ Line 24: Consider using const instead of let for variables that aren't reassigned
🔍 Line 37: This function could be simplified with optional chaining
🛡️ Line 52: Potential security vulnerability in user input handling
⚡ Line 78: Performance improvement: Move this calculation outside the loop

✨ 4 suggestions applied automatically
📊 Overall score: 87/100

Run 'realtimepr app.js --fix' to apply all suggested changes`

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(typingInterval)
        setIsComplete(true)
      }

      // Auto-scroll to bottom
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, 30)

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
      <div className="flex items-center gap-1.5 p-3 bg-zinc-800">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-xs text-zinc-400 font-medium">Terminal — realtimepr</div>
      </div>
      <div
        ref={terminalRef}
        className="p-4 font-mono text-sm text-green-400 bg-black min-h-[320px] max-h-[320px] overflow-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900"
      >
        {text.split("\n").map((line, i) => (
          <div
            key={i}
            className={cn(
              "transition-opacity duration-300",
              line.includes("✅")
                ? "text-green-400"
                : line.includes("⚠️")
                  ? "text-yellow-400"
                  : line.includes("🔍")
                    ? "text-blue-400"
                    : line.includes("🛡️")
                      ? "text-red-400"
                      : line.includes("⚡")
                        ? "text-purple-400"
                        : line.includes("✨")
                          ? "text-cyan-400"
                          : line.includes("📊")
                            ? "text-pink-400"
                            : "",
            )}
          >
            {line}
          </div>
        ))}
        <span
          className={cn(
            "ml-0.5 inline-block w-2 h-4 bg-green-400",
            !cursorVisible && "opacity-0",
            isComplete && "animate-pulse",
          )}
        >
          &nbsp;
        </span>
      </div>
    </div>
  )
}
