import './App.css';
import { Header } from './header';
import { RecentSensorValueList } from './recentSensorValueList';
import { SensorGraph } from './SensorGraph';
import { useEffect, useState } from 'react';

export default function App() {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY || null;
    setApiKey(apiKey);
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
