"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/home", label: "HOME" },
    { href: "/arena", label: "ARENA" },
    { href: "/docs", label: "DOCS" },
    { href: "/portfolio", label: "PORTFOLIO" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/home" className="flex items-center gap-2">
            <div className="h-8 w-8 border-2 border-foreground bg-foreground">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <path d="M20 50 L50 20 L80 50 L50 80 Z" fill="white" />
              </svg>
            </div>
            <span className="font-mono text-lg font-bold tracking-tighter">KALI-YUGA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant={pathname === link.href ? "default" : "ghost"} className="font-mono text-xs">
                  {link.label}
                </Button>
              </Link>
            ))}
            <Button className="ml-4 font-mono text-xs">CONNECT WALLET</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
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
              <Button className="mt-2 w-full font-mono text-xs">CONNECT WALLET</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
