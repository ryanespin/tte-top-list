import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const arwenList: GameList = {
  'Space Base': {
    ...gamesList['Space Base'],
    badgeText: '#1 • 2023',
    sequence: 1,
  },
  'Orléans': {
    ...gamesList['Orléans'],
    badgeText: '#2 • 2023',
    crossover: {
      'Mista Rau': 17
    },
    sequence: 2,
  },
  'Obsession': {
    ...gamesList['Obsession'],
    badgeText: 'New to List',
    sequence: 3,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    badgeText: '#4 • 2023',
    crossover: {
      "Chris": 3,
      Anthony: 4
    },
    sequence: 4,
  },
  'Concordia': {
    ...gamesList['Concordia'],
    badgeText: '#5 • 2023',
    sequence: 5,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    badgeText: 'New to List',
    crossover: {
      Anthony: 3,
      "Mista Rau": 11,
      Danielle: 15,
      Chris: 19
    },
    sequence: 6,
  },
  'Twilight Imperium: Fourth Edition': {
    ...gamesList['Twilight Imperium: Fourth Edition'],
    badgeText: '#6 • 2023',
    sequence: 7,
  },
  'Too Many Bones': {
    ...gamesList['Too Many Bones'],
    badgeText: '#7 • 2023',
    sequence: 8,
  },
  'Cartographers': {
    ...gamesList['Cartographers'],
    badgeText: '#8 • 2023',
    crossover: {
      'Brian': 1,
      'Anthony': 18
    },
    sequence: 9,
  },
  'Blood on the Clocktower': {
    ...gamesList['Blood on the Clocktower'],
    badgeText: 'New to List',
    sequence: 10,
  },
  'Alchemists': {
    ...gamesList['Alchemists'],
    badgeText: '#3 • 2023',
    crossover: {
      Ryan: 9
    },
    sequence: 11,
  },
  'Russian Railroads': {
    ...gamesList['Russian Railroads'],
    badgeText: '#10 • 2023',
    sequence: 12,
  },
  'Kanban EV': {
    ...gamesList['Kanban EV'],
    badgeText: 'New to List',
    sequence: 13,
  },
  'Rococo: Deluxe Edition': {
    ...gamesList['Rococo: Deluxe Edition'],
    badgeText: '#11 • 2023',
    crossover: {
      'Ryan': 17
    },
    sequence: 14,
  },
  'Food Chain Magnate': {
    ...gamesList['Food Chain Magnate'],
    badgeText: '#20 • 2023',
    crossover: {
      Ryan: 1
    },
    sequence: 15,
  },
  'Star Wars: Rebellion': {
    ...gamesList['Star Wars: Rebellion'],
    badgeText: '#12 • 2023',
    sequence: 16,
  },
  'Brass: Birmingham': {
    ...gamesList['Brass: Birmingham'],
    badgeText: '#15 • 2023',
    crossover: {
      'Ryan': 3,
      'Mista Rau': 5
    },
    sequence: 17,
  },
  'Planet Unknown': {
    ...gamesList['Planet Unknown'],
    badgeText: 'New to List',
    sequence: 18,
  },
  'A Feast for Odin': {
    ...gamesList['A Feast for Odin'],
    badgeText: '#16 • 2023',
    sequence: 19,
  },
  'Everdell': {
    ...gamesList['Everdell'],
    badgeText: '#18 • 2023',
    sequence: 20,
  },
}