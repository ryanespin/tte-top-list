import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Agricola': {
    ...gamesList['Agricola'],
    sequence: 1
  },
  'Clans of Caledonia': {
    ...gamesList['Clans of Caledonia'],
    sequence: 2
  },
  'Three Sisters': {
    ...gamesList['Three Sisters'],
    sequence: 3
  },
  'Atiwa': {
    ...gamesList['Atiwa'],
    sequence: 4
  },
  'Viticulture Essential Edition': {
    ...gamesList['Viticulture Essential Edition'],
    sequence: 5
  },
}