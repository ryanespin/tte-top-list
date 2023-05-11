import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Anomia': {
    ...gamesList['Anomia'],
    sequence: 4
  },
  'Dixit': {
    ...gamesList['Dixit'],
    sequence: 2
  },
  'A Fake Artist Goes to New York': {
    ...gamesList['A Fake Artist Goes to New York'],
    sequence: 3
  },
  'Just One': {
    ...gamesList['Just One'],
    sequence: 1
  },
  'Wits & Wagers': {
    ...gamesList['Wits & Wagers'],
    sequence: 5
  },
}