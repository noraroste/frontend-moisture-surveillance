import { Dispatch, SetStateAction } from 'react';
import { PlantLocation } from '../utils/types';
import './locationButtons.css';
import { capitalizeFirstLetter } from '../utils/utilFunctions';

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
      <LocationButton
        buttonLocation={PlantLocation.Hjemme}
        location={location}
        onClick={onClick}
      />
      <LocationButton
        buttonLocation={PlantLocation.Kontoret}
        location={location}
        onClick={onClick}
      />
      <LocationButton
        buttonLocation={PlantLocation.Begge}
        location={location}
        onClick={onClick}
      />
    </div>
  );
};

const LocationButton = ({
  buttonLocation,
  location,
  onClick,
}: {
  buttonLocation: PlantLocation;
  location: PlantLocation;
  onClick: (location: PlantLocation) => void;
}) => {
  return (
    <button
      className={`location-button${location === buttonLocation ? '__selected' : ''}`}
      onClick={() => onClick(buttonLocation)}
    >
      {capitalizeFirstLetter(buttonLocation)}
    </button>
  );
};
