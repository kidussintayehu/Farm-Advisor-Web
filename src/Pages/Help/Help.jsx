import React, { useState, useEffect } from "react";
import helpList from "../../Api/help.js";
import HelpCard from "../../Components/Help/HelpCard";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import Bar from "../../Components/Navbar/Bar/Bar.jsx";
export default function Help() {
  const [helps, setData] = useState();
  useEffect(() => {
    helpList().then((help) => setData(help));
  }, []);
  return (
    <>
      <NavBar />
      <Bar name = "HELP"/>
      <div className="bg-gray-50 lg:mx-96 sm:mx-80 md:mx-10 p-6">
        <h2 className="justify-center text-gray-700 p-2">
          <b>FAQ</b>
        </h2>
        {helps &&
          helps.map((help, index) => (
            <div key={index}>
              <HelpCard help={help} />
            </div>
          ))}
      </div>
    </>
  );
}
