import React from 'react'

function Pricing() {
  return (
    <div className='flex flex-col w-full justify-between mx-auto p-12 border-2 border-gray-800'>
        <h1 className='text-3xl font-inter font-bold text-center'>Pricing</h1>

<div className="max-w-sm mx-auto bg-white rounded-2xl mt-8 shadow-lg p-4 text-gray-700">
      <div className="relative bg-blue-100 p-6 rounded-xl text-center">
        <span className="absolute top-0 right-0 bg-blue-300 text-blue-700 text-lg font-semibold py-2 px-4 rounded-bl-2xl">
          $49 <small className="text-sm text-gray-500">/m</small>
        </span>
        <p className="text-xl font-semibold text-blue-900">Professional</p>
        <p className="text-sm mt-2 text-gray-600">
          This plan is for those who have a team already and are running a large business.
        </p>
      </div>

      <ul className="mt-4 space-y-3">
        <li className="flex items-center gap-3">
          <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            ✔
          </span>
          <span><strong>20</strong> team members</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            ✔
          </span>
          <span>Plan <strong>team meetings</strong></span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            ✔
          </span>
          <span>File sharing</span>
        </li>
      </ul>

      <div className="mt-6 text-center">
        <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg inline-block">
          Choose Plan
        </a>
      </div>
    </div>
        
    </div>
  )
}

export default Pricing