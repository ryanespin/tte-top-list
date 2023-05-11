import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Cockroach Poker': {
    ...gamesList['Cockroach Poker'],
    sequence: 1
  },
  'Escape from the Aliens in Outer Space': {
    ...gamesList['Escape from the Aliens in Outer Space'],
    sequence: 4
  },
  'Junk Art': {
    ...gamesList['Junk Art'],
    sequence: 2
  },
  "Loopin' Louie": {
    ...gamesList["Loopin' Louie"],
    sequence: 3
  },
  'PitchCar': {
    ...gamesList['PitchCar'],
    sequence: 5
  },
}