import React from 'react'
import Course from '../assets/Course7.png'
import BookmarkIcon from '@mui/icons-material/Bookmark';

const FeaturedPaths = () => {
  return (
    <div className='mb-[90px] '>
      <h3 className="mb-[20px] text-2xl font-bold ml-[30px] md:ml-[50px] lg:ml-0">Featured Learning Paths</h3>
      <div className="flex flex-wrap space-y-4 items-center justify-center md:justify-start md:ml-[50px] lg:ml-0">

        <div className="flex flex-wrap mr-0 mb-4 md:mb-0 lg:mb-0 lg:mr-[15px] md:mr-[15px] ">
          <div className="w-[300px] lg:w-[600px] lg:h-[280px] border-2 rounded-md p-[20px] flex flex-col lg:flex-row">
            <div className="h-[100%] lg:w-[40%] w-[100%] flex items-center justify-center">
              <div className="flex ">
                <img className='mb-[15px] h-[150px]' src={Course} alt="Course6" />
              </div>
            </div>
            <div className="flex flex-col w-[100%] lg:w-[60%] pl-[20px]">
              <p className="mb-[5px]">7 courses</p>
              <h4 className="mb-[10px] font-bold text-[20px]">Foundational Math</h4>
              <p className="text-[#828282] font-semibold text-[18px] mb-[29px]">This 7-course path starts with pre-algebra and builds up to fundamentals of algebra and geometry. Let's get started!</p>
              <button className='bg-[#f2b234] rounded-2xl w-[130px] font-semibold pt-[5px] pb-[5px] text-[15px]'> <BookmarkIcon /> In Progress</button> 
            </div>
          </div>
        </div>

        <div className="flex flex-wrap !mt-0">
          <div className="w-[300px] lg:w-[600px] lg:h-[280px] border-2 rounded-md p-[20px] flex flex-col lg:flex-row">
            <div className="h-[100%] lg:w-[40%] w-[100%] flex items-center justify-center">
              <div className="flex">
                <img className='mb-[15px] h-[150px]' src={Course} alt="Course6" />
              </div>
            </div>
            <div className="flex flex-col w-[100%] lg:w-[60%] pl-[20px]">
              <p className="mb-[5px]">Pre-Algebra • Lesson 1 of 28</p>
              <h4 className="mb-[10px] font-bold text-[20px]">Mathematical Thinking</h4>
              <p className="text-[#828282] font-semibold text-[18px] mb-[29px]">This course path starts with everyday math and builds up to fundamentals of algebra and geometry. Let's get started!</p>
              <button className='bg-[#f2b234] rounded-2xl w-[130px] font-semibold pt-[5px] pb-[5px] text-[15px]'> <BookmarkIcon /> In Progress</button> 
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturedPaths