import React, {useState, useEffect} from 'react'

import { worksGrids, pastGrids, worksTotal } from "../constants/index.js";
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import './Works.scss';

const Works = () => {
  const [works, setWorks] = useState(worksTotal);
  const [filterWork, setFilterWork] = useState(worksTotal);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return ( 
    <section className='max-container'>
      {/* Title */}
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      {/* Text */}
      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      {/* filter */}
      <div className="app__work-filter">
        {['All', 'UI/UX', 'Web App', 'Mobile App', 'React JS'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <Link
            to={work.link}
            target='_blank'
            rel='noopeneer noreferrer'
            className='text-gray-500 font-light font-base text-sm'
          >
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
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
              {/* <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags && work.tags.length > 0 ? work.tags[0] : 'No Tag'}</p>
              </div> */}
            </div>
          </div>
          </Link> 
        ))}
      </motion.div>


      <div className="py-12 grid grid-cols-5 gap-4 mx-auto justify-center mt-8">
        {worksTotal.map((work, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="flex w-auto justify-center items-center mx-auto"
            key={work.worksName + index}
          >
            <Link
              to={work.link}
              target='_blank'
              rel='noopeneer noreferrer'
              className='text-gray-500 font-light font-base text-sm'
            >
              <img
                src={work.worksUrl}
                alt={work.worksName}
                className='w-full h-auto object-contain rounded-[15px]'
              />
              {/* <h2 className="text-base font-extrabold text-left text-black mt-5">{work.worksName}</h2>
              <p className="text-sm text-left text-gray-500 leading-6 mt-3">{work.worksName}</p> */}
            </Link>
          </motion.div>
        ))}
      </div>


    </section>
    
    
  );
};

export default Works

// export default AppWrap(
//   MotionWrap(Works, 'app__about'),
//   'about',
//   'app__whitebg',
// );