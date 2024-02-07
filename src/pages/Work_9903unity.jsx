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

const Work_9903unity = () => (
  <section className='bg-stone-200'>
    <motion.div 
      variants={staggerContainer}
      // initial="hidden"
      // whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`max-w-5xl mx-auto sm:p-16 pb-12 !pt-[100px] px-8 min-h-[calc(100vh-80px)]`}
    >

      {/* Whispered Bonds Title */}
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className='font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] text-[44px] lg:leading-[108.4px] md:leading-[94.4px] sm:leading-[54.4px] leading-[44.4px] uppercase text-white'>
        Whispered
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className='font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] text-[44px] lg:leading-[108.4px] md:leading-[94.4px] sm:leading-[54.4px] leading-[44.4px] uppercase text-white'>B</h1>
          <div className='
            md:w-[148px] sm:w-[55px] w-[40px] 
            md:h-[78px] sm:h-[38px] h-[28px] 
            md:border-[18px] border-[9px] rounded-[50px] border-white sm:mx-1 mx-[6px]' />
          <h1 className='font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] text-[44px] lg:leading-[108.4px] md:leading-[94.4px] sm:leading-[54.4px] leading-[44.4px] uppercase text-white'>nds</h1>
        </motion.div>
      </div>

      {/* Float Button to Skip */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[200px] bg-gradient-to-r from-emerald-500 from-10% via-lime-500 via-30% to-yellow-500 to-90% rounded-tl-[140px] rounded-tr-[10px] z-[0] -top-[30px]"/>

        {/* Image */}
        <img
          src={unityGrid}
          alt="Whispered Bonds"
          className="w-full sm:h-[350px] h-[240px] object-cover rounded-tl-[140px] rounded-br-[5px] rounded-bl-[5px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src={stamp}
              alt="stamp"
              className="sm:w-[120px] w-[80px] sm:h-[125px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>

      {/* Text part */}
      <TypingText title="| About Metaversus" textStyles="text-center font-semibold" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[18px] text-[14px] text-center text-stone-500"
      >
        <span className="font-extrabold text-stone-600">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className="font-extrabold text-stone-600">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-stone-600">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-stone-600">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src={arrowdown}
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

      {/* Agency & NonAgency Cards */}
    
      <motion.div
        variants={fadeIn('left', 'tween', 0.3, 1)}
        className="relative flex justify-center items-center w-full h-full"
      >
        <div
          className='flex flex-row gap-20 justify-center items-center p-5 mx-8'>
            <div className='bg-black rounded-lg py-5 px-12 flex-grow flex justify-center items-center'>
              <p className='text-white text-base sm:text-lg'>Agency</p>
            </div>
            <div className='bg-black rounded-lg py-5 px-12 flex-grow flex justify-center items-center'>
              <p className='text-white text-base sm:text-lg'>NonAgency</p>
            </div>
        </div>

      </motion.div>

      {/* dog */}
      <div className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col md:flex-row lg:flex-row gap-8`}
        >
          <motion.div
            variants={planetVariants('left')}
            className= 'flex-1 flex justify-center items-center'
          >
            <img
              src={stamp}
              alt="Dog_character"
              className="w-[50%] h-[50%] object-contain"
            />
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <TypingText title="| How Metaversus Works" />
            <TitleText title={<>Get started with just a few clicks</>} />
            <div className="mt-[21px] flex flex-col max-w-[800px] gap-[18px]">
              {startingFeatures.map((feature, index) => (
                <StartSteps
                  key={feature}
                  number={`${index < 10 ? '0' : ''} ${index + 1}`}
                  text={feature}
                />
              ))}
            </div>
          </motion.div>

        </motion.div>

      </div>
      
      {/* character */}
      <div className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col md:flex-row lg:flex-row gap-8`}
        >
          
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-[0.95] flex justify-center flex-col"
          >
            <TypingText title="| How Metaversus Works" />
            <TitleText title={<>Get started with just a few clicks</>} />
            <div className="mt-[21px] flex flex-col max-w-[800px] gap-[18px]">
              {startingFeatures.map((feature, index) => (
                <StartSteps
                  key={feature}
                  number={`${index < 10 ? '0' : ''} ${index + 1}`}
                  text={feature}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={planetVariants('right')}
            className= 'flex-1 flex justify-center items-center'
          >
            <img
              src={stamp}
              alt="Dog_character"
              className="w-[50%] h-[50%] object-contain"
            />
          </motion.div>

        </motion.div>

      </div>
      
      {/*  */}
      <div className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
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
              <>Track friends around you and invite them to play together in the same
                world
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

        </motion.div>

      </div>


    </motion.div>

  </section>

);

export default Work_9903unity;