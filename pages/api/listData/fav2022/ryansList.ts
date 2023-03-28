import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Atiwa': {
    ...gamesList['Atiwa'],
    sequence: 6
  },
  'Heading Forward': {
    ...gamesList['Heading Forward'],
    sequence: 8
  },
  'Heat: Pedal to the Metal': {
    ...gamesList['Heat: Pedal to the Metal'],
    sequence: 9
  },
  'Oak': {
    ...gamesList['Oak'],
    sequence: 5
  },
  'One Deck Galaxy': {
    ...gamesList['One Deck Galaxy'],
    sequence: 7
  },
  'Spots': {
    ...gamesList['Spots'],
    sequence: 4
  },
  'Undaunted: Stalingrad': {
    ...gamesList['Undaunted: Stalingrad'],
    sequence: 1,
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    sequence: 2,
  },
  'Votes for Women': {
    ...gamesList['Votes for Women'],
    sequence: 10,
  },
  "Wonderland's War": {
    ...gamesList["Wonderland's War"],
    sequence: 3,
  },
}