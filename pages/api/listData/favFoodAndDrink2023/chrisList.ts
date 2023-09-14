import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const chrisList: GameList = {
  'Beer & Bread': {
    ...gamesList['Beer & Bread'],
    sequence: 1
  },
  'Viticulture Essential Edition': {
    ...gamesList['Viticulture Essential Edition'],
    sequence: 4
  },
  'Sushi Go Party!': {
    ...gamesList['Sushi Go Party!'],
    sequence: 3
  },
  'The Taverns of Tiefenthal': {
    ...gamesList['The Taverns of Tiefenthal'],
    sequence: 2
  },
  'Food Chain Magnate': {
    ...gamesList['Food Chain Magnate'],
    sequence: 5
  },
}