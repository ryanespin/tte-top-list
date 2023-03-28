import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Atiwa': {
    ...gamesList['Atiwa'],
    sequence: 9
  },
  'Beer & Bread': {
    ...gamesList['Beer & Bread'],
    sequence: 7
  },
  'The Guild of Merchant Explorers': {
    ...gamesList['The Guild of Merchant Explorers'],
    sequence: 8
  },
  'Oak': {
    ...gamesList['Oak'],
    sequence: 5
  },
  'Dead Reckoning': {
    ...gamesList['Dead Reckoning'],
    sequence: 10
  },
  'Splendor Duel': {
    ...gamesList['Splendor Duel'],
    sequence: 6
  },
  'Spots': {
    ...gamesList['Spots'],
    sequence: 3
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    sequence: 4,
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    sequence: 1,
  },
  "Wonderland's War": {
    ...gamesList["Wonderland's War"],
    sequence: 2,
  },
}