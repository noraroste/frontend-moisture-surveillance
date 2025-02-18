import './App.css';
import { Header } from './header';
import { RecentSensorValueList } from './recentSensorValueList';
import { SensorGraph } from './SensorGraph';

export default function App() {
  const sensorIds = [0, 1, 2];
  return (
    <div className="App">
      <Header />
      <h2>Current moisture levels</h2>
      <RecentSensorValueList />
      {sensorIds.map((sensorId) => (
        <SensorGraph sensorId={sensorId} />
      ))}
    </div>
  );
}
