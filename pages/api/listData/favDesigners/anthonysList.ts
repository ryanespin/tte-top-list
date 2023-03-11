import { PersonList } from "@/components/elements/TopListItem";
import { designersList } from "../../gameData";

export const anthonysList: PersonList = {
  'Bruno Cathala': {
    ...designersList['Bruno Cathala'],
    sequence: 1
  },
  'Antoine Bauza': {
    ...designersList['Antoine Bauza'],
    sequence: 2
  },
  'Ben Pinchback & Matt Riddle': {
    ...designersList['Ben Pinchback & Matt Riddle'],
    sequence: 3
  },
  'Phil Walker-Harding': {
    ...designersList['Phil Walker-Harding'],
    sequence: 4
  },
  'Elizabeth Hargrave': {
    ...designersList['Elizabeth Hargrave'],
    sequence: 5
  },
}