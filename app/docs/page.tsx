"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Zap, Shield, Users, Trophy, Info } from "lucide-react"

export default function DocsPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-black tracking-tighter md:text-6xl">DOCUMENTATION</h1>
          <p className="text-lg text-muted-foreground">Everything you need to master the Pentagon Nash Equilibrium</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20 border-2 border-border p-4">
              <nav className="space-y-2">
                {[
                  { icon: BookOpen, label: "Introduction", id: "introduction" },
                  { icon: Shield, label: "How It Works", id: "how-it-works" },
                  { icon: Users, label: "The Five Factions", id: "factions" },
                  { icon: Zap, label: "Game Mechanics", id: "mechanics" },
                  { icon: Trophy, label: "Winning Strategy", id: "strategy" },
                  { icon: Info, label: "FAQ", id: "faq" },
                ].map(({ icon: Icon, label, id }) => (
                  <button
                    key={label}
                    onClick={() => scrollToSection(id)}
                    className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm transition-colors hover:bg-muted"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-mono">{label}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Introduction */}
            <section id="introduction">
              <h2 className="mb-4 font-mono text-3xl font-black">INTRODUCTION</h2>
              <Card className="border-2 border-border p-6">
                <p className="mb-4 text-muted-foreground">
                  KALI-YUGA: THE LAST INK is a revolutionary no-loss DeFi protocol built on Arbitrum that transforms
                  boring yield farming into an epic strategic battle.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Unlike traditional gambling or trading, your principal (deposited USDC) remains 100% safe at all
                  times. You're only competing for the yield generated from the entire pool.
                </p>
                <Badge className="font-mono">Protocol Version 1.0</Badge>
              </Card>
            </section>

            {/* How It Works */}
            <section id="how-it-works">
              <h2 className="mb-4 font-mono text-3xl font-black">HOW IT WORKS</h2>
              <div className="space-y-4">
                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      1
                    </div>
                    <h3 className="font-mono text-xl font-bold">DEPOSIT USDC</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Choose one of five factions and deposit your USDC. All deposits are automatically sent to Aave V3
                    lending protocol to generate yield.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      2
                    </div>
                    <h3 className="font-mono text-xl font-bold">YIELD GENERATION</h3>
                  </div>
                  <p className="text-muted-foreground">
                    During each 24-hour epoch, Aave generates interest (typically 4-6% APY). This yield accumulates into
                    a prize pool.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      3
                    </div>
                    <h3 className="font-mono text-xl font-bold">FACTION BATTLE</h3>
                  </div>
                  <p className="text-muted-foreground">
                    At epoch end, the protocol calculates each faction's score based on the Pentagon Nash Equilibrium
                    formula. The winning faction takes 100% of the yield.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      4
                    </div>
                    <h3 className="font-mono text-xl font-bold">WITHDRAW ANYTIME</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Your principal is never at risk. Withdraw your deposited USDC at any time, regardless of win or
                    loss.
                  </p>
                </Card>
              </div>
            </section>

            {/* The Five Factions */}
            <section id="factions">
              <h2 className="mb-4 font-mono text-3xl font-black">THE FIVE FACTIONS</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "KAGE (The Shadow)",
                    description: "Assassin who merges with shadows. Masters of stealth and surprise attacks.",
                    defeats: "Ghost (Spirit) & Wind (Arrow)",
                    reason: "Shadows trap spirits and close distance on archers.",
                    image: "/images/kage-shadow.jpg",
                  },
                  {
                    name: "STEEL (The Blade)",
                    description: "Samurai with a colossal blade. Unmatched cutting power.",
                    defeats: "Kage (Shadow) & Monk (Pillar)",
                    reason: "Sharp blade cuts through shadows and penetrates armor.",
                    image: "/images/steel-blade.jpg",
                  },
                  {
                    name: "GHOST (The Spirit)",
                    description: "Invisible entity that attacks the mind. Cannot be physically touched.",
                    defeats: "Steel (Blade) & Monk (Pillar)",
                    reason: "Spirits cannot be slashed and bypass physical defenses.",
                    image: "/images/ghost-spirit.jpg",
                  },
                  {
                    name: "MONK (The Pillar)",
                    description: "Absolute defense with extraordinary strength. Immovable fortress.",
                    defeats: "Wind (Arrow) & Kage (Shadow)",
                    reason: "Hard body resists arrows and traps shadows.",
                    image: "/images/monk-pillar.jpg",
                  },
                  {
                    name: "WIND (The Arrow)",
                    description: "Archer striking from invisible distances. Deadly precision.",
                    defeats: "Ghost (Spirit) & Steel (Blade)",
                    reason: "Wind disperses spirits and shoots swordsmen from afar.",
                    image: "/images/wind-arrow.jpg",
                  },
                ].map((faction) => (
                  <Card key={faction.name} className="border-2 border-border p-6">
                    <div className="flex gap-4">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden border-2 border-border">
                        <img
                          src={faction.image || "/placeholder.svg"}
                          alt={faction.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-mono text-xl font-bold">{faction.name}</h3>
                        <p className="mb-3 text-sm text-muted-foreground">{faction.description}</p>
                        <div className="space-y-1 text-sm">
                          <div>
                            <span className="font-mono font-bold">Defeats:</span>{" "}
                            <span className="text-muted-foreground">{faction.defeats}</span>
                          </div>
                          <div>
                            <span className="font-mono font-bold">Reason:</span>{" "}
                            <span className="text-muted-foreground">{faction.reason}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Game Mechanics */}
            <section id="mechanics">
              <h2 className="mb-4 font-mono text-3xl font-black">GAME MECHANICS</h2>
              <Card className="border-2 border-border p-6">
                <h3 className="mb-4 font-mono text-xl font-bold">PENTAGON NASH EQUILIBRIUM</h3>
                <p className="mb-4 text-muted-foreground">
                  The winning faction is determined by a sophisticated scoring formula:
                </p>
                <div className="mb-6 rounded bg-muted p-4 font-mono text-sm">Score = (Target TVL) - (Predator TVL)</div>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-bold">Target TVL:</span> Total value locked in the two factions your faction
                    defeats
                  </p>
                  <p>
                    <span className="font-bold">Predator TVL:</span> Total value locked in the two factions that defeat
                    your faction
                  </p>
                  <p className="text-muted-foreground">
                    The faction with the highest score wins all the yield for that epoch. This creates a dynamic
                    metagame where popular factions become vulnerable to counter-picks.
                  </p>
                </div>
              </Card>

              <Card className="mt-4 border-2 border-border p-6">
                <h3 className="mb-4 font-mono text-xl font-bold">EXAMPLE CALCULATION</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between font-mono">
                    <span>Kage TVL:</span>
                    <span className="font-bold">$100,000</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Steel TVL:</span>
                    <span className="font-bold">$200,000</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Ghost TVL:</span>
                    <span className="font-bold">$150,000</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Monk TVL:</span>
                    <span className="font-bold">$300,000</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Wind TVL:</span>
                    <span className="font-bold">$250,000</span>
                  </div>
                </div>
                <div className="my-4 border-t border-border" />
                <div className="space-y-2 text-sm">
                  <p className="font-mono font-bold">Kage Score Calculation:</p>
                  <p className="font-mono text-muted-foreground">
                    Targets: Ghost ($150k) + Wind ($250k) = $400k
                    <br />
                    Predators: Steel ($200k) + Monk ($300k) = $500k
                    <br />
                    <span className="font-bold text-foreground">Score: $400k - $500k = -$100k</span>
                  </p>
                </div>
              </Card>
            </section>

            {/* Winning Strategy */}
            <section id="strategy">
              <h2 className="mb-4 font-mono text-3xl font-black">WINNING STRATEGY</h2>
              <div className="space-y-4">
                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">1. AVOID THE CROWD</h3>
                  <p className="text-muted-foreground">
                    Popular factions attract large predator TVL, making them vulnerable. Look for underdog factions with
                    weak predators.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">2. HUNT FAT TARGETS</h3>
                  <p className="text-muted-foreground">
                    Choose factions whose targets (the two factions they defeat) have high TVL. More target TVL = higher
                    score potential.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">3. READ THE META</h3>
                  <p className="text-muted-foreground">
                    Monitor real-time TVL distribution. The optimal faction changes throughout the epoch as players
                    deposit and withdraw.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">4. TIME YOUR ENTRY</h3>
                  <p className="text-muted-foreground">
                    Late entries can exploit visible patterns. Early entries maximize yield generation time. Balance
                    risk and reward.
                  </p>
                </Card>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="mb-4 font-mono text-3xl font-black">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Can I lose my deposited USDC?",
                    a: "No. Your principal is deposited to Aave V3, a battle-tested lending protocol. You can withdraw 100% of your deposit anytime.",
                  },
                  {
                    q: "What happens if my faction loses?",
                    a: "You earn no yield for that epoch, but your principal remains intact. You can withdraw or try again next epoch.",
                  },
                  {
                    q: "How is the yield calculated?",
                    a: "Yield comes from Aave V3 lending interest (typically 4-6% APY). The total daily yield is distributed to the winning faction.",
                  },
                  {
                    q: "Can I change factions during an epoch?",
                    a: "Yes. Withdraw from one faction and deposit to another. Your new allocation takes effect immediately.",
                  },
                  {
                    q: "What blockchain is this on?",
                    a: "KALI-YUGA runs on Arbitrum One (L2) for low gas fees and fast transactions.",
                  },
                ].map((faq) => (
                  <Card key={faq.q} className="border-2 border-border p-6">
                    <h3 className="mb-2 font-mono text-lg font-bold">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
