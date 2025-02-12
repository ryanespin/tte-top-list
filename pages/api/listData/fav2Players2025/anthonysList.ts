import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Santorini': {
    ...gamesList['Santorini'],
    sequence: 1,
  },
  'Azul': {
    ...gamesList['Azul'],
    sequence: 2,
  },
  'Escape Games': {
    ...gamesList['Escape Games'],
    sequence: 3,
  },
  'Queendomino': {
    ...gamesList['Queendomino'],
    sequence: 4,
  },
  'Dominion': {
    ...gamesList['Dominion'],
    sequence: 5,
  },
  'Fleet: The Dice Game': {
    ...gamesList['Fleet: The Dice Game'],
    sequence: 6,
  },
  'Carcassonne': {
    ...gamesList['Carcassonne'],
    sequence: 7,
  },
  'Ticket to Ride: Nordic Countries': {
    ...gamesList['Ticket to Ride: Nordic Countries'],
    sequence: 8,
  },
  'Regicide': {
    ...gamesList['Regicide'],
    sequence: 9,
  },
  'Chronicles of Crime': {
    ...gamesList['Chronicles of Crime'],
    sequence: 10,
  },
}