import { PersonList } from "@/components/elements/TopListItem";
import { designersList } from "../../gameData";

export const chrisList: PersonList = {
  'Shem Phillips': {
    ...designersList['Shem Phillips'],
    sequence: 1,
  },
  'David Thompson': {
    ...designersList['David Thompson'],
    sequence: 2,
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