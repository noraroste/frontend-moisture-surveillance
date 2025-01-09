import {useQuery, UseQueryResult} from "@tanstack/react-query";

const apiUrl = "https://moisture-surveillance-production.up.railway.app/"
export function useMoisture(sensor: number): UseQueryResult<SensorMoisture[]>   {

  const MOISTURE_URL = `${apiUrl}/moisture?sensorId=${sensor}`;
  return useQuery({
    queryKey: ['moisture'],
    queryFn: async() => {
      const response = await fetch(MOISTURE_URL, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      return await response.json();
    }
  })

}

export interface SensorMoisture {
  moisturePercentage: number;
  sensorId: number;
  updatedAt: string;
}