import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Harmonies': {
    ...gamesList['Harmonies'],
    sequence: 1
  },
  'Naishi': {
    ...gamesList['Naishi'],
    sequence: 2
  },
  'A Gest of Robin Hood': {
    ...gamesList['A Gest of Robin Hood'],
    sequence: 3
  },
  'Slay the Spire: The Board Game': {
    ...gamesList['Slay the Spire: The Board Game'],
    sequence: 4
  },
  'Cities': {
    ...gamesList['Cities'],
    sequence: 5
  },
  'Windmill Valley': {
    ...gamesList['Windmill Valley'],
    sequence: 6
  },
  'The Lord of the Rings: Duel for Middle-earth': {
    ...gamesList['The Lord of the Rings: Duel for Middle-earth'],
    sequence: 7,
  },
  'A Nice Cuppa': {
    ...gamesList['A Nice Cuppa'],
    sequence: 8
  },
  'Seaside': {
    ...gamesList['Seaside'],
    sequence: 9,
  },
  'Panda Panda': {
    ...gamesList['Panda Panda'],
    sequence: 10,
  },
}