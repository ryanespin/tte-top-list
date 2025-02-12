import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Targi': {
    ...gamesList['Targi'],
    sequence: 1
  },
  'War Chest': {
    ...gamesList['War Chest'],
    sequence: 2
  },
  'Undaunted - Series': {
    ...gamesList['Undaunted: Battle of Britain'],
    sequence: 3
  },
  'The Lord of the Rings: Duel for Middle-earth': {
    ...gamesList['The Lord of the Rings: Duel for Middle-earth'],
    sequence: 4
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    sequence: 5
  },
  'That Time You Killed Me': {
    ...gamesList['That Time You Killed Me'],
    sequence: 6
  },
  'Watergate': {
    ...gamesList['Watergate'],
    sequence: 7
  },
  'Décorum': {
    ...gamesList['Décorum'],
    sequence: 8
  },
  'Pagan: Fate of Roanoke': {
    ...gamesList['Pagan: Fate of Roanoke'],
    sequence: 9
  },
  'Bullet♥︎': {
    ...gamesList['Bullet♥︎'],
    sequence: 10
  },
}