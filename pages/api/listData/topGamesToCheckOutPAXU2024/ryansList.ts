import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Little Alchemists': {
    ...gamesList['Little Alchemists'],
    sequence: 1,
  },
  'Black Forest': {
    ...gamesList['Black Forest'],
    sequence: 2,
  },
  'Daitoshi': {
    ...gamesList['Daitoshi'],
    sequence: 3,
  },
  'Molly House': {
    ...gamesList['Molly House'],
    sequence: 4,
  },
  'Rock Hard: 1977': {
    ...gamesList['Rock Hard: 1977'],
    sequence: 5,
  },
  'Bebop': {
    ...gamesList['Bebop'],
    sequence: 6
  },
  'Green Team Wins: Holiday Party': {
    ...gamesList['Green Team Wins: Holiday Party'],
    sequence: 7
  },
  'Tasso Banana': {
    ...gamesList['Tasso Banana'],
    sequence: 8
  },
  'War Story: Occupied France': {
    ...gamesList['War Story: Occupied France'],
    sequence: 9,
  },
  'Planta Nubo': {
    ...gamesList['Planta Nubo'],
    sequence: 10
  }
}