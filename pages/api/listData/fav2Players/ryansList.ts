import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Crokinole': {
    ...gamesList['Crokinole'],
    sequence: 1,
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    sequence: 2,
  },
  'Alchemists': {
    ...gamesList['Alchemists'],
    sequence: 3,
  },
  'Spirit Island': {
    ...gamesList['Spirit Island'],
    sequence: 4,
  },
  'Dominion': {
    ...gamesList['Dominion'],
    sequence: 5,
  },
  'Carolus Magnus | Eriantys': {
    ...gamesList['Carolus Magnus | Eriantys'],
    sequence: 6,
  },
  'Shards of Infinity': {
    ...gamesList['Shards of Infinity'],
    sequence: 7,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    sequence: 8,
  },
  'Gaslands: Refuelled': {
    ...gamesList['Gaslands: Refuelled'],
    sequence: 9,
  },
  'Air, Land, & Sea': {
    ...gamesList['Air, Land, & Sea'],
    sequence: 10,
  }
}