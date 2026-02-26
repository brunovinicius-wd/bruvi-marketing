# Bruvi Marketing Landing Page

## Overview
A full-stack TypeScript marketing landing page application for Bruvi, featuring a lead capture form backed by a PostgreSQL database.

## Architecture

- **Frontend**: React + Vite (TypeScript), Tailwind CSS, shadcn/ui components, Framer Motion animations
- **Backend**: Express.js (TypeScript) server that also serves the Vite dev server in development
- **Database**: PostgreSQL via Drizzle ORM
- **Shared**: Schema and route definitions shared between client and server in `/shared`

## Project Structure

```
client/         - React frontend (Vite root)
  src/
    pages/      - Page components
    components/ - UI components
    hooks/      - Custom React hooks
    lib/        - Utilities
server/         - Express backend
  index.ts      - Server entry point (port 5000)
  routes.ts     - API route handlers
  storage.ts    - Database storage layer
  db.ts         - Drizzle DB connection
  vite.ts       - Vite dev middleware integration
shared/
  schema.ts     - Drizzle schema (leads table)
  routes.ts     - Shared API route definitions
```

## Development

- `npm run dev` — Start development server (Express + Vite HMR on port 5000)
- `npm run build` — Build for production
- `npm run start` — Run production build
- `npm run db:push` — Push schema changes to the database

## Database

Uses Replit's built-in PostgreSQL database. Schema is managed via Drizzle ORM.

**Tables:**
- `leads` — Captures name, email, phone, message from the contact form

## Environment Variables

- `DATABASE_URL` — PostgreSQL connection string (auto-set by Replit)
- `PORT` — Server port (defaults to 5000)
