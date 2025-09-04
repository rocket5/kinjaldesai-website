# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important

This repository works with specialized Claude Code subagents for specific tasks:

- **nextjs-fullstack-dev**: Use for Next.js development, full-stack features, performance optimization, authentication, database integration, and complex Next.js architecture challenges
- **shadcn-ui-expert**: Use for UI components with shadcn/ui, customizing Radix UI primitives, design systems with Tailwind CSS, and accessible React components  
- **modern-ui-architect**: Use for designing interfaces, creating design systems, implementing responsive layouts, ensuring accessibility compliance, and modern UI/UX patterns
- **seo-optimization-expert**: Use for SEO implementation, technical SEO audits, performance optimization for search rankings, and structured data
- **sanity-studio-expert**: Use if integrating Sanity CMS (schema design, GROQ queries, Studio customization)

Always consider using the appropriate subagent for specialized tasks rather than handling complex domain-specific work directly.

## Development Commands

This project uses pnpm as the package manager. Common development commands:

- `pnpm dev` - Start development server with Turbo
- `pnpm build` - Build the application for production 
- `pnpm start` - Start production server
- `pnpm preview` - Build and start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm check` - Run both linting and type checking
- `pnpm format:check` - Check code formatting with Prettier
- `pnpm format:write` - Format code with Prettier

## Tech Stack & Architecture

This is a **T3 Stack** project built with:

- **Next.js 15** (App Router) - React framework with file-based routing
- **TypeScript** - Type safety throughout the codebase
- **tRPC** - Type-safe API layer for client-server communication
- **TanStack Query** (React Query) - Server state management
- **Tailwind CSS 4** - Utility-first CSS framework
- **Builder.io** - Content management integration
- **Zod** - Runtime schema validation

### Key Architecture Patterns

**API Layer**: Uses tRPC for type-safe API routes in `/src/server/api/`:
- `root.ts` - Main router configuration
- `trpc.ts` - tRPC setup and middleware
- `routers/` - Individual API route handlers

**Client-Server Integration**: 
- Server-side tRPC calls in `/src/trpc/server.ts`
- Client-side React Query integration in `/src/trpc/react.tsx`
- Type-safe inference for inputs/outputs across client-server boundary

**Environment Validation**: Uses `@t3-oss/env-nextjs` with Zod schemas in `/src/env.js` to validate environment variables at build time.

**Path Aliases**: TypeScript configured with `~/*` pointing to `./src/*` for clean imports.

## Project Structure

- `/src/app/` - Next.js App Router pages and layouts
- `/src/server/api/` - tRPC API routes and server logic
- `/src/trpc/` - tRPC client/server configuration
- `/src/styles/` - Global CSS and Tailwind configuration

## Builder.io Integration

This project integrates with Builder.io for content management:
- Builder Dev Tools configured in `next.config.js`
- Image domains whitelisted for `api.builder.io`