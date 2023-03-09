import { PersonList } from "@/components/elements/TopListItem";
import gamesList from "./games";

const designersList: PersonList = {
  'David Thompson': {
    personImageName: 'david-thompson',
    games: {
      'By Stealth and Sea': gamesList['By Stealth and Sea'],
      'Resist!': gamesList['Resist!'],
      'Sniper Elite: The Board Game': gamesList['Sniper Elite: The Board Game'],
      'Switch & Signal': gamesList['Switch & Signal'],
      'Undaunted: Stalingrad': gamesList['Undaunted: Stalingrad'],
      'War Chest': gamesList['War Chest'],
    }
  },
  'Jim Felli': {
    personImageName: 'jim-felli',
    games: {
      'Bemused': gamesList['Bemused'],
      'Cosmic Frog': gamesList['Cosmic Frog'],
      'Dûhr: The Lesser Houses': gamesList['Dûhr: The Lesser Houses'],
      'The Mirroring of Mary King': gamesList['The Mirroring of Mary King'],
      'Shadows of Malice': gamesList['Shadows of Malice'],
      'Zimby Mojo': gamesList['Zimby Mojo'],
    }
  },
  'Martin Wallace': {
    personImageName: 'martin-wallace',
    games: {
      'Age of Steam': gamesList['Age of Steam'],
      'Brass: Birmingham': gamesList['Brass: Birmingham'],
      'Brass: Lancashire': gamesList['Brass: Lancashire'],
      'Railways of the World': gamesList['Railways of the World'],
      'Steam': gamesList['Steam'],
      'A Study in Emerald': gamesList['A Study in Emerald'],
    }
  },
  'Shem Phillips': {
    personImageName: 'shem-phillips',
    games: {
      'Architects of the West Kingdom': gamesList['Architects of the West Kingdom'],
      'Paladins of the West Kingdom': gamesList['Paladins of the West Kingdom'],
      'Raiders of the North Sea': gamesList['Raiders of the North Sea'],
      'Raiders of Scythia': gamesList['Raiders of Scythia'],
      'Viscounts of the West Kingdom': gamesList['Viscounts of the West Kingdom'],
      'Wayfarers of the South Tigris': gamesList['Wayfarers of the South Tigris'],
    }
  },
  'Uwe Rosenberg': {
    personImageName: 'uwe-rosenberg',
    games: {
      'Agricola': gamesList['Agricola'],
      'Caverna: The Cave Farmers': gamesList['Caverna: The Cave Farmers'],
      'A Feast for Odin': gamesList['A Feast for Odin'],
      'Fields of Arle': gamesList['Fields of Arle'],
      'Le Havre': gamesList['Le Havre'],
      'Patchwork': gamesList['Patchwork'],
    }
  },
  'Vlaada Chvátil': {
    personImageName: 'vlaada-chvtil',
    games: {
      'Codenames': gamesList['Codenames'],
      'Dungeon Petz': gamesList['Dungeon Petz'],
      'Galaxy Trucker': gamesList['Galaxy Trucker'],
      'Mage Knight Board Game': gamesList['Mage Knight Board Game'],
      'Space Alert': gamesList['Space Alert'],
      'Through the Ages: A New Story of Civilization': gamesList['Through the Ages: A New Story of Civilization'],
    }
  },
}

export default designersList;
