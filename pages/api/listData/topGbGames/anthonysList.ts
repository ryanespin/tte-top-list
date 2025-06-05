import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Horrified': {
    ...gamesList['Horrified'],
    sequence: 5
  },
  'Ghost Stories': {
    ...gamesList['Ghost Stories'],
    sequence: 4
  },
  'Paranormal Detectives': {
    ...gamesList['Paranormal Detectives'],
    sequence: 3
  },
  'Haunt the House': {
    ...gamesList['Haunt the House'],
    sequence: 2
  },
  'Ghostbusters: Protect the Barrier/Ghost Fightin\' Treasure Hunters': {
    ...gamesList["Ghost Fightin' Treasure Hunters"],
    sequence: 1
  }
}