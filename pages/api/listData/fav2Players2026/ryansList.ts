import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Undaunted - Series': {
    ...gamesList['Undaunted: Stalingrad'],
    sequence: 1
  },
  'Patchwork': {
    ...gamesList['Patchwork'],
    sequence: 2
  },
  'Air, Land, & Sea': {
    ...gamesList['Air, Land, & Sea'],
    sequence: 3
  },
  'Dracula vs Van Helsing': {
    ...gamesList['Dracula vs Van Helsing'],
    sequence: 4
  },
  'The Field of the Cloth of Gold': {
    ...gamesList['The Field of the Cloth of Gold'],
    sequence: 5
  },
  'Naishi': {
    ...gamesList['Naishi'],
    sequence: 6
  },
  'Targi': {
    ...gamesList['Targi'],
    sequence: 7
  },
  'The Lord of the Rings: Duel for Middle-earth': {
    ...gamesList['The Lord of the Rings: Duel for Middle-earth'],
    sequence: 8
  },
  'The Hunt': {
    ...gamesList['The Hunt'],
    sequence: 9
  },
  'Watergate': {
    ...gamesList['Watergate'],
    sequence: 10
  },
}