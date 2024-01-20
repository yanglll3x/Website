import React from 'react'

import pearlVideo1 from '../assets/images/pearlVideo1.png';
import pearlVideo2 from '../assets/images/pearlVideo2.png';
import pearlVideo3 from '../assets/images/pearlVideo3.png';
import pearlVideo4 from '../assets/images/pearlVideo4.png';


const Work_explainer = () => {
  return (
    <section className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>

      <div className='flex flex-col w-full items-center'>
        <img src={pearlVideo1} alt='ExplainVideoImage1' className='w-full h-auto' />
        <img src={pearlVideo2} alt='ExplainVideoImage2' className='w-full h-auto' />
        <img src={pearlVideo3} alt='ExplainVideoImage3' className='w-full h-auto' />
        <img src={pearlVideo4} alt='ExplainVideoImage4' className='w-full h-auto' />
      </div>

    </section>

  )
}

export default Work_explainer