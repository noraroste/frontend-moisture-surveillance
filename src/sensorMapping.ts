const sensorNameMap: { [key: number]: { name: string; location: string } } = {
  0: { name: 'Liten monstera', location: 'Hjemme' },
  1: { name: 'Stor monstera', location: 'Hjemme' },
  2: { name: 'Monstera minimera', location: 'Hjemme' },
  100: { name: 'Fiolin fiken 1', location: 'Kontoret' },
  101: { name: 'Fiolin fiken 2', location: 'Kontoret' },
  102: { name: 'Fiolin fiken 3', location: 'Kontoret' },
  103: { name: 'Begonia maculata 1', location: 'Kontoret' },
  104: { name: 'Begonia maculata 2', location: 'Kontoret' },

  // Add more sensor mappings as needed
};

// Function to get the readable name for a sensor ID
export function getPlantName(sensorId: number): string {
  return sensorNameMap[sensorId].name || `Sensor ${sensorId}`;
}
export function getLocation(sensorId: number): string {
  return sensorNameMap[sensorId].location;
}
