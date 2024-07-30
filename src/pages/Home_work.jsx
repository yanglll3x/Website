import React from 'react'

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from '../hoc';

import { worksGrids, selectedGrids } from "../constants/index.js";
import { Link } from 'react-router-dom';

const Home_work = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
        <motion.div variants={textVariant()}>
          <p className='subhead-text'>
            Selected{" "}
            <span className='font-normal sm:text-2xl text-lg relative font-poppins text-gray-400'>
            Works
            </span>
            </p>
        </motion.div>


        <div>
            <div className='py-10'>
                {/* <h3 className='subhead-text'>Works</h3> */}
                <motion.div
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.5, delayChildren: 0.5 }}
                 className="app__work-portfolio-big">
                    {selectedGrids.map((work, index) => (
                <Link
                  to={work.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 font-light font-base text-sm'
                  key={index}
                >
                  <div className="app__work-item-big app__flex">
                    <div className="app__work-img-big app__flex">
                      <img src={work.worksUrl} alt={work.worksName} />
                      <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        className="app__work-hover app__flex"
                      >
                      </motion.div>
                    </div>
                    <div className="app__work-content app__flex">
                      <h4 className="text-base">{work.worksName}</h4>
                      <p className="text-base font-light text-gray-400 break-words" style={{ marginTop: 10 }}>{work.description}</p>
                    </div>
                  </div>
                </Link>
                 ))}
                </motion.div>

            </div>
        </div>
    </div>

    </>
  )
}
export default SectionWrapper(Home_work, "home_work");