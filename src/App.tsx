import './App.css';
import { SensorTable } from './table/sensorTable';
import { Header } from './header';
import { RecentSensorValueList } from './recentSensorValueList';

export default function App() {
  return (
    <div className="App">
      <Header />
      <h2>Current moisture levels</h2>
      <RecentSensorValueList />
      <SensorTable sensorId={1} />
      <SensorTable sensorId={2} />
    </div>
  );
}

