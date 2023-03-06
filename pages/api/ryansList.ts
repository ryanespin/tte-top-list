import { GameItemProps } from "@/components/TopListItem";

export type GameList = {
  [key: string]: GameItemProps;
}

export const ryansList: GameList = {
  'Crokinole': {
    gameImageName: 'crokinole',
    gamePublisher: '(Public Domain)',
    sequence: 1,
    yearPublished: '1876',
  },
  'Undaunted: Stalingrad': {
    gameArtists: 'Roland MacDonald',
    gameDesigners: 'Trevor Benjamin, David Thompson',
    gameImageName: 'undaunted-stalingrad',
    gamePublisher: 'Osprey Games',
    sequence: 2,
    yearPublished: '2022',
  },
  'Alchemists': {
    gameArtists: 'David Cochard',
    gameDesigners: 'Matúš Kotry',
    gameImageName: 'alchemists',
    gamePublisher: 'Czech Games Edition',
    sequence: 3,
    yearPublished: '2014',
  },
  'Spirit Island': {
    gameArtists: 'Jason Behnke, Loïc Berger, Loïc Billiau, Kat G Birmelin, Cari Corene, Lucas Durham, Rocky Hammer, Sydni Kruger, Nolan Nasser, Jorge Ramos, Adam Rebottaro, Moro Rogers, Graham Sternberg, Shane Tyree, Joshua Wright (I)',
    gameDesigners: 'R. Eric Reuss',
    gameImageName: 'spirit-island',
    gamePublisher: 'Greater Than Games, LLC',
    sequence: 4,
    yearPublished: '2017',
  },
  'Dominion': {
    gameArtists: 'Matthias Catrein, Julien Delval, Tomasz Jedruszek, Ryan Laukat, Harald Lieske, Michael Menzel, Marcel-André Casasola Merkle, Claus Stephan, Christof Tisch',
    gameDesigners: 'Donald X. Vaccarino',
    gameImageName: 'dominion',
    gamePublisher: 'Rio Grande Games',
    sequence: 5,
    yearPublished: '2008',
  },
  'Carolus Magnus | Eriantys': {
    gameArtists: 'N/A | Alessandro Costa',
    gameDesigners: 'Leo Colovini',
    gameImageName: 'eriantys',
    gamePublisher: 'Rio Grande Games | Cranio Creations',
    sequence: 6,
    yearPublished: '2000 | 2021',
  },
  'Shards of Infinity': {
    gameArtists: 'Aaron Nakahara',
    gameDesigners: 'Gary Arant, Justin Gary',
    gameImageName: 'shards-of-infinity',
    gamePublisher: 'Stone Blade Entertainment, Ultra PRO',
    sequence: 7,
    yearPublished: '2018',
  },
  'Marvel Champions: The Card Game': {
    gameDesigners: 'Michael Boggs',
    gameImageName: 'marvel-champions',
    gamePublisher: 'Fantasy Flight Games',
    sequence: 8,
    yearPublished: '2019',
  },
  'Gaslands: Refuelled': {
    gameArtists: 'Mike Hutchinson, David Auden Nash, Martin Pique',
    gameDesigners: 'Mike Hutchinson',
    gameImageName: 'gaslands',
    gamePublisher: 'Osprey Publishing',
    imageExtension: 'jpg',
    sequence: 9,
    yearPublished: '2019',
  },
  'Air, Land, & Sea': {
    gameArtists: 'Valerio Buonfantino, Stephen Gibson',
    gameDesigners: 'Jon Perry',
    gameImageName: 'air-land-sea',
    gamePublisher: 'Osprey Publishing',
    sequence: 10,
    yearPublished: '2019',
  }
}