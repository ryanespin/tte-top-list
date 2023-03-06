import { GameItemProps } from "@/components/TopListItem";

export type GameList = {
  [key: string]: GameItemProps;
}

export const chrisList: GameList = {
  'Targi': {
    gameArtists: 'Taira Akitsu, Franz Vohwinkel',
    gameDesigners: 'Andreas Steiger',
    gameImageName: 'targi',
    gamePublisher: 'KOSMOS',
    sequence: 1,
    yearPublished: '2012',
  },
  'Marvel Champions: The Card Game': {
    gameDesigners: 'Michael Boggs',
    gameImageName: 'marvel-champions',
    gamePublisher: 'Fantasy Flight Games',
    sequence: 2,
    yearPublished: '2019',
  },
  'Azul': {
    gameArtists: 'Philippe Guérin, Chris Quilliams',
    gameDesigners: 'Michael Kiesling',
    gameImageName: 'azul',
    gamePublisher: 'Next Move Games, Plan B Games',
    sequence: 3,
    yearPublished: '2017',
  },
  'That Time You Killed Me': {
    gameArtists: 'Jor Ros',
    gameDesigners: 'Peter C. Hayward',
    gameImageName: 'that-time-you-killed-me',
    gamePublisher: 'Pandasaurus Games',
    sequence: 4,
    yearPublished: '2021',
  },
  'Watergate': {
    gameArtists: 'Klemens Franz, Viktor Kobilke',
    gameDesigners: 'Matthias Cramer',
    gameImageName: 'watergate',
    gamePublisher: 'Capstone Games',
    sequence: 5,
    yearPublished: '2019',
  },
  'War Chest': {
    gameArtists: 'Brigette Indelicato',
    gameDesigners: 'Trevor Benjamin, David Thompson',
    gameImageName: 'war-chest',
    gamePublisher: 'Alderac Entertainment Group',
    sequence: 6,
    yearPublished: '2018',
  },
  'Crokinole': {
    gameImageName: 'crokinole',
    gamePublisher: '(Public Domain)',
    sequence: 7,
    yearPublished: '1876',
  },
  'Sobek: 2 Players': {
    gameArtists: 'Xavier Gueniffey Durin',
    gameDesigners: 'Bruno Cathala, Sébastien Pauchon',
    gameImageName: 'sobek-2-players',
    gamePublisher: 'Catch Up Games',
    sequence: 8,
    yearPublished: '2021',
  },
  'Radlands': {
    gameArtists: 'Lina Cossette, Damien Mammoliti, Manny Trembley',
    gameDesigners: 'Daniel Piechnick',
    gameImageName: 'radlands',
    gamePublisher: 'Roxley',
    sequence: 9,
    yearPublished: '2021',
  },
  'Onitama': {
    gameArtists: 'Jun Kondo, Mariusz Szmerdt',
    gameDesigners: 'Shimpei Sato',
    gameImageName: 'onitama',
    gamePublisher: 'conception',
    sequence: 10,
    yearPublished: '2014',
  }
}