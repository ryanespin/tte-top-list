import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Cascadia': {
    ...gamesList['Cascadia'],
    crossover: { 'Brian': 4, 'Chris': 3 },
    sequence: 1,
  },
  'Wingspan': {
    ...gamesList['Wingspan'],
    crossover: { 'Danielle': 13 },
    sequence: 2,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    crossover: { 'Chris': 17 },
    sequence: 3,
  },
  'Fleet: The Dice Game': {
    ...gamesList['Fleet: The Dice Game'],
    crossover: { 'Brian': 8 },
    sequence: 4,
  },
  'Horrified': {
    ...gamesList['Horrified'],
    sequence: 5,
  },
  'Patchwork': {
    ...gamesList['Patchwork'],
    sequence: 6,
  },
  'Flash Point: Fire Rescue': {
    ...gamesList['Flash Point: Fire Rescue'],
    sequence: 7,
  },
  'Cartographers': {
    ...gamesList['Cartographers'],
    crossover: { 'Brian': 1 },
    sequence: 8,
  },
  'Targi': {
    ...gamesList['Targi'],
    crossover: { 'Chris': 1 },
    sequence: 9,
  },
  'Santa Monica': {
    ...gamesList['Santa Monica'],
    sequence: 10
  },
  'Survive: Escape from Atlantis!': {
    ...gamesList['Survive: Escape from Atlantis!'],
    sequence: 11
  },
  'Takenoko': {
    ...gamesList['Takenoko'],
    sequence: 12
  },
  'The Downfall of Pompeii': {
    ...gamesList['The Downfall of Pompeii'],
    sequence: 13
  },
  'Welcome To...': {
    ...gamesList['Welcome To...'],
    sequence: 14
  },
  'Carcassonne': {
    ...gamesList['Carcassonne'],
    sequence: 15
  },
  'Sagrada': {
    ...gamesList['Sagrada'],
    sequence: 16
  },
  'Tiny Towns': {
    ...gamesList['Tiny Towns'],
    sequence: 17
  },
  'Sea of Clouds': {
    ...gamesList['Sea of Clouds'],
    sequence: 18
  },
  'Summoner Wars: Master Set': {
    ...gamesList['Summoner Wars: Master Set'],
    sequence: 19
  },
  'The Isle of Cats': {
    ...gamesList['The Isle of Cats'],
    sequence: 20
  }
}