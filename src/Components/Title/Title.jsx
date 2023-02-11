import Calendar from "../Calendar/Calendar";
import Sensor from "../Sensor/Sensor";
import SensorCard from "../Sensor/SensorCard";

export default function Title() {
  return (
    <div>
      <p className="text-gray-500 pt-6 text-base ">
        Last sensor reset: 04/03/22 ( auto reset )
      </p>
      {/* <div className="justify-between md:items-center md:flex pt-6">
        <h2 className="justify-center text-gray-700">
          <b>Sensors</b>
        </h2>
        <div className="text-gray-500">
          <AddIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div> */}
      <Sensor>
        <SensorCard />
      </Sensor>
      <div className="flex flex-col pt-6">
        <div className="flex flex-row ">
          <h2 className="justify-center text-gray-700">
            <b>Weather Forcast</b>
          </h2>
          <p className="text-gray-500 pl-2">Statistics</p>
        </div>
        <div className="shrink w-64 h-14 pt-4">
          <Calendar />
        </div>
        <p className="text-gray-700 pt-6">Temprature</p>
        <p className="text-gray-500 text-sm">Next 8 days</p>
      </div>
    </div>
  );
}
