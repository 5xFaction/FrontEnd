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
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-black tracking-tighter md:text-6xl">DOCUMENTATION</h1>
          <p className="text-lg text-muted-foreground">Everything you need to master the Pentagon Nash Equilibrium</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
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

          <div className="space-y-12 lg:col-span-2">
            <section id="introduction">
              <h2 className="mb-4 font-mono text-3xl font-black">INTRODUCTION</h2>
              <Card className="border-2 border-border p-6">
                <p className="mb-4 text-muted-foreground">
                  5xFaction is a no-loss DeFi protocol built on Arbitrum Sepolia that transforms yield farming into 
                  an epic strategic battle. Five factions compete in a Pentagon Nash Equilibrium where strategy 
                  determines the winner.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Your principal (deposited USDC) remains 100% safe at all times. You're only competing for the 
                  yield generated from the DeFi protocol. The winning faction takes all the yield each epoch.
                </p>
                <div className="flex gap-2">
                  <Badge className="font-mono">Arbitrum Sepolia</Badge>
                  <Badge variant="outline" className="font-mono">Testnet</Badge>
                </div>
              </Card>
            </section>

            <section id="how-it-works">
              <h2 className="mb-4 font-mono text-3xl font-black">HOW IT WORKS</h2>
              <div className="space-y-4">
                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      1
                    </div>
                    <h3 className="font-mono text-xl font-bold">JOIN A CLAN</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Choose one of five clans: Shadow, Blade, Spirit, Pillar, or Wind. Each clan has unique 
                    prey/predator relationships that determine your score. You must join a clan before staking.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      2
                    </div>
                    <h3 className="font-mono text-xl font-bold">STAKE USDC (DEPOSIT PHASE)</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Deposit USDC during the Deposit Phase (first 2 days of each epoch). Your USDC is sent to 
                    a yield-generating DeFi vault. You can only deposit or withdraw during this phase.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      3
                    </div>
                    <h3 className="font-mono text-xl font-bold">BATTLE PHASE (LOCKED)</h3>
                  </div>
                  <p className="text-muted-foreground">
                    After the Deposit Phase ends, all funds are locked until the epoch ends. During this time, 
                    your stake generates yield in the DeFi vault. No deposits or withdrawals are allowed.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      4
                    </div>
                    <h3 className="font-mono text-xl font-bold">CANVAS CLEARED (EPOCH END)</h3>
                  </div>
                  <p className="text-muted-foreground">
                    At epoch end, anyone can call clearCanvas() to finalize results. The clan with the highest 
                    score wins all the generated yield. Winners receive rewards proportional to their stake 
                    within the winning clan.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground font-mono text-sm font-bold text-background">
                      5
                    </div>
                    <h3 className="font-mono text-xl font-bold">CLAIM & CONTINUE</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Rewards are automatically claimed when you stake or withdraw in the next epoch. Your 
                    principal rolls over to the next epoch automatically. Withdraw during Deposit Phase only.
                  </p>
                </Card>
              </div>
            </section>

            <section id="factions">
              <h2 className="mb-4 font-mono text-3xl font-black">THE FIVE FACTIONS</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "SHADOW (Kage)",
                    description: "Assassin who merges with shadows. Masters of stealth and surprise attacks.",
                    targets: "Spirit & Wind",
                    predators: "Blade & Pillar",
                    image: "/images/kage-shadow.jpg",
                  },
                  {
                    name: "BLADE (Steel)",
                    description: "Samurai with a colossal blade. Unmatched cutting power.",
                    targets: "Shadow & Pillar",
                    predators: "Spirit & Wind",
                    image: "/images/steel-blade.jpg",
                  },
                  {
                    name: "SPIRIT (Ghost)",
                    description: "Invisible entity that attacks the mind. Cannot be physically touched.",
                    targets: "Blade & Pillar",
                    predators: "Shadow & Wind",
                    image: "/images/ghost-spirit.jpg",
                  },
                  {
                    name: "PILLAR (Monk)",
                    description: "Absolute defense with extraordinary strength. Immovable fortress.",
                    targets: "Wind & Shadow",
                    predators: "Blade & Spirit",
                    image: "/images/monk-pillar.jpg",
                  },
                  {
                    name: "WIND (Arrow)",
                    description: "Archer striking from invisible distances. Deadly precision.",
                    targets: "Spirit & Blade",
                    predators: "Pillar & Shadow",
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
                            <span className="font-mono font-bold text-green-500">Targets (Prey):</span>{" "}
                            <span className="text-muted-foreground">{faction.targets}</span>
                          </div>
                          <div>
                            <span className="font-mono font-bold text-red-500">Predators:</span>{" "}
                            <span className="text-muted-foreground">{faction.predators}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section id="mechanics">
              <h2 className="mb-4 font-mono text-3xl font-black">GAME MECHANICS</h2>
              
              <Card className="border-2 border-border p-6">
                <h3 className="mb-4 font-mono text-xl font-bold">SCORE CALCULATION</h3>
                <p className="mb-4 text-muted-foreground">
                  Each clan's score is calculated using the Pentagon Nash Equilibrium formula:
                </p>
                <div className="mb-6 rounded bg-muted p-4 font-mono text-sm">
                  Score = Σ(Target TVLs) - Σ(Predator TVLs)
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-bold text-green-500">Target TVL:</span> Sum of TVL from the two clans 
                    your clan defeats (prey). Higher target TVL = positive score contribution.
                  </p>
                  <p>
                    <span className="font-bold text-red-500">Predator TVL:</span> Sum of TVL from the two clans 
                    that defeat your clan. Higher predator TVL = negative score contribution.
                  </p>
                  <p className="text-muted-foreground">
                    The clan with the highest score wins all the yield. Scores can be negative if predator 
                    TVL exceeds target TVL.
                  </p>
                </div>
              </Card>

              <Card className="mt-4 border-2 border-border p-6">
                <h3 className="mb-4 font-mono text-xl font-bold">EXAMPLE CALCULATION</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between font-mono">
                    <span>Shadow TVL:</span>
                    <span className="font-bold">$100,000</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Blade TVL:</span>
                    <span className="font-bold">$200,000</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Spirit TVL:</span>
                    <span className="font-bold">$150,000</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Pillar TVL:</span>
                    <span className="font-bold">$300,000</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Wind TVL:</span>
                    <span className="font-bold">$250,000</span>
                  </div>
                </div>
                <div className="my-4 border-t border-border" />
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-mono font-bold">Shadow Score:</p>
                    <p className="font-mono text-muted-foreground">
                      Targets: Spirit ($150k) + Wind ($250k) = $400k
                      <br />
                      Predators: Blade ($200k) + Pillar ($300k) = $500k
                      <br />
                      <span className="font-bold text-red-500">Score: $400k - $500k = -$100k</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-mono font-bold">Wind Score:</p>
                    <p className="font-mono text-muted-foreground">
                      Targets: Spirit ($150k) + Blade ($200k) = $350k
                      <br />
                      Predators: Pillar ($300k) + Shadow ($100k) = $400k
                      <br />
                      <span className="font-bold text-red-500">Score: $350k - $400k = -$50k</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="mt-4 border-2 border-border p-6">
                <h3 className="mb-4 font-mono text-xl font-bold">EPOCH TIMELINE</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Badge variant="default" className="font-mono shrink-0">Day 1-2</Badge>
                    <div>
                      <p className="font-bold">Deposit Phase</p>
                      <p className="text-muted-foreground">
                        Join clans, stake USDC, withdraw funds. All actions allowed.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="secondary" className="font-mono shrink-0">Day 3+</Badge>
                    <div>
                      <p className="font-bold">Locked Phase</p>
                      <p className="text-muted-foreground">
                        No deposits or withdrawals. Funds locked, generating yield.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="font-mono shrink-0">Epoch End</Badge>
                    <div>
                      <p className="font-bold">Canvas Cleared</p>
                      <p className="text-muted-foreground">
                        Winner determined. Yield distributed. New epoch begins.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="mt-4 border-2 border-border p-6">
                <h3 className="mb-4 font-mono text-xl font-bold">REWARD DISTRIBUTION</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    When a clan wins, the total yield is distributed proportionally:
                  </p>
                  <div className="rounded bg-muted p-4 font-mono text-sm">
                    Your Reward = (Your Stake / Winning Clan TVL) × Total Yield
                  </div>
                  <p className="text-muted-foreground">
                    If no clan has positive TVL or all scores are equal, the yield rolls over to the next epoch.
                  </p>
                </div>
              </Card>
            </section>

            <section id="strategy">
              <h2 className="mb-4 font-mono text-3xl font-black">WINNING STRATEGY</h2>
              <div className="space-y-4">
                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">1. ANALYZE TVL DISTRIBUTION</h3>
                  <p className="text-muted-foreground">
                    Check all clan TVLs before the Deposit Phase ends. Calculate potential scores for each clan.
                    The optimal choice depends on the current distribution.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">2. HUNT FAT TARGETS</h3>
                  <p className="text-muted-foreground">
                    Choose clans whose targets (prey) have high TVL. Your score increases when your prey 
                    clans are popular. Target TVL directly adds to your score.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">3. AVOID STRONG PREDATORS</h3>
                  <p className="text-muted-foreground">
                    Avoid clans whose predators have high TVL. If the clans that defeat you are popular, 
                    your score decreases. Predator TVL subtracts from your score.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">4. TIME YOUR DEPOSIT</h3>
                  <p className="text-muted-foreground">
                    Deposit early in the Deposit Phase to observe the meta, or deposit late to make 
                    last-minute strategic decisions. Remember: no changes after Deposit Phase ends.
                  </p>
                </Card>

                <Card className="border-2 border-border p-6">
                  <h3 className="mb-3 font-mono text-lg font-bold">5. CONSIDER COUNTER-PLAYS</h3>
                  <p className="text-muted-foreground">
                    Other players are also strategizing. A popular clan becomes a target for counter-picks.
                    Sometimes the winning move is joining the least popular clan that preys on popular ones.
                  </p>
                </Card>
              </div>
            </section>

            <section id="faq">
              <h2 className="mb-4 font-mono text-3xl font-black">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Can I lose my deposited USDC?",
                    a: "No. Your principal is deposited to a yield-generating DeFi vault and remains 100% safe. You can only lose potential yield, never your principal.",
                  },
                  {
                    q: "When can I withdraw my USDC?",
                    a: "Withdrawals are only allowed during the Deposit Phase (first 2 days of each epoch). After that, funds are locked until the epoch ends and the next Deposit Phase begins.",
                  },
                  {
                    q: "What happens if my faction loses?",
                    a: "You earn no yield for that epoch, but your principal remains intact. Your stake automatically rolls over to the next epoch.",
                  },
                  {
                    q: "How is the yield generated?",
                    a: "All staked USDC is deposited into a DeFi yield vault that generates interest. In testnet, this is a mock protocol generating ~1% daily yield.",
                  },
                  {
                    q: "Can I change clans?",
                    a: "You can only change clans if your current stake is 0. To switch: withdraw all during Deposit Phase, then join a new clan and re-stake.",
                  },
                  {
                    q: "How are rewards claimed?",
                    a: "Rewards are automatically claimed when you stake or withdraw. You can also manually call processRewards() to claim pending rewards from multiple epochs.",
                  },
                  {
                    q: "What if no one wins?",
                    a: "If no clan has participants or all scores are tied, the yield rolls over to the next epoch, increasing the prize pool.",
                  },
                  {
                    q: "What blockchain is this on?",
                    a: "5xFaction is currently deployed on Arbitrum Sepolia (testnet) for testing. Production deployment will be on Arbitrum One (L2) for low gas fees.",
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
