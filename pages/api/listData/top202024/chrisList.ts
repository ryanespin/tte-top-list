import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Targi': {
    ...gamesList['Targi'],
    badgeText: '#1 • 2023',
    sequence: 1,
  },
  'Scythe': {
    ...gamesList['Scythe'],
    badgeText: '#2 • 2023',
    sequence: 2,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    badgeText: '#8 • 2023',
    sequence: 3,
  },
  'Cascadia': {
    ...gamesList['Cascadia'],
    badgeText: '#3 • 2023',
    sequence: 4,
  },
  'Raiders of the North Sea': {
    ...gamesList['Raiders of the North Sea'],
    badgeText: '#5 • 2023',
    sequence: 5,
  },
  'Imperial Settlers: Empires of the North': {
    ...gamesList['Imperial Settlers: Empires of the North'],
    badgeText: '#6 • 2023',
    sequence: 6,
  },
  'Battlestar Galactica': {
    ...gamesList['Battlestar Galactica'],
    badgeText: '#4 • 2023',
    sequence: 7,
  },
  'Fantastic Factories': {
    ...gamesList['Fantastic Factories'],
    badgeText: '#20 • 2023',
    sequence: 8,
  },
  'War Chest': {
    ...gamesList['War Chest'],
    badgeText: 'New to List',
    sequence: 9,
  },
  'Azul': {
    ...gamesList['Azul'],
    badgeText: '#9 • 2023',
    sequence: 10,
  },
  'Watergate': {
    ...gamesList['Watergate'],
    badgeText: '#14 • 2023',
    sequence: 11,
  },
  'Lost Ruins of Arnak': {
    ...gamesList['Lost Ruins of Arnak'],
    badgeText: '#7 • 2023',
    sequence: 12,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    badgeText: '#12 • 2023',
    sequence: 13,
  },
  'That Time You Killed Me': {
    ...gamesList['That Time You Killed Me'],
    badgeText: '#10 • 2023',
    sequence: 14,
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    badgeText: '#15 • 2023',
    sequence: 15,
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    badgeText: 'New to List',
    crossover: { 'Ryan': 12 },
    sequence: 16,
  },
  'The Taverns of Tiefenthal': {
    ...gamesList['The Taverns of Tiefenthal'],
    badgeText: 'New to List',
    sequence: 17,
  },
  'Ticket to Ride: Europe': {
    ...gamesList['Ticket to Ride: Europe'],
    badgeText: '#13 • 2023',
    sequence: 18,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    badgeText: '#17 • 2023',
    sequence: 19,
  },
  "Wonderland's War": {
    ...gamesList["Wonderland's War"],
    badgeText: 'New to Me',
    sequence: 20,
  },
}