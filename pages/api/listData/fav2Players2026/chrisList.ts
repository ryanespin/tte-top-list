import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Targi': {
    ...gamesList['Targi'],
    sequence: 1
  },
  'Watergate': {
    ...gamesList['Watergate'],
    sequence: 2
  },
  'The Lord of the Rings: Duel for Middle-earth': {
    ...gamesList['The Lord of the Rings: Duel for Middle-earth'],
    sequence: 3
  },
  'That Time You Killed Me': {
    ...gamesList['That Time You Killed Me'],
    sequence: 4
  },
  'Naishi': {
    ...gamesList['Naishi'],
    sequence: 5
  },
  'The Field of the Cloth of Gold': {
    ...gamesList['The Field of the Cloth of Gold'],
    sequence: 6
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Stalingrad'],
    sequence: 7
  },
  'Dracula vs Van Helsing': {
    ...gamesList['Dracula vs Van Helsing'],
    sequence: 8
  },
  'King of Tokyo: Duel': {
    ...gamesList['King of Tokyo: Duel'],
    sequence: 9
  },
  'Beer & Bread': {
    ...gamesList['Beer & Bread'],
    sequence: 10
  },
}