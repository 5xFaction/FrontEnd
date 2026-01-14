# 5xFaction Frontend

Frontend for **5xFaction Protocol** — a no-loss DeFi protocol on Arbitrum where five factions battle for yield dominance.

## Pages & Features

| Page          | Route        | Description                                                                                                |
| ------------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| **Home**      | `/home`      | Landing page with hero section, concept explanation, and 5 factions showcase                               |
| **Arena**     | `/arena`     | Main staking page: choose faction, deposit USDC, view real-time TVL & scores, deposit/lock phase countdown |
| **Portfolio** | `/portfolio` | User dashboard: view active stakes, USDC balance, history, and manage positions                            |
| **Docs**      | `/docs`      | Full documentation: Pentagon Nash Equilibrium mechanics, FAQ, and tutorials                                |

## Smart Contract Integration

Frontend integrates with **5xFaction** smart contract on Arbitrum:

| Feature      | Contract Function     | Description                                 |
| ------------ | --------------------- | ------------------------------------------- |
| Join Faction | `joinClan(clan)`      | Join one of the 5 factions                  |
| Stake        | `stakeInk(amount)`    | Deposit USDC for staking                    |
| Withdraw     | `withdrawInk(amount)` | Withdraw USDC from pool                     |
| Clear Canvas | `clearCanvas()`       | Trigger new epoch (when current epoch ends) |
| View TVL     | `getAllClanTVLs()`    | Get total TVL per faction                   |
| View Scores  | `getAllScores()`      | Get competition score per faction           |

## Tech Stack

| Category   | Technology              |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| Language   | TypeScript              |
| Styling    | Tailwind CSS 4          |
| Components | shadcn/ui + Radix UI    |
| Icons      | Lucide React            |
| Web3       | wagmi + viem            |
| Auth       | Privy                   |
| State      | TanStack React Query    |

## Installation

### Prerequisites

- Node.js 18+
- pnpm / npm / yarn

### Setup

```bash
# Clone repository
git clone https://github.com/5xFaction/FrontEnd.git
cd FrontEnd

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with appropriate values

# Run development server
pnpm dev
```

App will be running at [http://localhost:3000](http://localhost:3000)

### Environment Variables

| Variable                   | Description                            |
| -------------------------- | -------------------------------------- |
| `NEXT_PUBLIC_PRIVY_APP_ID` | Privy App ID for wallet authentication |

## Folder Structure

```
FrontEnd/
├── app/                  # Next.js App Router
│   ├── arena/           # Arena page
│   ├── docs/            # Documentation page
│   ├── home/            # Landing page
│   ├── portfolio/       # Portfolio page
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/          # React components
│   ├── ui/              # shadcn/ui components
│   ├── navigation.tsx   # Navbar
│   └── faction-showcase.tsx
├── hooks/               # Custom React hooks
│   └── useContract.ts   # Contract interaction hooks
└── lib/                 # Utilities & configs
    └── contracts/       # ABI & addresses
```

## Scripts

| Command      | Description            |
| ------------ | ---------------------- |
| `pnpm dev`   | Run development server |
| `pnpm build` | Build for production   |
| `pnpm start` | Run production server  |
| `pnpm lint`  | Run ESLint             |

## License

MIT License
