import './App.css';
import { useRecentMoisture} from "./useMoisture";
import {SensorTable} from "./table/sensorTable";

export default function App() {

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

     <SensorTable sensorId={1}/>
      <SensorTable sensorId={2}/>
    </div>
  );
}

