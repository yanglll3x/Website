import React from 'react'

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from '../hoc';

import { worksGrids, pastGrids } from "../constants/index.js";
import { Link } from 'react-router-dom';

const Home_work = () => {
  return (
    <>
    <div className='max-container'>
        <motion.div variants={textVariant()}>
            <p className='head-text'
            > Introduction </p>
            <h2 className='subhead-text'>
                Overview
            </h2>
        </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-slate-500 mt-2 leading-relaxed'
        >
            I've embarked on numerous projects throughout the years, but these are
            the ones I hold closest to my heart. Many of them are open-source, so if
            you come across something that piques your interest, feel free to
            explore the codebase and contribute your ideas for further enhancements.
            Your collaboration is highly valued!
        </motion.p>

        <div>
            <div className='flex flex-wrap py-12'>
                <h3 className='subhead-text'>Works</h3>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                {worksGrids.map((work, index) => (
                    <div key={index} className='card'>
                    <Link
                        to={work.link}
                        target='_blank'
                        rel='noopeneer noreferrer'
                        className='text-gray-500 font-light font-base text-sm'
                    >
                        <img
                        src={work.worksUrl}
                        alt={work.worksName}
                        className='w-full h-auto object-contain'
                    />
                        <div className='text-center mt-2'>
                        <p>{work.worksName}</p>
                        </div>   
                    </Link>
                    </div>
                    
                ))}
                
                </div>
            </div>

            <div className='flex flex-wrap py-12'>
                <h3 className='subhead-text'>Past Works</h3>
                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8'>
                {pastGrids.map((past, index) => (
                    <div key={`past-${index}`} className='card'>
                    <Link
                        to={past.link}
                        target='_blank'
                        rel='noopeneer noreferrer'
                        className='text-gray-500 font-light font-base text-sm'
                    >
                        <img
                        src={past.worksUrl}
                        alt={past.worksName}
                        className='w-full h-auto object-contain'
                    />
                        <div className='text-center mt-2'>
                        <p>{past.worksName}</p>
                        </div>   
                    </Link>
                    </div>
                    
                ))}
                
                </div>
            </div>
        </div>

    </div>


    </>
  )
}

export default SectionWrapper(Home_work, "home_work");