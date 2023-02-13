import {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import land from '../../Assets/Images/land.jpg';
import ethiopianfarm from '../../Assets/Images/ethiopianfarm.jpg';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import ClearIcon from '@mui/icons-material/Clear';


const Firstfield = () => {
  const [showModal,setShowModal] = useState(false)
  const [field,setField] = useState("")
  const [altitude,setAltitude] = useState("")

  const handleClick = () => {
    console.log("Hello")
  }

  return (
    <div>
      <Navbar/>
      <div class = "md:container md:mx-auto bg-slate-50 h-screen pt-9">
        <div className='justify-between md:items-center md:flex  '>
          <div class='flex items-center space-x-4'>
            <img
              class='w-10 h-10 rounded-full'
              src={ethiopianfarm}
              alt='farm'
            />
            <div className=' flex flex-row p-2 rounded-lg shadow-md bg-white w-40'>
              <div className='pr-4 pl-2'> Farm Name </div>
                <ExpandMoreOutlinedIcon />
              </div>
          </div>
          <MoreVertOutlinedIcon />
        </div>
        <div class = "h-[36rem] flex flex-col justify-center items-center ">
          <img
            class = "w-28 h-28 rounded-full" src={land} alt= "farm"
          />
          <h1 class ="Roboto text-[30px] pt-5 font-bold text-[#20382F]">
              Lorem Ipsum</h1>
          <p class = "text-right md:text-center pt-2 pb-9 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor. 
              </p>
          <button class = "bg-[#275342] hover:bg-[#14532d] w-80 text-white font-bold py-2 px-12 rounded"
               onClick = {() => setShowModal(current => !current)} >
                ADD MY FIRST FIELD
          </button>

          {showModal && (
            <div class = "absolute justify-center items-center pt-[1.5rem]">
            <div class = 'container md:w-[30rem]  rounded-lg shadow-2xl  bg-white '>
                <div class = 'flex md:justify-between pt-4'>
                  <h2 class = "text-2xl font-bold">New Farm</h2>
                  <button onClick = {() => setShowModal(current => !current)}>
                    <ClearIcon />
                  </button>
                </div>
                <div class = "flex flex-col pt-8"> 
                     <div>
                       <p class = "text-sm text-gray-500">Farm</p>
                       <select class = "w-full p-3 pr-4 mb-6 text-gray-500 bg-white border rounded-md shadow-md outline-none"
                          label = "Select Farm">
                          <option>Farm1</option>
                          <option>Farm2</option>
                          <option>Farm3</option>
                          <option>Farm 4</option>
                       </select>
                    </div>
                    <div>
                       <p class = "text-sm text-gray-500">Field Name</p>
                       <input class = " p-3 rounded-lg bg-white shadow-md  md:w-full outline-none" type = "text" placeholder = "Enter field name"
                       value = {field} onChange = {(e) => setField(e.target.value)}/>
                    </div>
                    <div>
                       <p class = "text-sm text-gray-500 mt-8 ">Atitude Above Sea Level</p>
                       <input class = " p-3 rounded-lg bg-white shadow-md  md:w-full outline-none" type = "text" placeholder = "Enter In Meters"
                       value = {altitude} onChange = {(e) => setAltitude(e.target.value)}/>
                    </div>
                   <button class = "bg-[#275342] hover:bg-[#14532d] w-[22.5rem] text-white text-sm font-bold py-3 px-12 mt-[10rem] mb-4 rounded outline-none"
                   onClick = {handleClick}>
                       CREATE NEW FIELD
                   </button>
               </div>
              </div>
         </div>
         )}
        </div> 
      </div>
  </div>
  )
}

export default Firstfield
