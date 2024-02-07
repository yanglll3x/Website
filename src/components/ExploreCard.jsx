import React from 'react'

'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';
import githublogo from '../assets/icons/github_logo.svg';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, link }) => {
  const onCardClick = () => {
    if (active === id) {
      window.open(link, '_blank');
    } else {
      handleClick(id);
    }
  };

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'flex-[10]' : 'flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={onCardClick}
      
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[22px] text-[16px] text-white absolute z-0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]">
          <div
            className='flex justify-center items-center w-[40px] sm:h-[26px]  h-[38px] rounded-[24px] glassmorphism mb-[16px]'
          >
            <img
              src={githublogo}
              alt="headset"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Go and Explore
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;