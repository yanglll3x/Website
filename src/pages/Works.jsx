import React, {useState, useEffect} from 'react'

import { worksGrids, pastGrids, worksTotal } from "../constants/index.js";
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from '../hoc';
import './Works.scss';

const Works = () => {
  return (
    <div className='max-container'>
        <motion.div variants={textVariant()}>
            <p className='head-text'>
                My{" "}
                <span className='bfont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-600  to-indigo-400 drop-shadow font-semibold'>
                    Projects
                </span> 
            </p>
        </motion.div>
        
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-slate-500 mt-8 leading-relaxed'
        >
            I’ve created a diverse range of projects throughout my journey, such as 3D modelling, creative coding, web design & development, and other creative works. These projects reflect my ongoing growth and exploration across various fields, and I am continuously learning and developing! Feel free to explore them and keep an eye out for future updates.
        </motion.p>

        <div>
            <div className='py-10'>
                {/* <h3 className='subhead-text'>Works</h3> */}
                <motion.div
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.5, delayChildren: 0.5 }}
                 className="app__work-portfolio">
                    {worksGrids.map((work, index) => (
                <Link
                  to={work.link}
                  // target='_blank'
                  // rel='noopener noreferrer'
                  className='text-gray-500 font-light font-base text-sm'
                  key={index}
                >
                  <div className="app__work-item app__flex">
                    <div className="app__work-img app__flex">
                      <img src={work.worksUrl} alt={work.worksName} />
                      <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        className="app__work-hover app__flex"
                      >
                      </motion.div>
                    </div>
                    <div className="app__work-content app__flex">
                      <h4 className="text-sm">{work.worksName}</h4>
                      <p className="text-sm font-light text-gray-400 break-words" style={{ marginTop: 10 }}>{work.description}</p>
                    </div>
                  </div>
                </Link>
                 ))}
                </motion.div>

            </div>
        </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");