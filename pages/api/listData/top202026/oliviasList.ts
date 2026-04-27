import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const oliviasList: GameList = {
  'Cascadia': {
    ...gamesList['Cascadia'],
    badgeText: '#3 • 2025',
    crossover: {
      Arwen: 9,
    },
    sequence: 1,
  },
  'A Feast for Odin + The Norwegians': {
    ...gamesList['A Feast for Odin'],
    badgeText: '#1 • 2025',
    sequence: 2,
  },
  'Blood Bowl (Third Season Edition)': {
    ...gamesList['Blood Bowl (Third Season Edition)'],
    badgeText: 'New to List',
    sequence: 3,
  },
  'Wingspan + Oceania': {
    ...gamesList['Wingspan'],
    badgeText: '#5 • 2025',
    sequence: 4,
  },
  'Clank!: A Deck-Building Adventure': {
    ...gamesList['Clank!: A Deck-Building Adventure'],
    badgeText: '#4 • 2025',
    sequence: 5,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    badgeText: '#14 • 2025',
    crossover: {
      Chris: 3,
      Dan: 9,
    },
    sequence: 6,
  },
  'Five Tribes': {
    ...gamesList['Five Tribes'],
    badgeText: '#9 • 2025',
    sequence: 7,
  },
  'Dominion': {
    ...gamesList['Dominion'],
    badgeText: '#7 • 2025',
    crossover: {
      Ryan: 14,
    },
    sequence: 8,
  },
  'Carcassonne': {
    ...gamesList['Carcassonne'],
    badgeText: '#6 • 2025',
    sequence: 9,
  },
  'Gaslands: Refuelled': {
    ...gamesList['Gaslands: Refuelled'],
    badgeText: '#17 • 2025',
    sequence: 10,
  },
  'The Gang': {
    ...gamesList['The Gang'],
    badgeText: 'New to List',
    crossover: {
      Arwen: 13,
    },
    sequence: 11,
  },
  'Flip 7': {
    ...gamesList['Flip 7'],
    badgeText: 'New to List',
    sequence: 12,
  },
  'Sagrada': {
    ...gamesList['Sagrada'],
    badgeText: 'New to List',
    sequence: 13,
  },
  'Quartz': {
    ...gamesList['Quartz'],
    badgeText: 'New to List',
    sequence: 14,
  },
  'Dice Throne': {
    ...gamesList['Dice Throne'],
    badgeText: 'New to List',
    sequence: 15,
  },
  'Bohnanza': {
    ...gamesList['Bohnanza'],
    badgeText: '#8 • 2025',
    sequence: 16,
  },
  'Papageno': {
    ...gamesList['Papageno'],
    badgeText: '#11 • 2025',
    sequence: 17,
  },
  'Phantom Ink': {
    ...gamesList['Phantom Ink'],
    badgeText: '#16 • 2025',
    sequence: 18,
  },
  'Blood on the Clocktower': {
    ...gamesList['Blood on the Clocktower'],
    badgeText: '#10 • 2025',
    sequence: 19,
  },
  'Rummikub': {
    ...gamesList['Rummikub'],
    badgeText: '#19 • 2025',
    sequence: 20,
  },
}
