const sensorNameMap: { [key: number]: string } = {
  0: 'Liten monstera',
  1: 'Stor monstera',
  2: 'Monstera minimera',
  // Add more sensor mappings as needed
};

// Function to get the readable name for a sensor ID
export function getPlantName(sensorId: number): string {
  return sensorNameMap[sensorId] || `Sensor ${sensorId}`;
}
