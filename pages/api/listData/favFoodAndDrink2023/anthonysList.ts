import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Dulce': {
    ...gamesList['Dulce'],
    sequence: 5
  },
  'New York Slice': {
    ...gamesList['New York Slice'],
    sequence: 1
  },
  'On the Rocks': {
    ...gamesList['On the Rocks'],
    sequence: 4
  },
  'Sushi Go Party!': {
    ...gamesList['Sushi Go Party!'],
    sequence: 2
  },
  'Viticulture Essential Edition': {
    ...gamesList['Viticulture Essential Edition'],
    sequence: 3
  },
}