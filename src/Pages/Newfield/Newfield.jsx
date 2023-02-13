import NavBar from '../../Components/Navbar/Navbar';
import Navbar3 from '../../Components/Navbar/Navbar3';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import data from '../MOCK_DATA.json'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Newfield = () => {
  return (
    <div>
      <NavBar/>
      <div class = " absolute justify-center items-center pt-[4.9rem]">
            <div class = 'container md:w-[30rem]  rounded-lg shadow-2xl  bg-slate-50 '>
                <div class = 'flex md:justify-between pt-4'>
                  <h2 class = "text-2xl font-bold">New Farm</h2>
                  <button><ClearIcon />
                  </button>
                </div>
                <div class = "flex flex-col pt-8">
                    <div>
                       <p class = "text-sm text-gray-500">Field Name</p>
                       <input class = " p-3 rounded-lg bg-white shadow-md  md:w-full" type = "text" placeholder = "Enter field name"/>
                    </div>
                    <div>
                       <p class = "text-sm text-gray-500 mt-8 ">Atitude Above Sea Level</p>
                       <input class = " p-3 rounded-lg bg-white shadow-md  md:w-full " type = "text" placeholder = "Enter In Meters"/>
                    </div>
                   <button class = "bg-[#275342] hover:bg-[#14532d] w-[22.5rem] text-white text-sm font-bold py-3 px-12 mt-[16rem] mb-4 rounded">
                       CREATE NEW FIELD
                   </button>

                 
               </div>
              </div>
        </div>
     </div>
     
  )
}

export default Newfield
