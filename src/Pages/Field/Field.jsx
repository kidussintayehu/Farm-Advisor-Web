import NavBar from "../../Components/Navbar/Navbar";
import TerrainIcon from "@mui/icons-material/Terrain";
import CardLineChart from "../../Components/Chart/CardLineChart";
import CardBarChart from "../../Components/Chart/CardBarChart";
import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import Warning from "../../Components/Warning/Warning";
import Bar from "../../Components/Navbar/Bar/Bar";
import DepthChart from "../../Components/Chart/DepthChart";
import WindChart from "../../Components/Chart/WindChart";
const Field = () => {
  return (
    <div className="w-full ">
      <NavBar />
      <Bar />
      <div className=" max-h-full md:container md:mx-auto bg-slate-50 pt-6">
        <div className="justify-between md:items-center md:flex mb-8 ">
          <div className="flex items-center space-x-4">
            <TerrainIcon />
            <p className="text-gray-700 text-base ">127m above see level.</p>
          </div>
        </div>
        <Card />
        <Title />
        <CardLineChart />
        <div>
        <p className="text-gray-700 pt-6">Preciptation</p>
        <p className="text-gray-500 text-sm">Next 8 days</p>
        <CardBarChart />
        </div>
        <div>
        <p className="text-gray-700 pt-6">Show Depth</p>
        <DepthChart />
        <p className="text-gray-700 pt-6">Wind</p>
        <WindChart />

        </div>
        <Warning />
      </div>
    </div>
  );
};

export default Field;
