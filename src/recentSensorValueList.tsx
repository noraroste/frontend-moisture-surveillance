import { useRecentMoisture } from './useMoisture';
import { getPlantName } from './sensorMapping';

export function RecentSensorValueList() {
  const { data } = useRecentMoisture();

  const calculateColor = (moisture: number) => {
    if (moisture < 10) {
      return 'red';
    } else if (moisture < 50) {
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
    if (interval > 1) return `${interval} years ago`;

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;

    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutes ago`;

    return `${Math.floor(seconds)} seconds ago`;
  }

  return (
    <div>
      {data?.map((moisture, index) => (
        <div className="recent-moisture" key={index} style={{}}>
          <div
            className="recent-moisture__sensor-status"
            style={{
              backgroundColor: calculateColor(moisture.moisturePercentage),
            }}
          ></div>
          <p>
            {getPlantName(moisture.sensorId)} has a moisture level of{' '}
            {moisture.moisturePercentage}%, updated{' '}
            {timeSince(moisture.updatedAt)}
          </p>
        </div>
      ))}
    </div>
  );
}
