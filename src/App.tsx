import './App.css';
import { Header } from './components/header';
import { RecentSensorValueList } from './components/recentSensorValueList';
import { SensorGraph } from './components/SensorGraph';
import { useState } from 'react';
import { PlantLocation } from './utils/types';

export default function App() {
  const sensorIds = [0, 1, 2, 100, 101, 102, 103, 104];
  const [location, setLocation] = useState<PlantLocation>(PlantLocation.Hjemme);
  return (
    <div className="App">
      <Header />
      <button onClick={() => setLocation(PlantLocation.Hjemme)}>Hjemme</button>
      <button onClick={() => setLocation(PlantLocation.Kontoret)}>
        Kontoret
      </button>
      <button onClick={() => setLocation(PlantLocation.Begge)}>Begge</button>
      <h2>Current moisture levels</h2>

      <RecentSensorValueList location={location} />
      {sensorIds.map((sensorId) => (
        <SensorGraph sensorId={sensorId} filterLocation={location} />
      ))}
    </div>
  );
}
