import { PlantLocation } from './types';

const sensorNameMap: {
  [key: number]: { name: string; location: string; plantType: string };
} = {
  0: {
    name: 'Chilli 0',
    location: PlantLocation.Hjemme,
    plantType: 'Chilli',
  },
  1: {
    name: 'Monstera',
    location: PlantLocation.Hjemme,
    plantType: 'Monstera',
  },
  2: {
    name: 'Chilli 1',
    location: PlantLocation.Hjemme,
    plantType: 'Chilli',
  },
  3: {
    name: 'Chilli 2',
    location: PlantLocation.Hjemme,
    plantType: 'Chilli',
  },
  4: {
    name: 'Chilli 3',
    location: PlantLocation.Hjemme,
    plantType: 'Chilli',
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
    // Add more plant types and tips as needed
  };
