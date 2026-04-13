import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Targi': {
    ...gamesList['Targi'],
    badgeText: '#1 • 2025',
    sequence: 1,
  },
  'Scythe': {
    ...gamesList['Scythe'],
    badgeText: '#2 • 2025',
    sequence: 2,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    badgeText: '#3 • 2025',
    crossover: {
      Dan: 9,
    },
    sequence: 3,
  },
  'Vantage': {
    ...gamesList['Vantage'],
    badgeText: 'New to List',
    crossover: {
      Tyler: 18,
    },
    sequence: 4,
  },
  'Unmatched Game System': {
    ...gamesList['Unmatched Game System'],
    badgeText: '#8 • 2025',
    crossover: {
      Dan: 2,
    },
    sequence: 5,
  },
  'Watergate': {
    ...gamesList['Watergate'],
    badgeText: '#5 • 2025',
    sequence: 6,
  },
  'War Chest': {
    ...gamesList['War Chest'],
    badgeText: '#4 • 2025',
    crossover: {
      Dan: 11,
    },
    sequence: 7,
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    badgeText: '#6 • 2025',
    crossover: {
      Ryan: 11,
      Dan: 10,
    },
    sequence: 8,
  },
  'Rebel Princess': {
    ...gamesList['Rebel Princess'],
    badgeText: '#13 • 2025',
    crossover: {
      Tyler: 9,
    },
    sequence: 9,
  },
  'The Lord of the Rings: Duel for Middle-earth': {
    ...gamesList['The Lord of the Rings: Duel for Middle-earth'],
    badgeText: 'New to List',
    sequence: 10,
  },
  'Heat: Pedal to the Metal': {
    ...gamesList['Heat: Pedal to the Metal'],
    badgeText: '#11 • 2025',
    sequence: 11,
  },
  'The Field of the Cloth of Gold': {
    ...gamesList['The Field of the Cloth of Gold'],
    badgeText: '#15 • 2025',
    sequence: 12,
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    badgeText: '#17 • 2025',
    sequence: 13,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    badgeText: '#19 • 2025',
    crossover: {
      Tyler: 2,
    },
    sequence: 14,
  },
  'Harmonies': {
    ...gamesList['Harmonies'],
    badgeText: '#13 • 2025',
    sequence: 15,
  },
  'Battlestar Galactica': {
    ...gamesList['Battlestar Galactica'],
    badgeText: '#8 • 2024',
    sequence: 16,
  },
  "Wonderland's War": {
    ...gamesList["Wonderland's War"],
    badgeText: 'New to List',
    sequence: 17,
  },
  'Naishi': {
    ...gamesList['Naishi'],
    badgeText: '#17 • 2025',
    sequence: 18,
  },
  'Pagan: Fate of Roanoke': {
    ...gamesList['Pagan: Fate of Roanoke'],
    badgeText: 'New to List',
    sequence: 19,
  },
  'Fantastic Factories': {
    ...gamesList['Fantastic Factories'],
    badgeText: '#9 • 2024',
    sequence: 20,
  },
}
