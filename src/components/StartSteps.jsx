import React from 'react'

const StartSteps = ({ number, text }) => (
    <div className={`flex justify-center items-center flex-row`}>
      <div
        className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'
      >
        <p className="font-bold text-[20px] text-white">
          {number}
        </p>
      </div>
      <p className="flex-1 ml-[20px] font-normal text-[14px] text-[#B0B0B0] leading-[22.4px]">
        {text}
      </p>
    </div>
  );

export default StartSteps;