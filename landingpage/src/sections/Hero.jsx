import { Button } from '@/components/ui/button'
import React from 'react'
import image from '../assets/image.jpg';
import group5 from '../assets/group5.jpg';
import image4 from '../assets/image4.jpg';

function Hero() {
  return (
    <div className='flex flex-col w-full justify-between mt-12 mx-auto  p-12'>
      {/* First div */}

      <div className='flex flex-col max-w-screen-xl mx-auto'>
        <h1 className=' text-4xl  font-extrabold max-w-3xl text-center p-7  '>Revolutionize Your Workflow with 
        <span className='text-[#6046CF]'> Automation </span> 
        Software
        </h1>

        <h1 className='font-normal text-[#727272] max-w-3xl text-center mb-14 '>
        From repetitive tasks to complex workflows, our automation software development services 
        empower your business to work smarter, faster, and better.
        </h1>

        <div className='max-w-xl flex mx-auto gap-6'>
          <Button  className=" bg-[#D3CDF9] text-[#6046CF]  hover:text-white hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center "
           >Start for Free</Button>

          <Button  className=" bg-[#D3CDF9] text-[#6046CF]  hover:text-white hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center "
           >Start for Free</Button>
        </div>
      </div>
      {/* Second div */}

     
      <div className='md:flex gap-4 justify-evenly mt-8 mx-auto items-end'>
  {/* Image 1 */}
  <div className='md:block w-80 h-72 p-5 border-2 border-gray-500 rounded-lg shadow-lg text-center'>
  <img src={image4} alt="hero image" className='w-full h-full object-cover rounded-3xl' />
  </div>

  {/* Image 2 */}
  <div className="w-[600px] h-[475px] max-w-sm border-1 rounded-3xl shadow-lg text-center">
    <img src={image} alt="hero image" className='w-full h-full object-cover rounded-3xl' />
  </div>

  {/* Image 3 */}
  <div className='md:block w-80 h-72 p-5 border-2 border-gray-500 rounded-lg shadow-lg text-center'>
  <img src={group5} alt="hero image" className='w-full h-full object-cover rounded-3xl' />
  </div>
</div>



    </div>
  )
}

export default Hero