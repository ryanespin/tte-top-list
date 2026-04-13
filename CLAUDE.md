# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

There is no test suite. The app deploys as a static export under the `/tte-top-list` base path.

## Architecture

This is a Next.js 13 (Pages Router) app that displays ranked board game lists for a group of people, built with TypeScript and Chakra UI.

### Data Layer

All data lives in `/pages/api/` (not real API routes — just TypeScript data modules):

- **`/pages/api/gameData/games.ts`** — Master game database (~3,150 lines). Each entry is a `GameItemProps` object keyed by game name with fields: `gameDesigners`, `gameArtists`, `gamePublisher`, `yearPublished`, `gameImageName`, `imageExtension`, `imageBoxExtension`, `badgeText`, `sequence`, `crossover`.

- **`/pages/api/listData/`** — Subdirectories per collection (e.g., `top202026/`, `fav2Players2024/`). Each subdirectory has one file per person (e.g., `ryansList.ts`). List files spread from the master `gamesList` and override with list-specific metadata (`badgeText`, `sequence`, `crossover`).

The `crossover` field is a map of person name → ranking number, used to show where a game appears in other people's lists.

### Page Pattern

Each page (e.g., `pages/top20Ryan2026.tsx`) follows this pattern:
1. Import person-specific list data from `/pages/api/listData/`
2. Wrap in `DefaultLayout` with a title and background image
3. Render a responsive Chakra UI grid of `TopListItem` components

### Key Components

- **`DefaultLayout`** (`/components/elements/DefaultLayout/`) — Site shell with header, logo, and page title.
- **`TopListItem`** (`/components/elements/TopListItem/`) — Core card component supporting two modes:
  - *Game mode*: Displays ranked game with image, credits, expandable drawer for details.
  - *Person mode*: Shows a person's profile with their nested top games.

### Assets

- **`/public/gameImages/`** — Game images referenced by `gameImageName` + `imageExtension`/`imageBoxExtension`. Multiple images per game (box art + gameplay shots numbered 1–12+).
- **`/public/personImages/`** — Profile photos per person.
- **`/public/backgroundImages/`** — Shelf background images used per list page.

### Styling

Chakra UI v2 with a custom theme in `/styles/index.ts`. Fonts: `Krona One` (headings) via `@fontsource/krona-one`, `Caudex` (body) via `@fontsource/caudex`.

### Adding a New List

1. Create a new list file in `/pages/api/listData/<collectionDir>/personList.ts` spreading from `gamesList`.
2. Add any new games to `/pages/api/gameData/games.ts`.
3. Add a new page in `/pages/` following the existing pattern.
4. Add game images to `/public/gameImages/` and background image to `/public/backgroundImages/`.
