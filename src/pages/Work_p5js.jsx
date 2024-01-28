import React from 'react';

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { explorep5js } from "../constants/index.js";

import { TypingText, TitleText } from '../components/CustomTexts';
import ExploreCard from '../components/ExploreCard';

import { slideIn, staggerContainer, textVariant, fadeIn, planetVariants } from '../utils/motion';

import p5js1 from '../assets/images/p5js1.png';
import p5js2 from '../assets/images/p5js2.png';
import p5js3 from '../assets/images/p5js3.png';
import p5js4 from '../assets/images/p5js4.png';
import p5js5 from '../assets/images/p5js5.png';



const Work_p5js = () => {
  const [active, setActive] = useState(explorep5js);

  return (
    <section className='max-container sm:p-16 xs:p-8 px-6 py-12' id='explore'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className='mt-[50px] flex flex-col min-h-[70vh] gap-5'>
          {explorep5js.map((p5js, index) => (
            <ExploreCard
              key={p5js.id}
              {...p5js}
              index={index}
              active={active}
              handleClick={setActive}
              link={p5js.link}
            />
          ))} 

        </div>

      </motion.div>

    </section>
  );
};

export default Work_p5js;