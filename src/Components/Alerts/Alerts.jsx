import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
function Alerts(props) {
  return (
    <div className="my-5">
      <div className=" flex flex-row p-6 rounded-lg shadow-md bg-white w-full">
        <div className="mr-4 stroke-orange-500">
          <ReportProblemOutlinedIcon />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 text-base mb-4">
            {props.name}
            <b>{props.value}</b> <br />
          </p>
          <p className="text-slate-400">{props.day}</p>
        </div>
      </div>
    </div>
  );
}
export default Alerts;
