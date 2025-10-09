import { ContextMessage } from '@sb1/ffe-messages-react';
import { useRecentMoisture } from '../hooks/useMoisture';
import React from 'react';
import { getLocation, getPlantName } from '../utils/sensorMapping';
import './staleDataMessage.css';
import { PlantLocation } from '../utils/types';

export function StaleDataMessage({ location }: { location: PlantLocation }) {
  const { data } = useRecentMoisture();

  const stalePlants = data?.filter((plant) => plant.isStale);

  if (stalePlants?.length > 0) {
    return (
      <>
        {stalePlants.map(
          (stalePlant) =>
            (location === getLocation(stalePlant.sensorId) ||
              location === PlantLocation.Begge) && (
              <ContextMessage
                className="stale-data-warning"
                key={stalePlant.sensorId}
                type={'warning'}
                compact={true}
              >
                {`${getPlantName(stalePlant.sensorId)} har ikke sendt oppdateringer på over 30 minutter.`}
              </ContextMessage>
            )
        )}
      </>
    );
  }
}
