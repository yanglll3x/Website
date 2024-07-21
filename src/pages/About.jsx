import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import PersonalPhoto from '../assets/images/photo.png' 

import { relative, experiences, skillsGraphics, skillsModel, skillsCode, skillsDoc, educations } from "../constants/index.js";

const About = () => {
  return (
    <section className='max-container'>
      {/* Photo & Intro */}
      <div className='flex flex-col sm:flex-row'>
        {/* Photo */}
        <div className="mt-0 sm:mt-[4.5rem] sm:w-2/5">
          <img src={PersonalPhoto} alt='EmiliPhoto' className='w-[95%] h-auto' />
        </div>
        {/* Intro */}
        <div className="mt-5 sm:mt-0 sm:ml-5 sm:w-3/5">
          <h1 className="head-text">
            Hello, I'm <span className='bfont-extrabold text-transparent font-semibold drop-shadow bg-clip-text bg-gradient-to-r from-sky-300 via-blue-600  to-indigo-300'>Emili</span> 👋 
            </h1>

            <div className='flex flex-col gap-3 text-slate-500'>
              <p>
                Emili is a recent graduate from the University of New South Wales, where she earned a master’s degree in Simulation and Immersive Technologies in 2024. She possesses a strong understanding of design fundamentals, principles, and elements, enhanced by her expertise in professional immersive design, human-centered interactive design, and advanced prototyping. </p>
              <p> 
                As an aspiring Visual Designer and Creative Strategist, Emili leverages her diverse background to tackle challenges from multiple perspectives. She employs a systematic mindset and a problem-solving orientation, integrating analytical and modeling techniques with innovative solutions. </p> 
              <p> 
                Passionate about using design and code as powerful tools to address complex problems, Emili strives to create insightful and valuable design solutions. She is dedicated to honing her skills and mastering diverse forms of expression through design. </p>
            </div>
        </div>
      </div>
      {/* MySkill */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-6'>
          <h3 className='text-slate-600 text-xl font-poppins font-semibold'> Design & Graphics</h3>
          <div className='mt-4 flex flex-wrap gap-12'>
            {skillsGraphics.map((skillGraphics) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex
                justify-center items-center'>
                  <img
                    src={skillGraphics.imageUrl}
                    alt={skillGraphics.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6'>
          <h3 className='text-slate-600 text-xl font-poppins font-semibold'> Modelling & Engine</h3>
          <div className='mt-4 flex flex-wrap gap-12'>
            {skillsModel.map((skillModel) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex
                justify-center items-center'>
                  <img
                    src={skillModel.imageUrl}
                    alt={skillModel.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6'>
          <h3 className='text-slate-600 text-xl font-poppins font-semibold'> Coding & Development</h3>
          <div className='mt-4 flex flex-wrap gap-12'>
            {skillsCode.map((skillCode) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex
                justify-center items-center'>
                  <img
                    src={skillCode.imageUrl}
                    alt={skillCode.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6'>
          <h3 className='text-slate-600 text-xl font-poppins font-semibold'>
          Collabortive & Documentation</h3>
          <div className='mt-4 flex flex-wrap gap-12'>
            {skillsDoc.map((skillDoc) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-full' />
                <div className='btn-front rounded-full flex
                justify-center items-center'>
                  <img
                    src={skillDoc.imageUrl}
                    alt={skillDoc.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Relevant Project Experience */}
      <div className='pt-10 pb-2'>
        {/* title */}
        <h3 className='subhead-text'>Relevant Project Experience</h3>
        {/* Content */}
        <div className='mt-0 flex'>
          <VerticalTimeline layout={'1-column-left'}>
            {relative.map((relative) => (
              <VerticalTimelineElement
                key={relative.company_name}
                date={relative.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={relative.icon}
                    alt={relative.company_name}
                    className='w-[100%] h-[100%] object-contain'
                  />
                </div>}
                iconStyle={{ background: relative.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: relative.iconBg,
                  boxShadow: 'none',
                }}
              >

                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {relative.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base text-xl'>
                    {relative.company_name}
                  </p>
                  <div className='mt-0 ml-8 text-slate-500' style={{margin:0}}>     
                    <p className='font-thin'>
                      {relative.type}
                    </p>
                  </div>
                  <p className='text-black-500 font-medium font-base' >
                    {relative.task1}
                  </p>
                  
                  <ul className='mt-2 list-disc ml-5 space-y-2'>
                    {relative.points1.map((point1, index) => (
                      <li key={`experience-point1-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point1}
                      </li>
                    ))}
                  </ul>

                  <p className='text-black-500 font-medium font-base' >
                    {relative.task2}
                  </p>

                  <ul className='my-2 list-disc ml-5 space-y-2'>
                    {relative.points2.map((points2, index) => (
                      <li key={`experience-point2-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {points2}

                      </li>
                    ))}
                  </ul>


                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* Work Experience */}
      <div className='pt-10 pb-4'>
        {/* title */}
        <h3 className='subhead-text'>Work Experience</h3>
        {/* Content */}
        <div className='mt-0 flex'>
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
        <div className='mt-0 flex'>
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
                      <li key={`educations-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
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