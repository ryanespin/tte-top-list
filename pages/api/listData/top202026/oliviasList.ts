import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const oliviasList: GameList = {
  'A Feast for Odin + The Norwegians': {
    ...gamesList['A Feast for Odin'],
    sequence: 1,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    crossover: {
      Anthony: 7,
      Arwen: 8
    },
    sequence: 2,
  },
  'Cascadia': {
    ...gamesList['Cascadia'],
    crossover: {
      Anthony: 5,
      Arwen: 10
    },
    sequence: 3,
  },
  'Clank!: A Deck-Building Adventure': {
    ...gamesList['Clank!: A Deck-Building Adventure'],
    sequence: 4,
  },
  'Wingspan + Oceania': {
    ...gamesList['Wingspan'],
    crossover: {
      Anthony: 1
    },
    sequence: 5,
  },
  'Carcassonne': {
    ...gamesList['Carcassonne'],
    crossover: {
      Anthony: 15
    },
    sequence: 6,
  },
  'Dominion': {
    ...gamesList['Dominion'],
    crossover: {
      Ryan: 12
    },
    sequence: 7,
  },
  'Bohnanza': {
    ...gamesList['Bohnanza'],
    sequence: 8,
  },
  'Five Tribes': {
    ...gamesList['Five Tribes'],
    sequence: 9,
  },
  'Blood on the Clocktower': {
    ...gamesList['Blood on the Clocktower'],
    sequence: 10,
  },
  'Papageno': {
    ...gamesList['Papageno'],
    sequence: 11,
  },
  'Le Havre': {
    ...gamesList['Le Havre'],
    sequence: 12,
  },
  'Root': {
    ...gamesList['Root'],
    sequence: 13,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    sequence: 14,
  },
  'Blood Bowl (2016 Edition)': {
    ...gamesList['Blood Bowl (2016 Edition)'],
    sequence: 15,
  },
  'Phantom Ink': {
    ...gamesList['Phantom Ink'],
    sequence: 16,
  },
  'Gaslands: Refuelled': {
    ...gamesList['Gaslands: Refuelled'],
    sequence: 17,
  },
  'Scythe': {
    ...gamesList['Scythe'],
    sequence: 18,
  },
  'Rummikub': {
    ...gamesList['Rummikub'],
    sequence: 19,
  },
  'Backgammon': {
    ...gamesList['Backgammon'],
    sequence: 20,
  },
}