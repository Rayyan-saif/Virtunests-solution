import React from 'react'
import SectionOne from './Section_One'
import Clients from './Clients'
import OurProcess from './OurPorcess'
import MarketingSolution from './MarketingSolution'
import WhyVirtunests from './WhyVirtunests'
import Services from './Services'
import WhyChoose from './WhyChoose'
import Testimonial from './Testimonial'
import OurTeam from './OurTeam'
import Page from '../Blogs/page'


const Home = () => {
  return (
    <div>
        <SectionOne/>
        <Clients/>
        <OurProcess/>
        <MarketingSolution/>
        <WhyVirtunests/>
        <Services/>
        <WhyChoose/>
        <OurTeam/>
        <Testimonial/>
        <Page/>
    </div>
  )
}

export default Home;