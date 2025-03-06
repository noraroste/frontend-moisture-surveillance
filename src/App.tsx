import './App.css';
import { Header } from './components/header';
import { RecentSensorValueList } from './components/recentSensorValueList';
import { SensorGraph } from './components/SensorGraph';
import { useState } from 'react';
import { PlantLocation } from './utils/types';
import { LocationButtons } from './components/LocationButtons';

export default function App() {
  const sensorIds = [0, 1, 2, 100, 101, 102, 103, 104];
  const params = new URLSearchParams(window.location.search);
  const initialLocation = params.get('location') as PlantLocation;
  const [location, setLocation] = useState<PlantLocation>(initialLocation);
  return (
    <div className="App">
      <Header />
      <LocationButtons setLocation={setLocation} location={location} />

      <h2>Nåværende fuktighetsnivåer - {location}</h2>

      <RecentSensorValueList location={location} />

      {sensorIds.map((sensorId) => (
        <SensorGraph
          key={sensorId}
          sensorId={sensorId}
          filterLocation={location}
        />
      ))}
    </div>
  );
}
