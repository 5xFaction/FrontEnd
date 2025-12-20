"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Swords, ShieldIcon, Target, ChevronRight } from "lucide-react"

const factions = [
  {
    id: "kage",
    name: "KAGE",
    subtitle: "The Shadow",
    description: "Assassin who merges with shadows, striking from darkness",
    image: "/images/kage-shadow.jpg",
    defeats: ["Ghost (Spirit)", "Wind (Arrow)"],
    defeatedBy: ["Steel (Blade)", "Monk (Pillar)"],
    currentTVL: "234,567",
    voters: 1234,
    color: "from-gray-900 to-gray-700",
  },
  {
    id: "steel",
    name: "STEEL",
    subtitle: "The Blade",
    description: "Samurai with colossal blade that cuts through anything",
    image: "/images/steel-blade.jpg",
    defeats: ["Kage (Shadow)", "Monk (Pillar)"],
    defeatedBy: ["Ghost (Spirit)", "Wind (Arrow)"],
    currentTVL: "456,789",
    voters: 2156,
    color: "from-gray-800 to-gray-600",
  },
  {
    id: "ghost",
    name: "GHOST",
    subtitle: "The Spirit",
    description: "Invisible entity that attacks the mind and soul",
    image: "/images/ghost-spirit.jpg",
    defeats: ["Steel (Blade)", "Monk (Pillar)"],
    defeatedBy: ["Kage (Shadow)", "Wind (Arrow)"],
    currentTVL: "189,234",
    voters: 987,
    color: "from-gray-700 to-gray-500",
  },
  {
    id: "monk",
    name: "MONK",
    subtitle: "The Pillar",
    description: "Absolute defense with extraordinary physical strength",
    image: "/images/monk-pillar.jpg",
    defeats: ["Wind (Arrow)", "Kage (Shadow)"],
    defeatedBy: ["Steel (Blade)", "Ghost (Spirit)"],
    currentTVL: "567,890",
    voters: 2789,
    color: "from-gray-600 to-gray-400",
  },
  {
    id: "wind",
    name: "WIND",
    subtitle: "The Arrow",
    description: "Archer striking from invisible distances with deadly precision",
    image: "/images/wind-arrow.jpg",
    defeats: ["Ghost (Spirit)", "Steel (Blade)"],
    defeatedBy: ["Monk (Pillar)", "Kage (Shadow)"],
    currentTVL: "345,678",
    voters: 1678,
    color: "from-gray-500 to-gray-300",
  },
]

export default function ArenaPage() {
  const [selectedFaction, setSelectedFaction] = useState<string | null>(null)
  const [depositAmount, setDepositAmount] = useState("")

  const selected = factions.find((f) => f.id === selectedFaction)

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-mono text-4xl font-black tracking-tighter md:text-6xl">THE ARENA</h1>
          <p className="text-lg text-muted-foreground">Choose your faction. Deploy your USDC. Battle for yield.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 font-mono text-sm">
            <Badge variant="outline" className="px-4 py-2">
              <span className="text-muted-foreground">Current Epoch:</span>
              <span className="ml-2 font-bold">#142</span>
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <span className="text-muted-foreground">Time Remaining:</span>
              <span className="ml-2 font-bold">18h 42m</span>
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <span className="text-muted-foreground">Total Prize Pool:</span>
              <span className="ml-2 font-bold">$1,247 USDC</span>
            </Badge>
          </div>
        </div>

        {/* Faction Selection */}
        <div className="mb-12">
          <h2 className="mb-6 font-mono text-2xl font-black">SELECT YOUR FACTION</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {factions.map((faction) => (
              <Card
                key={faction.id}
                className={`group cursor-pointer overflow-hidden border-2 transition-all ${
                  selectedFaction === faction.id
                    ? "border-foreground shadow-lg ring-2 ring-foreground ring-offset-2 ring-offset-background"
                    : "border-border hover:border-muted-foreground"
                }`}
                onClick={() => setSelectedFaction(faction.id)}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={faction.image || "/placeholder.svg"}
                    alt={faction.name}
                    className={`h-full w-full object-cover transition-transform ${
                      selectedFaction === faction.id ? "scale-105" : "group-hover:scale-110"
                    }`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-mono text-lg font-bold">{faction.name}</h3>
                  <p className="mb-3 text-xs text-muted-foreground">{faction.subtitle}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">TVL:</span>
                      <span className="font-mono font-bold">${faction.currentTVL}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Voters:</span>
                      <span className="font-mono font-bold">{faction.voters}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Faction Details & Deposit */}
        {selected && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Faction Info */}
            <Card className="border-2 border-border p-6">
              <div className="mb-6 flex items-start gap-4">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden border-2 border-border">
                  <img
                    src={selected.image || "/placeholder.svg"}
                    alt={selected.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-1 font-mono text-2xl font-black">{selected.name}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{selected.subtitle}</p>
                  <p className="text-sm">{selected.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded border border-border bg-muted/50 p-4">
                  <div className="mb-2 flex items-center gap-2 font-mono text-sm font-bold">
                    <Swords className="h-4 w-4" />
                    DEFEATS
                  </div>
                  <ul className="space-y-1 text-sm">
                    {selected.defeats.map((defeat) => (
                      <li key={defeat} className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3" />
                        {defeat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded border border-border bg-muted/50 p-4">
                  <div className="mb-2 flex items-center gap-2 font-mono text-sm font-bold">
                    <Target className="h-4 w-4" />
                    DEFEATED BY
                  </div>
                  <ul className="space-y-1 text-sm">
                    {selected.defeatedBy.map((defeatedBy) => (
                      <li key={defeatedBy} className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3" />
                        {defeatedBy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Deposit Form */}
            <Card className="border-2 border-border p-6">
              <h3 className="mb-6 font-mono text-xl font-black">DEPLOY USDC</h3>

              <div className="mb-6 space-y-4">
                <div>
                  <label className="mb-2 block font-mono text-sm font-bold">DEPOSIT AMOUNT</label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="font-mono text-lg"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-sm text-muted-foreground">
                      USDC
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {["100", "500", "1000", "MAX"].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      size="sm"
                      className="flex-1 font-mono text-xs bg-transparent"
                      onClick={() => setDepositAmount(amount === "MAX" ? "5000" : amount)}
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mb-6 space-y-3 rounded border border-border bg-muted/50 p-4 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Your Balance:</span>
                  <span className="font-bold">5,000.00 USDC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated APY:</span>
                  <span className="font-bold text-green-500">~125.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Your Risk:</span>
                  <span className="font-bold">0% (Principal Safe)</span>
                </div>
              </div>

              <Button className="w-full font-mono" size="lg">
                <ShieldIcon className="mr-2 h-4 w-4" />
                DEPOSIT & JOIN {selected.name}
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Your USDC is deposited to Aave V3. You can withdraw anytime.
              </p>
            </Card>
          </div>
        )}

        {!selected && (
          <Card className="border-2 border-dashed border-border p-12 text-center">
            <p className="font-mono text-muted-foreground">
              Select a faction above to view details and deploy your USDC
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
