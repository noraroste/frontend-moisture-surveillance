import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useMoisture } from './useMoisture';
import { getLocation, getPlantName } from './sensorMapping';

export type PlantLocation = 'Hjemme' | 'Kontoret' | 'Begge';

interface SensorGraphProps {
  sensorId: number;
  filterLocation?: PlantLocation;
}

export const SensorGraph: React.FC<SensorGraphProps> = ({
  sensorId,
  filterLocation,
}) => {
  const { data, isLoading, error } = useMoisture(sensorId);
  if (getLocation(sensorId) !== filterLocation && filterLocation !== 'Begge') {
    return null;
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  const sortedData = data.sort((a, b) => {
    return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
  });
  // Convert updatedAt to timestamp for proper time scale visualization
  const formattedData = sortedData.map((item) => ({
    ...item,
    updatedAt: new Date(item.updatedAt).getTime(),
  }));

  return (
    <div>
      <h3>{getPlantName(sensorId)}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="updatedAt"
            type="number"
            scale="time"
            domain={['auto', 'auto']}
            tickFormatter={(tick) => {
              return new Date(tick).toLocaleString();
            }}
          />
          <YAxis domain={[0, 100]} />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleString()}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="moisturePercentage"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
