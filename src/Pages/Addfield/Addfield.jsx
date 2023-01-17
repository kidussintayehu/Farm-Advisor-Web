import Navbar from '../../Components/Navbar/Navbar';
import land from '../../Assets/Images/land.jpg';
import ethiopianfarm from '../../Assets/Images/ethiopianfarm.jpg';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'


const Firstfield = () => {
  return (
    <div>
      <Navbar/>
      <div class = "md:container md:mx-auto bg-slate-50 h-screen pt-9">
        <div className='justify-between md:items-center md:flex mb-8 '>
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
          <button class = "bg-[#275342] hover:bg-[#14532d] w-80 text-white font-bold py-2 px-12 rounded">
                ADD MY FIRST FIELD
          </button>
       </div> 
       </div>
  </div>
  )
}

export default Firstfield
