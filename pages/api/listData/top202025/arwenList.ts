import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const arwenList: GameList = {
  'Orléans': {
    ...gamesList['Orléans'],
    badgeText: '#2 • 2024',
    crossover: {
      Ryan: 19
    },
    sequence: 1,
  },
  'Space Base': {
    ...gamesList['Space Base'],
    badgeText: '#1 • 2024',
    sequence: 2,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    badgeText: '#4 • 2024',
    crossover: {
      Olivia: 14
    },
    sequence: 3,
  },
  'Obsession': {
    ...gamesList['Obsession'],
    badgeText: '#3 • 2024',
    sequence: 4,
  },
  'Endeavor: Deep Sea': {
    ...gamesList['Endeavor: Deep Sea'],
    badgeText: 'New to List',
    sequence: 5,
  },
  'Concordia': {
    ...gamesList['Concordia'],
    badgeText: '#5 • 2024',
    sequence: 6,
  },
  'The Elder Scrolls: Betrayal of the Second Era': {
    ...gamesList['The Elder Scrolls: Betrayal of the Second Era'],
    badgeText: 'New to List',
    sequence: 7,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    badgeText: '#6 • 2024',
    crossover: {
      Anthony: 7
    },
    sequence: 8,
  },
  'Apiary': {
    ...gamesList['Apiary'],
    badgeText: 'New to List',
    sequence: 9,
  },
  'Cascadia': {
    ...gamesList['Cascadia'],
    badgeText: 'New to List',
    crossover: {
      Anthony: 5
    },
    sequence: 10,
  },
  'Russian Railroads': {
    ...gamesList['Russian Railroads'],
    badgeText: '#12 • 2024',
    sequence: 11,
  },
  'Rococo: Deluxe Edition': {
    ...gamesList['Rococo: Deluxe Edition'],
    badgeText: '#14 • 2024',
    sequence: 12,
  },
  'Cartographers': {
    ...gamesList['Cartographers'],
    badgeText: '#9 • 2024',
    sequence: 13,
  },
  'Star Wars: Rebellion': {
    ...gamesList['Star Wars: Rebellion'],
    badgeText: '#16 • 2024',
    sequence: 14,
  },
  'The Gang': {
    ...gamesList['The Gang'],
    badgeText: 'New to List',
    sequence: 15,
  },
  "Darwin's Journey": {
    ...gamesList["Darwin's Journey"],
    badgeText: 'New to List',
    sequence: 16,
  },
  'Nidavellir': {
    ...gamesList['Nidavellir'],
    badgeText: 'New to List',
    sequence: 17,
  },
  'Twilight Imperium: Fourth Edition': {
    ...gamesList['Twilight Imperium: Fourth Edition'],
    badgeText: '#7 • 2024',
    sequence: 18,
  },
  'Brass: Birmingham': {
    ...gamesList['Brass: Birmingham'],
    badgeText: '#17 • 2024',
    crossover: {
      Ryan: 3
    },
    sequence: 19,
  },
  'Fromage': {
    ...gamesList['Fromage'],
    badgeText: 'New to List',
    crossover: {
      Anthony: 10
    },
    sequence: 20,
  },
}