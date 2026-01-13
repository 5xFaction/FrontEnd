import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FactionShowcase } from "@/components/faction-showcase"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-muted/20 via-background to-background" />

        <div className="absolute inset-0 overflow-hidden">
          {/* Atmospheric Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
          
          {/* Central Ink/Void Effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-30 blur-3xl" />
             <div className="absolute inset-0 h-[300px] w-[300px] -translate-x-10 translate-y-10 rounded-full bg-indigo-500/10 opacity-30 blur-3xl" />
          </div>

          {/* Minimalist Accents */}
          <div className="absolute left-10 top-1/4 h-20 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
          <div className="absolute right-10 bottom-1/4 h-20 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
          
          {/* Subtle Crosshairs */}
          <div className="absolute left-1/4 top-1/3 opacity-20">
            <div className="h-4 w-4 border-l border-t border-foreground" />
          </div>
          <div className="absolute right-1/4 bottom-1/3 opacity-20">
            <div className="h-4 w-4 border-r border-b border-foreground" />
          </div>

          {/* Animated Pulse Ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <div className="h-[600px] w-[600px] rounded-full border border-foreground/20" />
            <div className="absolute inset-4 rounded-full border border-foreground/10" />
          </div>
        </div>

        <div className="container mx-auto relative z-10 px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="relative inline-block">
              <div className="absolute -left-16 top-1/2 h-px w-12 bg-gradient-to-r from-transparent to-foreground/20" />
              <div className="absolute -right-16 top-1/2 h-px w-12 bg-gradient-to-l from-transparent to-foreground/20" />
              <h1 className="font-mono text-5xl font-black leading-none tracking-tighter md:text-7xl lg:text-8xl">
                5xFaction:
                <br />
                <span className="text-muted-foreground">THE LAST INK</span>
              </h1>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {
                "Enter the ultimate no-loss DeFi arena where five legendary factions battle for yield dominance. Pure strategy. No luck. Just skill."
              }
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/arena">
                <Button size="lg" className="font-mono text-sm">
                  ENTER ARENA <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="font-mono text-sm bg-transparent">
                  READ DOCS
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 h-32 w-32 border-2 border-foreground/10" />
        <div className="absolute right-20 top-40 h-24 w-24 border-2 border-foreground/10" />
      </section>

      {/* Features Section */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-mono text-3xl font-black tracking-tighter md:text-4xl">
            WHY 5xFaction?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 border-border p-6">
              <Shield className="mb-4 h-12 w-12" />
              <h3 className="mb-2 font-mono text-xl font-bold">NO-LOSS BETTING</h3>
              <p className="text-muted-foreground">
                Your principal is 100% safe. Only compete for yield. Withdraw anytime.
              </p>
            </Card>
            <Card className="border-2 border-border p-6">
              <Zap className="mb-4 h-12 w-12" />
              <h3 className="mb-2 font-mono text-xl font-bold">PURE STRATEGY</h3>
              <p className="text-muted-foreground">
                Pentagon Nash Equilibrium. Victory determined by game theory, not chance.
              </p>
            </Card>
            <Card className="border-2 border-border p-6">
              <Users className="mb-4 h-12 w-12" />
              <h3 className="mb-2 font-mono text-xl font-bold">5 FACTIONS</h3>
              <p className="text-muted-foreground">
                Shadow, Blade, Spirit, Pillar, Wind. Each counters others in an eternal cycle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-black tracking-tighter md:text-4xl mb-4">CHOOSE YOUR FACTION</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five legendary warriors locked in an eternal cycle. Master the matchups. Dominate the arena.
            </p>
          </div>
          <FactionShowcase />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-mono text-3xl font-black tracking-tighter md:text-5xl">THE FINAL BATTLE BEGINS</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Deposit USDC. Choose your faction. Earn yield. Risk nothing.
            </p>
            <Link href="/arena">
              <Button size="lg" className="font-mono text-base">
                START PLAYING NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="font-mono text-sm text-muted-foreground">© 2025 5xFaction Protocol. Built on Arbitrum.</div>
            <div className="flex gap-4">
              <Link href="/docs" className="font-mono text-sm hover:text-foreground">
                Documentation
              </Link>
              <Link href="/portfolio" className="font-mono text-sm hover:text-foreground">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
