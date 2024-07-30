import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import mice1 from '../assets/images/web_assets/mice1.png';
import mice2 from '../assets/images/web_assets/mice2.png';

const Micebreaker = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayVideo = () => {
    setPlaying(true);
  };

  return (
    <div className='max-w-7xl mx-auto pb-12 !pt-[80px] px-8 min-h-[calc(100vh-80px)] relative'>
      <div className='relative flex items-center justify-center'>
        <img 
          src={mice1} 
          alt="mice1"
          className='w-full h-auto object-cover max-w-7xl'
        />
      </div>

      {/* Video */}
      <div className='relative w-full bg-[#261c2c]' style={{ paddingTop: '56.25%' }}>
        <ReactPlayer 
          url='https://player.vimeo.com/video/833099858?h=c35c54a51d'
          className='react-player'
          style={{ position: 'absolute', top: 0, left: 0 }}
          width='100%' 
          height='100%' 
          controls
          playing={playing}
          onClick={() => setPlaying(true)}
        />
      </div>

      <div className='relative flex items-center justify-center'>
        <img 
          src={mice2} 
          alt="mice2"
          className='w-full h-auto object-cover max-w-7xl'
        />
      </div>

      {/* END */}
      <div className='flex items-center justify-center rounded-b-lg md:rounded-b-[3rem] bg-[#261c2c] p-[6%]'>
        <p className='text-center text-white font-normal sm:font-semibold sm:text-2xl text-xs font-poppins'>Thank you for watching!</p>
      </div>
    </div>
  )
}

export default Micebreaker;
