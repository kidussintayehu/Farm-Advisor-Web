import NavBar from '../../Components/Navbar/Navbar';
import Navbar3 from '../../Components/Navbar/Navbar3';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Profile = () => {
  return (
    <div>
      <NavBar/>
      <Navbar3/>
      <div class='md:container md:mx-auto bg-slate-50 h-screen pt-6'>
        <div class = " flex flex-col divide-y md:divide-gray-300 pt-6">
            <div>
                <p class = "text-sm text-gray-500">phone</p>
            <div class = "mt-3 p-3 rounded-lg bg-white shadow-md  md:w-full">
               + 47 384 943 38
            </div>
                <p class = "text-sm text-gray-500 mt-3 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Turpis fermentum volutpat.</p>
            </div>
            <div class = "pt-8">
                <div class = "flex flex-row justify-between p-3  rounded-lg bg-white shadow-md  md:w-full">
                   <p>Terms and conditions</p>
                   <a href = "/help">
                     <ArrowForwardIosIcon/> 
                   </a>
            </div>
            </div> 
        </div>
        <div class = "mt-[13rem] text-center font-bold text-red-500">
     <a href = "/">
        <p> Delete Account</p>
     </a>
     </div>
     </div>
     
  </div>
  )
}

export default Profile
