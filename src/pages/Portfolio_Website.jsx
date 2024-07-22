import React from 'react'

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, easeIn } from '../utils/motion';

import web_header from '../assets/images/web_assets/Header.png';
import arrowdown from "../assets/icons/arrow-down.svg";
import { TitleText } from '../components/CustomTexts';


const Portfolio_Website = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      {/* Header */}
      <div className='relative'>
        <img 
          src={web_header} 
          alt="web header" 
          className='w-full h-auto object-cover' 
          style={{ maxWidth: '1600px', margin: '0 auto' }} 
        />

        {/* --Button */}
        <a href="/" className='absolute' style={{ left: '10%', top: '62%' }}>
          <div
            className='bg-white rounded-md md:rounded-xl flex items-center'
            style={{
              padding: '4% 10%',
              boxSizing: 'border-box',
              display: 'flex',
              whiteSpace: 'nowrap',
              minWidth: '125%', // Ensure the button has enough width
              // maxWidth: '400%', // Ensure the button does not overflow the container
            }}
          >
            <p 
              className='text-blue-500 font-medium'
              style={{
                fontSize: 'clamp(0.5rem, 2vw, 1.25rem)'
              }}
            >
              Website Link
            </p>
            <div className='flex items-center ml-3'>
              <img 
                src={arrowdown} 
                alt="arrow down"
                className="w-[8px] sm:w-[12px] lg:w-[18px] h-[12px] sm:h-[18px] lg:h-[28px] object-contain"
                style={{
                  transform: 'rotate(-90deg)',
                  filter: 'invert(40%) sepia(99%) saturate(4416%) hue-rotate(202deg) brightness(91%) contrast(95%)' 
                }}
              />
            </div>
          </div>
        </a>
        
      </div>

      <div className='sm:p-16 xs:p-8 px-6 py-12 relative z-10 bg-white'>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`max-w-[900px] w-full mx-auto flex flex-col gap-4`}
        >
          {/* Overview-Title */}
          <TitleText
            title={(
              <>Overview</>
            )}  
            textStyles="text-center text-blue-500"
          />
          {/* Overview-Description */}
          <motion.p
            variants={easeIn('tween')}
            className='font-normal text-lg text-center text-black-500'
          >
            <span>Ea rerum voluptatem magni dolorem adipisci est. Labore sed sed tempore laborum et et ut veniam. Ullam sed et explicabo dolor soluta aut quo quidem nobis.
            </span>

          </motion.p>
          

        </motion.div>
        
      </div>
    </section>
  )
}

export default Portfolio_Website
