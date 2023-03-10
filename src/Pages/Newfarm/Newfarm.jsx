import Results from '../../Components/Searchresults/Searchresults';
import Navbar from '../../Components/Navbar/Navbar';
import ClearIcon from '@mui/icons-material/Clear';

const Newfarm = () => {
  return (
    <div>
      <Navbar />
      <div class = "w-full bg-zinc-200">
       <div class = 'md:container bg-zinc-300 md:mx-auto p-[7rem]'>
         <div class = 'container md:w-[30rem] rounded-lg shadow-2xl  bg-slate-50 '>
           <div class = 'flex md:justify-between pt-4'>
            <h2 class = "text-2xl font-bold">New Farm</h2>
            <ClearIcon />
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
             <div class="input-group relative flex flex-row justify-between items-stretch w-full mb-4 rounded">
                <input type="search" class="form-control w-full  font-normal text-gray-700 pt-10
                 bg-white border-none focus:text-gray-700 focus:outline-none" 
                 placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                </input>
                <span class="input-group-text pt-10  text-gray-700  " id="basic-addon2">
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <path fill="currentColor" d = "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                 </svg>
                </span>
             </div>
             <Results name = "Search result name" address = "Search result address" />
             <Results name = "Search result name" address = "Search result address" />
             <Results name = "Search result name" address = "Search result address" />
             <Results name = "Search result name" address = "Search result address" />
             <Results name = "Search result name" address = "Search result address" />
            </div>
          </div>
          <button class = "bg-[#275342] hover:bg-[#14532d] w-[22.5rem] text-white text-sm font-bold py-2 px-12 mb-8 rounded">
                CREATE NEW FARM
          </button>
        </div>
      </div>
    </div>
  </div>      
  )
  }

export default Newfarm;
