const sensorNameMap: { [key: number]: { name: string; location: string } } = {
  0: { name: 'Liten monstera', location: 'Hjemme' },
  1: { name: 'Stor monstera', location: 'Hjemme' },
  2: { name: 'Monstera minimera', location: 'Hjemme' },
  // Add more sensor mappings as needed
};

// Function to get the readable name for a sensor ID
export function getPlantName(sensorId: number): string {
  return sensorNameMap[sensorId].name || `Sensor ${sensorId}`;
}
