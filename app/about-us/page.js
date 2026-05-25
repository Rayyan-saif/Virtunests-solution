"use client";

import React from 'react'
import AboutSecOne from './AboutSecOne'
import AboutSecTwo from './AboutSecTwo';
import AboutJourney from './AboutJourney';
import Testimonial from '../Home/Testimonial';
import AboutTimeline from './AboutTimeline';

const page = () => {
  return (
    <div>
        <AboutSecOne/>
        <AboutSecTwo/>
        {/* <AboutJourney/> */}
        <AboutTimeline/>
        <Testimonial/>
    </div>
  )
}

export default page;