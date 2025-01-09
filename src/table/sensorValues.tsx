import { SensorMoisture } from '../useMoisture';

export function SensorValues({
  sensorValues,
}: {
  sensorValues: SensorMoisture[] | undefined;
}) {
  const sortedAndSliced = sensorValues
    ?.sort((a: SensorMoisture, b: SensorMoisture) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    })
    .slice(0, 10);

  function formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return `${formattedDate} at ${formattedTime}`;
  }

  return (
    <>
      {sortedAndSliced?.map((moisture) => (
        <tr key={moisture.updatedAt}>
          <td>{moisture.sensorId}</td>
          <td>{moisture.moisturePercentage}</td>
          <td>{formatDateString(moisture.updatedAt)}</td>
        </tr>
      ))}
    </>
  );
}
