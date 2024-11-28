import {useQuery, UseQueryResult} from "@tanstack/react-query";

const apiUrl = "https://moisture-surveillance.railway.internal"
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
export interface MoistureApiResponse {
  data: SensorMoisture[];
}
export interface SensorMoisture {
  moisturePercentage: number;
  sensorId: number;
  updatedAt: string;
}

async function fetchMoistureData(id: number) {
  const MOISTURE_URL = `${apiUrl}/moisture?sensorId=${id}`;
  const response = fetch(MOISTURE_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-KEY': 'KjempeHemmeligApiNøkkel'
    },
  }
  )
    return await response;
}