"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePrivy } from "@privy-io/react-auth"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { login, logout, authenticated, user } = usePrivy()

  const links = [
    { href: "/home", label: "HOME" },
    { href: "/arena", label: "ARENA" },
    { href: "/docs", label: "DOCS" },
    { href: "/portfolio", label: "PORTFOLIO" },
  ]

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const walletAddress = user?.wallet?.address

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/home" className="flex items-center gap-2">
            <img src="/logo.webp" alt="5xFaction Logo" className="h-8 w-8" />
            <span className="font-mono text-lg font-bold tracking-tighter">5xFaction</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant={pathname === link.href ? "default" : "ghost"} className="font-mono text-xs">
                  {link.label}
                </Button>
              </Link>
            ))}
            {authenticated ? (
              <div className="ml-4 flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {walletAddress && shortenAddress(walletAddress)}
                </span>
                <Button variant="outline" className="font-mono text-xs" onClick={logout}>
                  DISCONNECT
                </Button>
              </div>
            ) : (
              <Button className="ml-4 font-mono text-xs" onClick={login}>
                CONNECT WALLET
              </Button>
            )}
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={pathname === link.href ? "default" : "ghost"}
                    className="w-full justify-start font-mono text-xs"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              {authenticated ? (
                <div className="mt-2 space-y-2">
                  <div className="px-3 font-mono text-xs text-muted-foreground">
                    {walletAddress && shortenAddress(walletAddress)}
                  </div>
                  <Button variant="outline" className="w-full font-mono text-xs" onClick={logout}>
                    DISCONNECT
                  </Button>
                </div>
              ) : (
                <Button className="mt-2 w-full font-mono text-xs" onClick={login}>
                  CONNECT WALLET
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
