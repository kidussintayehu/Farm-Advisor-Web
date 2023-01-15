import farmland from '../../Assets/Images/farmland.jpg'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
function Fields (props) {
  return (
    <div className='my-5'>
      <div className=' flex flex-col p-6 rounded-lg shadow-md bg-white w-full'>
        <div className='justify-between md:items-center md:flex '>
          <div class='flex items-center space-x-4'>
            <img class='w-10 h-10 rounded-full' src={farmland} alt='farm' />
            <div class='font-medium dark:text-white'>
              <div>{props.fieldName}</div>
              <div class='text-sm text-gray-500 dark:text-gray-400'>
                {props.value}
              </div>
            </div>
          </div>
          <a href='/field' >
          <ArrowForwardIosOutlinedIcon />
          </a>
        </div>
        <br />
        <p className='text-gray-700 text-base mb-4'> {props.message}</p>
      </div>
    </div>
  )
}

export default Fields
