import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import {Link} from "react-router-dom";

export default function Bar (props) {
  return (
    <nav className='w-full  bg-slate-50 shadow'>
      <div className='flex justify-around  md:flex px-8'>
        <div className='flex flex-row items-center justify-between md:py-3 ' >
          <Link to='/'>
            <ArrowBackIosIcon />
          </Link>
          <p className='text-gray-700 '> {props.name} </p>
        </div>
        <div className='hidden space-x-4 md:inline-block'>
          <MoreVertOutlinedIcon />
        </div>
      </div>
    </nav>
  )
}
