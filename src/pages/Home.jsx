import React from 'react'
import Display from './Display';
import { motion } from 'framer-motion';
import Home_work from './Home_work';

const Home = () => {
  // Click to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`w-full home-screen relative mx-auto `}>
      <div>
        <Display isHome={true}/>
      </div>
      
      <div className='absolute xs:bottom-5 bottom-2 w-full flex justify-center home-work-button'>
        <div 
          onClick={() => scrollToSection('home_work')}
          className='w-[35px] h-[64px] rounded-3xl border-4 border-teal-300 flex justify-center items-start p-2 cursor-pointer'
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-teal-100 mb-1'
          />
        </div>
      </div>

      <div id="home_work">
        <Home_work />
      </div>
    </section>
  )
}

export default Home;
