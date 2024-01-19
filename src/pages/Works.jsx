import React from 'react'

import { worksGrids, pastGrids } from "../constants/index.js";
import { Link } from 'react-router-dom';

const Works = () => {
  return ( 
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>
      {/* Works */}
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
                to={past.pastLink}
                target='_blank'
                rel='noopeneer noreferrer'
                className='text-gray-500 font-light font-base text-sm'
              >
                <img
                src={past.pastUrl}
                alt={past.pastName}
                className='w-full h-auto object-contain'
              />
                <div className='text-center mt-2'>
                  <p>{past.pastName}</p>
                </div>   
              </Link>
            </div>
            
          ))}
          
        </div>

      </div>


    </section>
    
    
  )
}

export default Works