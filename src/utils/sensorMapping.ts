import { PlantLocation } from './types';

const sensorNameMap: { [key: number]: { name: string; location: string } } = {
  0: { name: 'Liten monstera', location: PlantLocation.Hjemme },
  1: { name: 'Stor monstera', location: PlantLocation.Hjemme },
  2: { name: 'Monstera minimera', location: PlantLocation.Hjemme },
  100: { name: 'Fiolin fiken 1', location: PlantLocation.Kontoret },
  101: { name: 'Fiolin fiken 2', location: PlantLocation.Kontoret },
  102: { name: 'Fiolin fiken 3', location: PlantLocation.Kontoret },
  103: { name: 'Begonia maculata 1', location: PlantLocation.Kontoret },
  104: { name: 'Begonia maculata 2', location: PlantLocation.Kontoret },

  // Add more sensor mappings as needed
};

// Function to get the readable name for a sensor ID
export function getPlantName(sensorId: number): string {
  return sensorNameMap[sensorId].name || `Sensor ${sensorId}`;
}
export function getLocation(sensorId: number): string {
  return sensorNameMap[sensorId].location;
}
