import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Patchwork': {
    ...gamesList['Patchwork'],
    sequence: 1,
  },
  'Splendor Duel': {
    ...gamesList['Splendor Duel'],
    sequence: 2,
  },
  'Jaipur': {
    ...gamesList['Jaipur'],
    sequence: 3,
  },
  'Sobek: 2 Players': {
    ...gamesList['Sobek: 2 Players'],
    sequence: 4,
  },
  'Tokaido Duo': {
    ...gamesList['Tokaido Duo'],
    sequence: 5,
  },
  'Targi': {
    ...gamesList['Targi'],
    sequence: 6,
  },
  'Lost Cities': {
    ...gamesList['Lost Cities'],
    sequence: 7,
  },
  '7 Wonders Duel': {
    ...gamesList['7 Wonders Duel'],
    sequence: 8,
  },
  'Onitama': {
    ...gamesList['Onitama'],
    sequence: 9,
  },
  'Summoner Wars: Master Set': {
    ...gamesList['Summoner Wars: Master Set'],
    sequence: 10,
  },
}