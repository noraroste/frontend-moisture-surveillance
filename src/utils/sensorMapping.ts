import { PlantLocation } from './types';

const sensorNameMap: {
  [key: number]: { name: string; location: string; plantType: string };
} = {
  0: {
    name: 'Monstera adansonii',
    location: PlantLocation.Hjemme,
    plantType: 'Monstera adansonii',
  },
  1: {
    name: 'Monstera',
    location: PlantLocation.Hjemme,
    plantType: 'Monstera',
  },
  2: {
    name: 'Gullranke 2',
    location: PlantLocation.Hjemme,
    plantType: 'Gullranke',
  },
  3: {
    name: 'Begonia Rex',
    location: PlantLocation.Hjemme,
    plantType: 'Begonia Rex',
  },
  4: {
    name: 'Gullranke 4',
    location: PlantLocation.Hjemme,
    plantType: 'Gullranke',
  },
  5: {
    name: 'Stor Monstera',
    location: PlantLocation.Hjemme,
    plantType: 'Monstera',
  },
  6: {
    name: 'Fiolin Fiken',
    location: PlantLocation.Hjemme,
    plantType: 'Fiolin Fiken',
  },
  7: {
    name: 'Paraplyplante',
    location: PlantLocation.Hjemme,
    plantType: 'Paraplyplante',
  },
  100: {
    name: 'Fiolin fiken 1',
    location: PlantLocation.Kontoret,
    plantType: 'Fiolin Fiken',
  },
  101: {
    name: 'Fiolin fiken 2',
    location: PlantLocation.Kontoret,
    plantType: 'Fiolin Fiken',
  },
  102: {
    name: 'Fiolin fiken 3',
    location: PlantLocation.Kontoret,
    plantType: 'Fiolin Fiken',
  },
  103: {
    name: 'Begonia maculata 1',
    location: PlantLocation.Kontoret,
    plantType: 'Begonia Maculata',
  },
  104: {
    name: 'Begonia maculata 2',
    location: PlantLocation.Kontoret,
    plantType: 'Begonia Maculata',
  },

  // Add more sensor mappings as needed
};

// Function to get the readable name for a sensor ID
export function getPlantName(sensorId: number): string {
  return sensorNameMap[sensorId]?.name || `Sensor ${sensorId}`;
}
export function getLocation(sensorId: number): string {
  return sensorNameMap[sensorId]?.location || 'Ukjent';
}
export function getPlantType(sensorId: number): string {
  return sensorNameMap[sensorId]?.plantType || 'Ukjent';
}
export const plantTips: { [key: string]: { tip: string; imagePath: string } } =
  {
    Monstera: {
      tip: 'Monstera trenger lite vann, og la den tørke opp mellom hver vanning. Vann gjerne med romtemperert vann.',
      imagePath: '/images/monstera.jpg',
    },
    'Monstera Minima': {
      tip: 'La den tørke opp litt mellom hver vanning. Liker å få bladene dusjet.',
      imagePath: '/images/monstera-minima.jpeg',
    },
    'Fiolin Fiken': {
      tip: 'Vann fiolinfiken jevnlig, men la jorden tørke ut mellom vanningene. Overvanning kan føre til rotråte, så pass på at røttene ikke blir stående i vann over tid. En god tommelfingerregel er å vanne når de øverste 2-3 centimeterne av jorden er tørre.',
      imagePath: '/images/fiolinfiken.jpg',
    },
    'Begonia Maculata': {
      tip: 'Hold jorden jevnt fuktig, men ikke våt. Vann når øverste 2-3 cm er tørr.',
      imagePath: '/images/begonia-maculata.jpeg',
    },
    Chilli: {
      tip: 'Chili liker å tørke ut mellom vanningene. Vann når jorden er tørr på toppen.',
      imagePath: '/images/chilli.avif',
    },
    Gullranke: {
      tip: 'Gullranke foretrekker jevn fuktighet i jorda. La det øverste laget av jorda tørke ut før du vanner igjen. Unngå å la planten stå i vann, da kan det føre til råteskader på røttene.',
      imagePath: '/images/Gullranke.jpeg',
    },
    'Begonia Rex': {
      tip: 'Begonia Rex liker aller best å få vann på skåla, det vil si at den får trekke opp vann via røttene nedenfra. Da får planten sunnere røtter og finere bladverk. Dette kan du gjøre ved å fylle vann i bunnen av potteskjuleren og plassere den indre potta med Begoniaen oppi. Her suger røttene opp ønsket vannmengde. Etter omlag 20 minutter kan du sjekke om det er noe overflødig vann i bunn og eventuelt helle det ut. Sjekk ukentlig om jorden er tørr med fingrene og tilfør vann om potten kjennes lett når du løfter den.',
      imagePath: '/images/begonia-rex.jpeg',
    },
    'Monstera adansonii': {
      tip: 'Monstera adansonii liker å tørke ut mellom vanningene. Vann når jorden er tørr 2-3 cm ned i jorden.',
      imagePath: '/images/monstera-adansonii.jpg',
    },
    Paraplyplante: {
      tip: 'La planten tørke lett opp mellom hver vanning, spesielt på vinterstid. I sommerhalvåret; vann den litt 3-4 ganger i måneden. I vinterhalvåret; vannes den 1-2 ganger i måneden. Husk at jo mer lys og varme den får, desto mer vann drikker den.',
      imagePath: '/images/paraplyplante.jpg',
    },
    // Add more plant types and tips as needed
  };
