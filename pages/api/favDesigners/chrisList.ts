import { GameItemProps, PersonItemProps } from "@/components/TopListItem";

export type PersonList = {
  [key: string]: PersonItemProps;
}

export const chrisList: PersonList = {
  'Shem Phillips': {
    personImageName: 'shem-phillips',
    sequence: 1,
    games: {
      'Architects of the West Kingdom': {
        gameArtists: 'Mihajlo Dimitrievski',
        gameDesigners: 'S J Macdonald, Shem Phillips',
        gameImageName: 'architects-of-the-west-kingdom',
        gamePublisher: 'Garphill Games',
        yearPublished: '2018',
      },
      'Paladins of the West Kingdom': {
        gameArtists: 'Mihajlo Dimitrievski',
        gameDesigners: 'S J Macdonald, Shem Phillips',
        gameImageName: 'paladins-of-the-west-kingdom',
        gamePublisher: 'Garphill Games, Renegade Game Studios',
        yearPublished: '2019',
      },
      'Raiders of the North Sea': {
        gameArtists: 'Mihajlo Dimitrievski',
        gameDesigners: 'Shem Phillips',
        gameImageName: 'raiders-of-the-north-sea',
        gamePublisher: 'Garphill Games',
        yearPublished: '2015',
      },
      'Raiders of Scythia': {
        gameArtists: 'Shem Phillips',
        gameDesigners: 'Shem Phillips',
        gameImageName: 'raiders-of-scythia',
        gamePublisher: 'Garphill Games',
        yearPublished: '2020',
      },
      'Viscounts of the West Kingdom': {
        gameArtists: 'Mihajlo Dimitrievski',
        gameDesigners: 'S J Macdonald, Shem Phillips',
        gameImageName: 'viscounts-of-the-west-kingdom',
        gamePublisher: 'Garphill Games',
        yearPublished: '2020',
      },
      'Wayfarers of the South Tigris': {
        gameArtists: 'Mihajlo Dimitrievski',
        gameDesigners: 'S J Macdonald, Shem Phillips',
        gameImageName: 'wayfarers-of-the-south-tigris',
        gamePublisher: 'Garphill Games',
        yearPublished: '2022',
      },
    }
  },
  'David Thompson': {
    personImageName: 'david-thompson',
    sequence: 2,
    games: {
      'By Stealth and Sea': {
        gameArtists: 'David Thompson',
        gameDesigners: 'Nicola Saggini, David Thompson',
        gameImageName: 'by-stealth-and-sea',
        gamePublisher: 'Dan Verssen Games (DVG)',
        yearPublished: '2020',
      },
      'Resist!': {
        gameArtists: 'Albert Monteys',
        gameDesigners: 'Trevor Benjamin, Roger Tankersley, David Thompson',
        gameImageName: 'resist',
        gamePublisher: 'Salt & Pepper Games',
        yearPublished: '2022',
      },
      'Sniper Elite: The Board Game': {
        gameArtists: 'Jose David Lanza Cebrian, Edouard Grould, Ed Savage',
        gameDesigners: 'Roger Tankersley, David Thompson',
        gameImageName: 'sniper-elite-the-board-game',
        gamePublisher: 'Rebellion Unplugged',
        yearPublished: '2022',
      },
      'Switch & Signal': {
        gameArtists: 'Claus Stephan, Antje Stephan',
        gameDesigners: 'David Thompson',
        gameImageName: 'switch-signal',
        gamePublisher: 'KOSMOS',
        yearPublished: '2020',
      },
      'Undaunted: Stalingrad': {
        gameArtists: 'Roland MacDonald',
        gameDesigners: 'Trevor Benjamin, David Thompson',
        gameImageName: 'undaunted-stalingrad',
        gamePublisher: 'Osprey Games',
        yearPublished: '2022',
      },
      'War Chest': {
        gameArtists: 'Brigette Indelicato',
        gameDesigners: 'Trevor Benjamin, David Thompson',
        gameImageName: 'war-chest',
        gamePublisher: 'Alderac Entertainment Group',
        yearPublished: '2018',
      },
    }
  },
  'Jamey Stegmaier': {
    personImageName: 'jamey-stegmaier',
    sequence: 3,
    games: {
      'Charterstone': {
        gameArtists: 'Lina Cossette, David Forest',
        gameDesigners: 'Jamey Stegmaier',
        gameImageName: 'charterstone',
        gamePublisher: 'Stonemaier Games',
        yearPublished: '2017',
      },
      'Euphoria: Build a Better Dystopia': {
        gameArtists: 'Jacqui Davis',
        gameDesigners: 'Jamey Stegmaier, Alan Stone',
        gameImageName: 'euphoria',
        gamePublisher: 'Stonemaier Games',
        yearPublished: '2013',
      },
      'Red Rising': {
        gameArtists: 'Miles Bensky, Jacqui Davis, Justin Wong',
        gameDesigners: 'Jamey Stegmaier',
        gameImageName: 'red-rising',
        gamePublisher: 'Stonemaier Games',
        yearPublished: '2021',
      },
      'Scythe': {
        gameArtists: 'Jakub Rozalski',
        gameDesigners: 'Jamey Stegmaier',
        gameImageName: 'scythe',
        gamePublisher: 'Stonemaier Games',
        yearPublished: '2016',
      },
      'Tapestry': {
        gameArtists: 'Andrew Bosley, Rom Brown',
        gameDesigners: 'Jamey Stegmaier',
        gameImageName: 'tapestry',
        gamePublisher: 'Stonemaier Games',
        yearPublished: '2019',
      },
      'Viticulture Essential Edition': {
        gameArtists: 'Jacqui Davis, David Montgomery, Beth Sobel',
        gameDesigners: 'Jamey Stegmaier, Alan Stone',
        gameImageName: 'viticulture-ee',
        gamePublisher: 'Stonemaier Games',
        yearPublished: '2015',
      },
    }
  },
  'Ben Pinchback & Matt Riddle': {
    personImageName: 'ben-pinchback-matt-riddle',
    sequence: 4,
    games: {
      'Fleet': {
        gameArtists: 'Eric J. Carter',
        gameDesigners: 'Ben Pinchback, Matt Riddle',
        gameImageName: 'fleet',
        gamePublisher: 'Eagle-Gryphon Games',
        yearPublished: '2012',
      },
      'Fleet: The Dice Game': {
        gameArtists: 'Marius Janusonis, Nolan Nasser',
        gameDesigners: 'Ben Pinchback, Matt Riddle',
        gameImageName: 'fleet-the-dice-game',
        gamePublisher: 'Eagle-Gryphon Games',
        yearPublished: '2018',
      },
      'Piepmatz': {
        gameArtists: 'Klemens Franz, Mike Langman',
        gameDesigners: 'Ben Pinchback, Matt Riddle',
        gameImageName: 'piepmatz',
        gamePublisher: 'ASS Altenburger Spielkarten, Funforge, Hobby Game Mall, Lookout Games',
        yearPublished: '2018',
      },
      'Stellar': {
        gameArtists: 'Tim Barton, Janos Orban',
        gameDesigners: 'Ben Pinchback, Matt Riddle',
        gameImageName: 'stellar',
        gamePublisher: 'Renegade Game Studios',
        yearPublished: '2020',
      },
      'Three Sisters': {
        gameArtists: 'Marlies Barends, Beth Sobel',
        gameDesigners: 'Ben Pinchback, Matt Riddle',
        gameImageName: 'three-sisters',
        gamePublisher: 'Motor City Gameworks',
        yearPublished: '2022',
      },
      'Wasteland Express Delivery Service': {
        gameArtists: 'Riccardo Burchielli, Josh Cappel, Jason D. Kingsley',
        gameDesigners: 'Jonathan Gilmour, Ben Pinchback, Matt Riddle',
        gameImageName: 'wasteland-express-delivery-service',
        gamePublisher: 'Asmodee, Asmodee China, Pandasaurus Games',
        yearPublished: '2017',
      },
    }
  },
  'Andreas Steiger': {
    personImageName: 'andreas-steiger',
    sequence: 5,
    games: {
      'Targi': {
        gameArtists: 'Taira Akitsu, Franz Vohwinkel',
        gameDesigners: 'Andreas Steiger',
        gameImageName: 'targi',
        gamePublisher: 'KOSMOS',
        yearPublished: '2012',
      },
    }
  },
}