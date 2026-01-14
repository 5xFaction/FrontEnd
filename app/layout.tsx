import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/components/providers"
import "./globals.css"

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-sans",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "5xFaction: THE LAST INK",
  description:
    "A no-loss DeFi strategy game where shadows, blades, spirits, pillars, and winds battle for yield dominance",
  generator: "v0.app",
  icons: {
    icon: "/logo.ico",
    apple: "/logo.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${notoSans.variable} ${spaceMono.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
