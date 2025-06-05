import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    sequence: 1
  },
  'Betrayal Legacy': {
    ...gamesList['Betrayal Legacy'],
    sequence: 2
  },
  'The Goonies: Never Say Die': {
    ...gamesList['The Goonies: Never Say Die'],
    sequence: 3
  },
  'Final Girl': {
    ...gamesList['Final Girl'],
    sequence: 5
  },
  'Ghostbusters: Protect the Barrier/Ghost Fightin\' Treasure Hunters': {
    ...gamesList["Ghost Fightin' Treasure Hunters"],
    sequence: 4
  }
}