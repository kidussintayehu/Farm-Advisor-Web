import React, { useState } from "react";
import InputField from "../../Components/InputField.jsx/InputField";
import Button from "../../Components/Button/ButtonField";
import { Navigate } from "react-router";
import MapBox from "../../Components/Map/Map";
import createFarm from "../../Api/createFarm";
import {Link} from "react-router-dom";
export default function FarmForm() {

  const [navigate, setNavigate] = useState(false);
  const toogleNavigate = () => {
    setNavigate(!navigate);
  };

  const [farmname, setFarmName] = useState("");
  const [position, setPosition] = useState(38.763611, 9.005401)

  const handleFarmNameChange = (event) => {
    const { value } = event.target;
    setFarmName(value);
  };
  const handlePositon = (event) => {
    const { value } = event.target;
    setPosition(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const field = {
      farmname: farmname || undefined,
      position : position || undefined
    };
    createFarm(field).then((data) => {
        console.log(data)
    })
    toogleNavigate();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 h-fit rounded-lg shadow-lg relative flex flex-col w-full lg:min-w-[450px] sm:ml-6 sm:min-w-full bg-gray-50 outline-none focus:outline-none">
            <div className="flex justify-between my-4 px-3">
              <p className="font-['Roboto'] font-medium text-2xl not-italic leading-7">
                New Farm
              </p>
              <Link
                to="/addfield"
                className="bg-transparent border-0 text-black float-right"
              >
                X
              </Link>
            </div>
            <div>
              <form>
                <div className="mb-4 px-3">
                <InputField
                    label="First Farm Name"
                    onChange={handleFarmNameChange}
                    name="altitude"
                    value={farmname}
                    required
                  />
                    <MapBox 
                    value={position}
                    onChange={handlePositon}/>
                </div>
                <div className="pb-3 mx-0 mt-36 px-3 border shadow-md">
                  <Button onClick={handleSubmit} disabled={!farmname} text="Create New Field" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

      {navigate && <Navigate to="/" />}
    </>
  );
}
