import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Mr. President: The American Presidency, 2001-2020': {
    ...gamesList['Mr. President: The American Presidency, 2001-2020'],
    sequence: 1
  },
  'Halls of Hegra': {
    ...gamesList['Halls of Hegra'],
    sequence: 2
  },
  'Snap Ships Tactics': {
    ...gamesList['Snap Ships Tactics'],
    sequence: 3
  },
  'Barcelona': {
    ...gamesList['Barcelona'],
    sequence: 4
  },
  'The White Castle': {
    ...gamesList['The White Castle'],
    sequence: 5
  },
  'Undaunted: Battle of Britain': {
    ...gamesList['Undaunted: Battle of Britain'],
    sequence: 6
  },
  'Endurance': {
    ...gamesList['Endurance'],
    sequence: 7,
  },
  'General Orders: World War II': {
    ...gamesList['General Orders: World War II'],
    sequence: 8,
  },
  'Distilled': {
    ...gamesList['Distilled'],
    sequence: 9,
  },
  'Doubt Is Our Product': {
    ...gamesList['Doubt Is Our Product'],
    sequence: 10,
  },
}