"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Wallet, TrendingUp, History, DollarSign, ArrowUpRight, ArrowDownRight, Download, Upload } from "lucide-react"
import { useState } from "react"

export default function PortfolioPage() {
  const [withdrawAmount, setWithdrawAmount] = useState("")

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-black tracking-tighter md:text-6xl">PORTFOLIO</h1>
          <p className="text-lg text-muted-foreground">Manage your deposits, track rewards, and monitor performance</p>
        </div>

        {/* Wallet Overview */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card className="border-2 border-border p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Wallet className="h-4 w-4" />
              <span className="font-mono text-xs">TOTAL DEPOSITED</span>
            </div>
            <div className="font-mono text-3xl font-black">$2,450</div>
            <div className="mt-1 text-xs text-muted-foreground">USDC</div>
          </Card>

          <Card className="border-2 border-border p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span className="font-mono text-xs">TOTAL EARNED</span>
            </div>
            <div className="font-mono text-3xl font-black text-green-500">$187.32</div>
            <div className="mt-1 text-xs text-muted-foreground">+7.64% ROI</div>
          </Card>

          <Card className="border-2 border-border p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span className="font-mono text-xs">PENDING REWARDS</span>
            </div>
            <div className="font-mono text-3xl font-black">$23.45</div>
            <div className="mt-1 text-xs text-muted-foreground">This Epoch</div>
          </Card>

          <Card className="border-2 border-border p-6">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <History className="h-4 w-4" />
              <span className="font-mono text-xs">WIN RATE</span>
            </div>
            <div className="font-mono text-3xl font-black">42%</div>
            <div className="mt-1 text-xs text-muted-foreground">15/36 Epochs</div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <Card className="border-2 border-border p-6">
            <h2 className="mb-4 font-mono text-xl font-black">DEPOSIT USDC</h2>
            <div className="mb-4">
              <Input type="number" placeholder="0.00" className="font-mono text-lg" />
            </div>
            <Button className="w-full font-mono">
              <Upload className="mr-2 h-4 w-4" />
              DEPOSIT TO ACTIVE FACTION
            </Button>
          </Card>

          <Card className="border-2 border-border p-6">
            <h2 className="mb-4 font-mono text-xl font-black">WITHDRAW USDC</h2>
            <div className="mb-4">
              <Input
                type="number"
                placeholder="0.00"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="font-mono text-lg"
              />
            </div>
            <Button variant="outline" className="w-full font-mono bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              WITHDRAW FROM FACTIONS
            </Button>
          </Card>
        </div>

        {/* Current Positions */}
        <div className="mb-8">
          <h2 className="mb-4 font-mono text-2xl font-black">CURRENT POSITIONS</h2>
          <div className="space-y-4">
            {[
              {
                faction: "KAGE",
                subtitle: "The Shadow",
                amount: "1,200",
                percentage: "49%",
                status: "Leading",
                statusColor: "text-green-500",
                image: "/images/kage-shadow.jpg",
              },
              {
                faction: "STEEL",
                subtitle: "The Blade",
                amount: "750",
                percentage: "30.6%",
                status: "Active",
                statusColor: "text-blue-500",
                image: "/images/steel-blade.jpg",
              },
              {
                faction: "WIND",
                subtitle: "The Arrow",
                amount: "500",
                percentage: "20.4%",
                status: "At Risk",
                statusColor: "text-red-500",
                image: "/images/wind-arrow.jpg",
              },
            ].map((position) => (
              <Card key={position.faction} className="border-2 border-border p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden border-2 border-border">
                      <img
                        src={position.image || "/placeholder.svg"}
                        alt={position.faction}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-mono text-lg font-bold">{position.faction}</h3>
                      <p className="text-sm text-muted-foreground">{position.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-2xl font-bold">${position.amount}</div>
                    <div className="text-sm text-muted-foreground">{position.percentage} of portfolio</div>
                  </div>
                  <div className="text-right">
                    <Badge className={`font-mono ${position.statusColor}`} variant="outline">
                      {position.status}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="font-mono text-xs bg-transparent">
                    WITHDRAW
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div>
          <h2 className="mb-4 font-mono text-2xl font-black">TRANSACTION HISTORY</h2>
          <Card className="border-2 border-border">
            <div className="divide-y divide-border">
              {[
                {
                  type: "Win",
                  faction: "KAGE",
                  amount: "+$45.67",
                  date: "2024-12-19",
                  epoch: "#141",
                  icon: ArrowUpRight,
                  color: "text-green-500",
                },
                {
                  type: "Deposit",
                  faction: "STEEL",
                  amount: "$750.00",
                  date: "2024-12-18",
                  epoch: "#140",
                  icon: Upload,
                  color: "text-blue-500",
                },
                {
                  type: "Win",
                  faction: "WIND",
                  amount: "+$32.18",
                  date: "2024-12-17",
                  epoch: "#139",
                  icon: ArrowUpRight,
                  color: "text-green-500",
                },
                {
                  type: "Loss",
                  faction: "MONK",
                  amount: "$0.00",
                  date: "2024-12-16",
                  epoch: "#138",
                  icon: ArrowDownRight,
                  color: "text-red-500",
                },
                {
                  type: "Withdraw",
                  faction: "MONK",
                  amount: "-$500.00",
                  date: "2024-12-16",
                  epoch: "#138",
                  icon: Download,
                  color: "text-gray-500",
                },
                {
                  type: "Win",
                  faction: "KAGE",
                  amount: "+$56.32",
                  date: "2024-12-15",
                  epoch: "#137",
                  icon: ArrowUpRight,
                  color: "text-green-500",
                },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <tx.icon className={`h-5 w-5 ${tx.color}`} />
                    <div>
                      <div className="font-mono text-sm font-bold">{tx.type}</div>
                      <div className="text-xs text-muted-foreground">
                        {tx.faction} • Epoch {tx.epoch}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-mono text-sm font-bold ${tx.color}`}>{tx.amount}</div>
                    <div className="text-xs text-muted-foreground">{tx.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
