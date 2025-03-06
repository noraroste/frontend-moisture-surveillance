import './App.css';
import { Header } from './components/header';
import { RecentSensorValueList } from './components/RecentSensorValueList';
import { SensorGraph } from './components/SensorGraph';
import { useState } from 'react';
import { PlantLocation } from './utils/types';
import { LocationButtons } from './components/LocationButtons';
import { capitalizeFirstLetter } from './utils/utilFunctions';
import { headingRecentValuesText } from './utils/texts';
import { ShowGraphButton } from './components/ShowGraphButton';

export default function App() {
  const sensorIds = [0, 1, 2, 100, 101, 102, 103, 104];

  const params = new URLSearchParams(window.location.search);
  const urlLocation = params.get('location') as PlantLocation;
  const initialLocation = !urlLocation ? PlantLocation.Begge : urlLocation;

  const [location, setLocation] = useState<PlantLocation>(initialLocation);
  const [showGraph, setShowGraph] = useState(false);

  const locationText =
    location === PlantLocation.Begge
      ? ''
      : ` - ${capitalizeFirstLetter(location)}`;

  return (
    <div className="App">
      <Header />

      <LocationButtons setLocation={setLocation} location={location} />

      <h2>
        {headingRecentValuesText} {locationText}
      </h2>

      <RecentSensorValueList location={location} />

      <ShowGraphButton
        onClick={() => setShowGraph(!showGraph)}
        showGraph={showGraph}
      />

      {showGraph &&
        sensorIds.map((sensorId) => (
          <SensorGraph
            key={sensorId}
            sensorId={sensorId}
            filterLocation={location}
          />
        ))}
    </div>
  );
}
