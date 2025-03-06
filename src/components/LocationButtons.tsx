import { Dispatch, SetStateAction } from 'react';
import { PlantLocation } from '../utils/types';
import './locationButtons.css';

export const LocationButtons = ({
  setLocation,
  location,
}: {
  setLocation: Dispatch<SetStateAction<PlantLocation>>;
  location: PlantLocation;
}) => {
  const params = new URLSearchParams(window.location.search);

  function onClick(location: PlantLocation) {
    setLocation(location);
    params.set('location', location);
    const queryString = params.toString();
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${queryString}`
    );
  }
  return (
    <div>
      <button
        className={`location-button${location === PlantLocation.Hjemme ? '__selected' : ''}`}
        onClick={() => onClick(PlantLocation.Hjemme)}
      >
        Hjemme
      </button>
      <button
        className={`location-button${location === PlantLocation.Kontoret ? '__selected' : ''}`}
        onClick={() => onClick(PlantLocation.Kontoret)}
      >
        Kontoret
      </button>
      <button
        className={`location-button${location === PlantLocation.Begge ? '__selected' : ''}`}
        onClick={() => onClick(PlantLocation.Begge)}
      >
        Begge
      </button>
    </div>
  );
};
