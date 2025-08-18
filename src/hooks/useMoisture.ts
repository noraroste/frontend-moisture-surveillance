import { useQuery, UseQueryResult } from '@tanstack/react-query';

export interface SensorMoisture {
  moisturePercentage: number;
  sensorId: number;
  updatedAt: string;
}

const apiUrl = 'https://moisture-surveillance-production.up.railway.app';
const apiKey = process.env.REACT_APP_API_KEY || null;
// const apiUrl = 'http://localhost:8080';
export function useMoisture(sensor: number): UseQueryResult<SensorMoisture[]> {
  if (sensor == null) {
    throw new Error('Sensor ID is required');
  }
  const MOISTURE_URL = `${apiUrl}/moisture?sensorId=${sensor}`;
  return useQuery({
    queryKey: ['moisture', sensor],
    queryFn: async () => {
      const response = await fetch(MOISTURE_URL, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data: SensorMoisture[] = await response.json();
      return data.map((item) => ({
        ...item,
      }));
    },
  });
}

export function useRecentMoisture(): UseQueryResult<SensorMoisture[]> {
  const RECENT_MOISTURE_URL = `${apiUrl}/moisture/recent`;
  return useQuery({
    queryKey: ['recent-moisture'],
    queryFn: async () => {
      const response = await fetch(RECENT_MOISTURE_URL, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const data: SensorMoisture[] = await response.json();
      return data.map((item) => ({
        ...item,
      }));
    },
  });
}
