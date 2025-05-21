import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'The Elder Scrolls: Betrayal of the Second Era': {
    ...gamesList['The Elder Scrolls: Betrayal of the Second Era'],
    crossover: {
      Arwen: 7,
    },
    sequence: 5,
  },
  'Neon Reign': {
    ...gamesList['Neon Reign'],
    crossover: {
      Danielle: 15
    },
    sequence: 4,
  },
  'Numbsters': {
    ...gamesList['Numbsters'],
    crossover: {
      Danielle: 10
    },
    sequence: 10,
  },
  'Rococo: Deluxe Edition': {
    ...gamesList['Rococo: Deluxe Edition'],
    crossover: {
      Arwen: 12
    },
    sequence: 9
  },
  'Raising Robots': {
    ...gamesList['Raising Robots'],
    crossover: {
      Danielle: 6
    },
    sequence: 8,
  },
  'Endeavor: Deep Sea': {
    ...gamesList['Endeavor: Deep Sea'],
    crossover: {
      Arwen: 5
    },
    sequence: 7,
  },
  'Aquatica': {
    ...gamesList['Aquatica'],
    crossover: {
      Danielle: 2
    },
    sequence: 6,
  },
  'Blood on the Clocktower': {
    ...gamesList['Blood on the Clocktower'],
    crossover: {
      Olivia: 10
    },
    sequence: 1,
  },
  'Alchemists': {
    ...gamesList['Alchemists'],
    crossover: {
      Ryan: 8
    },
    sequence: 2
  },
  'Blood Bowl (2016 Edition)': {
    ...gamesList['Blood Bowl (2016 Edition)'],
    crossover: {
      Olivia: 15
    },
    sequence: 3
  }
}