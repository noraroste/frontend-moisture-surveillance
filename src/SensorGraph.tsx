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
import { getPlantName } from './sensorMapping';

interface SensorGraphProps {
  sensorId: number;
}

export const SensorGraph: React.FC<SensorGraphProps> = ({ sensorId }) => {
  const { data, isLoading, error } = useMoisture(sensorId);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h3>{getPlantName(sensorId)}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="updatedAt"
            tickFormatter={(tick) => {
              return new Date(tick).toLocaleString();
            }}
          />
          <YAxis />
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
