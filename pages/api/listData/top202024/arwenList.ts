import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const arwenList: GameList = {
  'Space Base': {
    ...gamesList['Space Base'],
    sequence: 1,
  },
  'Orléans': {
    ...gamesList['Orléans'],
    crossover: {
      'Mista Rau': 17
    },
    sequence: 2,
  },
  'Obsession': {
    ...gamesList['Obsession'],
    sequence: 3,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    crossover: {
      "Chris": 3,
      Anthony: 4
    },
    sequence: 4,
  },
  'Concordia': {
    ...gamesList['Concordia'],
    sequence: 5,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
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
    sequence: 7,
  },
  'Too Many Bones': {
    ...gamesList['Too Many Bones'],
    sequence: 8,
  },
  'Cartographers': {
    ...gamesList['Cartographers'],
    crossover: {
      'Brian': 1,
      'Anthony': 18
    },
    sequence: 9,
  },
  'Blood on the Clocktower': {
    ...gamesList['Blood on the Clocktower'],
    sequence: 10,
  },
  'Alchemists': {
    ...gamesList['Alchemists'],
    crossover: {
      Ryan: 9
    },
    sequence: 11,
  },
  'Russian Railroads': {
    ...gamesList['Russian Railroads'],
    sequence: 12,
  },
  'Kanban EV': {
    ...gamesList['Kanban EV'],
    sequence: 13,
  },
  'Rococo: Deluxe Edition': {
    ...gamesList['Rococo: Deluxe Edition'],
    crossover: {
      'Ryan': 17
    },
    sequence: 14,
  },
  'Food Chain Magnate': {
    ...gamesList['Food Chain Magnate'],
    crossover: {
      Ryan: 1
    },
    sequence: 15,
  },
  'Star Wars: Rebellion': {
    ...gamesList['Star Wars: Rebellion'],
    sequence: 16,
  },
  'Brass: Birmingham': {
    ...gamesList['Brass: Birmingham'],
    crossover: {
      'Ryan': 3,
      'Mista Rau': 5
    },
    sequence: 17,
  },
  'Planet Unknown': {
    ...gamesList['Planet Unknown'],
    sequence: 18,
  },
  'A Feast for Odin': {
    ...gamesList['A Feast for Odin'],
    sequence: 19,
  },
  'Everdell': {
    ...gamesList['Everdell'],
    sequence: 20,
  },
}