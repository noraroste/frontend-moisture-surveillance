import { useRecentMoisture } from '../hooks/useMoisture';
import {
  getLocation,
  getPlantName,
  getPlantType,
} from '../utils/sensorMapping';
import { PlantLocation } from '../utils/types';
import {
  daysAgo,
  hoursAgo,
  minutesAgo,
  monthsAgo,
  recentValuesText,
  secondsAgo,
  yearsAgo,
} from '../utils/texts';
import './recentSensorValueList.css';
import { InfoButton } from './InfoModal';

export function RecentSensorValueList({ location }: { location: string }) {
  const { data } = useRecentMoisture();

  const calculateColor = (moisture: number) => {
    if (moisture < 20) {
      return 'red';
    } else if (moisture < 40) {
      return 'yellow';
    } else {
      return 'green';
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
    <div>
      {sortedData?.map(
        (moisture, index) =>
          (location === getLocation(moisture.sensorId) ||
            location === PlantLocation.Begge) && (
            <div className="recent-moisture" key={index} style={{}}>
              <div
                className="recent-moisture__sensor-status"
                style={{
                  backgroundColor: calculateColor(moisture.moisturePercentage),
                }}
              ></div>
              <div className={'recent-moisture__text'}>
                <p>
                  {recentValuesText(
                    getPlantName(moisture.sensorId),
                    moisture.moisturePercentage,
                    timeSince(moisture.updatedAt)
                  )}
                </p>

                <InfoButton plantType={getPlantType(moisture.sensorId)} />
              </div>
            </div>
          )
      )}
    </div>
  );
}
