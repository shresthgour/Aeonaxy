import React from 'react'
import Course from '../assets/Course6.png'

const Recommended = () => {
  return (
    <div className='mb-[90px]'>
      <h3 className="mb-[20px] ml-[30px] md:ml-[50px] lg:ml-0 text-2xl font-bold">Recommended for you</h3>
      <div className="flex flex-wrap justify-center lg:justify-between md:justify-between md:ml-[50px] lg:ml-0">
        <div className="w-[300px] border-2 rounded-md p-[20px]">
          <img className='mb-[15px]' src={Course} alt="Course6" />
          <p className="mb-[5px]">Pre-Algebra • Lesson 1 of 28</p>
          <h4 className="mb-[10px] font-bold text-[20px]">Understanding Variables</h4>
        </div>
      </div>
    </div>
  )
}

export default Recommended