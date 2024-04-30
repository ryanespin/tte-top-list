import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const mistaRauList: GameList = {
  'Ashes Reborn: Rise of the Phoenixborn': {
    ...gamesList['Ashes Reborn: Rise of the Phoenixborn'],
    sequence: 1,
  },
  'Targi': {
    ...gamesList['Targi'],
    sequence: 2,
  },
  'Five Tribes': {
    ...gamesList['Five Tribes'],
    sequence: 3,
  },
  'Adrenaline': {
    ...gamesList['Adrenaline'],
    sequence: 4,
  },
  'Brass: Birmingham': {
    ...gamesList['Brass: Birmingham'],
    crossover: {
      'Ryan': 3
    },
    sequence: 5,
  },
  "Tzolk'in: The Mayan Calendar": {
    ...gamesList["Tzolk'in: The Mayan Calendar"],
    sequence: 6,
  },
  'Clank!: Catacombs': {
    ...gamesList['Clank!: Catacombs'],
    sequence: 7,
  },
  'Scythe': {
    ...gamesList['Scythe'],
    sequence: 8,
  },
  'Arkham Horror: The Card Game': {
    ...gamesList['Arkham Horror: The Card Game'],
    sequence: 9,
  },
  'Marvel Champions: The Card Game': {
    ...gamesList['Marvel Champions: The Card Game'],
    crossover: {
      'Danielle': 14
    },
    sequence: 10,
  },
  'The Castles of Burgundy': {
    ...gamesList['The Castles of Burgundy'],
    crossover: {
      'Danielle': 15
    },
    sequence: 11,
  },
  'Exit: The Game – The Abandoned Cabin': {
    ...gamesList['Exit: The Game – The Abandoned Cabin'],
    sequence: 12,
  },
  'Anachrony': {
    ...gamesList['Anachrony'],
    sequence: 13,
  },
  'Blood Rage': {
    ...gamesList['Blood Rage'],
    sequence: 14,
  },
  'Tigris & Euphrates': {
    ...gamesList['Tigris & Euphrates'],
    sequence: 15,
  },
  'Gaia Project': {
    ...gamesList['Gaia Project'],
    sequence: 16,
  },
  'Orléans': {
    ...gamesList['Orléans'],
    sequence: 17,
  },
  'Beyond the Sun': {
    ...gamesList['Beyond the Sun'],
    sequence: 18,
  },
  'Fury of Dracula (Third/Fourth Edition)': {
    ...gamesList['Fury of Dracula (Third/Fourth Edition)'],
    sequence: 19,
  },
  'Last Light': {
    ...gamesList['Last Light'],
    sequence: 20,
  }
}