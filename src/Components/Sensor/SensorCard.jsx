import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import ethiopianfarm from '../../Assets/Images/ethiopianfarm.jpg';

export default function SensorCard() {
  return <div className="flex flex-row justify-between p-1">
     <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <div className="p-4">
        <div className="flex flex-row justify-between p-1">
          <div>
          <img
              class='w-10 h-10 rounded-full'
              src={ethiopianfarm}
              alt='farm'
            />
          </div>
          <MoreVertOutlinedIcon />
        </div>
        <div>
          <p className="text-4xl text-gray-500 p-1">3678961716</p>
        </div>
        <div>
        <p className="text-gray-500 p-1 ">GDD 375</p>
      </div>
      </div>
    </div>
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <div className="p-4">
        <div className="flex flex-row justify-between p-1">
          <div>
          <img
              class='w-10 h-10 rounded-full'
              src={ethiopianfarm}
              alt='farm'
            />
          </div>
          <MoreVertOutlinedIcon />
        </div>
        <div>
          <p className="text-4xl text-gray-500 p-1">3678961716</p>
        </div>
        <div>
        <p className="text-gray-500 p-1 ">GDD 375</p>
      </div>
      </div>
    </div>
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <div className="p-4">
        <div className="flex flex-row justify-between p-1">
          <div>
          <img
              class='w-10 h-10 rounded-full'
              src={ethiopianfarm}
              alt='farm'
            />
          </div>
          <MoreVertOutlinedIcon />
        </div>
        <div>
          <p className="text-4xl text-gray-500 p-1">3678961716</p>
        </div>
        <div>
        <p className="text-gray-500 p-1 ">GDD 375</p>
      </div>
      </div>
    </div>
  </div>;
}
