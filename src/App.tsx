import './App.css';
import { Header } from './header';
import { RecentSensorValueList } from './recentSensorValueList';
import { PlantLocation, SensorGraph } from './SensorGraph';
import { useState } from 'react';

export default function App() {
  const sensorIds = [0, 1, 2, 100, 101, 102, 103, 104];
  const [location, setLocation] = useState<PlantLocation>('Hjemme');
  return (
    <div className="App">
      <Header />
      <button onClick={() => setLocation('Hjemme')}>Hjemme</button>
      <button onClick={() => setLocation('Kontoret')}>Kontoret</button>
      <button onClick={() => setLocation('Begge')}>Begge</button>
      <h2>Current moisture levels</h2>
      <RecentSensorValueList location={location} />
      {sensorIds.map((sensorId) => (
        <SensorGraph sensorId={sensorId} filterLocation={location} />
      ))}
    </div>
  );
}
