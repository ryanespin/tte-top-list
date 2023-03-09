import { PersonList } from "@/components/elements/TopListItem";
import { designersList, gamesList } from "../../gameData";

export const ryansList: PersonList = {
  'Uwe Rosenberg': { ...designersList['Uwe Rosenberg'], sequence: 1 },
  'Vlaada Chvátil': { ...designersList['Vlaada Chvátil'], sequence: 2 },
  'Martin Wallace': { ...designersList['Martin Wallace'], sequence: 3 },
  'Jim Felli': { ...designersList['Jim Felli'], sequence: 4 },
  'David Thompson': { ...designersList['David Thompson'], sequence: 5 }
}