import { Heading2 } from '@sb1/ffe-core-react';
import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { LocationButtons } from './components/LocationButtons';
import { RecentSensorValueList } from './components/RecentSensorValueList';
import { headingRecentValuesText } from './utils/texts';
import { PlantLocation } from './utils/types';
import { capitalizeFirstLetter } from './utils/utilFunctions';

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
      <div className='main-content'>
        <LocationButtons setLocation={setLocation} location={location} />
        <div className='main-content__tab-content'>
          <Heading2 >
            {headingRecentValuesText} {locationText}
          </Heading2>
          <RecentSensorValueList location={location} />
        </div>
      </div>
    </div>
  );
}
