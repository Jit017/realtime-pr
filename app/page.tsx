import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import {
  Code2,
  Zap,
  CheckCircle,
  Shield,
  Cpu,
  Globe,
  BarChart,
  Github,
  BookOpen,
  MessageSquare,
  Terminal,
} from "lucide-react"
import { TerminalDemo } from "@/components/terminal-demo"
import { FeatureCard } from "@/components/feature-card"
import { StepCard } from "@/components/step-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { AnimatedGradientBorder } from "@/components/animated-gradient-border"
import { FloatingIcons } from "@/components/floating-icons"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6" />
          <span className="font-bold text-xl">RealTimePR</span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#installation" className="hover:text-primary transition-colors">
              Installation
            </Link>
            <Link href="#how-it-works" className="hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link
              href="https://github.com/Jit017/realtimepr"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </Link>
          </nav>
          <ModeToggle />
          <Button asChild>
            <Link href="https://www.npmjs.com/package/@jit017/realtimepr" target="_blank">
              Get Started
            </Link>
          </Button>
        </div>
      </header>
      <div className="md:hidden">
        <Button variant="ghost" size="icon" className="text-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <FloatingIcons />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-2">
                Command-line code review tool
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                RealTimePR
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">Instant Code Reviews in Your Terminal</p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Get real-time feedback, linting, and AI-powered suggestions for your code directly in your terminal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="relative group overflow-hidden" asChild>
                  <Link href="https://www.npmjs.com/package/@jit017/realtimepr" target="_blank">
                    <span className="relative z-10">Get Started</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 group-hover:opacity-90 transition-opacity"></span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link href="https://github.com/Jit017/realtimepr" target="_blank">
                    <Github className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    <span className="group-hover:text-primary transition-colors">GitHub</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <AnimatedGradientBorder>
                <TerminalDemo />
              </AnimatedGradientBorder>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                RealTimePR comes packed with everything you need for comprehensive code reviews.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Globe className="h-8 w-8" />}
                title="Multi-language Support"
                description="Works with TypeScript, JavaScript, Python, Java, Go, and more."
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8" />}
                title="Real-time Feedback"
                description="Get instant feedback as you code without switching context."
              />
              <FeatureCard
                icon={<CheckCircle className="h-8 w-8" />}
                title="Best Practices Checks"
                description="Ensures your code follows industry best practices and standards."
              />
              <FeatureCard
                icon={<Code2 className="h-8 w-8" />}
                title="Linting & Auto-fixes"
                description="Automatically detect and fix common code issues and style problems."
              />
              <FeatureCard
                icon={<Cpu className="h-8 w-8" />}
                title="AI-powered Suggestions"
                description="Leverage OpenAI to get smart recommendations for improving your code."
              />
              <FeatureCard
                icon={<Shield className="h-8 w-8" />}
                title="Security & Performance"
                description="Identify security vulnerabilities and performance bottlenecks."
              />
              <FeatureCard
                icon={<BarChart className="h-8 w-8" />}
                title="Project-wide Analysis"
                description="Analyze entire projects to ensure consistency and quality."
              />
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Installation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get up and running in seconds with a simple npm command.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm md:text-base">
                  <code>npm install -g @jit017/realtimepr</code>
                </pre>
              </div>
              <p className="text-center text-muted-foreground">Then use it on any file:</p>
              <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm md:text-base">
                  <code>realtimepr myfile.js --type linting</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                RealTimePR integrates seamlessly into your workflow in just three simple steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="animate-float" style={{ animationDelay: `${(1 - 1) * 0.2}s` }}>
                <StepCard
                  number={1}
                  title="Install the Tool"
                  description="Install RealTimePR globally using npm or yarn."
                />
              </div>
              <div className="animate-float" style={{ animationDelay: `${(2 - 1) * 0.2}s` }}>
                <StepCard
                  number={2}
                  title="Run on Your Code"
                  description="Execute the CLI command on your files or projects."
                />
              </div>
              <div className="animate-float" style={{ animationDelay: `${(3 - 1) * 0.2}s` }}>
                <StepCard
                  number={3}
                  title="Get Instant Feedback"
                  description="Receive actionable insights and suggestions immediately."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Developer Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See what developers are saying about RealTimePR.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <TestimonialCard
                quote="RealTimePR has completely transformed my coding workflow. The instant feedback is invaluable."
                author="Coming soon"
                role="Senior Developer"
              />
              <TestimonialCard
                quote="I've caught so many potential issues before they made it to production. This tool is a game-changer."
                author="Coming soon"
                role="Full Stack Engineer"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your coding experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join developers worldwide who are using RealTimePR to write better code faster.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://www.npmjs.com/package/@jit017/realtimepr" target="_blank">
                Get Started Now
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-16 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                <span className="font-bold text-lg">RealTimePR</span>
              </div>
              <p className="text-muted-foreground">Instant code reviews in your terminal.</p>
              <p className="text-muted-foreground">
                Created by{" "}
                <a
                  href="https://www.linkedin.com/in/prithwijit-choudhury-7a299b273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                  Prithwijit Choudhury
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#installation" className="text-muted-foreground hover:text-foreground transition-colors">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/Jit017/realtimepr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/@jit017/realtimepr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Open Source</h3>
              <p className="text-muted-foreground">RealTimePR is an open source project. Contributions are welcome!</p>
              <div className="mt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/Jit017/realtimepr" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} RealTimePR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
