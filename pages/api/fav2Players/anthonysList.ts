import { GameItemProps } from "@/components/TopListItem";

export type GameList = {
  [key: string]: GameItemProps;
}

export const anthonysList: GameList = {
  'Patchwork': {
    gameArtists: 'Klemens Franz, Rex Lee, Jolanta Lendzioszek, Gru Tsow',
    gameDesigners: 'Uwe Rosenberg',
    gameImageName: 'patchwork',
    gamePublisher: 'Lookout Games',
    sequence: 1,
    yearPublished: '2014',
  },
  '7 Wonders Duel': {
    gameArtists: 'Miguel Coimbra',
    gameDesigners: 'Antoine Bauza, Bruno Cathala',
    gameImageName: '7-wonders-duel',
    gamePublisher: 'Repos Production',
    sequence: 2,
    yearPublished: '2015',
  },
  'Targi': {
    gameArtists: 'Taira Akitsu, Franz Vohwinkel',
    gameDesigners: 'Andreas Steiger',
    gameImageName: 'targi',
    gamePublisher: 'KOSMOS',
    sequence: 3,
    yearPublished: '2012',
  },
  'Splendor Duel': {
    gameArtists: 'Davide Tosello',
    gameDesigners: 'Marc André, Bruno Cathala',
    gameImageName: 'splendor-duel',
    gamePublisher: 'Space Cowboys',
    sequence: 4,
    yearPublished: '2022',
  },
  'Lost Cities': {
    gameArtists: 'Vincent Dutrait, Michaela Kienle, Anke Pohl, Thilo Rick',
    gameDesigners: 'Reiner Knizia',
    gameImageName: 'lost-cities',
    gamePublisher: 'KOSMOS',
    sequence: 5,
    yearPublished: '1999',
  },
  'Jaipur': {
    gameArtists: 'Vincent Dutrait, Alexandre Roche',
    gameDesigners: 'Sébastien Pauchon',
    gameImageName: 'jaipur',
    gamePublisher: 'GameWorks SàRL, Space Cowboys',
    sequence: 6,
    yearPublished: '2009',
  },
  'Raptor': {
    gameArtists: 'Vincent Dutrait',
    gameDesigners: 'Bruno Cathala, Bruno Faidutti',
    gameImageName: 'raptor',
    gamePublisher: 'Matagot',
    sequence: 7,
    yearPublished: '2015',
  },
  'Marvel Dice Throne': {
    gameArtists: 'Damien Mammoliti, Manny Trembley',
    gameDesigners: 'Gavan Brown, Nate Chatellier, Manny Trembley',
    gameImageName: 'marvel-dice-throne',
    gamePublisher: 'The Op, Roxley',
    sequence: 8,
    yearPublished: '2022',
  },
  'Kingdomino Duel': {
    gameArtists: 'Cyril Bouquet',
    gameDesigners: 'Bruno Cathala, Ludovic Maublanc',
    gameImageName: 'kingdomino-duel',
    gamePublisher: 'Blue Orange Games',
    sequence: 9,
    yearPublished: '2019',
  },
  'Summoner Wars: Master Set': {
    gameArtists: 'JJ Ariosa, Gary Simpson',
    gameDesigners: 'Colby Dauch',
    gameImageName: 'summoner-wars',
    gamePublisher: 'Plaid Hat Games',
    sequence: 10,
    yearPublished: '2011',
  },
}