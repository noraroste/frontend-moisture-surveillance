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

  return (
    <>
      {sortedAndSliced?.map((moisture) => (
        <tr>
          <td>{moisture.sensorId}</td>
          <td>{moisture.moisturePercentage}</td>
          <td>{moisture.updatedAt}</td>
        </tr>
      ))}
    </>
  );
}
