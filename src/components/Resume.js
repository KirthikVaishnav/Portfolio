import React from 'react'
import ResumeImg from '../assests/resume.jpg'
const Resume = () => {
  return (
    <section className='flex flex-col px-5 md:flex-row bg-secondary' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center'>
            <img className='w-[300px] 'src={ResumeImg} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center mr-3'>
          <div className='flex flex-col justify-center'>
             <h1 className='text-4xl text-white border-b-2 mb-3 w-[140px] font-bold'>Resume</h1>
             <p className=' text-white pb-4'>You can download my resume here &nbsp;
              <a className='btn' href="#">Download</a>
             </p>    
             
             </div>     
        </div>
    </section>
  )
}

export default Resume
