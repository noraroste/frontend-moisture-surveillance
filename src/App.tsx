import './App.css';
import {SensorMoisture, useMoisture} from "./useMoisture";

export default function App() {

  const {data: sensor_1} = useMoisture(1)
  const {data: sensor_2} = useMoisture(2)

  return (
    <div className="App">
      <header className="App-header">
        Velkommen til fuktighetsmåleren
      </header>
      <table>
        <tbody>
        <tr>
          <th>
            Sensor
          </th>
          <th>
            Moisture percentage
          </th>
          <th>
            Updated at
          </th>
        </tr>
            <SensorValues sensorValues={sensor_1}/>
        <tr>
          <td>--</td>
          <td>--</td>
          <td>--</td>
        </tr>
            <SensorValues sensorValues={sensor_2}/>
        </tbody>
      </table>
    </div>
  );
}

 function SensorValues({sensorValues}: { sensorValues: SensorMoisture[] | undefined }) {
  const sortedAndSliced  = sensorValues?.sort((a: SensorMoisture, b: SensorMoisture) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })
    .slice(0, 10)

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
  )
 }
