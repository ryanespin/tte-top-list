import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ericsList: GameList = {
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    sequence: 1,
  },
  'Horrified': {
    ...gamesList['Horrified'],
    sequence: 2,
  },
  'Marvel United: X-Men': {
    ...gamesList['Marvel United: X-Men'],
    sequence: 3,
  },
  'Wonder Woman: Challenge of the Amazons': {
    ...gamesList['Wonder Woman: Challenge of the Amazons'],
    sequence: 4,
  },
  'Escape: The Curse of the Temple': {
    ...gamesList['Escape: The Curse of the Temple'],
    sequence: 5,
  },
  'Keep the Heroes Out!': {
    ...gamesList['Keep the Heroes Out!'],
    sequence: 6
  },
  'Roll Camera!: The Filmmaking Board Game': {
    ...gamesList['Roll Camera!: The Filmmaking Board Game'],
    sequence: 7,
  },
  'Star Wars: The Clone Wars': {
    ...gamesList['Star Wars: The Clone Wars'],
    sequence: 8
  },
  'Spirit Island': {
    ...gamesList['Spirit Island'],
    sequence: 9
  },
  'Roll Player Adventures': {
    ...gamesList['Roll Player Adventures'],
    sequence: 10
  },
}