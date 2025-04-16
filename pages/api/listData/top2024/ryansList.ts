import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const ryansList: GameList = {
  'Slay the Spire: The Board Game': {
    ...gamesList['Slay the Spire: The Board Game'],
    sequence: 1
  },
  'Astro Knights: Eternity': {
    ...gamesList['Astro Knights: Eternity'],
    sequence: 2
  },
  'The Lord of the Rings: Duel for Middle-earth': {
    ...gamesList['The Lord of the Rings: Duel for Middle-earth'],
    sequence: 3
  },
  'A Gest of Robin Hood': {
    ...gamesList['A Gest of Robin Hood'],
    sequence: 4
  },
  'Imperium: Horizons': {
    ...gamesList['Imperium: Horizons'],
    sequence: 5
  },
  'Naishi': {
    ...gamesList['Naishi'],
    sequence: 6
  },
  'Windmill Valley': {
    ...gamesList['Windmill Valley'],
    sequence: 7,
  },
  'Little Alchemists': {
    ...gamesList['Little Alchemists'],
    sequence: 8,
  },
  'Gloomhaven: Buttons & Bugs': {
    ...gamesList['Gloomhaven: Buttons & Bugs'],
    sequence: 9,
  },
  'Murray the A**hole Frog': {
    ...gamesList['Murray the A**hole Frog'],
    sequence: 10,
  },
}