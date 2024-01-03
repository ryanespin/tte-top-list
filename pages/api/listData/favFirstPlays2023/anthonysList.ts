import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  "Santa's Workshop (Second Edition)": {
    ...gamesList["Santa's Workshop (Second Edition)"],
    sequence: 1
  },
  'Heat: Pedal to the Metal': {
    ...gamesList['Heat: Pedal to the Metal'],
    sequence: 2
  },
  'SCOUT': {
    ...gamesList['SCOUT'],
    sequence: 3
  },
  "That's Pretty Clever! Kids": {
    ...gamesList["That's Pretty Clever! Kids"],
    sequence: 4
  },
  'Green Team Wins': {
    ...gamesList['Green Team Wins'],
    sequence: 5
  }
}