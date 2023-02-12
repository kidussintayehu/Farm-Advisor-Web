import {useState} from 'react'
import PlaceIcon from '@mui/icons-material/Place';


function Results (data) {

    return (
     
        <div class ='flex flex-row py-2'>
          <div class = "text-gray-600  bg-gray-300 text-xl p-2 rounded-full">
               <PlaceIcon /> 
          </div>
          <div class = "flex flex-col ml-6 ">
           <button class = 'text-gray-700 text-left font-bold'>
             {data.name}
           </button>
           <p class = 'text-gray-700 text-sm'>
             {data.address}
           </p> 
          </div> 
          
        </div>

          
    )
}
  export default Results;
  