import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Explorers of the North Sea': {
    ...gamesList['Explorers of the North Sea'],
    sequence: 1
  },
  'Survive: Escape from Atlantis!': {
    ...gamesList['Survive: Escape from Atlantis!'],
    sequence: 2
  },
  'Deep Sea Adventure': {
    ...gamesList['Deep Sea Adventure'],
    sequence: 3
  },
  'Hawaii': {
    ...gamesList['Hawaii'],
    sequence: 4
  },
  'Oceans': {
    ...gamesList['Oceans'],
    sequence: 5
  },
}