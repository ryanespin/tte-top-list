import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'For Northwood! A Solo Trick-Taking Game': {
    ...gamesList['For Northwood! A Solo Trick-Taking Game'],
    sequence: 1
  },
  'Obsession': {
    ...gamesList['Obsession'],
    sequence: 2
  },
  'Rebel Princess': {
    ...gamesList['Rebel Princess'],
    sequence: 3
  },
  'Hamster Roll': {
    ...gamesList['Hamster Roll'],
    sequence: 4
  },
  'Dracula vs Van Helsing': {
    ...gamesList['Dracula vs Van Helsing'],
    sequence: 5
  },
  'Rear Window': {
    ...gamesList['Rear Window'],
    sequence: 6
  },
  'Cthulhu: Death May Die': {
    ...gamesList['Cthulhu: Death May Die'],
    sequence: 7,
  },
  'Legacy of Dragonholt': {
    ...gamesList['Legacy of Dragonholt'],
    sequence: 8,
  },
  'My First Castle Panic': {
    ...gamesList['My First Castle Panic'],
    sequence: 9,
  },
  'Imperial Struggle': {
    ...gamesList['Imperial Struggle'],
    sequence: 10,
  },
}