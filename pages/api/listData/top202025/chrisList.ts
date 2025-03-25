import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Targi': {
    ...gamesList['Targi'],
    badgeText: '#1 • 2024',
    crossover: {
      Anthony: 12
    },
    sequence: 1,
  },
  'Scythe': {
    ...gamesList['Scythe'],
    badgeText: '#2 • 2024',
    crossover: {
      Olivia: 18
    },
    sequence: 2,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    badgeText: '#3 • 2024',
    crossover: {
      Arwen: 3,
      Olivia: 14
    },
    sequence: 3,
  },
  'War Chest': {
    ...gamesList['War Chest'],
    badgeText: '#9 • 2024',
    sequence: 4,
  },
  'Watergate': {
    ...gamesList['Watergate'],
    badgeText: '#11 • 2024',
    sequence: 5,
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    badgeText: '#16 • 2024',
    crossover: { 'Ryan': 10 },
    sequence: 6,
  },
  'Unmatched Game System': {
    ...gamesList['Unmatched Game System'],
    badgeText: '#15 • 2024',
    sequence: 7,
  },
  'Raiders of the North Sea': {
    ...gamesList['Raiders of the North Sea'],
    badgeText: '#5 • 2024',
    sequence: 8,
  },
  'Betrayal Legacy': {
    ...gamesList['Betrayal Legacy'],
    badgeText: 'New to List',
    sequence: 9,
  },
  'Heat: Pedal to the Metal': {
    ...gamesList['Heat: Pedal to the Metal'],
    badgeText: 'New to List',
    sequence: 10,
  },
  'Imperial Settlers: Empires of the North': {
    ...gamesList['Imperial Settlers: Empires of the North'],
    badgeText: '#6 • 2024',
    sequence: 11,
  },
  'Harmonies': {
    ...gamesList['Harmonies'],
    badgeText: 'New to List',
    crossover: {
      Anthony: 4
    },
    sequence: 12
  },
  'Rebel Princess': {
    ...gamesList['Rebel Princess'],
    badgeText: 'New to List',
    sequence: 13
  },
  'That Time You Killed Me': {
    ...gamesList['That Time You Killed Me'],
    badgeText: '#13 • 2024',
    sequence: 14,
  },
  'The Field of the Cloth of Gold': {
    ...gamesList['The Field of the Cloth of Gold'],
    badgeText: 'New to List',
    sequence: 15
  },
  'Naishi': {
    ...gamesList['Naishi'],
    badgeText: 'New to List',
    sequence: 16
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    badgeText: '#14 • 2024',
    sequence: 17,
  },
  'Agricola': {
    ...gamesList['Agricola'],
    badgeText: '#19 • 2023',
    crossover: { Ryan: 5 },
    sequence: 18,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    badgeText: '#20 • 2024',
    sequence: 19,
  },
  'Azul': {
    ...gamesList['Azul'],
    badgeText: '#10 • 2024',
    crossover: { Anthony: 6 },
    sequence: 20,
  },
}