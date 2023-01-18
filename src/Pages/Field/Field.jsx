import NavBar from "../../Components/Navbar/Navbar";
import NavBar2 from "../../Components/Navbar/NavBar2/NavBar2";
import TerrainIcon from "@mui/icons-material/Terrain";
import CardLineChart from "../../Components/Chart/CardLineChart";
import CardBarChart from "../../Components/Chart/CardBarChart";
import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import Warning from "../../Components/Warning/Warning";
const Field = () => {
  return (
    <div>
      <NavBar />
      <NavBar2 />
      <div className="md:container md:mx-auto bg-slate-50 h-screen pt-6">
        <div className="justify-between md:items-center md:flex mb-8 ">
          <div className="flex items-center space-x-4">
            <TerrainIcon />
            <p className="text-gray-700 text-base ">127m above see level.</p>
          </div>
        </div>
        <Card />
        <Title />
        <CardLineChart />
        <p className="text-gray-700 pt-6">Preciptation</p>
        <p className="text-gray-500 text-sm">Next 8 days</p>
        <CardBarChart />
        <Warning />
      </div>
    </div>
  );
};

export default Field;
