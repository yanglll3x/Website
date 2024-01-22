import React from 'react'

import Display from './Display';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className={`w-full h-screen relative mx-auto `}>
      <div>
        <Display />
      </div>
      
      <div className='absolute xs:bottom-5 bottom-2 w-full flex justify-center items-center'>
        <a href='#home_work'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-teal-300 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-teal-100 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Home

// className='w-full h-screen relative'
// className='absolute top-1/2 left 1-2 transform -translate-x-1/2 -translate-y-1/2 z-10'