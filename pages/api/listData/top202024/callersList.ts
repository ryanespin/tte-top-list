import { GameList } from "@/components/elements/TopListItem";
import { gamesList } from "../../gameData";

export const callersList: GameList = {
  'Lost Ruins of Arnak': {
    ...gamesList['Lost Ruins of Arnak'],
    sequence: 1,
    title: "ericbuscemi's #9"
  },
  'Dune: Imperium': {
    ...gamesList['Dune: Imperium'],
    sequence: 2,
    title: "DNix7's #2"
  },
  'The Quacks of Quedlinburg': {
    ...gamesList['The Quacks of Quedlinburg'],
    crossover: {
      Chris: 3,
      Anthony: 4,
      Arwen: 4
    },
    sequence: 3,
    title: "drjrpgfan's #5"
  },
  'Brass: Birmingham': {
    ...gamesList['Brass: Birmingham'],
    crossover: {
      'Ryan': 3,
      'Mista Rau': 5,
      Arwen: 17
    },
    sequence: 4,
    title: "RMCSquirrel's #4"
  },
  'Pax Pamir: Second Edition': {
    ...gamesList['Pax Pamir: Second Edition'],
    sequence: 5,
    title: "XoeAllred's #11"
  },
  'Ark Nova': {
    ...gamesList['Ark Nova'],
    sequence: 6,
    title: "tlance8's #1"
  },
  'Age of Steam': {
    ...gamesList['Age of Steam'],
    crossover: {
      Ryan: 10
    },
    sequence: 7,
    title: "Nick.booth's #6"
  },
  'Cthulhu: Death May Die': {
    ...gamesList['Cthulhu: Death May Die'],
    sequence: 8,
    title: "FFAdventureCo's #2"
  },
  'Food Chain Magnate': {
    ...gamesList['Food Chain Magnate'],
    badgeText: '#20 • 2023',
    crossover: {
      Ryan: 1,
      Arwen: 15
    },
    sequence: 9,
    title: "MeepleandtheMoose's #1"
  },
  'Arkham Horror: The Card Game': {
    ...gamesList['Arkham Horror: The Card Game'],
    crossover: {
      'Mista Rau': 9
    },
    sequence: 10,
    title: "Munkishine's #1"
  },
  'Cascadia': {
    ...gamesList['Cascadia'],
    crossover: {
      Anthony: 1,
      Brian: 7,
      "Chris": 4
    },
    sequence: 11,
    title: "ChewieHuey's #2"
  },
  'Targi': {
    ...gamesList['Targi'],
    badgeText: '#1 • 2023',
    crossover: {
      Chris: 1,
      "Mista Rau": 2
    },
    sequence: 12,
    title: "Celmario's #1"
  },
  'Too Many Bones': {
    ...gamesList['Too Many Bones'],
    crossover: {
      Arwen: 8
    },
    sequence: 13,
    title: "Gabe's #9"
  },
  'Battlestar Galactica': {
    ...gamesList['Battlestar Galactica'],
    crossover: {
      Chris: 7
    },
    sequence: 14,
    title: "indianajo883's #7"
  },
  'Burgle Bros Series': {
    ...gamesList['Burgle Bros.'],
    sequence: 15,
    title: "phillyvenkman's #3"
  },
  'Crokinole': {
    ...gamesList['Crokinole'],
    crossover: {
      Ryan: 4,
    },
    sequence: 16,
    title: "Peloquin17's #5"
  },
  'Bärenpark': {
    ...gamesList['Bärenpark'],
    sequence: 17,
    title: "Kristen (bga Bruinsbuzz)'s #2"
  },
  'Just One': {
    ...gamesList['Just One'],
    sequence: 18,
    title: "RachelDav's #1"
  },
  'Ashes Reborn: Rise of the Phoenixborn': {
    ...gamesList['Ashes Reborn: Rise of the Phoenixborn'],
    sequence: 19,
    title: "Oxirador's #1"
  },
  'Dominion': {
    ...gamesList['Dominion'],
    crossover: {
      Ryan: 13
    },
    sequence: 20,
    title: "Sarah Reed's #2"
  },
}