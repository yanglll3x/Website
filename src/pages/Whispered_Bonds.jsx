import React from 'react'

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import StartSteps from '../components/StartSteps';
import { startingFeatures } from '../constants';

import { slideIn, staggerContainer, textVariant, fadeIn, planetVariants } from '../utils/motion';

import unityGrid from '../assets/images/unity.gif';
import unity from "../assets/icons/unity.svg";
import stamp1 from "../assets/images/stamp1.png";
import stamp2 from "../assets/images/stamp2.png";
import arrowdown from "../assets/icons/arrow-down.svg";
import PearlandCoin_thumbnail from '../assets/images/PearlandCoin_thumbnail.png';
import unitydog from '../assets/images/web_assets/unitydog.png';

const Whispered_Bonds = () => (
  <section className='bg-stone-200'>
    <div className='max-w-7xl mx-auto pb-12 !pt-[80px] px-8 min-h-[calc(100vh-80px)]'>
      <div className='relative flex items-center justify-center '>
        <img 
          src={unitydog } 
          alt="unity dog"
          className='w-full h-auto object-cover max-w-7xl ' 
        />
      </div>

      <a href="https://yanglll3x.itch.io/whispered-bonds" target="_blank" rel="noopener noreferrer">
        <div className="w-full flex justify-end -mt-[11%] pr-[6%] relative z-10">
          <img
            src={stamp1}
            alt="stamp1"
            className="w-[8%] h-[8%] object-contain"
          />
        </div>
      </a>
      

      <a href="https://yanglll3x.itch.io/whisperedbondsagency" target="_blank" rel="noopener noreferrer">
        <div className="w-full flex justify-start -mt-[8%] pl-[6%] relative z-10">
          <img
            src={stamp2}
            alt="stamp2"
            className="w-[8%] h-[8%] object-contain"
          />
        </div>
      </a>

      {/* END */}
      <div className='flex items-center justify-center rounded-b-lg md:rounded-b-[3rem] bg-[#d8d2be] p-[6%]'>
        <p className='text-center text-white font-normal sm:font-semibold sm:text-2xl text-xs font-poppins pt-2 sm:pt-12'> Thank you for watching!</p>
      </div>

    </div>
  </section>

);

export default Whispered_Bonds;