import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Horrified: Greek Monsters': {
    ...gamesList['Horrified: Greek Monsters'],
    sequence: 1
  },
  "Santa's Workshop (Second Edition)": {
    ...gamesList["Santa's Workshop (Second Edition)"],
    sequence: 2
  },
  'Robot Quest Arena': {
    ...gamesList['Robot Quest Arena'],
    sequence: 3
  },
  'Kutná Hora: The City of Silver': {
    ...gamesList['Kutná Hora: The City of Silver'],
    sequence: 4
  },
  'The White Castle': {
    ...gamesList['The White Castle'],
    sequence: 5
  },
  'Savernake Forest': {
    ...gamesList['Savernake Forest'],
    sequence: 6
  },
  'Skyrockets: Festivals of Fire': {
    ...gamesList['Skyrockets: Festivals of Fire'],
    sequence: 7
  },
  'Scream: The Game': {
    ...gamesList['Scream: The Game'],
    sequence: 8
  },
  'BOOoop.': {
    ...gamesList['BOOoop.'],
    sequence: 9
  },
  'Run': {
    ...gamesList['Run'],
    sequence: 10,
  },
}