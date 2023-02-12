import React, { useState } from "react";
import InputField from "../../Components/InputField.jsx/InputField";
import Button from "../../Components/Button/ButtonField";
// import {create} from '../../../api/farm.api'
import { Navigate } from "react-router";
import createField from "../../Api/createField";

export default function FieldForm() {
  const [showModal, setShowModal] = useState(false);

  const [navigate, setNavigate] = useState(false);
  const toogleNavigate = () => {
    setNavigate(!navigate);
  };

  const [name, setName] = useState("");
  const [farmname, setFarmName] = useState("");
  const [altitude, setAltitude] = useState("");

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const handleFarmNameChange = (event) => {
    const { value } = event.target;
    setFarmName(value);
  };
  const handleAltitudeChange = (event) => {
    const { value } = event.target;
    setAltitude(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const field = {
      name: name || undefined,
      farmname: farmname || undefined,
      altitude: altitude || undefined,
    };
    createField(field).then((data) => {
        console.log(data)
    })
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
                New Field
              </p>
              <a
                href="/addfield"
                className="bg-transparent border-0 text-black float-right"
              >
                X
              </a>
            </div>
            <div>
              <form>
                <div className="mb-4 px-3">
                  <InputField
                    label="Farm "
                    onChange={handleNameChange}
                    name="name"
                    value={name}
                    required
                  />{" "}
                </div>
                <div className="mb-4 px-3">
                  <InputField
                    label="Field Name"
                    onChange={handleFarmNameChange}
                    name="altitude"
                    value={farmname}
                    required
                  />
                </div>
                <div className="mb-4 px-3">
                  <InputField
                    label="Attitude Sbove see level"
                    onChange={handleAltitudeChange}
                    name="altitude"
                    value={altitude}
                    required
                  />
                </div>
                <div className="pb-3 mx-0 mt-36 px-3 border shadow-md">
                  <Button onClick={handleSubmit} disabled={!altitude} text="Create New Field" />
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
