import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Raising Robots': {
    ...gamesList['Raising Robots'],
    crossover: {
      Danielle: 6
    },
    sequence: 1,
  },
  'Endeavor: Deep Sea': {
    ...gamesList['Endeavor: Deep Sea'],
    crossover: {
      Arwen: 5
    },
    sequence: 2,
  },
  'Numbsters': {
    ...gamesList['Numbsters'],
    crossover: {
      Danielle: 10
    },
    sequence: 3,
  },
  'Santa Monica': {
    ...gamesList['Santa Monica'],
    crossover: {
      Anthony: 11
    },
    sequence: 4,
  },
  'Marvel Dice Throne: X-Men': {
    ...gamesList['Marvel Dice Throne: X-Men'],
    crossover: {
      Danielle: 1
    },
    sequence: 5,
  },
  'Apiary': {
    ...gamesList['Apiary'],
    crossover: {
      Arwen: 9
    },
    sequence: 6,
  },
  'Betrayal Legacy': {
    ...gamesList['Betrayal Legacy'],
    crossover: {
      Chris: 9
    },
    sequence: 7,
  },
  '51st State: Ultimate Edition': {
    ...gamesList['51st State: Ultimate Edition'],
    crossover: {
      Danielle: 14
    },
    sequence: 8,
  },
  'Blood Bowl (2016 Edition)': {
    ...gamesList['Blood Bowl (2016 Edition)'],
    crossover: {
      Olivia: 15
    },
    sequence: 9
  },
  'A Gentle Rain': {
    ...gamesList['A Gentle Rain'],
    crossover: {
      Danielle: 8
    },
    sequence: 10
  }
}