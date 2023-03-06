import { GameItemProps, PersonItemProps } from "@/components/TopListItem";

export type PersonList = {
  [key: string]: PersonItemProps;
}

export const ryansList: PersonList = {
  'Uwe Rosenberg': {
    personImageName: 'uwe-rosenberg',
    sequence: 1,
    games: {
      'Agricola': {
        gameArtists: 'Klemens Franz',
        gameDesigners: 'Uwe Rosenberg',
        gameImageName: 'agricola',
        gamePublisher: 'Lookout Games',
        yearPublished: '2007',
      },
      'Caverna: The Cave Farmers': {
        gameArtists: 'Javier González Cava, Klemens Franz',
        gameDesigners: 'Uwe Rosenberg',
        gameImageName: 'caverna',
        gamePublisher: 'Lookout Games',
        yearPublished: '2013',
      },
      'A Feast for Odin': {
        gameArtists: 'Dennis Lohausen',
        gameDesigners: 'Uwe Rosenberg',
        gameImageName: 'feast-for-odin',
        gamePublisher: 'Feuerland Spiele',
        yearPublished: '2016',
      },
      'Fields of Arle': {
        gameArtists: 'Dennis Lohausen',
        gameDesigners: 'Uwe Rosenberg',
        gameImageName: 'fields-of-arle',
        gamePublisher: 'Feuerland Spiele',
        yearPublished: '2014',
      },
      'Le Havre': {
        gameArtists: 'Klemens Franz',
        gameDesigners: 'Uwe Rosenberg',
        gameImageName: 'le-havre',
        gamePublisher: 'Lookout Games',
        yearPublished: '2008',
      },
      'Patchwork': {
        gameArtists: 'Klemens Franz, Rex Lee, Jolanta Lendzioszek, Gru Tsow',
        gameDesigners: 'Uwe Rosenberg',
        gameImageName: 'patchwork',
        gamePublisher: 'Lookout Games',
        yearPublished: '2014',
      },
    }
  },
  'Vlaada Chvátil': {
    personImageName: 'vlaada-chvtil',
    sequence: 2,
    games: {
      'Codenames': {
        gameArtists: 'Stéphane Gantiez, Tomáš Kučerovský, Filip Murmak',
        gameDesigners: 'Vlaada Chvátil',
        gameImageName: 'codenames',
        gamePublisher: 'Czech Games Edition',
        yearPublished: '2015',
      },
      'Dungeon Petz': {
        gameArtists: 'David Cochard',
        gameDesigners: 'Vlaada Chvátil',
        gameImageName: 'dungeon-petz',
        gamePublisher: 'Czech Games Edition',
        yearPublished: '2011',
      },
      'Galaxy Trucker': {
        gameArtists: 'Tomáš Kučerovský, Radim Pech',
        gameDesigners: 'Vlaada Chvátil',
        gameImageName: 'galaxy-trucker',
        gamePublisher: 'Czech Games Edition',
        yearPublished: '2007',
      },
      'Mage Knight Board Game': {
        gameArtists: 'J. Lonnee, Chris Raimo, Milan Vavroň',
        gameDesigners: 'Vlaada Chvátil',
        gameImageName: 'mage-knight-board-game',
        gamePublisher: 'WizKids',
        yearPublished: '2011',
      },
      'Space Alert': {
        gameArtists: 'Radim Pech, Milan Vavroň',
        gameDesigners: 'Vlaada Chvátil',
        gameImageName: 'space-alert',
        gamePublisher: 'Czech Games Edition',
        yearPublished: '2008',
      },
      'Through the Ages: A New Story of Civilization': {
        gameArtists: 'Filip Murmak, Radim Pech, Jakub Politzer, Milan Vavroň',
        gameDesigners: 'Vlaada Chvátil',
        gameImageName: 'through-ages-new-story-civilization',
        gamePublisher: 'Czech Games Edition',
        yearPublished: '2015',
      },
    }
  },
  'Martin Wallace': {
    personImageName: 'martin-wallace',
    sequence: 3,
    games: {
      'Age of Steam': {
        gameArtists: `Sean Brown, Peter Dennis, Paul Niemeyer, Ian O'Toole`,
        gameDesigners: 'John Bohrer, Martin Wallace',
        gameImageName: 'age-of-steam',
        gamePublisher: 'Warfrog Games, Eagle-Gryphon Games',
        yearPublished: '2002',
      },
      'Brass: Birmingham': {
        gameArtists: 'Lina Cossette, David Forest, Damien Mammoliti',
        gameDesigners: 'Gavan Brown, Matt Tolman, Martin Wallace',
        gameImageName: 'brass-birmingham',
        gamePublisher: 'Roxley',
        yearPublished: '2019',
      },
      'Brass: Lancashire': {
        gameArtists: 'Gavan Brown, Lina Cossette, Peter Dennis, David Forest',
        gameDesigners: 'Martin Wallace',
        gameImageName: 'brass-lancashire',
        gamePublisher: 'Roxley',
        yearPublished: '2007',
      },
      'Railways of the World': {
        gameArtists: 'Kurt Miller, Paul Niemeyer, David Oram',
        gameDesigners: 'Glenn Drover, Martin Wallace',
        gameImageName: 'railway-of-the-world',
        gamePublisher: 'Eagle-Gryphon Games, Winsome Games',
        yearPublished: '2005',
      },
      'Steam': {
        gameArtists: 'John Austin, Jared Blando, Craig Hamilton, Christopher Moeller',
        gameDesigners: 'Martin Wallace',
        gameImageName: 'steam',
        gamePublisher: 'Mayfair Games',
        yearPublished: '2009',
      },
      'A Study in Emerald': {
        gameArtists: 'Geof Banyard, Peter Dennis, Anne Stokes',
        gameDesigners: 'Martin Wallace',
        gameImageName: 'study-in-emerald',
        gamePublisher: 'Treefrog Games',
        yearPublished: '2013',
      },
    }
  },
  'Jim Felli': {
    personImageName: 'jim-felli',
    sequence: 4,
    games: {
      'Bemused': {
        gameArtists: 'Tani Pettit, Naomi Robinson',
        gameDesigners: 'Jim Felli',
        gameImageName: 'bemused',
        gamePublisher: 'Devious Weasel Games',
        yearPublished: '2017',
      },
      'Cosmic Frog': {
        gameArtists: 'Tim Barton, Jim Felli, Chad Hoverter, Tani Pettit, Naomi Robinson',
        gameDesigners: 'Jim Felli',
        gameImageName: 'cosmic-frog',
        gamePublisher: 'Devious Weasel Games',
        yearPublished: '2020',
      },
      'Dûhr: The Lesser Houses': {
        gameArtists: 'Reza Afshar, Jonathan Guzi',
        gameDesigners: 'Jim Felli',
        gameImageName: 'dhr-the-lesser-houses',
        gamePublisher: 'Devious Weasel Games',
        yearPublished: '2018',
      },
      'The Mirroring of Mary King': {
        gameArtists: 'Naomi Robinson',
        gameDesigners: 'Jim Felli',
        gameImageName: 'mirroring-of-mary-king',
        gamePublisher: 'Devious Weasel Games',
        yearPublished: '2022',
      },
      'Shadows of Malice': {
        gameArtists: 'Jim Felli',
        gameDesigners: 'Jim Felli',
        gameImageName: 'shadows-of-malice',
        gamePublisher: 'Devious Weasel Games',
        yearPublished: '2014',
      },
      'Zimby Mojo': {
        gameArtists: 'Jim Felli, Tani Pettit, Naomi Robinson',
        gameDesigners: 'Jim Felli',
        gameImageName: 'zimby-mojo',
        gamePublisher: 'Devious Weasel Games',
        yearPublished: '2016',
      },
    }
  },
  'David Thompson': {
    personImageName: 'david-thompson',
    sequence: 5,
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
}