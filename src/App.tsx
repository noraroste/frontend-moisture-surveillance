import './App.css';
import {SensorMoisture, useMoisture, useRecentMoisture} from "./useMoisture";

export default function App() {

  const {data: sensor_1} = useMoisture(1)
  const {data: sensor_2} = useMoisture(2)
  const {data} = useRecentMoisture()

  const calculateColor = (moisture: number) => {
    if (moisture < 10) {
      return 'red'
    } else if (moisture < 50) {
      return 'yellow'
    } else {
      return 'green'
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        Velkommen til fuktighetsmåleren
      </header>
        <h2>
          Current moisture levels
        </h2>
      <div>
        {data?.map((moisture, index) => (
          <div className='recent-moisture' key={index} style={{}}>

            <div  className='recent-moisture__sensor-status' style={{
              backgroundColor: calculateColor(moisture.moisturePercentage)
            }}></div>
            <p>

              Sensor {moisture.sensorId} has a moisture level of {moisture.moisturePercentage}%, updated
              at {moisture.updatedAt}
            </p>

          </div>
        ))}
      </div>

      <table className='moisture-table'>
        <thead>
        <tr>
          <th colSpan={3}>
            Recent moisture measurements
            </th>
          </tr>
        </thead>
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
      <tr>
        <td>--</td>
        <td>--</td>
        <td>--</td>
      </tr>
    </>
  )
 }
