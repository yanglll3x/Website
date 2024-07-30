import React from 'react';

import { motion } from 'framer-motion';
import { staggerContainer, easeIn } from '../utils/motion';

import antarctic_cover from '../assets/images/web_assets/antarctic_cover.png';
import arrowdown from "../assets/icons/arrow-down.svg";
import { TitleText } from '../components/CustomTexts';

const Antarctic_Sim_Project = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      {/* Header */}
      <div className='relative'>
        <img 
          src={antarctic_cover} 
          alt="antarctic_cover" 
          className='w-full h-auto object-cover' 
          style={{ maxWidth: '1600px', margin: '0 auto' }} 
        />

      </div>

      <div className='sm:p-12 xs:p-6 px-6 py-6 sm:py-12 relative z-10 bg-[#f1f5fd]'>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`max-w-[900px] w-full mx-auto flex flex-col gap-2`}
        >
          {/* -OverviewText */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`max-w-[800px] w-full mx-auto flex flex-col gap-2`}
          >
            {/* --Overview-Title-- */}
            <TitleText
              title={(
                <>Overview</>
              )}  
              textStyles="subhead-text text-center text-blue-500"
            />
            {/* --Overview-Description-- */}
            <motion.p
              variants={easeIn('tween')}
              className='font-normal flex sm:text-[18px] text-[12px] text-center text-gray-600'
            >
              <span>This project, a collaboration between <span className='font-semibold'>UNSW LITEroom</span> and the <span className='font-semibold'>UNSW Medical Team</span>, aims to develop a <span className='font-semibold'>VR medical simulation</span> for mass trauma scenarios on a ship in the Antarctic. It is designed to train medical students in evaluating, triaging, communicating, and treating patients in a <span className='font-semibold'>large-scale trauma</span> setting.
              </span>
            </motion.p>
          </motion.div>

          {/* --Time-Team-Role-- */}
          <div className='flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8 pb-8 justify-center'>
            {/* Timeline*/}
            <div className='flex-1 flex-col gap-1 sm:gap-1'>
              <div className='flex flex-row gap-2 items-center'>
                {/* Number Circle */}
                <div className='bg-[rgb(190,205,235)] rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px' }}>
                  <p className='text-white text-base'>01</p>
                </div>
                <p className='font-semibold sm:text-base text-sm font-poppins text-left text-black'>
                  Timeline
                </p>
              </div>          
              <ul className="font-normal sm:text-base text-sm text-gray-600 list-disc pl-5 space-y-2 ml-8">
                <li>Project: Ongoing, started in Nov 2023, expected to last 1-2 years.</li>
                <li>My timeline: Mar 18, 2024 - Jul 1, 2024.</li>
              </ul>
            </div>

            {/* Team*/}
            <div className='flex-2 flex-col gap-1 sm:gap-1 ml-0 sm:ml-12'>
              <div className='flex flex-row gap-2 items-center'>
                {/* Number Circle */}
                <div className='bg-[rgb(190,205,235)] rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px' }}>
                  <p className='text-white text-base'>02</p>
                </div>
                <p className='font-semibold sm:text-base text-sm font-poppins text-left text-black'>
                  The Team
                </p>
              </div>          
              <ul className="font-normal sm:text-base text-sm text-gray-600 list-disc pl-5 space-y-2 ml-8">
                <li>UNSW LITEroom</li>
                <li>UNSW Medical Team</li>
                <li>UNSW MSIT Team (My Team)</li>
              </ul>
            </div>

            {/* Role*/}
            <div className='flex-1 flex-col gap-1 sm:gap-1 ml-0 sm:ml-6'>
              <div className='flex flex-row gap-2 items-center'>
                {/* Number Circle */}
                <div className='bg-[rgb(190,205,235)] rounded-full flex justify-center items-center' style={{ width: '40px', height: '40px' }}>
                  <p className='text-white text-base'>03</p>
                </div>
                <p className='font-semibold sm:text-base text-sm font-poppins text-left text-black'>
                  The Role
                </p>
              </div>          
              <ul className="font-normal sm:text-base text-sm text-gray-600 list-disc pl-5 space-y-2 ml-8">
                <li>Scenario Design</li>
                <li>Interaction Design & Development</li>
              </ul>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Antarctic_Sim_Project