import { PersonList } from "@/components/elements/TopListItem";
import { designersList } from "../../gameData";

export const chrisList: PersonList = {
  'Shem Phillips': {
    ...designersList['Shem Phillips'],
    sequence: 1
  },
  'David Thompson': {
    ...designersList['David Thompson'],
    sequence: 2
  },
  'Jamey Stegmaier': {
    ...designersList['Jamey Stegmaier'],
    sequence: 3
  },
  'Ben Pinchback & Matt Riddle': {
    ...designersList['Ben Pinchback & Matt Riddle'],
    sequence: 4
  },
  'Andreas Steiger': {
    ...designersList['Andreas Steiger'],
    sequence: 5
  },
}