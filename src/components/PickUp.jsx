import React from 'react'
import Course1 from '../assets/Thumbnail1.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const PickUp = () => {
  return (
    <div className='mb-[90px]'>
      <h2 className='mb-[25px] text-2xl font-bold'>Pick up where you left off</h2>
      <div className="flex flex-wrap lg:flex-row border-2 rounded-md p-[25px] md:w-[55vw] lg:w-auto">
        <div className="w-[100%] lg:w-[45%]">
          <img className='' src={Course1} alt="Course1" />
        </div>
        <div className="lg:pl-[55px]">
          <p className='font-semibold mb-[12px] lg:mt-0 mt-4'>Cryptocurrency • Lesson 1 of 19</p>
          <h3 className='font-bold text-3xl lg:text-4xl mb-[19px]'>A Brief History of Currency</h3>
          <p className="text-[#828282] font-semibold lg:text-[20px] text-[18px] mb-[29px]">Trust is the backbone of all currencies, from commodity <br /> monies to crypto.</p>
          <button className="mb-[40px] w-[180px] lg:h-[55px] h-[45px] font-semibold bg-black text-white rounded-lg"><PlayArrowIcon /> Resume course</button>
          <div className="h-2  w-full bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fbc570] transition-all duration-500"
              style={{ width: '10%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PickUp