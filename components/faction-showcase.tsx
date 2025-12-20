"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Swords, Target, ChevronUp, ChevronDown } from "lucide-react"
import Link from "next/link"

const factions = [
  {
    id: "kage",
    name: "KAGE",
    subtitle: "The Shadow",
    role: "Assassin",
    faction: "Neon Syndicate",
    race: "Shadow Walker",
    image: "/images/kage-shadow.jpg",
    bg: "/images/faction-bg-kage.jpg",
    description:
      "Masters of darkness who melt into shadows. Silent killers striking from the void. Born from the depths of eternal night, Kage operatives serve as the invisible hand of the syndicate.",
    lore: "In the ancient texts of the Last Ink, Kage are described as those who traded their reflection for the power to become one with darkness itself. They move between shadows, unseen and unstoppable.",
    abilities: ["Shadow Merge", "Void Step", "Dark Assassination"],
    counters: ["Spirit", "Arrow"],
    counteredBy: ["Blade", "Pillar"],
    color: "from-neutral-900 to-neutral-700",
  },
  {
    id: "steel",
    name: "STEEL",
    subtitle: "The Blade",
    role: "Samurai",
    faction: "Iron Path",
    race: "Human",
    image: "/images/steel-blade.jpg",
    bg: "/images/faction-bg-steel.jpg",
    description:
      "Legendary swordsmen wielding blades that can cleave through anything. Masters of the ancient art of the sword, their strikes are precise and absolute.",
    lore: "Forged in the fires of a thousand battles, Steel warriors follow the Way of the Blade. Their swords are said to be extensions of their very souls, capable of cutting through reality itself.",
    abilities: ["Blade Mastery", "Steel Slash", "Armor Break"],
    counters: ["Shadow", "Pillar"],
    counteredBy: ["Spirit", "Arrow"],
    color: "from-neutral-800 to-neutral-600",
  },
  {
    id: "ghost",
    name: "GHOST",
    subtitle: "The Spirit",
    role: "Phantom",
    faction: "Ethereal Order",
    race: "Spirit Being",
    image: "/images/ghost-spirit.jpg",
    bg: "/images/faction-bg-ghost.jpg",
    description:
      "Ethereal entities that attack the mind and transcend physical reality. They exist between worlds, untouchable by mortal weapons.",
    lore: "Neither living nor dead, Ghost operatives exist in the liminal space between existence and void. They feed on mental energy and can shatter minds with a whisper.",
    abilities: ["Ethereal Form", "Mind Break", "Soul Drain"],
    counters: ["Blade", "Pillar"],
    counteredBy: ["Shadow", "Arrow"],
    color: "from-neutral-700 to-neutral-500",
  },
  {
    id: "monk",
    name: "MONK",
    subtitle: "The Pillar",
    role: "Guardian",
    faction: "Mountain Sect",
    race: "Human",
    image: "/images/monk-pillar.jpg",
    bg: "/images/faction-bg-monk.jpg",
    description:
      "Absolute defense incarnate. Immovable mountains that crush all opposition. Their bodies are temples of unbreakable will and superhuman strength.",
    lore: "Through decades of meditation and training, Monks have achieved physical perfection. Their bodies can withstand any blow, and their strikes can shatter mountains.",
    abilities: ["Iron Body", "Mountain Stance", "Earth Shatter"],
    counters: ["Arrow", "Shadow"],
    counteredBy: ["Blade", "Spirit"],
    color: "from-neutral-600 to-neutral-400",
  },
  {
    id: "wind",
    name: "WIND",
    subtitle: "The Arrow",
    role: "Marksman",
    faction: "Sky Covenant",
    race: "Human",
    image: "/images/wind-arrow.jpg",
    bg: "/images/faction-bg-wind.jpg",
    description:
      "Precision strikers who attack from impossible distances with unerring accuracy. They become one with the wind itself.",
    lore: "Wind archers train their entire lives to achieve perfect unity with the elements. Their arrows never miss, guided by the very breath of the world.",
    abilities: ["Eagle Eye", "Phantom Shot", "Wind Step"],
    counters: ["Spirit", "Blade"],
    counteredBy: ["Pillar", "Shadow"],
    color: "from-neutral-500 to-neutral-300",
  },
]

export function FactionShowcase() {
  const [selectedFaction, setSelectedFaction] = useState(factions[0])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const currentIndex = factions.findIndex((f) => f.id === selectedFaction.id)

  const selectNext = () => {
    const nextIndex = (currentIndex + 1) % factions.length
    setSelectedFaction(factions[nextIndex])
  }

  const selectPrev = () => {
    const prevIndex = (currentIndex - 1 + factions.length) % factions.length
    setSelectedFaction(factions[prevIndex])
  }

  return (
    <div className="relative max-h-[800px]">
      <div className="flex gap-6">
        {/* Left Sidebar - Character Selection */}
        <div className="flex w-32 flex-col gap-4">
          <button
            onClick={selectPrev}
            className="flex items-center justify-center border-2 border-border p-2 hover:border-foreground transition-colors"
          >
            <ChevronUp className="h-6 w-6" />
          </button>

          {factions.map((faction) => (
            <button
              key={faction.id}
              onClick={() => setSelectedFaction(faction)}
              onMouseEnter={() => setHoveredId(faction.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden transition-all ${
                selectedFaction.id === faction.id
                  ? "ring-4 ring-foreground scale-110 rounded-xs"
                  : hoveredId === faction.id
                    ? "ring-2 ring-foreground/50"
                    : "opacity-60 hover:opacity-100"
              }`}
            >
              <div className="aspect-square bg-muted">
                <img
                  src={faction.image || "/placeholder.svg"}
                  alt={faction.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {selectedFaction.id === faction.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-foreground -translate-x-2" />
              )}
            </button>
          ))}

          <button
            onClick={selectNext}
            className="flex items-center justify-center border-2 border-border p-2 hover:border-foreground transition-colors"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="flex gap-6">
            {/* Details Panel with Tabs - Left side, flexible width */}
            <div className="flex-1 space-y-4">
              {/* Title Section */}
              <div className="border-2 border-border p-6 bg-muted/50">
                <div className="mb-2 font-mono text-sm text-muted-foreground">{selectedFaction.role}</div>
                <h2 className="font-mono text-5xl font-black tracking-tighter mb-2">[ {selectedFaction.name} ]</h2>
                <p className="text-xl text-muted-foreground">{selectedFaction.subtitle}</p>
              </div>

              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-muted">
                  <TabsTrigger value="info" className="font-mono text-xs">
                    Faction
                  </TabsTrigger>
                  <TabsTrigger value="abilities" className="font-mono text-xs">
                    Abilities
                  </TabsTrigger>
                  <TabsTrigger value="strategy" className="font-mono text-xs">
                    Strategy
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="info" className="space-y-4">
                  <Card className="border-2 border-border p-4">
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">FACTION</div>
                        <div className="font-bold">{selectedFaction.faction}</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">RACE</div>
                        <div className="font-bold">{selectedFaction.race}</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted-foreground mb-1">DESCRIPTION</div>
                        <p className="text-muted-foreground leading-relaxed">{selectedFaction.description}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="border-2 border-border p-4">
                    <div className="font-mono text-xs text-muted-foreground mb-2">LORE</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selectedFaction.lore}</p>
                  </Card>
                </TabsContent>

                <TabsContent value="abilities" className="space-y-4">
                  <Card className="border-2 border-border p-4">
                    <h4 className="font-mono text-sm font-bold mb-3">SIGNATURE ABILITIES</h4>
                    <div className="space-y-2">
                      {selectedFaction.abilities.map((ability, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-muted border border-border">
                          <div className="mt-1.5 h-1.5 w-1.5 bg-foreground flex-shrink-0" />
                          <div>
                            <div className="font-mono text-sm font-bold">{ability}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {idx === 0 && "Primary skill for engagement"}
                              {idx === 1 && "Tactical movement ability"}
                              {idx === 2 && "Ultimate finishing technique"}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="strategy" className="space-y-4">
                  <Card className="border-2 border-border p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Swords className="h-4 w-4" />
                          <h4 className="font-mono text-sm font-bold">DEFEATS</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedFaction.counters.map((counter, idx) => (
                            <Badge key={idx} variant="default" className="font-mono">
                              {counter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-4 w-4" />
                          <h4 className="font-mono text-sm font-bold">DEFEATED BY</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedFaction.counteredBy.map((counter, idx) => (
                            <Badge key={idx} variant="outline" className="font-mono">
                              {counter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="border-2 border-border p-4 bg-muted/50">
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      <strong>Strategic Tip:</strong> Study the matchup triangle carefully. Deploy when your counters
                      have higher TVL for maximum yield advantage.
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              <Link href="/arena" className="block">
                <Button size="lg" className="w-full font-mono">
                  DEPLOY WITH {selectedFaction.name} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="w-80 flex-shrink-0">
              <div className="relative overflow-hidden border-2 border-border bg-muted">
                <div className="aspect-[3/4] relative">
                  {/* Main character image */}
                  <img
                    src={selectedFaction.image || "/placeholder.svg"}
                    alt={selectedFaction.name}
                    className="relative z-10 h-full w-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                  {/* Decorative UI elements */}
                  <div className="absolute left-3 top-3 flex items-center gap-2 font-mono text-xs bg-background/80 px-2 py-1 border border-foreground/20">
                    <div className="h-2 w-2 bg-red-500 animate-pulse" />
                    <span>REC</span>
                  </div>

                  <div className="absolute right-3 top-3 font-mono text-xs bg-background/80 px-2 py-1 border border-foreground/20">
                    {currentIndex + 1} / {factions.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
