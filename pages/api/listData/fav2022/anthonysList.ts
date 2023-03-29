import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Evergreen': {
    ...gamesList['Evergreen'],
    sequence: 2
  },
  'Flamecraft': {
    ...gamesList['Flamecraft'],
    sequence: 3
  },
  'Spots': {
    ...gamesList['Spots'],
    sequence: 10
  },
  'Planted: A Game of Nature & Nurture': {
    ...gamesList['Planted: A Game of Nature & Nurture'],
    sequence: 7
  },
  'The Spill': {
    ...gamesList['The Spill'],
    sequence: 6
  },
  'Splendor Duel': {
    ...gamesList['Splendor Duel'],
    sequence: 1
  },
  'Tenpenny Parks': {
    ...gamesList['Tenpenny Parks'],
    sequence: 5
  },
  'Three Sisters': {
    ...gamesList['Three Sisters'],
    sequence: 4
  },
  'Verdant': {
    ...gamesList['Verdant'],
    sequence: 9
  },
  'Marvel Dice Throne': {
    ...gamesList['Marvel Dice Throne'],
    sequence: 8,
  },
}