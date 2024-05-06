import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const briansList: GameList = {
  'Cartographers': {
    ...gamesList['Cartographers'],
    badgeText: '#1 • 2023',
    crossover: {
      Anthony: 18,
      Arwen: 9
    },
    sequence: 1,
  },
  'Azul': {
    ...gamesList['Azul'],
    badgeText: '#2 • 2023',
    crossover: {
      "Chris": 10,
      Anthony: 14
    },
    sequence: 2,
  },
  'Agricola': {
    ...gamesList['Agricola'],
    badgeText: '#3 • 2023',
    crossover: {
      Ryan: 5
    },
    sequence: 3,
  },
  'Astro Knights': {
    ...gamesList['Astro Knights'],
    badgeText: 'New to List',
    crossover: {
      Danielle: 12
    },
    sequence: 4,
  },
  'Fantastic Factories': {
    ...gamesList['Fantastic Factories'],
    badgeText: '#7 • 2023',
    crossover: {
      Chris: 8
    },
    sequence: 5,
  },
  'The Lord of the Rings Trading Card Game': {
    ...gamesList['The Lord of the Rings Trading Card Game'],
    badgeText: '#12 • 2023',
    sequence: 6,
  },
  'Cascadia': {
    ...gamesList['Cascadia'],
    badgeText: '#4 • 2023',
    crossover: {
      Anthony: 1,
      "Chris": 4
    },
    sequence: 7,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    badgeText: 'New to List',
    crossover: {
      "Mista Rau": 10,
      Danielle: 14,
      Chris: 20
    },
    sequence: 8,
  },
  'Star Wars: The Deckbuilding Game': {
    ...gamesList['Star Wars: The Deckbuilding Game'],
    badgeText: 'New to List',
    sequence: 9,
  },
  'The Red Cathedral': {
    ...gamesList['The Red Cathedral'],
    badgeText: '#6 • 2023',
    sequence: 10,
  },
  'NMBR 9': {
    ...gamesList['NMBR 9'],
    badgeText: '#9 • 2023',
    sequence: 11,
  },
  'Abandon All Artichokes': {
    ...gamesList['Abandon All Artichokes'],
    badgeText: '#11 • 2023',
    sequence: 12,
  },
  'One Deck Dungeon': {
    ...gamesList['One Deck Dungeon'],
    badgeText: '#17 • 2022',
    sequence: 13,
  },
  'Aquamarine': {
    ...gamesList['Aquamarine'],
    badgeText: '#17 • 2023',
    sequence: 14,
  },
  'Fleet: The Dice Game': {
    ...gamesList['Fleet: The Dice Game'],
    badgeText: '#8 • 2023',
    crossover: {
      Anthony: 4
    },
    sequence: 15,
  },
  'Tussie Mussie': {
    ...gamesList['Tussie Mussie'],
    badgeText: '#5 • 2023',
    sequence: 16,
  },
  'Viticulture Essential Edition': {
    ...gamesList['Viticulture Essential Edition'],
    badgeText: '#10 • 2023',
    sequence: 17,
  },
  'Super-Skill Pinball: 4-Cade': {
    ...gamesList['Super-Skill Pinball: 4-Cade'],
    badgeText: '#14 • 2023',
    sequence: 18,
  },
  'Qwixx': {
    ...gamesList['Qwixx'],
    badgeText: 'New to List',
    sequence: 19,
  },
  'Great Western Trail: Second Edition': {
    ...gamesList['Great Western Trail: Second Edition'],
    badgeText: 'New to List',
    sequence: 20,
  },
}