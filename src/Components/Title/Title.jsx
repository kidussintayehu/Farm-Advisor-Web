import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Sensors from "../Sensors/Sensors";
import blacksensor from '../../Assets/Images/blacksensor.jpg';
import redsensor from '../../Assets/Images/redsensor.jpg';
import greensensor from '../../Assets/Images/greensensor.jpg';


export default function Title() {
  const [showSensors,setShowSensors] = useState(false)

  return (
    <div>
      <p className="text-gray-500 pt-6 text-base ">
        Last sensor reset: 04/03/22 ( auto reset )
      </p>
      <div className="justify-between md:items-center md:flex pt-6">
        <h2 className="justify-center text-gray-700">
          <b>Sensors</b>
        </h2>
        <div className="text-gray-500">
          <AddIcon />
          {showSensors ? <button onClick={() => setShowSensors(current => !current)}>
            <ExpandLessOutlinedIcon /></button> : <button onClick={() => setShowSensors(current => !current)}>
            <ExpandMoreOutlinedIcon /></button>}
        </div>
      </div>
      {showSensors &&(
      <div class = "pt-4 flex flex-row justify-between">
          <Sensors image = {redsensor} value = "45678987654" data = "GGD 375"/>
          <Sensors image = {blacksensor} value = "45678987654" data = "No data since 22/03/22"/>
        <Sensors image = {greensensor} value = " 45678987654" data = "GGD 375"/>
      </div>
      )}
      <div className="flex flex-col pt-6">
        <div className="flex flex-row ">
          <h2 className="justify-center text-gray-700">
            <b>Weather Forcast</b>
          </h2>
          <p className="text-gray-500 pl-2">Statistics</p>
        </div>
        <p className="text-gray-700 pt-6">Temprature</p>
        <p className="text-gray-500 text-sm">Next 8 days</p>
      </div>
    </div>
  );
}
