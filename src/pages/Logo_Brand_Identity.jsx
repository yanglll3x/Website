import React from 'react';

import logodesign from '../assets/images/web_assets/logodesign.png';
import stamp1 from "../assets/images/stamp1.png";

const Logo_Brand_Identity = () => {
  return (
    <section className='bg-[#e8ebf3]'>
      <div className='max-w-7xl mx-auto pb-12 !pt-[80px] px-8 min-h-[calc(100vh-80px)]'>
        <div className='relative flex items-center justify-center '>
          <img 
            src={logodesign} 
            alt="logo design"
            className='w-full h-auto object-cover max-w-7xl ' 
          />
        </div>

        <a href="https://www.dropbox.com/scl/fi/umgttfhi3ubitsfwd23gs/Guidelines_Version1.0.pdf?rlkey=vlu6vxruw837jt2npyvjftyet&st=ttwk01fo&dl=0" target="_blank" rel="noopener noreferrer">
        <div className="w-full flex justify-end -mt-[142%] pr-[33.3%] relative z-10">
          <div className='bg-[#3431a3] rounded-full flex justify-center items-center object-contain w-[50%]' style={{ height:'3vw'}}>
          <p className='text-white text-base text-center' style={{ fontSize: '1.2vw' }}>Click here to read Brand Guidelines</p>
        </div>
        </div>
      </a>

        {/* END */}
        <div className='flex items-center justify-center rounded-b-lg md:rounded-b-[3rem] bg-[#dce1f5] p-[6%]'>
        <p className='text-center text-white font-normal sm:font-semibold sm:text-2xl text-xs font-poppins'> Thank you for watching!</p>
      </div>

      </div>
    </section>
  )
}

export default Logo_Brand_Identity