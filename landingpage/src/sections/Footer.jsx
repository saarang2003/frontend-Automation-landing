import React from 'react';
import image from '../assets/image.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='flex flex-col md:flex-row w-full justify-between gap-6 mx-auto p-12 border-2 bg-[#6046CF] border-gray-400 text-white'>
      {/* Left side */}
      <div className='hidden md:block text-center md:text-left mb-6 md:mb-0'>
  <img src={image} alt="icons image" className='inline-block m-2' />
  <span className='font-bold text-3xl'>AutoFlow</span>
  <h1 className='text-4xl font-bold mt-2'>Ready To Get Your Efficiency To 100X</h1>
</div>

      {/* Right side - Navigation links */}
      <div className='grid grid-cols-3 md:grid-cols-4  justify-between items-center gap-6 text-sm'>
        <div>
          <h2 className='font-semibold mb-2'>Legal</h2>
          <ul className='space-y-1'>
            <li><Link to="/general-info" className='hover:underline'>General Info</Link></li>
            <li><Link to="/privacy-policy" className='hover:underline'>Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className='hover:underline'>Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h2 className='font-semibold mb-2'>Support</h2>
          <ul className='space-y-1'>
            <li><Link to="/help-center" className='hover:underline'>Help Center</Link></li>
            <li><Link to="/faqs" className='hover:underline'>FAQs</Link></li>
            <li><Link to="/contact" className='hover:underline'>Contact</Link></li>
            <li><Link to="/status" className='hover:underline'>Status</Link></li>
          </ul>
        </div>

        <div>
          <h2 className='font-semibold mb-2'>Social</h2>
          <ul className='space-y-1'>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>Twitter</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>GitHub</a></li>
            <li><a href="https://medium.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>Medium</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
