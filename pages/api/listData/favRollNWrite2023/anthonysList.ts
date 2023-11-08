import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Qwinto': {
    ...gamesList['Qwinto'],
    sequence: 9
  },
  'Qwixx': {
    ...gamesList['Qwixx'],
    sequence: 10
  },
  'Three Sisters': {
    ...gamesList['Three Sisters'],
    sequence: 1
  },
  'Fleet: The Dice Game': {
    ...gamesList['Fleet: The Dice Game'],
    sequence: 2
  },
  'Cartographers': {
    ...gamesList['Cartographers'],
    sequence: 4
  },
  'Welcome To...': {
    ...gamesList['Welcome To...'],
    sequence: 3
  },
  'Metro X': {
    ...gamesList['Metro X'],
    sequence: 5
  },
  'Rolling Realms': {
    ...gamesList['Rolling Realms'],
    sequence: 6
  },
  'Harvest Dice': {
    ...gamesList['Harvest Dice'],
    sequence: 8
  },
  'Trek 12: Himalaya': {
    ...gamesList['Trek 12: Himalaya'],
    sequence: 7
  },
}