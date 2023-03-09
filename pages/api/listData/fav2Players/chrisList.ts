import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Targi': {
    ...gamesList['Targi'],
    sequence: 1,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    sequence: 2,
  },
  'Azul': {
    ...gamesList['Azul'],
    sequence: 3,
  },
  'That Time You Killed Me': {
    ...gamesList['That Time You Killed Me'],
    sequence: 4,
  },
  'Watergate': {
    ...gamesList['Watergate'],
    sequence: 5,
  },
  'War Chest': {
    ...gamesList['War Chest'],
    sequence: 6,
  },
  'Crokinole': {
    ...gamesList['Crokinole'],
    sequence: 7,
  },
  'Sobek: 2 Players': {
    ...gamesList['Sobek: 2 Players'],
    sequence: 8,
  },
  'Radlands': {
    ...gamesList['Radlands'],
    sequence: 9,
  },
  'Onitama': {
    ...gamesList['Onitama'],
    sequence: 10,
  }
}