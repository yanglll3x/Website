import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import StartSteps from '../components/StartSteps';
import { startingFeatures } from '../constants';

import ReactPlayer from 'react-player';

import { slideIn, staggerContainer, textVariant, fadeIn, planetVariants } from '../utils/motion';

import WanderingCover from '../assets/images/WanderingCover.png';
import Wan_Pro1 from '../assets/images/Wan_Pro1.png';
import Wan_Pro2 from '../assets/images/Wan_Pro2.png';
import Wan_Pro3 from '../assets/images/Wan_Pro3.png';
import Wan_Pro4 from '../assets/images/Wan_Pro4.png';
import Wan_Pro5 from '../assets/images/Wan_Pro5.png';


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

        {/* Title */}
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className='font-bold lg:text-[92px] md:text-[84px] sm:text-[60px] text-[54px] lg:leading-[108.4px] md:leading-[94.4px] sm:leading-[54.4px] leading-[44.4px] uppercase text-white'>
            Wandering
          </motion.h1>
        </div>

        {/* Float Button to Skip */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[2px] mt-[10px]"
        >
          <div className="absolute w-full h-[200px] bg-gradient-to-r from-cyan-500 from-10% via-sky-500 via-30% to-purple-400 to-90%  rounded-tr-[140px] rounded-tl-[10px] z-[0] -top-[30px]"/>

          {/* Image */}
          <img
            src={WanderingCover}
            alt="Whispered Bonds"
            className="w-full sm:h-[350px] h-[240px] object-cover rounded-tr-[140px] rounded-br-[5px] rounded-bl-[5px] z-10 relative"
          />

        </motion.div>

        {/* Text part */}
        <TypingText title="| About Wandering" textStyles="text-center font-semibold mt-8" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[18px] text-[14px] text-center text-stone-500"
        >
          <span className="font-extrabold text-stone-600">Wandering</span> is an{' '}
          <span className="font-extrabold text-stone-600">
          audio-visual artwork
          </span>{' '}
          inspired by the motion of waves, designed to take the audience on a journey through a world of waves. It offers a relaxing and amiable audio-visual experience.
        </motion.p>

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] mb-10 font-normal sm:text-[18px] text-[14px] text-center text-stone-500"
        >
          The piece features two main characters, distinct in their form, who wander across the screen in harmony with the music. Their movements showcase dynamic, smooth line designs, creating an elegant and cozy atmosphere and space. Each character embodies a basic melody, intertwining with the other. The audience is immersed in a sense of movement through the easy rhythms, as sounds echo the melody. This experience evokes {' '}
          <span className="font-extrabold text-stone-600">memories of oceanic drips </span> and delivers a feeling that is simple, clean, and ethereal.
        </motion.p>

        {/* Video */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8`}
        >
          <TypingText title="| Video" textStyles="text-center font-semibold m-4" />
          
        </motion.div>
        

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
            className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 py-12`}
          >
            <TypingText title = "Designing Process" textStyles="pt-6 px-4"/>
            <TitleText
              title={(
                <>The exploration project focusing on the harmony between audio and visual elements.
                </>
              )}
              textStyles="text-center px-10"
            />

            {/* Image */}
            <motion.div
              variants={fadeIn('up', 'tween', 0.01, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25}}
              className="relative flex flex-col w-full h-auto"
            >
              <p className='mt-[8px] mb-4 font-light sm:text-[16px] text-[14px] text-center text-stone-500'>
                <span className="font-extrabold text-stone-600"> Intro: </span> It revolves around the fluidity and transformation of shapes, stands for water drops or flows, emphasizing the aesthetics of movement in both sound and visuals.
              </p>

              <img src={Wan_Pro1} alt="Wandering Process 1" className="w-full h-auto object-cover mt-3 mb-4" />

            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.01, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25}}
              className="relative flex flex-col w-full h-auto"
            >
              <p className='mt-[8px] mb-3 font-light sm:text-[16px] text-[14px] text-center text-stone-500'>
              <span className="font-extrabold text-stone-600"> Concept: </span> A glowing particle moving in darkness, with camera movements aligned. The audio consists of simple rhythms and moledies, synchronized with the particle's motion.
              </p>
              <p className='mt-[8px] mb-3 font-light sm:text-[16px] text-[14px] text-center text-stone-500'>Focuses on particle collisions within a complex, rotating model. Particle W joins this system, highlighted by outlined designs and a moving camera. The audio evolves into faster rhythms and complex melodies.</p>

            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.01, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25}}
              className="relative flex flex-col w-full h-auto"
            >
              <img src={Wan_Pro2} alt="Wandering Process 2" className="w-full h-full object-cover mt-0" />
              <img src={Wan_Pro3} alt="Wandering Process 3" className="w-full h-full object-cover mt-3" />
              <img src={Wan_Pro4} alt="Wandering Process 4" className="w-full h-full object-cover mt-3" />

            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.01, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25}}
              className="relative flex flex-col w-full h-auto"
            >
              <p className='mt-[8px] mb-3 font-extrabold sm:text-[16px] text-[14px] text-stone-600'>Partical Motion Track</p>

              <img src={Wan_Pro5} alt="Wandering Process 5" className="w-full h-full object-cover mt-3" />
            </motion.div>

          </motion.div>

        </div>

      </motion.div>
    </section>

  )
};


export default Work_vuwaudio