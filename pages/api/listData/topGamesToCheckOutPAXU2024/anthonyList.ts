import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Marvel Dice Throne: X-Men': {
    ...gamesList['Marvel Dice Throne: X-Men'],
    sequence: 1,
  },
  'Propolis': {
    ...gamesList['Propolis'],
    sequence: 2,
  },
  'How to Save a World': {
    ...gamesList['How to Save a World'],
    sequence: 3,
  },
  'Moon Bunny': {
    ...gamesList['Moon Bunny'],
    sequence: 4,
  },
  'Disco Heist Laundry': {
    ...gamesList['Disco Heist Laundry'],
    sequence: 5,
  },
  'Galactic Cruise': {
    ...gamesList['Galactic Cruise'],
    sequence: 6
  },
  'Lunar Skyline': {
    ...gamesList['Lunar Skyline'],
    sequence: 7
  },
  'Verdant Arizona': {
    ...gamesList['Verdant Arizona'],
    sequence: 8
  },
  'Chicken Fried Dice': {
    ...gamesList['Chicken Fried Dice'],
    sequence: 9,
  },
  'Digging for Dinos': {
    ...gamesList['Digging for Dinos'],
    sequence: 10
  }
}