import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    sequence: 1
  },
  'Air, Land, & Sea': {
    ...gamesList['Air, Land, & Sea'],
    sequence: 2
  },
  'Patchwork': {
    ...gamesList['Patchwork'],
    sequence: 3
  },
  'The Field of the Cloth of Gold': {
    ...gamesList['The Field of the Cloth of Gold'],
    sequence: 4
  },
  '7 Wonders Duel': {
    ...gamesList['7 Wonders Duel'],
    sequence: 5
  },
  'Targi': {
    ...gamesList['Targi'],
    sequence: 6
  },
  'Undaunted: Battle of Britain': {
    ...gamesList['Undaunted: Battle of Britain'],
    sequence: 7
  },
  'Watergate': {
    ...gamesList['Watergate'],
    sequence: 8
  },
  'Radlands': {
    ...gamesList['Radlands'],
    sequence: 9
  },
  'Twilight Struggle': {
    ...gamesList['Twilight Struggle'],
    sequence: 10
  },
}