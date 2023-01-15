
export default function Card(){
    return(
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
    )
}