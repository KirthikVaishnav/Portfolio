import React from 'react'
import ECommnerceSite1 from '../assests/ecommerce-websites.jpg'
import ECommnerceSite2 from '../assests/food-ecommerce.jpg'
import ECommnerceSite3 from '../assests/website-blog.jpg'
function Projects() {
  return (
    <section className='flex flex-col px-5 py-10 justify-center text-white bg-primary' id='projects'>
    <div className='w-1/2'>
    <div className='flex justify-center'>
      <h1 className='text-4xl text-white border-b-2 mb-3 w-[140px] font-bold'>Projects</h1>
    </div>
    </div>
    <div className='w-full'>
       <div className='flex flex-col md:flex-row px-10 gap-5'>
        <div className='relative'>
         <img className='h-[250px] w-[450px]' src={ECommnerceSite1} alt="" />
         <div className='project-description' >
            <p className='text-center px-5 py-5'>A Ecommerce site built with SpringBoot and React </p>
         </div>
        </div>
        <div className='relative'>
         <img className='h-[250px] w-[450px]'src={ECommnerceSite2} alt="" />
         <div className='project-description'>
            <p className='text-center px-5 py-5'>An Online Food ordering site built with SpringBoot and React</p> </div>
        </div>
        <div className='relative'>
         <img className='h-[250px] w-[450px]'src={ECommnerceSite3} alt="" />
         <div className='project-description'>
            <p className='text-center px-5 py-5'>A Blog </p>
        </div>
        </div>       
       </div>
    </div>
    </section>
  )
}

export default Projects
