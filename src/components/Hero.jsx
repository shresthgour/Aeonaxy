import React from 'react'
import Streak from '../assets/Streak.png'
import Flash from '@mui/icons-material/FlashOn';

const Hero = () => {
  return (
    <div className='flex font-poppins justify-between'>
      <div className="flex">
        <div className="w-[150px]">
          <img className='w-[100%]' src={Streak} alt="Streak" />
        </div>
        <div className="flex h-[120px] flex-col justify-center ml-4">
          <h2 className='text-[#181818] font-semibold text-[22px] leading-10'>You're on a 2-day streak!</h2>
          <div className="flex">  
            <p className='text-[#515151] text-xs mr-6'><span className='font-semibold'>2</span> Longest streak</p>
            <p className='text-[#515151] text-xs'><span className='font-semibold'>19</span> Lessons Completed</p>
          </div>
        </div>
      </div>

      <div className="border-l-2 border-[#f2f2f2] h-[120px]"></div>

      <div className="flex h-[120px] w-[35%] justify-around">
        <div className="flex flex-col h-[100%] items-center justify-center w-[12%]">
          <p className='font-semibold pb-1'>W</p>
          <Flash style={{color: "#fbc570", transform: 'scale(1)'}}/>
        </div>
        <div className="flex flex-col h-[100%] items-center justify-center border-2 border-[#fbc570] rounded-full w-[12%]">
          <p className='font-semibold pb-1'>Th</p>
          <Flash style={{color: "#fbc570", transform: 'scale(1)'}}/>
        </div>
        <div className="flex flex-col h-[100%] items-center justify-center w-[12%]">
          <p className='font-semibold pb-1'>F</p>
          <Flash style={{color: "#dcdcdc", transform: 'scale(1)'}}/>
        </div>
        <div className="flex flex-col h-[100%] items-center justify-center w-[12%]">
          <p className='font-semibold pb-1'>S</p>
          <Flash style={{color: "#dcdcdc", transform: 'scale(1)'}}/>
        </div>
        <div className="flex flex-col h-[100%] items-center justify-center w-[12%]">
          <p className='font-semibold pb-1'>Su</p>
          <Flash style={{color: "#dcdcdc", transform: 'scale(1)'}}/>
        </div>
      </div>
    </div>
  )
}

export default Hero