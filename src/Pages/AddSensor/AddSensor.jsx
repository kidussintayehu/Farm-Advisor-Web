import Navbar from '../../Components/Navbar/Navbar';
import sensor from '../../Assets/Images/sensor.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


const AddSensor = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-full flex flex-row justify-around rounded-lg p-3 shadow-2xl bg-white'>
            <div className=' flex flex-row'>
              <ArrowBackIosIcon/>
              <h3> Field Name 1</h3>
            </div>
            <MoreVertOutlinedIcon />
      </div>
      <div class = "md:container bg-slate-100 h-screen ">
        <div class = "h-[36rem] flex flex-col justify-center items-center ">
          <span class = "p-8 bg-[#DFEFD9] rounded-full">
             <img
              class = "w-20 h-20 rounded-full" src={sensor} alt= "farm" />
          </span>
          <h1 class ="Roboto text-[30px] pt-5 font-bold text-[#20382F]">
              Lorem Ipsum</h1>
          <p class = "text-right md:text-center pt-2 pb-9 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor. 
              </p>
          <button class = "bg-[#275342] hover:bg-[#14532d] w-80 text-white font-bold py-2 px-12 rounded">
                ADD MY FIRST SENSOR
          </button>
       </div> 
       </div>
  </div>
  )
}

export default AddSensor
