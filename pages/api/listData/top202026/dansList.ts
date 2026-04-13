import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const dansList: GameList = {
  'Dune: Imperium': {
    ...gamesList['Dune: Imperium'],
    crossover: {
      Tyler: 13,
    },
    sequence: 1,
  },
  'Unmatched Game System': {
    ...gamesList['Unmatched Game System'],
    sequence: 2,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    sequence: 3,
  },
  'Istanbul': {
    ...gamesList['Istanbul'],
    sequence: 4,
  },
  'Viticulture Essential Edition': {
    ...gamesList['Viticulture Essential Edition'],
    sequence: 5,
  },
  'Lost Ruins of Arnak': {
    ...gamesList['Lost Ruins of Arnak'],
    sequence: 6,
  },
  'Star Wars: Outer Rim – Unfinished Business': {
    ...gamesList['Star Wars: Outer Rim – Unfinished Business'],
    sequence: 7,
  },
  'Res Arcana': {
    ...gamesList['Res Arcana'],
    sequence: 8,
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    sequence: 9,
  },
  'Undaunted: Normandy': {
    ...gamesList['Undaunted: Normandy'],
    crossover: {
      Ryan: 11,
    },
    sequence: 10,
  },
  'War Chest': {
    ...gamesList['War Chest'],
    sequence: 11,
  },
  'Schotten Totten': {
    ...gamesList['Schotten Totten'],
    sequence: 12,
  },
  'Dog Lover': {
    ...gamesList['Dog Lover'],
    sequence: 13,
  },
  'Azul': {
    ...gamesList['Azul'],
    sequence: 14,
  },
  'Patchwork': {
    ...gamesList['Patchwork'],
    sequence: 15,
  },
  'Spots': {
    ...gamesList['Spots'],
    sequence: 16,
  },
  'Star Wars: Rebellion': {
    ...gamesList['Star Wars: Rebellion'],
    sequence: 17,
  },
  'Dracula vs Van Helsing': {
    ...gamesList['Dracula vs Van Helsing'],
    sequence: 18,
  },
  "Time's Up! Title Recall!": {
    ...gamesList["Time's Up! Title Recall!"],
    sequence: 19,
  },
  'Secret Hitler': {
    ...gamesList['Secret Hitler'],
    sequence: 20,
  },
}
