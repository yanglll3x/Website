import React from 'react';

import { motion } from 'framer-motion';
import { staggerContainer, easeIn } from '../utils/motion';
import { websiteOverview } from '../constants';
import ListSteps from '../components/ListSteps';

import web_header from '../assets/images/web_assets/Header.png';
import arrowdown from "../assets/icons/arrow-down.svg";
import { TitleText } from '../components/CustomTexts';

import html_logo from "../assets/icons/html_logo.svg";
import css_logo from "../assets/icons/css_logo.svg";
import js_logo from "../assets/icons/js_logo.svg";
import react_logo from "../assets/icons/react_logo.svg";
import tailwind_logo from "../assets/icons/tailwind.jpg";
import github_logo from "../assets/icons/github_logo.svg";
import figma_logo from "../assets/icons/figma_logo.svg";

import psvector1 from '../assets/images/web_assets/psvector1.png';
import psvector2 from '../assets/images/web_assets/psvector2.png';
import psvector3 from '../assets/images/web_assets/psvector3.png';


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
              minWidth: '125%',
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

      {/* Overview-Area */}
      <div className='sm:p-16 xs:p-8 px-6 py-6 sm:py-16 relative z-10 bg-white'>
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
            className='font-normal flex sm:text-[18px] text-[12px] text-center text-black'
          >
            <span>This is a personal project solely designed and developed by Emili Yang. By utilizing her unique blend of design and coding skills, Emili has created and launched this portfolio website to showcase her expertise, style and diverse projects.
            </span>
          </motion.p>
          <motion.p
            variants={easeIn('tween')}
            className='font-normal flex sm:text-[18px] text-[12px] text-center text-black'
          >
            <span>The website is now live and serve as a platform to attract potential employers or clients. It continues to be updated and refined iteratively, incorporating new content and design enhancements.
            </span> 
            
          </motion.p>
        </motion.div>

        
      </div>

      {/* Problem Statement */}
      <div className='sm:p-12 xs:p-6 px-6 py-6 sm:py-12 relative z-10 bg-[#f1f5fd]'>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`max-w-[1000px] w-full mx-auto flex flex-col gap-2`}
        >
          {/* -Problem-Text */}
          <div className='px-2 pb-4 sm:px-9'>
            <motion.p
              variants={easeIn('tween')}
              className='font-semibold sm:text-2xl text-lg font-poppins text-left text-blue-500'>
                Problem Statement   
            </motion.p>
          {/* --Problem-Description-- */}
            <motion.p
              variants={easeIn('tween')}
              className='font-normal flex-col sm:text-[18px] text-[12px] text-left text-black pt-4'
            >
              <span>This is a personal project solely designed and developed by Emili Yang. By utilizing her unique blend of design and coding skills, Emili has created and launched this portfolio website to showcase her expertise, style and diverse projects.
              </span>
            </motion.p>
            <motion.p
              variants={easeIn('tween')}
              className='font-normal flex sm:text-[18px] text-[12px] text-left text-black pt-2'
            >
              <span>The website is now live and serve as a platform to attract potential employers or clients. It continues to be updated and refined iteratively, incorporating new content and design enhancements.
              </span> 
              
            </motion.p>
          </div>
          {/* --Problem-Title-- */}

          <div className='flex flex-col sm:flex-row gap-6 pt-4 sm:pt-8 pb-8'>
            {/* Pain 1 */}
            <div className='flex-1 flex flex-col gap-2 sm:gap-4'>
              <img
                src={psvector1}
                alt="vector"
                className="w-[25px] sm:w-[35px] h-[25px] sm:h-[35px] object-contain"
              />
              <p className='font-medium sm:text-base text-sm font-poppins text-left text-black'>
                Pain 1 <span className='font-semibold'>- Time Management</span>
              </p>
              <p className='font-normal sm:text-base text-sm text-gray-600'>
                Managing the project timeline, personal commitments, and meeting deadlines as the only contributor was challenging.
              </p>
            </div>

            {/* Pain 2 */}
            <div className='flex-1 flex flex-col gap-2 sm:gap-4'>
              <img
                src={psvector2}
                alt="vector"
                className="w-[25px] sm:w-[35px] h-[25px] sm:h-[35px] object-contain"
              />
              <p className='font-medium sm:text-base text-sm font-poppins text-left text-black'>
                Pain 2 <span className='font-semibold'>- Skills Gaps</span>
              </p>
              <p className='font-normal sm:text-base text-sm text-gray-600'>
                This project requires a diverse skill set, and there were challenges in meeting all necessary competencies to achieve the project goals and bridging gaps.
              </p>
            </div>

            {/* Pain 3 */}
            <div className='flex-1 flex flex-col gap-2 sm:gap-4'>
              <img
                src={psvector3}
                alt="vector"
                className="w-[25px] sm:w-[35px] h-[25px] sm:h-[35px] object-contain"
              />
              <p className='font-medium sm:text-base text-sm font-poppins text-left text-black'>
                Pain 3 <span className='font-semibold'>- Lack of Data and Metrics</span>
              </p>
              <p className='font-normal sm:text-base text-sm text-gray-600'>
                Due to a lack of testing data, user feedback, and metrics like conversion rates, making it difficult to measure effectiveness and optimize the site.
              </p>
            </div>
          </div>

        </motion.div>

      </div>

      {/* Skills and Tools Used */}
      <div className='sm:p-16 xs:p-8 px-6 py-12 relative z-10 bg-white'>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`max-w-[900px] w-full mx-auto flex flex-col gap-4`}
        >
          <TitleText
            title={(
              <>Skills and Tools Used</>
            )}
            textStyles="subhead-text text-left text-blue-500"
          />
          {/* --icons-- */}
          <div className='py-10 flex flex-col'>
            <div className='mt-4 flex flex-wrap gap-12'>
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex justify-center items-center'>
                  <img src={html_logo} alt="HTML" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex justify-center items-center'>
                  <img src={css_logo} alt="CSS" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex justify-center items-center'>
                  <img src={js_logo} alt="JavaScript" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex justify-center items-center'>
                  <img src={react_logo} alt="React" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex justify-center items-center'>
                  <img src={tailwind_logo} alt="Tailwind" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex justify-center items-center'>
                  <img src={github_logo} alt="GitHub" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex justify-center items-center'>
                  <img src={figma_logo} alt="Figma" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


      {/* END */}


      <div className='flex items-center justify-center rounded-b-lg md:rounded-b-[3rem] bg-[#7f94d5] p-[6%]'>
        <p className='text-center text-white font-normal sm:font-semibold sm:text-2xl text-xs font-poppins'> Thank you for watching!</p>
      </div>

    </section>
  )
}

export default Portfolio_Website;
