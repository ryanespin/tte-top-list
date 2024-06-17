import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Horrified': {
    ...gamesList['Horrified'],
    sequence: 1,
  },
  'Marvel United: X-Men': {
    ...gamesList['Marvel United: X-Men'],
    sequence: 2,
  },
  'Wonder Woman: Challenge of the Amazons': {
    ...gamesList['Wonder Woman: Challenge of the Amazons'],
    sequence: 3,
  },
  'Rear Window': {
    ...gamesList['Rear Window'],
    sequence: 4,
  },
  'Ghost Stories': {
    ...gamesList['Ghost Stories'],
    sequence: 5,
  },
  'The Spill': {
    ...gamesList['The Spill'],
    sequence: 6
  },
  'Spirit Island': {
    ...gamesList['Spirit Island'],
    sequence: 7
  },
  "Ghost Fightin' Treasure Hunters": {
    ...gamesList["Ghost Fightin' Treasure Hunters"],
    sequence: 8
  },
  'Keep the Heroes Out': {
    ...gamesList['Keep the Heroes Out'],
    sequence: 9,
  },
  'Pandemic Legacy: Season 1': {
    ...gamesList['Pandemic Legacy: Season 1'],
    sequence: 10
  }
}