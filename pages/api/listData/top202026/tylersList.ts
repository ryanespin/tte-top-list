import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const tylersList: GameList = {
  'Ashes Reborn: Rise of the Phoenixborn': {
    ...gamesList['Ashes Reborn: Rise of the Phoenixborn'],
    sequence: 1,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    sequence: 2,
  },
  'Ark Nova': {
    ...gamesList['Ark Nova'],
    sequence: 3,
  },
  'Nucleum': {
    ...gamesList['Nucleum'],
    sequence: 4,
  },
  'Age of Steam': {
    ...gamesList['Age of Steam'],
    crossover: {
      Ryan: 15,
    },
    sequence: 5,
  },
  'Pax Pamir: Second Edition': {
    ...gamesList['Pax Pamir: Second Edition'],
    sequence: 6,
  },
  'Rolling Realms': {
    ...gamesList['Rolling Realms'],
    sequence: 7,
  },
  'The White Castle': {
    ...gamesList['The White Castle'],
    sequence: 8,
  },
  'Rebel Princess': {
    ...gamesList['Rebel Princess'],
    sequence: 9,
  },
  'Hegemony: Lead Your Class to Victory': {
    ...gamesList['Hegemony: Lead Your Class to Victory'],
    sequence: 10,
  },
  'Spirit Island': {
    ...gamesList['Spirit Island'],
    crossover: {
      Ryan: 12,
    },
    sequence: 11,
  },
  'For Northwood! A Solo Trick-Taking Game': {
    ...gamesList['For Northwood! A Solo Trick-Taking Game'],
    sequence: 12,
  },
  'Dune: Imperium': {
    ...gamesList['Dune: Imperium'],
    sequence: 13,
  },
  'Beer & Bread': {
    ...gamesList['Beer & Bread'],
    sequence: 14,
  },
  'Yokohama': {
    ...gamesList['Yokohama'],
    sequence: 15,
  },
  'Halls of Hegra': {
    ...gamesList['Halls of Hegra'],
    sequence: 16,
  },
  'Orléans': {
    ...gamesList['Orléans'],
    crossover: {
      Ryan: 16,
    },
    sequence: 17,
  },
  'Vantage': {
    ...gamesList['Vantage'],
    sequence: 18,
  },
  '3 Witches': {
    ...gamesList['3 Witches'],
    sequence: 19,
  },
  'In Vino Morte': {
    ...gamesList['In Vino Morte'],
    sequence: 20,
  },
}
