import React from 'react';

const ListSteps = ({ number, title, description }) => (
  <div className='flex justify-center items-center flex-row gap-5'>
    <div className='bg-[#eaf0fa] rounded-full flex justify-center items-center' style={{ width: '50px', height: '50px'}}>
      <p className='font-semibold text-[#3e69df] text-base'>
        {number}
      </p>
    </div>
    <div className='flex-1 flex-col justify-center items-start'>
      <p className='font-bold text-lg text-black'>
        {title}
      </p>
      <p className='font-normal text-base text-black'>
        {description}
      </p>
    </div>
  </div>
);

export default ListSteps;
