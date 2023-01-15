import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

export default function Warning(){
    return(
        <div className="flex flex-row">
          <ErrorRoundedIcon />
          <p className="text-gray-500 pl-2 text-base ">
            If it happened to rain on the predicted best cutting date, it is
            recommended to let the grass dry for at least 2 days before cutting.
          </p>
        </div>
    )
}