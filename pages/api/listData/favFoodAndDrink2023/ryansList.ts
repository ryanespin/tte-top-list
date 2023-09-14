import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Abandon All Artichokes': {
    ...gamesList['Abandon All Artichokes'],
    sequence: 4
  },
  'Beer & Bread': {
    ...gamesList['Beer & Bread'],
    sequence: 5
  },
  'Distilled': {
    ...gamesList['Distilled'],
    sequence: 2
  },
  'Food Chain Magnate': {
    ...gamesList['Food Chain Magnate'],
    sequence: 1
  },
  'Piazza Rabazza': {
    ...gamesList['Piazza Rabazza'],
    sequence: 3
  }
}