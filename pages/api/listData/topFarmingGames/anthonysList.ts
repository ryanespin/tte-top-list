import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const anthonysList: GameList = {
  'Three Sisters': {
    ...gamesList['Three Sisters'],
    sequence: 1
  },
  'Viticulture Essential Edition': {
    ...gamesList['Viticulture Essential Edition'],
    sequence: 2
  },
  'My Farm Shop': {
    ...gamesList['My Farm Shop'],
    sequence: 3
  },
  'Harvest Dice': {
    ...gamesList['Harvest Dice'],
    sequence: 4
  },
  'Dairyman': {
    ...gamesList['Dairyman'],
    sequence: 5
  },
}