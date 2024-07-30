import React from 'react'

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import StartSteps from '../components/StartSteps';
import { startingFeatures } from '../constants';

import { slideIn, staggerContainer, textVariant, fadeIn, planetVariants } from '../utils/motion';

import unityGrid from '../assets/images/unity.gif';
import unity from "../assets/icons/unity.svg";
import stamp from "../assets/images/stamp.png";
import arrowdown from "../assets/icons/arrow-down.svg";
import PearlandCoin_thumbnail from '../assets/images/PearlandCoin_thumbnail.png';
import modelling_portfolio from '../assets/images/web_assets/modelling_portfolio.png';
import modelling_header from '../assets/images/web_assets/modelling_header.png';


import Display from './Display';

import Home_work from './Home_work';

const Blooming_world = () => (
  <section className='max-w-7xl home-screen relative mx-auto sm:p-11 pb-12 !pt-[86px] min-h-[calc(100vh-80px)]'>
    <div>
      <Display isHome={false} />
    </div>

     {/* cover img */}
     <div className='absolute left-0 w-full z-10' style={{ top: '9.5rem', marginTop: '-5px' }}>
      <img 
        src={modelling_header } 
        alt="modelling_header" 
        className='w-full h-auto'
      />
    </div>


    <div className='absolute xs:bottom-5 bottom-2 left-1/2 transform -translate-x-1/2 w-full flex justify-center home-work-button home-screen'>        
      <a href='#Intro'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-teal-300 flex justify-center items-start '>
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

    <div className='relative'>
      <img 
        src={modelling_portfolio} 
        alt="modelling_portfolio" 
        className='w-full h-auto object-cover' 
        style={{ maxWidth: '1600px', margin: '0 auto' }} 
      />
    </div>

      {/* END */}
      {/* <div className='rounded-b-lg md:rounded-b-[3rem] bg-[#c0dbdb] p-16'>
        <p className='text-center text-white font-semibold sm:text-2xl text-base font-poppins'> Thank you for watching!</p>
      </div> */}

      <div className='flex items-center justify-center rounded-b-lg md:rounded-b-[3rem] bg-[#c0dbdb] p-[6%]'>
        <p className='text-center text-white font-normal sm:font-semibold sm:text-2xl text-xs font-poppins'> Thank you for watching!</p>
      </div>

  </section>

);

export default Blooming_world;