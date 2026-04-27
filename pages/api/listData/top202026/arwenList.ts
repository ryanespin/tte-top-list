import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const arwenList: GameList = {
  'Orléans': {
    ...gamesList['Orléans'],
    badgeText: '#1 • 2025',
    crossover: {
      Ryan: 16,
      Tyler: 17,
    },
    sequence: 1,
  },
  'Space Base': {
    ...gamesList['Space Base'],
    badgeText: '#2 • 2025',
    sequence: 2,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    badgeText: '#3 • 2025',
    crossover: {
      Chris: 3,
      Dan: 9,
      Olivia: 6,
    },
    sequence: 3,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    badgeText: '#8 • 2025',
    crossover: {
      Dan: 3,
    },
    sequence: 4,
  },
  'Obsession': {
    ...gamesList['Obsession'],
    badgeText: '#4 • 2025',
    sequence: 5,
  },
  'Endeavor: Deep Sea': {
    ...gamesList['Endeavor: Deep Sea'],
    badgeText: '#5 • 2025',
    sequence: 6,
  },
  'Concordia': {
    ...gamesList['Concordia'],
    badgeText: '#6 • 2025',
    sequence: 7,
  },
  'The Elder Scrolls: Betrayal of the Second Era': {
    ...gamesList['The Elder Scrolls: Betrayal of the Second Era'],
    badgeText: '#7 • 2025',
    sequence: 8,
  },
  'Cascadia': {
    ...gamesList['Cascadia'],
    badgeText: '#10 • 2025',
    sequence: 9,
  },
  'Chicken Fried Dice': {
    ...gamesList['Chicken Fried Dice'],
    badgeText: 'New to List',
    sequence: 10,
  },
  'Moon Colony Bloodbath': {
    ...gamesList['Moon Colony Bloodbath'],
    badgeText: 'New to List',
    sequence: 11,
  },
  'Logic & Lore': {
    ...gamesList['Logic & Lore'],
    badgeText: 'New to List',
    sequence: 12,
  },
  'The Gang': {
    ...gamesList['The Gang'],
    badgeText: '#15 • 2025',
    sequence: 13,
  },
  'Tabriz': {
    ...gamesList['Tabriz'],
    badgeText: 'New to List',
    sequence: 14,
  },
  'Foundations of Rome': {
    ...gamesList['Foundations of Rome'],
    badgeText: 'New to List',
    sequence: 15,
  },
  'Cartographers': {
    ...gamesList['Cartographers'],
    badgeText: '#13 • 2025',
    sequence: 16,
  },
  'Fromage': {
    ...gamesList['Fromage'],
    badgeText: '#20 • 2025',
    sequence: 17,
  },
  'Russian Railroads': {
    ...gamesList['Russian Railroads'],
    badgeText: '#11 • 2025',
    sequence: 18,
  },
  "Darwin's Journey": {
    ...gamesList["Darwin's Journey"],
    badgeText: '#16 • 2025',
    sequence: 19,
  },
  'Brass: Birmingham': {
    ...gamesList['Brass: Birmingham'],
    badgeText: '#19 • 2025',
    crossover: {
      Ryan: 3,
    },
    sequence: 20,
  },
}
