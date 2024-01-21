import React from 'react';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';

import pearlVideoImg1 from '../assets/images/pearlVideo1.png';
import pearlVideoImg2 from '../assets/images/pearlVideo2.png';
import pearlVideoImg3 from '../assets/images/pearlVideo3.png';
import pearlVideoImg4 from '../assets/images/pearlVideo4.png';

import PearlandCoinVideo from '../assets/videos/PearlandCoin.mp4';
import PearlandCoin_thumbnail from '../assets/images/PearlandCoin_thumbnail.png';

import ae from "../assets/icons/ae.svg";
import ai_logo from "../assets/icons/ai_logo.svg";


const Work_explainer = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayVideo = () => {
    setPlaying(true);
  };

  return (
    <section className='max-w-5xl mx-auto sm:p-11 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      <div className='flex flex-col w-full items-center'>

        {/* 图标？ */}
        {/* <div className='absolute top-30 right-5 sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex justify-center items-center'>
          <img
            src={ae}
            alt="tool_ae"
            className='object-contain w-full h-full'
          />
        </div> */}

        <img src={pearlVideoImg1} alt='ExplainVideoImage1' className='w-full h-auto rounded-t-[8px]' />

        <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
          <ReactPlayer 
            url={PearlandCoinVideo}
            className='react-player'
            style={{ position: 'absolute', top: 0, left: 0 }}
            width='100%' 
            height='100%' 
            controls
            playing={playing}
            light={PearlandCoin_thumbnail}
            onClickPreview={handlePlayVideo}
          />
        </div>

        <img src={pearlVideoImg2} alt='ExplainVideoImage2' className='w-full h-auto' />
        <img src={pearlVideoImg3} alt='ExplainVideoImage3' className='w-full h-auto' />
        <img src={pearlVideoImg4} alt='ExplainVideoImage4' className='w-full h-auto' />
      </div>
    </section>

  )
}

export default Work_explainer