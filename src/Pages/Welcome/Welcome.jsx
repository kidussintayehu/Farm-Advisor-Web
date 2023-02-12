import React from "react";
import {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import farmer from '../../Assets/Images/farmer.jpg';
import Results from '../../Components/Searchresults/Searchresults';
import ClearIcon from '@mui/icons-material/Clear';
import data from '../MOCK_DATA.json'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Welcome = () => {
const [showModal, setShowModal] = useState(false);
const [search,setSearch] = useState("")
const [location,setLocation] = useState("")

const handleClick = () =>{
  data.filter((val)=>{
    if(val.first_name.toLowerCase().includes(search.toLowerCase())){
       return val
    }})}

return (
    <div>
      <Navbar/>
      <div class = "md:container md:mx-auto bg-slate-50 h-screen ">
        <div class = "h-[36rem] flex flex-col justify-center items-center ">
          <img
            class = "w-28 h-28 rounded-full" src={farmer} alt= "farm"
          />
          <h1 class ="Roboto text-[34px] pt-5 font-bold text-[#20382F]">
              Welcome to Agino</h1>

          <p class = "text-right md:text-center pt-2 pb-9 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor. 
              </p>

          <button class = "bg-[#275342] hover:bg-[#14532d] w-80 text-white font-bold py-2 px-12 rounded"
            onClick={() => setShowModal(true)}
            >
                CREATE MY FIRST FARM
          </button>
         {showModal ? (
  <div class = " absolute justify-center items-center pt-[4.9rem]">
    <div class = 'container md:w-[30rem]  rounded-lg shadow-2xl  bg-slate-50 '>
      <div class = 'flex md:justify-between pt-4'>
       <h2 class = "text-2xl font-bold">New Farm</h2>
       <button onClick={() => setShowModal(false)}><ClearIcon />
       </button>
      </div>
    <div class = "flex flex-col pt-8">
       <form class = "">
         <div class="mb-4">
            <label class="block text-gray-600  text-sm mb-3" for="farmname">
             Farm Name
           </label>
           <input class="placeholder:text-gray-900 text-lg shadow border rounded  w-full py-2 
            px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="farmname" type="text" placeholder="Enter farm name"></input>
         </div>
       </form>
        <h5 class = "text-sm  text-gray-600 mb-2 mt-2">Location</h5>

         
        <div class="container rounded-lg shadow-md  bg-white divide-y md:divide-solid mb-10">
        <div class = "flex flex-row justify-between  mb-4 rounded">
           <input type="search" class="form-control   font-normal text-gray-700 pt-10
            bg-white border-none focus:text-gray-700 focus:outline-none" 
            placeholder="Search Location" 
            onChange={e => {setSearch(e.target.value)}}>

           </input>
           <button onclick = {handleClick}>
             <SearchOutlinedIcon class ="pt-10 w-5 "/>

           </button>
        </div>
        {search.length != 0 &&(
           <div>  {data.filter((val)=>{
           if(val.first_name.toLowerCase().includes(search.toLowerCase())){
              return val
            }}).slice(0,3).map((data,key)=>{
       return(
       <Results name = {data.first_name} address = {data.email}/>
        )
        })}
      </div>
        )}
     </div>
     <button class = "bg-[#275342] hover:bg-[#14532d] w-[22.5rem] text-white text-sm font-bold py-2 px-12 mb-8 rounded">
           CREATE NEW FARM
     </button>
   </div>
 </div>
   </div>
   
) : null}
          </div>
         </div>
     </div>

   )
 }

export default Welcome
