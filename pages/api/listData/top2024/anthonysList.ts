import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Harmonies': {
    ...gamesList['Harmonies'],
    sequence: 1
  },
  "Fromage": {
    ...gamesList["Fromage"],
    sequence: 2
  },
  'King of Tokyo: Duel': {
    ...gamesList['King of Tokyo: Duel'],
    sequence: 3
  },
  'Flip 7': {
    ...gamesList['Flip 7'],
    sequence: 4
  },
  'Cities': {
    ...gamesList['Cities'],
    sequence: 5
  },
  'Gnome Hollow': {
    ...gamesList['Gnome Hollow'],
    sequence: 6
  },
  'Murray the A**hole Frog': {
    ...gamesList['Murray the A**hole Frog'],
    sequence: 7
  },
  'MLEM: Space Agency': {
    ...gamesList['MLEM: Space Agency'],
    sequence: 8
  },
  'The Lord of the Rings: Duel for Middle-earth': {
    ...gamesList['The Lord of the Rings: Duel for Middle-earth'],
    sequence: 9
  },
  'Slay the Spire: The Board Game': {
    ...gamesList['Slay the Spire: The Board Game'],
    sequence: 10,
  },
}