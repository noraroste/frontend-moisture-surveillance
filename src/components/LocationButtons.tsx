import { Dispatch, SetStateAction, } from 'react';
import { PlantLocation } from '../utils/types';
import './locationButtons.css';
import { capitalizeFirstLetter } from '../utils/utilFunctions';
import { TabGroup, Tab } from '@sb1/ffe-tabs-react';


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
      <TabGroup>
        <Tab selected={location === PlantLocation.Hjemme} onClick={() => onClick(PlantLocation.Hjemme)}>
          {capitalizeFirstLetter(PlantLocation.Hjemme)}
        </Tab>
        <Tab selected={location === PlantLocation.Kontoret} onClick={() => onClick(PlantLocation.Kontoret)}>
          {capitalizeFirstLetter(PlantLocation.Kontoret)}
        </Tab>
        <Tab selected={location === PlantLocation.Begge} onClick={() => onClick(PlantLocation.Begge)}>
          {capitalizeFirstLetter(PlantLocation.Begge)}
        </Tab>
      </TabGroup>
    </div>
  );
};
