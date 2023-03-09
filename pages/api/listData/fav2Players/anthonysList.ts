import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Patchwork': {
    ...gamesList['Patchwork'],
    sequence: 1,
  },
  '7 Wonders Duel': {
    ...gamesList['7 Wonders Duel'],
    sequence: 2,
  },
  'Targi': {
    ...gamesList['Targi'],
    sequence: 3,
  },
  'Splendor Duel': {
    ...gamesList['Splendor Duel'],
    sequence: 4,
  },
  'Lost Cities': {
    ...gamesList['Lost Cities'],
    sequence: 5,
  },
  'Jaipur': {
    ...gamesList['Jaipur'],
    sequence: 6,
  },
  'Raptor': {
    ...gamesList['Raptor'],
    sequence: 7,
  },
  'Marvel Dice Throne': {
    ...gamesList['Marvel Dice Throne'],
    sequence: 8,
  },
  'Kingdomino Duel': {
    ...gamesList['Kingdomino Duel'],
    sequence: 9,
  },
  'Summoner Wars: Master Set': {
    ...gamesList['Summoner Wars: Master Set'],
    sequence: 10,
  },
}