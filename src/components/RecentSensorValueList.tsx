import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import { Modal, ModalBlock, ModalHandle } from '@sb1/ffe-modals-react';
import { useRef, useState } from 'react';
import { useRecentMoisture } from '../hooks/useMoisture';
import {
  getLocation,
  getPlantName,
  getPlantType,
  plantTips,
} from '../utils/sensorMapping';
import {
  daysAgo,
  hoursAgo,
  minutesAgo,
  monthsAgo,
  recentValuesText,
  secondsAgo,
  yearsAgo,
} from '../utils/texts';
import { PlantLocation, StatusColors } from '../utils/types';
import RecentSensorValueCard from './RecentSensorValueCard';
import './recentSensorValueList.css';
import { SensorGraph } from './SensorGraph';

export function RecentSensorValueList({ location }: { location: string }) {
  const modalRef = useRef<ModalHandle>(null);
  const { data } = useRecentMoisture();
  const [selectedSensorId, setSelectedSensorId] = useState<number | null>(null);

  const calculateColor = (moisture: number): StatusColors => {
    if (moisture < 20) {
      return StatusColors.Danger;
    } else if (moisture < 40) {
      return StatusColors.Warning;
    } else {
      return StatusColors.Good;
    }
  };

  function timeSince(timestamp: string): string {
    const now = new Date();
    const past = new Date(timestamp);
    const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} ${yearsAgo}`;

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} ${monthsAgo}`;

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} ${daysAgo}`;

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} ${hoursAgo}`;

    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} ${minutesAgo}`;

    return `${Math.floor(seconds)} ${secondsAgo}`;
  }
  const sortedData = data?.sort(
    (a, b) => a.moisturePercentage - b.moisturePercentage
  );

  return (
    <div className="recent-moisture-list">
      {sortedData?.map(
        (moisture, index) =>
          (location === getLocation(moisture.sensorId) ||
            location === PlantLocation.Begge) && (
            <RecentSensorValueCard
              imageSrc={plantTips[getPlantType(moisture.sensorId)]?.imagePath}
              status={calculateColor(moisture.moisturePercentage)}
              key={index}
              title={getPlantName(moisture.sensorId)}
              subtext={timeSince(moisture.updatedAt)}
              description={recentValuesText(
                getPlantName(moisture.sensorId),
                moisture.moisturePercentage
              )}
            >
              <SecondaryButton
                className="moisture-card-button"
                onClick={() => {
                  setSelectedSensorId(moisture.sensorId);
                  modalRef.current?.open();
                }}
              >
                Se graf
              </SecondaryButton>
              <Modal
                ariaLabelledby="modal-title"
                ref={modalRef}
                className="moisture-card-modal"
              >
                <ModalBlock>
                  <Heading2 id="modal-title">
                    {selectedSensorId !== null &&
                      getPlantName(selectedSensorId)}
                  </Heading2>
                  <Paragraph>
                    Her er fuktighetsnivåene til{' '}
                    {selectedSensorId !== null &&
                      getPlantName(selectedSensorId)}{' '}
                    de siste tiden.
                  </Paragraph>
                  {selectedSensorId !== null && (
                    <SensorGraph
                      key={selectedSensorId}
                      sensorId={selectedSensorId}
                    />
                  )}
                </ModalBlock>
              </Modal>
            </RecentSensorValueCard>
          )
      )}
    </div>
  );
}
