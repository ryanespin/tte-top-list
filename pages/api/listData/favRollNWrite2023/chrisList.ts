import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  "Hadrian's Wall": {
    ...gamesList["Hadrian's Wall"],
    sequence: 1
  },
  'Rolling Realms': {
    ...gamesList['Rolling Realms'],
    sequence: 2
  },
  'Voyages': {
    ...gamesList['Voyages'],
    sequence: 3
  },
  'Cartographers': {
    ...gamesList['Cartographers'],
    sequence: 4
  },
  'Three Sisters': {
    ...gamesList['Three Sisters'],
    sequence: 5
  },
  'Welcome To...': {
    ...gamesList['Welcome To...'],
    sequence: 6
  },
  'Silver & Gold': {
    ...gamesList['Silver & Gold'],
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
  'Imperial Settlers: Roll & Write': {
    ...gamesList['Imperial Settlers: Roll & Write'],
    sequence: 10
  },
}