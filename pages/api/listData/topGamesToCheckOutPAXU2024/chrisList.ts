import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Galactic Cruise': {
    ...gamesList['Galactic Cruise'],
    sequence: 1,
  },
  'Re;ACT - The Arts of War': {
    ...gamesList['Re;ACT - The Arts of War'],
    sequence: 2,
  },
  'The Fellowship of the Ring: Trick-Taking Game': {
    ...gamesList['The Fellowship of the Ring: Trick-Taking Game'],
    sequence: 3,
  },
  'Daitoshi': {
    ...gamesList['Daitoshi'],
    sequence: 4,
  },
  'Skyrise': {
    ...gamesList['Skyrise'],
    sequence: 5,
  },
  'Rebirth': {
    ...gamesList['Rebirth'],
    sequence: 6,
  },
  'March of the Ants: Evolved Edition': {
    ...gamesList['March of the Ants: Evolved Edition'],
    sequence: 7
  },
  'Valheim: The Board Game': {
    ...gamesList['Valheim: The Board Game'],
    sequence: 8
  },
  'boop the Halls!': {
    ...gamesList['boop the Halls!'],
    sequence: 9
  },
  'Monkey Palace': {
    ...gamesList['Monkey Palace'],
    sequence: 10
  },
}