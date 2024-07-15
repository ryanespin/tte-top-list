import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Gloomhaven': {
    ...gamesList['Gloomhaven'],
    sequence: 1,
  },
  'Spirit Island': {
    ...gamesList['Spirit Island'],
    sequence: 2,
  },
  'Burgle Bros.': {
    ...gamesList['Burgle Bros.'],
    sequence: 3,
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    sequence: 4,
  },
  'Sherlock Holmes Consulting Detective: The Thames Murders & Other Cases': {
    ...gamesList['Sherlock Holmes Consulting Detective: The Thames Murders & Other Cases'],
    sequence: 5,
  },
  'The Crew: Mission Deep Sea': {
    ...gamesList['The Crew: Mission Deep Sea'],
    sequence: 6
  },
  'Arkham Horror: The Card Game': {
    ...gamesList['Arkham Horror: The Card Game'],
    sequence: 7
  },
  'Regicide': {
    ...gamesList['Regicide'],
    sequence: 8
  },
  'Iberia': {
    ...gamesList['Iberia'],
    sequence: 9,
  },
  'Pandemic Legacy: Season 1': {
    ...gamesList['Pandemic Legacy: Season 1'],
    sequence: 10
  }
}