import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Targi': {
    ...gamesList['Targi'],
    sequence: 1
  },
  'That Time You Killed Me': {
    ...gamesList['That Time You Killed Me'],
    sequence: 2
  },
  'Watergate': {
    ...gamesList['Watergate'],
    sequence: 3
  },
  'Undaunted: Battle of Britain': {
    ...gamesList['Undaunted: Battle of Britain'],
    sequence: 4
  },
  'Radlands': {
    ...gamesList['Radlands'],
    sequence: 5
  },
  'Beer & Bread': {
    ...gamesList['Beer & Bread'],
    sequence: 6
  },
  'Splendor Duel': {
    ...gamesList['Splendor Duel'],
    sequence: 7
  },
  'Sobek: 2 Players': {
    ...gamesList['Sobek: 2 Players'],
    sequence: 8
  },
  'Onitama': {
    ...gamesList['Onitama'],
    sequence: 9
  },
  'Carcassonne: The Castle': {
    ...gamesList['Carcassonne: The Castle'],
    sequence: 10
  },
}