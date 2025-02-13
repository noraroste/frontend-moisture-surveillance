import './App.css';
import { Header } from './header';
import { RecentSensorValueList } from './recentSensorValueList';
import { SensorGraph } from './SensorGraph';
import { useEffect, useState } from 'react';

async function fetchRailwayVariable() {
  const response = await fetch(window.location.href);
  const railwayVariable = response.headers.get('X-Railway-Variable');
  return railwayVariable;
}

export default function App() {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    fetchRailwayVariable().then(setApiKey);
  }, []);
  return (
    <div className="App">
      <Header />
      <h2>Current moisture levels</h2>
      <RecentSensorValueList />
      <SensorGraph sensorId={0} apiKey={apiKey} />
      <SensorGraph sensorId={1} apiKey={apiKey} />
      <SensorGraph sensorId={2} apiKey={apiKey} />
    </div>
  );
}
