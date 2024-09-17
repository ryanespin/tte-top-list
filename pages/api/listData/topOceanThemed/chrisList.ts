import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Cockroach Poker': {
    ...gamesList['Cockroach Poker'],
    sequence: 2
  },
  'Codenames': {
    ...gamesList['Codenames'],
    sequence: 4
  },
  'Just One': {
    ...gamesList['Just One'],
    sequence: 3
  },
  'MonsDRAWsity': {
    ...gamesList['MonsDRAWsity'],
    sequence: 1
  },
  'So Clover!': {
    ...gamesList['So Clover!'],
    sequence: 5
  },
}