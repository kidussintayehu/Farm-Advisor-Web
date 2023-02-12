import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

export default function NavBar2 () {
  return (
    <nav className='w-full justify-center bg-slate-50 shadow'>
      <div className='justify-between md:items-center md:flex px-8'>
        <div className='flex flex-row items-center justify-between md:py-3 pl-[10rem]'>
          <a href='/'>
            <ArrowBackIosIcon />
          </a>
          <p className = "text-gray-800"> MY PROFILE </p>
        </div>
      </div>
    </nav>
  )
}