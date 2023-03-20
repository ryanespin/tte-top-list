import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Gloomhaven': {
    ...gamesList['Gloomhaven'],
    badgeText: '#1 • 2022',
    crossover: { 'Brian': 19 },
    sequence: 1,
  },
  'Food Chain Magnate': {
    ...gamesList['Food Chain Magnate'],
    badgeText: '#2 • 2022',
    sequence: 2,
  },
  'Brass: Birmingham': {
    ...gamesList['Brass: Birmingham'],
    badgeText: '#3 • 2022',
    crossover: { 'Chris': 11 },
    sequence: 3,
  },
  'Crokinole': {
    ...gamesList['Crokinole'],
    badgeText: '#4 • 2022',
    sequence: 4,
  },
  'Agricola': {
    ...gamesList['Agricola'],
    badgeText: '#5 • 2022',
    crossover: { 'Brian': 3, 'Chris': 19 },
    sequence: 5,
  },
  'El Grande': {
    ...gamesList['El Grande'],
    badgeText: '#8 • 2022',
    sequence: 6,
  },
  'Alchemists': {
    ...gamesList['Alchemists'],
    badgeText: '#12 • 2022',
    sequence: 7,
  },
  'Shikoku 1889': {
    ...gamesList['Shikoku 1889'],
    badgeText: 'New to List',
    sequence: 8,
  },
  'Dominion': {
    ...gamesList['Dominion'],
    badgeText: '#11 • 2022',
    sequence: 9,
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    badgeText: 'New to List',
    sequence: 10,
  },
  '18Chesapeake': {
    ...gamesList['18Chesapeake'],
    badgeText: '#6 • 2022',
    sequence: 11,
  },
  'Age of Steam': {
    ...gamesList['Age of Steam'],
    badgeText: '#9 • 2022',
    sequence: 12,
  },
  'Shards of Infinity': {
    ...gamesList['Shards of Infinity'],
    badgeText: 'New to List',
    sequence: 13,
  },
  'Orléans': {
    ...gamesList['Orléans'],
    badgeText: '#17 • 2022',
    sequence: 14,
  },
  'Bärenpark': {
    ...gamesList['Bärenpark'],
    badgeText: 'New to List',
    sequence: 15,
  },
  'Star Trek: Frontiers': {
    ...gamesList['Star Trek: Frontiers'],
    badgeText: '#15 • 2022',
    sequence: 16,
  },
  'Through the Ages: A New Story of Civilization': {
    ...gamesList['Through the Ages: A New Story of Civilization'],
    badgeText: '#14 • 2022',
    sequence: 17,
  },
  'Hallertau': {
    ...gamesList['Hallertau'],
    badgeText: 'New to List',
    sequence: 18,
  },
  'Spirit Island': {
    ...gamesList['Spirit Island'],
    badgeText: '#19 • 2022',
    sequence: 19,
  },
  'Rococo: Deluxe Edition': {
    ...gamesList['Rococo: Deluxe Edition'],
    badgeText: '#16 • 2022',
    sequence: 20,
  },
}