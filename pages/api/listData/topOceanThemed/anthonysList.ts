import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Survive: Escape from Atlantis!': {
    ...gamesList['Survive: Escape from Atlantis!'],
    sequence: 1
  },
  'Jaws': {
    ...gamesList['Jaws'],
    sequence: 2
  },
  'The Spill': {
    ...gamesList['The Spill'],
    sequence: 3
  },
  'Oceanos': {
    ...gamesList['Oceanos'],
    sequence: 4
  },
  'Carcassonne: South Seas': {
    ...gamesList['Carcassonne: South Seas'],
    sequence: 5
  },
}