import './App.css';
import {useMoisture} from "./useMoisture";

export default function App() {

  const { data, error } = useMoisture(1)

  return (
    <div className="App">
      <header className="App-header">
        Velkommen til fuktighetsmåleren
      </header>
      <table>
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
      {data?.map((moisture) => (
        <tr>
          <td>{moisture.sensorId}</td>
          <td>{moisture.moisturePercentage}</td>
          <td>{moisture.updatedAt}</td>
</tr>
          ))}
      </table>
    </div>
  );
}

