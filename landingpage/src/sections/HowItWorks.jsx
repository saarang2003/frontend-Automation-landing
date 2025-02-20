import React from 'react'
import image3 from '../assets/image3.jpg';


function HowItWorks() {
  return (
    <div id='howitworks' className='flex flex-col w-full justify-between mx-auto p-12 '>
        <h1 className='text-4xl font-inter mt-4 font-bold text-center'>How it Works ?</h1>

        <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg overflow-hidden border-1 rounded-lg mt-10 bg-[#D9D9D9] p-4 mx-auto shadow-xl'>
        <img src={image3} alt="working" className='w-full h-auto object-cover bg-[#D9D9D9]' />
            
        </div>
    </div>
  )
}

export default HowItWorks