import React from 'react'
import AboutImg from '../assests/about.png'
const About = () => {
  return (
    <section className='flex flex-col px-5 md:flex-row bg-secondary' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center mr-3'>
          <div className='flex flex-col justify-center'>
             <h1 className='text-4xl text-white border-b-2 mb-3 w-[180px] font-bold'>About Me</h1>
             <p className=' text-white pb-4'>I'm a full-stack developer with a year of experience building applications 
                in a corporate setting. I'm proficient in Java, Spring Boot, REST APIs, HTML,
                CSS, JavaScript, ReactJS, TailwindCSS, and MySQL.
             </p>    
             <p className='text-white pb-4'>I've successfully
                delivered projects using these technologies, demonstrating my ability to create 
                user-friendly and efficient solutions. I'm passionate about learning and staying
                up-to-date with industry best practices. 
             </p>
             </div>     
        </div>
    </section>
  )
}

export default About
