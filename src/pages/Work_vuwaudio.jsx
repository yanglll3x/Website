import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import StartSteps from '../components/StartSteps';
import { startingFeatures } from '../constants';

import ReactPlayer from 'react-player';

import { slideIn, staggerContainer, textVariant, fadeIn, planetVariants } from '../utils/motion';

// import WanderingCover from '../assets/images/WanderingCover.png';
// import Wan_Pro1 from '../assets/images/Wan_Pro1.png';
// import Wan_Pro2 from '../assets/images/Wan_Pro2.png';
// import Wan_Pro3 from '../assets/images/Wan_Pro3.png';
// import Wan_Pro4 from '../assets/images/Wan_Pro4.png';
// import Wan_Pro5 from '../assets/images/Wan_Pro5.png';


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
          <motion.h1 variants={textVariant(1.1)} className='font-bold lg:text-[92px] md:text-[84px] sm:text-[60px] text-[54px] lg:leading-[108.4px] md:leading-[94.4px] sm:leading-[54.4px] leading-[44.4px] uppercase text-white'>
            Wandering
          </motion.h1>

        {/* Float Button to Skip */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[2px] mt-[10px]"
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

        

        <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=mzAkG8Q-gEs'
            className='react-player'
            style={{ position: 'absolute', top: 0, left: 0 }}
            width='100%' 
            height='100%' 
            controls
            playing={playing}
            light={WanderingCover}
            onClickPreview={handlePlayVideo}
          />
        </div>
        
        {/* Designing Process */}
        <div className='relative w-full z-10'>
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