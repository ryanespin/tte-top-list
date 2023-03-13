import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const daniellesList: GameList = {
  'Dice Throne': {
    ...gamesList['Dice Throne'],
    sequence: 1,
  },
  'Hoplomachus: Remastered': {
    ...gamesList['Hoplomachus: Remastered'],
    sequence: 2,
  },
  'Wok and Roll': {
    ...gamesList['Wok and Roll'],
    sequence: 3,
  },
  'Star Wars: Destiny': {
    ...gamesList['Star Wars: Destiny'],
    sequence: 4,
  },
  'Arkham Horror: The Card Game': {
    ...gamesList['Arkham Horror: The Card Game'],
    sequence: 5,
  },
  "Dinosaur Island: Rawr 'n Write": {
    ...gamesList["Dinosaur Island: Rawr 'n Write"],
    sequence: 6,
  },
  'Calico': {
    ...gamesList['Calico'],
    sequence: 7,
  },
  'Puzzle Dungeon': {
    ...gamesList['Puzzle Dungeon'],
    sequence: 8,
  },
  'Imperium: Classics | Legends': {
    ...gamesList['Imperium: Classics | Legends'],
    sequence: 9,
  },
}