import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Rear Window': {
    ...gamesList['Rear Window'],
    sequence: 1
  },
  'Cosmic Frog': {
    ...gamesList['Cosmic Frog'],
    sequence: 2
  },
  'For Northwood! A Solo Trick-Taking Game': {
    ...gamesList['For Northwood! A Solo Trick-Taking Game'],
    sequence: 3,
  },
  'Tokaido Duo': {
    ...gamesList['Tokaido Duo'],
    sequence: 4
  },
  'Décorum': {
    ...gamesList['Décorum'],
    sequence: 5
  },
  'El Grande': {
    ...gamesList['El Grande'],
    sequence: 6
  },
  'Illusion': {
    ...gamesList['Illusion'],
    sequence: 7
  },
  'The Field of the Cloth of Gold': {
    ...gamesList['The Field of the Cloth of Gold'],
    sequence: 8
  },
  'The Fox Experiment': {
    ...gamesList['The Fox Experiment'],
    sequence: 9
  },
  'Planet': {
    ...gamesList['Planet'],
    sequence: 10
  },
}