"use client"

interface AnimatedBackgroundProps {
  className?: string
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background" />
      
      {/* Subtle animated orbs for dark mode */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse bg-purple-600" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse bg-blue-600" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse bg-indigo-600" 
             style={{ animationDuration: '8s', animationDelay: '4s' }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </div>
  )
}

