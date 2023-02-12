import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function Sensors (props) {

  return (
      <div className="flex flex-col p-6 rounded-lg bg-white shadow-md  md:w-[219px]">
        <div className='justify-between md:items-center md:flex '>
        <span class = "p-2 bg-[#DFEFD9] rounded-full">
             <img
              class = "w-5 h-5 rounded-full" src={props.image} alt= "farm" />
        </span>
        <MoreVertOutlinedIcon />
            </div>
            <div class = "pt-3">
                {props.value}
            <div class = "text-[#979797] text-sm"> 
                {props.data}        
             </div>
            </div>
        </div>
       
  )
}

export default Sensors

