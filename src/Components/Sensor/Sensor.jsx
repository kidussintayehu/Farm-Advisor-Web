import AddIcon from "@mui/icons-material/Add";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useState } from "react";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";

export default function Sensor({ children }) {
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var arrow = show ? <KeyboardArrowUpSharpIcon /> : <ExpandMoreOutlinedIcon />;
  return (
    <div >
      <div className="md:flex justify-between pt-6">
        <h2 className="justify-center text-gray-700 pt-6">
          <b>Sensors</b>
        </h2>
        <div className="text-gray-500">
          <AddIcon />
          <button onClick={toggleShow}>{arrow}</button>
        </div>
      </div>
      {show && children}
    </div>
  );
}
