import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Agricola': {
    ...gamesList['Agricola'],
    sequence: 1
  },
  'Hallertau': {
    ...gamesList['Hallertau'],
    sequence: 2
  },
  'Atiwa': {
    ...gamesList['Atiwa'],
    sequence: 3
  },
  'Faiyum': {
    ...gamesList['Faiyum'],
    sequence: 4
  },
  'Abandon All Artichokes': {
    ...gamesList['Abandon All Artichokes'],
    sequence: 5
  },
}