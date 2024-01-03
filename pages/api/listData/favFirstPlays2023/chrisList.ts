import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    sequence: 1
  },
  'Kulami': {
    ...gamesList['Kulami'],
    sequence: 2
  },
  'Ra': {
    ...gamesList['Ra'],
    sequence: 3
  },
  'Atiwa': {
    ...gamesList['Atiwa'],
    sequence: 4
  },
  'Unmatched Game System': {
    ...gamesList['Unmatched Game System'],
    sequence: 5
  }
}