import Alerts from "../../Components/Alerts/Alerts";
import Fields from "../../Components/Fields/Fields";
import Navbar from "../../Components/Navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import ethiopianfarm from "../../Assets/Images/ethiopianfarm.jpg";
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import MoreOptionMenu from "../../Components/Menu/MoreOptionMenu";
import DropDown from "../../Components/Menu/DropDown";
const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div class="md:container md:mx-auto bg-slate-50 h-screen pt-6">
        <div className="justify-between md:items-center md:flex mb-8 ">
          <div class="flex items-center space-x-4">
            <img
              class="w-10 h-10 rounded-full"
              src={ethiopianfarm}
              alt="farm"
            />
            <DropDown />
          </div>
          <MoreOptionMenu />
        </div>
        <h2 className="justify-center">
          <b>Alerts</b>
        </h2>
        <Alerts name="Low battery on sensor " value="29384759" day="Today" />
        <Alerts
          name="GDG exceeded on "
          value="Field Name one"
          day="Yesterday"
        />
        <div className="justify-between md:items-center md:flex ">
          <h2 className="justify-center">
            <b>Fields</b>
          </h2>
          <AddIcon />
        </div>
        <Fields
          fieldName="Field Name One"
          value="Current GDD - 379"
          message="Your Optimal Cutting Period is in 3 days"
        />
        <Fields
          fieldName="Field Name One"
          value="Current GDD - 379"
          message="Your Optimal Cutting Period is in 3 days"
        />
        <Fields
          fieldName="Field Name One"
          value="Current GDD - 379"
          message="Your Optimal Cutting Period is in 3 days"
        />
      </div>
    </div>
  );
};

export default Home;
