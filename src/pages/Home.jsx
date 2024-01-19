import React from 'react'

import Display from './Display';

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-1/2 left 1-2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
        <Display />
      </div>
    </section>
  )
}

export default Home