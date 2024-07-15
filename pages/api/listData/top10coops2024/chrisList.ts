import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    sequence: 1,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    sequence: 2,
  },
  'The Crew: Mission Deep Sea': {
    ...gamesList['The Crew: Mission Deep Sea'],
    sequence: 3,
  },
  'Décorum': {
    ...gamesList['Décorum'],
    sequence: 4,
  },
  'Just One': {
    ...gamesList['Just One'],
    sequence: 5,
  },
  'Maximum Apocalypse': {
    ...gamesList['Maximum Apocalypse'],
    sequence: 6,
  },
  'Unmatched Adventures: Tales to Amaze': {
    ...gamesList['Unmatched Adventures: Tales to Amaze'],
    sequence: 7
  },
  'The LOOP': {
    ...gamesList['The LOOP'],
    sequence: 8
  },
  'Horrified (Series)': {
    ...gamesList['Horrified'],
    sequence: 9
  },
  'Robinson Crusoe: Adventures on the Cursed Island': {
    ...gamesList['Robinson Crusoe: Adventures on the Cursed Island'],
    sequence: 10
  },
}