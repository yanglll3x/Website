import React from 'react';
import creative from '../assets/images/web_assets/creative.png';

const Creative_Coding = () => {
  return (
    <section className='bg-[#dce0ea]'>
      <div className='max-w-7xl mx-auto pb-12 !pt-[80px] px-8 min-h-[calc(100vh-80px)] relative'>
        <div className='relative flex items-center justify-center'>
          <img 
            src={creative} 
            alt="creative"
            className='w-full h-auto object-cover max-w-7xl'
          />
        </div>

        {/* <div className='flex justify-center items-center'> */}
        {/* <div className="absolute top-[40vw] xl:top-[460px] left-0 w-full grid grid-cols-3 gap-4 pl-[8.6vw] pr-[8.2vw] mx-auto">

          <div className="relative flex justify-end items-end pr-[0.6vw]">
            <a href="https://link4.com" className="bg-[#fefefebc] font-bold text-[#376EFC] w-[7.2vw] h-[2vw] flex justify-center items-center mb-[1vw] text-center p-[0.5vw] text-[0.7vw]">
              Water Clock
            </a>
          </div>

          <div className="relative flex justify-end items-end pr-[0.4vw]">
          <a href="https://link4.com" className="bg-[#fefefebc] font-bold text-[#376EFC] w-[7.2vw] h-[2vw] flex justify-center items-center mb-[1vw] text-center p-[0.5vw] text-[0.7vw]">
              Arclines
            </a>
          </div>

          <div className="relative flex justify-end items-end pr-[0.1vw]">
          <a href="https://link4.com" className="bg-[#fefefebc] font-bold text-[#376EFC] w-[7.2vw] h-[2vw] flex justify-center items-center mb-[1vw] text-center p-[0.5vw] text-[0.7vw]">
              Glyph
            </a>
          </div>

          <div className="relative flex justify-end items-end mt-[8vw]">
            <a href="https://link4.com" className="bg-[#fefefebc] font-bold text-[#376EFC] w-[35%] h-[2vw] flex justify-center items-center mb-2 text-center p-[0.5vw] text-[0.7vw]">
              Blue Blue Milky Way
            </a>
          </div>

          <div className="relative flex justify-end items-end mt-20">
            <a href="https://link5.com" className="bg-blue-500 text-white w-[200px] h-[50px] flex justify-center items-center rounded-lg mb-2">
              Item 5
            </a>
          </div>

   
          <div className="relative flex justify-end items-end">
            <a href="https://link6.com" className="bg-blue-500 text-white w-[200px] h-[50px] flex justify-center items-center rounded-lg mb-2">
              Item 6
            </a>
          </div>
        </div> */}
        {/* </div> */}


        {/* <div className='absolute top-[calc(80px+29vw)] xl:top-[460px] left-[27vw]'>
          <div className="relative flex">
            <a href="https://link4.com" className="bg-[#fefefebc] font-bold text-[#376EFC] w-[7.2vw] h-[2vw] flex justify-center items-center mb-[1vw] text-center p-[0.5vw] text-[0.7vw]">
              Water Clock
            </a>
          </div>

        </div> */}
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 sm:gap-2 lg:gap-5 px-12">
          <div className="flex justify-end items-end p-4">
            <a href="https://yanglll3x.github.io/p5js_The-Water-of-Clock/" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-white w-full h-full flex justify-center items-center p-4 rounded-lg font-bold text-center">
              View Water Clock
            </a>
          </div>
          <div className="flex justify-end items-end p-4">
            <a href="https://yanglll3x.github.io/p5js_Arc-Lines/" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-white w-full h-full flex justify-center items-center p-4 rounded-lg font-bold text-center">
              View Arclines
            </a>
          </div>
          <div className="flex justify-end items-end p-4">
            <a href="https://yanglll3x.github.io/p5js_Color-Glyphs/" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-white w-full h-full flex justify-center items-center p-4 rounded-lg font-bold text-center">
              View Glyph
            </a>
          </div>
          <div className="flex justify-end items-end p-4">
            <a href="https://yanglll3x.github.io/p5js_BlueBlue-Milky-Way/" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-white w-full h-full flex justify-center items-center p-4 rounded-lg font-bold text-center">
              View Blueblue Milky Way
            </a>
          </div>
          <div className="flex justify-end items-end p-4">
            <a href="https://yanglll3x.github.io/p5js_LOOK-AT-MY-CAT/" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-white w-full h-full flex justify-center items-center p-4 rounded-lg font-bold text-center">
              View Look AT Cats
            </a>
          </div>
        </div>


        {/* END */}
        <div className='flex items-center justify-center rounded-b-lg md:rounded-b-[3rem] bg-[#dce1f5] p-[6%]'>
          <p className='text-center text-white font-normal sm:font-semibold sm:text-2xl text-xs font-poppins'>Thank you for watching!</p>
        </div>
      </div>
    </section>
  )
}

export default Creative_Coding;
