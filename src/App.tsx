import './App.css';
import { Header } from './header';
import { RecentSensorValueList } from './recentSensorValueList';
import { SensorGraph } from './SensorGraph';

export default function App() {
  return (
    <div className="App">
      <Header />
      <h2>Current moisture levels</h2>
      <RecentSensorValueList />
      <SensorGraph sensorId={0} />
      <SensorGraph sensorId={1} />
      <SensorGraph sensorId={2} />
    </div>
  );
}
