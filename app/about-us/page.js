"use client";

import React from 'react'
import AboutSecOne from './AboutSecOne'
import AboutSecTwo from './AboutSecTwo';
import AboutSecThree from './AboutSecThree';
import Testimonial from '../Home/Testimonial';

const page = () => {
  return (
    <div>
        <AboutSecOne/>
        <AboutSecTwo/>
        <AboutSecThree/>
        <Testimonial/>
    </div>
  )
}

export default page;