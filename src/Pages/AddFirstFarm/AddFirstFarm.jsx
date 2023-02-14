import Navbar from '../../Components/Navbar/Navbar';
import farmer from '../../Assets/Images/farmer.jpg';
import {Link} from "react-router-dom"

const AddFirstFarm = () => {
  return (
    <div>
      <Navbar/>
      <div className = "md:container md:mx-auto bg-slate-50 h-screen ">
        <div className = "h-[36rem] flex flex-col justify-center items-center ">
          <img
            className = "w-28 h-28 rounded-full" src={farmer} alt= "farm"
          />
          <h1 className ="Roboto text-[34px] pt-5 font-bold text-[#20382F]">
              Welcome to Agino</h1>
          <p className = "text-right md:text-center pt-2 pb-9 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor. 
              </p>
          <Link to ="/farmform"
          className = "bg-[#275342] hover:bg-[#14532d] w-80 text-white font-bold py-2 px-12 rounded">
                CREATE MY FIRST FARM
          </Link>
       </div> 
       </div>
  </div>
  )
}

export default AddFirstFarm
