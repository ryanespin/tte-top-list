import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'The Crew: Mission Deep Sea': {
    ...gamesList['The Crew: Mission Deep Sea'],
    sequence: 1
  },
  "Nemo's War (Second Edition)": {
    ...gamesList["Nemo's War (Second Edition)"],
    sequence: 2
  },
  'Merchants & Marauders': {
    ...gamesList['Merchants & Marauders'],
    sequence: 3
  },
  'Underwater Cities': {
    ...gamesList['Underwater Cities'],
    sequence: 4
  },
  'Captain Sonar': {
    ...gamesList['Captain Sonar'],
    sequence: 5
  },
}