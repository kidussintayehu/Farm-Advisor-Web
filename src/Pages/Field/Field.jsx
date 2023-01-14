import NavBar from '../../Components/Navbar/Navbar'
import NavBar2 from '../../Components/Navbar/NavBar2/NavBar2'
import TerrainIcon from '@mui/icons-material/Terrain'
import AddIcon from '@mui/icons-material/Add'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import CardLineChart from '../../Components/Chart/CardLineChart'
import CardBarChart from '../../Components/Chart/CardBarChart'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
const Field = () => {
  return (
    <div>
      <NavBar />
      <NavBar2 />
      <div className='md:container md:mx-auto bg-slate-50 h-screen pt-6'>
        <div className='justify-between md:items-center md:flex mb-8 '>
          <div class='flex items-center space-x-4'>
            <TerrainIcon />
            <p className='text-gray-700 text-base '>127m above see level.</p>
          </div>
        </div>
        <div className='md:container md:mx-auto bg-white h-36 rounded-lg'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col  p-10'>
              <p className='text-4xl text-center text-gray-500'>367</p>
              <p className='text-gray-500 '> Current GDD </p>
            </div>
            <div className='flex flex-col p-10'>
              <p className='text-4xl text-center text-gray-500'>367</p>
              <p className='text-gray-500 '> Current GDD </p>
            </div>
            <div className='flex flex-col p-10'>
              <p className='text-4xl text-center text-gray-500'>367</p>
              <p className='text-gray-500 '> 5 days </p>
            </div>
          </div>
        </div>
        <p className='text-gray-500 pt-6 text-base '>
          Last sensor reset: 04/03/22 ( auto reset )
        </p>
        <div className='justify-between md:items-center md:flex pt-6'>
          <h2 className='justify-center text-gray-700'>
            <b>Sensors</b>
          </h2>
          <div className='text-gray-500'>
            <AddIcon />
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
        <div className='flex flex-col pt-6'>
          <div className='flex flex-row '>
            <h2 className='justify-center text-gray-700'>
              <b>Weather Forcast</b>
            </h2>
            <p className='text-gray-500 pl-2'>Statistics</p>
          </div>
          <p className='text-gray-700 pt-6'>Temprature</p>
          <p className='text-gray-500 text-sm'>Next 8 days</p>
        </div>
        <div>
          <CardLineChart />
        </div>
        <p className='text-gray-700 pt-6'>Preciptation</p>
        <p className='text-gray-500 text-sm'>Next 8 days</p>
        <div>
          <CardBarChart />
        </div>
        <div className='flex flex-row'>
          <ErrorRoundedIcon />
          <p className='text-gray-500 pl-2 text-base '>
            If it happened to rain on the predicted best cutting date, it is
            recommended to let the grass dry for at least 2 days before cutting.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Field
