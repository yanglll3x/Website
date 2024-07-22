import React from 'react'
import web_header from '../assets/images/web_assets/Header.png';
import arrowdown from "../assets/icons/arrow-down.svg";

const Portfolio_Website = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='relative'>
        <img 
          src={web_header} 
          alt="web header" 
          className='w-full h-auto object-cover' 
          style={{ maxWidth: '1600px', margin: '0 auto' }} 
        />

        {/* Button */}
        <a href="/" className='absolute' style={{ left: '10%', top: '62%' }}>
          <div
            className='bg-white rounded-md md:rounded-xl flex items-center'
            style={{
              padding: '4% 10%',
              boxSizing: 'border-box',
              display: 'flex',
              whiteSpace: 'nowrap',
              minWidth: '125%', // Ensure the button has enough width
              // maxWidth: '400%', // Ensure the button does not overflow the container
            }}
          >
            <p 
              className='text-blue-500 font-medium'
              style={{
                fontSize: 'clamp(0.5rem, 2vw, 1.25rem)'
              }}
            >
              Website Link
            </p>
            <div className='flex items-center ml-3'>
              <img 
                src={arrowdown} 
                alt="arrow down"
                className="w-[8px] sm:w-[12px] lg:w-[18px] h-[12px] sm:h-[18px] lg:h-[28px] object-contain"
                style={{
                  transform: 'rotate(-90deg)',
                  filter: 'invert(40%) sepia(99%) saturate(4416%) hue-rotate(202deg) brightness(91%) contrast(95%)' 
                }}
              />
            </div>
          </div>
        </a>
        
      </div>

      <div className='max-container'>
        {/* Other content */}
      </div>
    </section>
  )
}

export default Portfolio_Website
