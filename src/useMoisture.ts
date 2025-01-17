import { useQuery, UseQueryResult } from '@tanstack/react-query';

export interface SensorMoisture {
  moisturePercentage: number;
  sensorId: number;
  updatedAt: string;
}

const apiUrl = 'https://moisture-surveillance-production.up.railway.app';

export function useMoisture(sensor: number): UseQueryResult<SensorMoisture[]> {
  const MOISTURE_URL = `${apiUrl}/moisture?sensorId=${sensor}`;
  return useQuery({
    queryKey: ['moisture', sensor],
    queryFn: async () => {
      const response = await fetch(MOISTURE_URL, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data: SensorMoisture[] = await response.json();
      return data.map((item) => ({
        ...item,
        updatedAt: new Date(item.updatedAt.split('[')[0]),
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
        },
      });
      const data: SensorMoisture[] = await response.json();
      return data.map((item) => ({
        ...item,
        updatedAt: new Date(item.updatedAt.split('[')[0]),
      }));
    },
  });
}
