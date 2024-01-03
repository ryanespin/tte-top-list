import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Ra': {
    ...gamesList['Ra'],
    sequence: 1
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    sequence: 2
  },
  'Spots': {
    ...gamesList['Spots'],
    sequence: 3
  },
  'The Field of the Cloth of Gold': {
    ...gamesList['The Field of the Cloth of Gold'],
    sequence: 4
  },
  'Terminator: Dark Fate - The Card Game': {
    ...gamesList['Terminator: Dark Fate - The Card Game'],
    sequence: 5
  }
}