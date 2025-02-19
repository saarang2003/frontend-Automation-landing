import React from 'react'
import {Button} from './components/ui/button';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Trusted from './sections/Trusted';
import Whyus from './sections/Whyus';
import HowItWorks from './sections/HowitWorks';
import Testimonials from './sections/testimonials';
import Pricing from './sections/Pricing';
;

function App() {
  return (
    <div classNameName=''>
      <Navbar />
      <Hero/>
      <Trusted />
      <Whyus />
      <HowItWorks />
      <Testimonials />
      <Pricing />
    </div>
  )
}

export default App





