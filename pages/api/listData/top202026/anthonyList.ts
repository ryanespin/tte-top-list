import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Horrified': {
    ...gamesList['Horrified'],
    badgeText: '#3 • 2025',
    sequence: 1,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    badgeText: '#7 • 2025',
    crossover: {
      Dan: 3,
      Arwen: 4,
    },
    sequence: 2,
  },
  'Wingspan': {
    ...gamesList['Wingspan'],
    badgeText: '#1 • 2025',
    crossover: {
      Danielle: 4,
    },
    sequence: 3,
  },
  'Forest Shuffle': {
    ...gamesList['Forest Shuffle'],
    badgeText: 'New to List',
    sequence: 4,
  },
  'Cascadia': {
    ...gamesList['Cascadia'],
    badgeText: '#5 • 2025',
    crossover: {
      Olivia: 1,
      Arwen: 9,
    },
    sequence: 5,
  },
  'Patchwork': {
    ...gamesList['Patchwork'],
    badgeText: '#2 • 2025',
    crossover: {
      Dan: 15,
    },
    sequence: 6,
  },
  'Fromage': {
    ...gamesList['Fromage'],
    badgeText: '#10 • 2025',
    crossover: {
      Arwen: 17,
    },
    sequence: 7,
  },
  'Fleet: The Dice Game': {
    ...gamesList['Fleet: The Dice Game'],
    badgeText: '#8 • 2025',
    sequence: 8,
  },
  'Carcassonne': {
    ...gamesList['Carcassonne'],
    badgeText: '#15 • 2025',
    crossover: {
      Olivia: 9,
    },
    sequence: 9,
  },
  'The White Castle': {
    ...gamesList['The White Castle'],
    badgeText: 'New to List',
    crossover: {
      Tyler: 8,
    },
    sequence: 10,
  },
  'Wine Cellar': {
    ...gamesList['Wine Cellar'],
    badgeText: 'New to List',
    sequence: 11,
  },
  'Azul': {
    ...gamesList['Azul'],
    badgeText: '#6 • 2025',
    crossover: {
      Dan: 14,
    },
    sequence: 12,
  },
  'Santa Monica': {
    ...gamesList['Santa Monica'],
    badgeText: '#11 • 2025',
    sequence: 13,
  },
  'Frosthaven': {
    ...gamesList['Frosthaven'],
    badgeText: 'New to List',
    sequence: 14,
  },
  'Harmonies': {
    ...gamesList['Harmonies'],
    badgeText: '#4 • 2025',
    crossover: {
      Chris: 15,
    },
    sequence: 15,
  },
  'King of Tokyo: Duel': {
    ...gamesList['King of Tokyo: Duel'],
    badgeText: 'New to List',
    sequence: 16,
  },
  'Rear Window': {
    ...gamesList['Rear Window'],
    badgeText: '#14 • 2025',
    sequence: 17,
  },
  'Hot Streak': {
    ...gamesList['Hot Streak'],
    badgeText: 'New to List',
    crossover: {
      Ryan: 20,
    },
    sequence: 18,
  },
  'The Downfall of Pompeii': {
    ...gamesList['The Downfall of Pompeii'],
    badgeText: '#13 • 2025',
    sequence: 19,
  },
  'The Guild of Merchant Explorers': {
    ...gamesList['The Guild of Merchant Explorers'],
    badgeText: 'New to List',
    sequence: 20,
  },
}
