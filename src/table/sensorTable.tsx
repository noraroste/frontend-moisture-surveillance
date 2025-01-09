import './sensorTable.css'
import {useMoisture} from "../useMoisture";
import {SensorValues} from "./sensorValues";

export function SensorTable({sensorId} :{sensorId: number})  {
  const {data} = useMoisture(sensorId)

  return (
    <table className='moisture-table'>
      <thead>
      <tr>
        <th colSpan={3}>
          Recent moisture measurements for sensor {sensorId}
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
      <SensorValues sensorValues={data}/>
      </tbody>
    </table>
  )
}