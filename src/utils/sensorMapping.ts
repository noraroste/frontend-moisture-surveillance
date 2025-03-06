import { PlantLocation } from './types';

const sensorNameMap: {
  [key: number]: { name: string; location: string; plantType: string };
} = {
  0: {
    name: 'Liten monstera',
    location: PlantLocation.Hjemme,
    plantType: 'Monstera',
  },
  1: {
    name: 'Stor monstera',
    location: PlantLocation.Hjemme,
    plantType: 'Monstera',
  },
  2: {
    name: 'Monstera minima',
    location: PlantLocation.Hjemme,
    plantType: 'Monstera Minima',
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
  return sensorNameMap[sensorId].name || `Sensor ${sensorId}`;
}
export function getLocation(sensorId: number): string {
  return sensorNameMap[sensorId].location;
}
export function getPlantType(sensorId: number): string {
  return sensorNameMap[sensorId].plantType;
}
export const plantTips: { [key: string]: { tip: string; imagePath: string } } =
  {
    Monstera: {
      tip: 'Monstera trenger lite vann, og la den tørke opp mellom hver vanning. Vann gjerne med romtemperert vann.',
      imagePath: 'monstera.jpg',
    },
    'Monstera Minima': {
      tip: 'La den tørke opp litt mellom hver vanning. Liker å få bladene dusjet.',
      imagePath: 'monstera-minima.jpg',
    },
    'Fiolin Fiken': {
      tip: 'Vann fiolinfiken jevnlig, men la jorden tørke ut mellom vanningene. Overvanning kan føre til rotråte, så pass på at røttene ikke blir stående i vann over tid. En god tommelfingerregel er å vanne når de øverste 2-3 centimeterne av jorden er tørre.',
      imagePath: 'kjh',
    },
    'Begonia Maculata': {
      tip: 'Hold jorden jevnt fuktig, men ikke våt. Vann når øverste 2-3 cm er tørr.',
      imagePath: 'uihlkj',
    },
    // Add more plant types and tips as needed
  };
