import AddIcon from '@mui/icons-material/Add'
import PersonIcon from '@mui/icons-material/Person'
import { Tooltip } from '@mui/material';


export default function NavBar () {
  return (
    <nav className='w-full bg-green-900 shadow'>
      <div className='justify-between md:items-center md:flex px-8'>
        <div className='flex items-center justify-between py-3 md:py-5 md:block text-green'>
          <a href='/'>
            <h2 className='text-2xl font-bold text-green-400 object-left-top'>
              agino
            </h2>
          </a>
        </div>
        <div className='hidden space-x-4 md:inline-block'>
          <a href='/' className='text-white'>
            <AddIcon />
          </a>
          <a href='/myprofile' className='text-white'>
            <Tooltip title = "Myprofile">
               <PersonIcon />
            </Tooltip>
          </a>
        </div>
      </div>
    </nav>
  )
}
