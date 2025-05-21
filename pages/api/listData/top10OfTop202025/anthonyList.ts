import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Watergate': {
    ...gamesList['Watergate'],
    crossover: {
      Chris: 5,
    },
    sequence: 1,
  },
  'Crokinole': {
    ...gamesList['Crokinole'],
    crossover: {
      Ryan: 4
    },
    sequence: 2,
  },
  'A Nice Cuppa': {
    ...gamesList['A Nice Cuppa'],
    crossover: {
      Danielle: 19
    },
    sequence: 3,
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    crossover: {
      Chris: 17
    },
    sequence: 4
  },
  'Finspan': {
    ...gamesList['Finspan'],
    crossover: {
      Danielle: 16
    },
    sequence: 5,
  },
  'Draft & Write Records': {
    ...gamesList['Draft & Write Records'],
    crossover: {
      Danielle: 4
    },
    sequence: 6,
  },
  'Orléans': {
    ...gamesList['Orléans'],
    crossover: {
      Arwen: 1,
      Ryan: 19
    },
    sequence: 7,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    crossover: {
      Callers: 12,
      Chris: 19
    },
    sequence: 8,
  },
  'Star Wars: The Deckbuilding Game': {
    ...gamesList['Star Wars: The Deckbuilding Game'],
    crossover: {
      Callers: 15
    },
    sequence: 9
  },
  'Bohnanza': {
    ...gamesList['Bohnanza'],
    crossover: {
      Olivia: 8
    },
    sequence: 10
  }
}