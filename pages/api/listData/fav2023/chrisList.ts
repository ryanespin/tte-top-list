import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'The White Castle': {
    ...gamesList['The White Castle'],
    sequence: 1
  },
  'Unmatched Adventures: Tales to Amaze': {
    ...gamesList['Unmatched Adventures: Tales to Amaze'],
    sequence: 2
  },
  'Undaunted: Battle of Britain': {
    ...gamesList['Undaunted: Battle of Britain'],
    sequence: 3
  },
  'Apiary': {
    ...gamesList['Apiary'],
    sequence: 4
  },
  'Barcelona': {
    ...gamesList['Barcelona'],
    sequence: 5
  },
  'Robot Quest Arena': {
    ...gamesList['Robot Quest Arena'],
    sequence: 6
  },
  'General Orders: World War II': {
    ...gamesList['General Orders: World War II'],
    sequence: 7,
  },
  'Dracula vs Van Helsing': {
    ...gamesList['Dracula vs Van Helsing'],
    sequence: 8,
  },
  'Kutná Hora: The City of Silver': {
    ...gamesList['Kutná Hora: The City of Silver'],
    sequence: 9
  },
  'Seas of Havoc': {
    ...gamesList['Seas of Havoc'],
    sequence: 10,
  },
}