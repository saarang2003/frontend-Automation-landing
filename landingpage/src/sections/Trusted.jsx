import React from 'react'
import trust from '../assets/image6.jpg';

function Trusted() {
  return (
    <div className='flex flex-col w-full justify-between mx-auto gap-4 p-12'>
        <h1 className='text-center font-bold text-4xl'>Trusted by companies all over the world </h1>
        <div className="max-w-3xl md:max-w-3xl lg:max-w-6xl mx-auto border-2 bg-black mt-4 rounded-lg shadow-lg">
  <img src={trust} alt="trusted image" className="w-full h-auto object-cover" />
</div>

    </div>
  )
}

export default Trusted