import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import PersonalPhoto from '../assets/images/photo.jpg' 

import { experiences, skills, educations } from "../constants/index.js";

const About = () => {
  return (
    <section className='max-container'>
      {/* Photo & Intro */}
      <div className='flex flex-col sm:flex-row'>
        {/* Photo */}
        <div className="w-90 md:w-90">
          <img src={PersonalPhoto} alt='EmiliPhoto' className='w-[80%] h-auto' />
        </div>
        {/* Intro */}
        <div className="mt-5 sm:mt-0 sm:ml-5">
          <h1 className="head-text">
            Hello, I'm <span className='bfont-extrabold text-transparent font-semibold drop-shadow bg-clip-text bg-gradient-to-r from-sky-300 via-blue-600  to-indigo-300'>Emili</span> 👋 
            </h1>

            <div className='flex flex-col gap-3 text-slate-500'>
              <p>
                Graphic Designer based in Sydney, currently enhancing her expertise with a Master of Simulation and Immersive Technologies at University of New South Wales. </p>
              <p> 
                Emili stands out with a human-centric, design-led approach, thoughtfully integratinng immersive desgin thinking to address read-world challenges. </p> 
              <p> 
                Li excels in interdisciplinary collaborations, blending imagination, insight, and logic to create impactful and innovative designs. </p>
            </div>
        </div>
      </div>
      {/* MySkill */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-full' />
              <div className='btn-front rounded-full flex
              justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Work Experience */}
      <div className='py-10'>
        {/* title */}
        <h3 className='subhead-text'>Work Experience</h3>
        {/* Content */}
        <div className='mt-10 flex'>
          <VerticalTimeline layout={'1-column-left'}>
            {experiences.map((experiences) => (
              <VerticalTimelineElement
                key={experiences.company_name}
                date={experiences.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experiences.icon}
                    alt={experiences.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{ background: experiences.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experiences.iconBg,
                  boxShadow: 'none',
                }}
              >
                

                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experiences.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base text-xl'>
                    {experiences.company_name}
                  </p>
                  <div className='mt-0 ml-8 text-slate-500' style={{margin:0}}>     
                    <p className='font-thin'>
                      {experiences.type}
                    </p>
                  </div>
                  <p className='text-black-500 font-medium font-base' >
                    {experiences.task1}
                  </p>
                  
                  <ul className='mt-2 list-disc ml-5 space-y-2'>
                    {experiences.points1.map((point1, index) => (
                      <li key={`experience-point1-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point1}
                      </li>
                    ))}
                  </ul>

                  <p className='text-black-500 font-medium font-base' >
                    {experiences.task2}
                  </p>

                  <ul className='my-2 list-disc ml-5 space-y-2'>
                    {experiences.points2.map((points2, index) => (
                      <li key={`experience-point2-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {points2}

                      </li>
                    ))}
                  </ul>

                  <p className='text-black-500 font-medium font-base' >
                    {experiences.task3}
                  </p>

                  <ul className='my-2 list-disc ml-5 space-y-2'>
                    {experiences.points3.map((points3, index) => (
                      <li key={`experience-point3-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {points3}

                      </li>
                    ))}
                  </ul>

                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* Education */}
      <div className='py-8'>
        {/* title */}
        <h3 className='subhead-text'>Education</h3>
        {/* Content */}
        <div className='mt-10 flex'>
          <VerticalTimeline>
            {educations.map((educations) => (
              <VerticalTimelineElement
                key={educations.uni_name}
                date={educations.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={educations.icon}
                    alt={educations.uni_name}
                    className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                iconStyle={{ background: educations.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: educations.iconBg,
                  boxShadow: 'none',
                }}
              >

                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {educations.degreeName}
                  </h3>
                  <p className='text-black-500 font-medium font-base text-xl'>
                    {educations.uni_name}
                  </p>
                  <div className='mt-0 ml-8 text-slate-500' style={{margin:0}}>     
                    <p className='font-thin'>
                      {educations.type}
                    </p>
                  </div>
                  
                  <ul className='mt-2 list-disc ml-5 space-y-2'>
                    {educations.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                  
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>


    </section>
  )
}

export default About