import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Targi': {
    ...gamesList['Targi'],
    badgeText: '#3 • 2022',
    sequence: 1,
  },
  'Scythe': {
    ...gamesList['Scythe'],
    badgeText: '#1 • 2022',
    sequence: 2,
  },
  'Cascadia': {
    ...gamesList['Cascadia'],
    badgeText: '#7 • 2022',
    crossover: { 'Brian': 4 },
    sequence: 3,
  },
  'Battlestar Galactica': {
    ...gamesList['Battlestar Galactica'],
    badgeText: '#5 • 2022',
    sequence: 4,
  },
  'Raiders of the North Sea': {
    ...gamesList['Raiders of the North Sea'],
    badgeText: '#2 • 2022',
    sequence: 5,
  },
  'Imperial Settlers: Empires of the North': {
    ...gamesList['Imperial Settlers: Empires of the North'],
    badgeText: '#4 • 2022',
    sequence: 6,
  },
  'Lost Ruins of Arnak': {
    ...gamesList['Lost Ruins of Arnak'],
    badgeText: '#10 • 2022',
    sequence: 7,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    badgeText: '#20 • 2022',
    sequence: 8,
  },
  'Azul': {
    ...gamesList['Azul'],
    badgeText: '#9 • 2022',
    crossover: { 'Brian': 2 },
    sequence: 9,
  },
  'That Time You Killed Me': {
    ...gamesList['That Time You Killed Me'],
    badgeText: '#16 • 2022',
    sequence: 10,
  },
  'Brass: Birmingham': {
    ...gamesList['Brass: Birmingham'],
    badgeText: '#8 • 2022',
    sequence: 11,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    badgeText: '#13 • 2022',
    sequence: 12,
  },
  'Ticket to Ride: Europe': {
    ...gamesList['Ticket to Ride: Europe'],
    badgeText: '#6 • 2022',
    sequence: 13,
  },
  'Watergate': {
    ...gamesList['Watergate'],
    badgeText: 'New to List',
    sequence: 14,
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    badgeText: 'New to List',
    sequence: 15,
  },
  'Terraforming Mars: Ares Expedition': {
    ...gamesList['Terraforming Mars: Ares Expedition'],
    badgeText: 'New to List',
    sequence: 16,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    badgeText: 'New to List',
    sequence: 17,
  },
  "Hadrian's Wall": {
    ...gamesList[`Hadrian's Wall`],
    badgeText: '#11 • 2022',
    sequence: 18,
  },
  'Agricola': {
    ...gamesList['Agricola'],
    badgeText: 'New to List',
    crossover: { 'Brian': 3 },
    sequence: 19,
  },
  'Fantastic Factories': {
    ...gamesList['Fantastic Factories'],
    badgeText: 'New to List',
    crossover: { 'Brian': 7 },
    sequence: 20,
  },
}