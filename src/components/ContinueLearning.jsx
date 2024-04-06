import React from 'react'
import Course from '../assets/Course3.png'
import Course1 from '../assets/Course4.png'
import Course2 from '../assets/Course5.png'
import Course3 from '../assets/Couse2.png'

const ContinueLearning = () => {
  return (
    <div className='mb-[90px]'>
      <h3 className="mb-[20px] ml-[30px] md:ml-[50px] lg:ml-0 text-2xl font-bold">Continue learning</h3>
      <div className="flex flex-wrap lg:justify-start md:justify-around lg:space-x-4 space-y-4 lg:space-y-0 w-[100vw] justify-center ">
        <div className="w-[300px] border-2 rounded-md p-[20px]">
          <img className='mb-[15px]' src={Course} alt="Course" />
          <p className="mb-[5px]">Computer Memory • Lesson 2 of 26</p>
          <h4 className="mb-[10px] font-bold text-[20px]">Binary, Decimal, and Hexademical</h4>
          <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fbc570] transition-all duration-500"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>

        <div className="w-[300px] border-2 rounded-md p-[20px] md:!mt-0 lg:!mt-0">
          <img className='mb-[15px]' src={Course1} alt="Course1" />
          <p className="mb-[5px]">Random Variables & Distributions...</p>
          <h4 className="mb-[10px] font-bold text-[20px]">Random Variable Applications</h4>
          <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fbc570] transition-all duration-500"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>

        <div className="w-[300px] border-2 rounded-md p-[20px]">
          <img className='mb-[15px]' src={Course2} alt="Course2" />
          <p className="mb-[5px]">Artificial Neural Networks • Lesso...</p>
          <h4 className="mb-[10px] font-bold text-[20px]">Computationally Modeling The Brain</h4>
          <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fbc570] transition-all duration-500"
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>

        <div className="w-[300px] border-2 rounded-md p-[20px]">
          <img className='mb-[15px]' src={Course3} alt="Course3" />
          <p className="mb-[5px]">Casino Probability • Lesson 3 of 16</p>
          <h4 className="mb-[40px] font-bold text-[20px]">Avoid the Scam</h4>
          <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fbc570] transition-all duration-500"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContinueLearning