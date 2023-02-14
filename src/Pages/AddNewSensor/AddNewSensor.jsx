import React, { useState } from "react";
import { Navigate } from "react-router";
import {Link} from "react-router-dom";


import InputField from "../../Components/InputField.jsx/InputField";
import Button from "../../Components/Button/ButtonField";
import qr_code_scanner from "../../Assets/Images/qr_code_scanner.svg";
import gddField from "../../Assets/Images/gddField.svg";
import createSensor from "../../Api/creatSensor";
import MapBox from "../../Components/Map/Map";

export default function SensorForm() {
  const date = new Date().toLocaleDateString();
  const [position, setPosition] = useState(38.763611, 9.005401);

  const [navigate, setNavigate] = useState(false);
  const toogleNavigate = () => {
    setNavigate(!navigate);
  };
  const handlePositon = (event) => {
    const { value } = event.target;
    setPosition(value);
  };
  const [serial_number, setSerialNumber] = useState("");
  const [location,] = useState("");
  const [GDD, setGDD] = useState(445);
  const [installation_date, setInstallationDate] = useState(date);
  const [last_cutting_date_at_Field, setLastCuttingDateAtField] =
    useState(date);
  console.log("date : ", date);
  const handleSerialNumberChange = (event) => {
    const { value } = event.target;
    setSerialNumber(value);
  };

  const handleGDDChange = (event) => {
    const { value } = event.target;
    setGDD(value);
  };
  const handleInstallationDateChange = (event) => {
    const { value } = event.target;
    setInstallationDate(value);
  };
  const handleLastCuttingDateAtFieldChange = (event) => {
    const { value } = event.target;
    setLastCuttingDateAtField(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const sensor = {
      serial_number: serial_number || undefined,
      location: location || undefined,
      GDD: GDD || undefined,
      installation_date: installation_date || undefined,
      last_cutting_date_at_Field: last_cutting_date_at_Field || undefined,
    };
    createSensor(sensor).then((data) => {
      console.log(data);
    });
    toogleNavigate();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 h-fit rounded-lg shadow-lg relative flex flex-col w-full lg:min-w-[450px] sm:mx-4 sm:min-w-full bg-gray-50 outline-none focus:outline-none">
            <div className="flex justify-between my-4 px-3">
              <p className="font-['Roboto'] font-medium text-2xl not-italic leading-7">
                New Sensor
              </p>
              <Link
                to="/addsensor"
                className="bg-transparent border-0 text-black float-right"
              >
                X
              </Link>
            </div>
            <form>
              <div className="mb-4 px-3">
                <InputField
                  label="Serial Number"
                  onChange={handleSerialNumberChange}
                  name="serial_number"
                  icon={qr_code_scanner}
                  value={serial_number}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4 px-3">
                <MapBox value={position} onChange={handlePositon} />
              </div>

              <div className="mt-12 mb-4 px-3">
                <InputField
                  label="Default GGD"
                  onChange={handleGDDChange}
                  name="GDD"
                  value={GDD}
                  icon={gddField}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4 px-3">
                <InputField
                  label="Sensor Installation Date"
                  onChange={handleInstallationDateChange}
                  name="installation_date"
                  type="date"
                  value={installation_date}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4 px-3">
                <InputField
                  label="Last Cutting Date At This Field"
                  onChange={handleLastCuttingDateAtFieldChange}
                  name="last_cutting_date_at_Field"
                  type="date"
                  value={last_cutting_date_at_Field}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="pb-3 mx-0 mt-3  px-3 border shadow-md">
                <Button onClick={handleSubmit} text="Add new Sensor" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      {navigate && <Navigate to="/" />}
    </>
  );
}
