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

import Display from './Display';

import Home_work from './Home_work';

const Work_9320 = () => (
  <section className='max-w-5xl home-screen relative mx-auto sm:p-11 pb-12 !pt-[86px] min-h-[calc(100vh-80px)]'>
    <div>
      <Display isHome={false} />
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

      <motion.div 
        variants={staggerContainer}
        // initial="hidden"
        // whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className={`max-w-5xl mx-auto sm:p-8 pb-6 !pt-[100px] px-2 min-h-[calc(100vh-80px)]`}
        id='Intro'
      >

        {/*  */}
        <div className='sm:p-10 xs:p-6 px-4 py-8 relative z-10'>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8`}
          >
            <TypingText title = "Designing Process" />
            <TitleText
              title={(
                <>Track friends around you and invite them to play together in the same world
                </>
              )}
              textStyles="text-center"
            />

            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25}}
              className="relative mt-[68px] flex w-full h-[550px]"
            >
              <img src={PearlandCoin_thumbnail} alt="map" className="w-full h-full object-cover" />

              {/* <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                <img src={PearlandCoin_thumbnail} alt="people" className="w-full h-full" />
              </div> */}
            </motion.div>




            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25}}
              className="relative mt-[68px] flex w-full h-[550px]"
            >
              <img src={PearlandCoin_thumbnail} alt="map" className="w-full h-full object-cover" />

              {/* <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                <img src={PearlandCoin_thumbnail} alt="people" className="w-full h-full" />
              </div> */}
            </motion.div>

          </motion.div>

        </div>


      </motion.div>

      {/* <div>
        <Home_work />
      </div> */}
  </section>

);

export default Work_9320;