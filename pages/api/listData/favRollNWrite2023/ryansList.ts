import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Era: Medieval Age': {
    ...gamesList['Era: Medieval Age'],
    sequence: 1
  },
  'Bargain Basement Bathysphere': {
    ...gamesList['Bargain Basement Bathysphere'],
    sequence: 2
  },
  'Rajas of the Ganges: The Dice Charmers': {
    ...gamesList['Rajas of the Ganges: The Dice Charmers'],
    sequence: 3
  },
  'Star Trek: Super-Skill Pinball': {
    ...gamesList['Star Trek: Super-Skill Pinball'],
    sequence: 4
  },
  'Joan of Arc: Orléans Draw & Write': {
    ...gamesList['Joan of Arc: Orléans Draw & Write'],
    sequence: 5
  },
  'Voyages': {
    ...gamesList['Voyages'],
    sequence: 6
  },
  'Qwixx': {
    ...gamesList['Qwixx'],
    sequence: 7
  },
  'Super Mega Lucky Box': {
    ...gamesList['Super Mega Lucky Box'],
    sequence: 8
  },
  'Ganz Schön Clever': {
    ...gamesList['Ganz Schön Clever'],
    sequence: 9
  },
  'Roll Through the Ages: The Bronze Age': {
    ...gamesList['Roll Through the Ages: The Bronze Age'],
    sequence: 10
  },
}