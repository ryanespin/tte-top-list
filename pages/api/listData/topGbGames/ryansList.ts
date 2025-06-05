import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Arkham Horror: The Card Game': {
    ...gamesList['Arkham Horror: The Card Game'],
    sequence: 1
  },
  'Vagrantsong': {
    ...gamesList['Vagrantsong'],
    sequence: 2
  },
  'The Mirroring of Mary King': {
    ...gamesList['The Mirroring of Mary King'],
    sequence: 3
  },
  'Hellboy: The Board Game': {
    ...gamesList['Hellboy: The Board Game'],
    sequence: 4
  },
  'Ghostbusters x Men in Black: Ecto-terrestrial Invasion': {
    ...gamesList['Ghostbusters x Men in Black: Ecto-terrestrial Invasion'],
    sequence: 5
  }
}