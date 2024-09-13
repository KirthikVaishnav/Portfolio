import React from 'react'

const Contact = () => {
  return (
    <section className='flex flex-col px-5 py-32 bg-primary' id='contact'>
        
        <div className=' flex flex-col items-center mr-3 text-white'>
          
             <h1 className='text-4xl  border-b-2 mb-3 w-[140px] font-bold'>Contact</h1> 
             <p className='  pb-5'>If you want to discuss more in detail. Please reach out to me</p>
             <p className='py-2'>Email : <span>vaishnavkirthik007@gmail.com</span></p>
             <p className='py-2'>Phone : <span>+91 8526782428</span></p>
        </div>
    </section>
  )
}

export default Contact
