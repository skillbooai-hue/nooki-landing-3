# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Nooki Landing Page (`artifacts/nooki-landing`)
- **Preview path**: `/` (root)
- **Type**: react-vite (static, frontend-only)
- **Purpose**: High-converting landing page for the Nooki AI parenting bot
- **Stack**: React + Tailwind CSS + Framer Motion
- **Sections**: Nav, Hero, Problem (3 pain-point cards), How It Works (3-step flow), Rewards & Gamification, Pricing (Free + $4.99/mo), FAQ (accordion), Footer CTA
- **Fonts**: Inter (Google Fonts)
- **Icons**: Lucide React + React Icons (SiTelegram)
- **Components**: `src/components/` — NavBar, Hero, Problem, HowItWorks, Rewards, Pricing, FAQ, FooterCTA
- **Theme**: Apple/Japanese Minimalism — near-white bg, #3B82F6 primary blue, 1rem radius

### API Server (`artifacts/api-server`)
- **Type**: Express 5 API
- **Preview path**: `/api`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
