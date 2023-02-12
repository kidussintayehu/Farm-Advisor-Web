import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Field from "./Pages/Field/Field";
import AddFirstFarm from "./Pages/AddFirstFarm/AddFirstFarm";
import Addfield from "./Pages/AddFirstField/AddfieldForm";
import Help from "./Pages/Help/Help";
import MapBox from "./Components/Map/Map";
import FieldForm from "./Pages/AddNewField/AddNewField";
import FarmForm from "./Pages/AddNewFarm/AddNewFarm";
import AddFirstSensor from "./Pages/AddFirstSensor/AddNewSensor";
import SensorForm from "./Pages/AddNewSensor/AddNewSensor";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/field" element={<Field />} />
        <Route path="/addfarm" element={<AddFirstFarm />} />
        <Route path="/addfield" element={<Addfield />} />
        <Route path="/fieldform" element= {<FieldForm />} />
        <Route path="/sensorform" element= {<SensorForm />} />
        <Route path="/farmform" element= {<FarmForm />} />
        <Route path="/help" element={<Help />} />
        <Route path="/map" element={<MapBox />} />
        <Route path="/addsensor" element={<AddFirstSensor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
