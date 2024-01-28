import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import StartSteps from '../components/StartSteps';
import { startingFeatures } from '../constants';

import ReactPlayer from 'react-player';
import PearlandCoinVideo from '../assets/videos/PearlandCoin.mp4';
import PearlandCoin_thumbnail from '../assets/images/PearlandCoin_thumbnail.png';

import { slideIn, staggerContainer, textVariant, fadeIn, planetVariants } from '../utils/motion';

import unityGrid from '../assets/images/unity.gif';
import unity from "../assets/icons/unity.svg";
import stamp from "../assets/images/stamp.png";
import arrowdown from "../assets/icons/arrow-down.svg";


const Work_vuwaudio = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayVideo = () => {
    setPlaying(true);
  };

  return (
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
          className="relative w-full md:-mt-[8px] -mt-[8px]"
        >
          <div className="absolute w-full h-[200px] bg-gradient-to-r from-emerald-500 from-10% via-lime-500 via-30% to-yellow-500 to-90%  rounded-tr-[140px] z-[0] -top-[30px]"/>

          {/* Image */}
          <img
            src={unityGrid}
            alt="Whispered Bonds"
            className="w-full sm:h-[350px] h-[240px] object-cover rounded-tr-[140px] z-10 relative"
          />

        </motion.div>

        {/* Text part */}
        <TypingText title="| About Metaversus" textStyles="text-center font-semibold mt-4" />

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

            </motion.div>

            <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
              <ReactPlayer 
                url={PearlandCoinVideo}
                className='react-player'
                style={{ position: 'absolute', top: 0, left: 0 }}
                width='100%' 
                height='100%' 
                controls
                playing={playing}
                light={PearlandCoin_thumbnail}
                onClickPreview={handlePlayVideo}
              />
            </div>




          </motion.div>

        </div>


      </motion.div>
    </section>

  )
};


export default Work_vuwaudio