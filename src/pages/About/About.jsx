import React from 'react'
import BreadCrumb from '../../components/common/BreadCrumb'
import HourSection from './Sections/HourSection'
import AboutUsSection from './Sections/AboutUsSection'

const About = () => {
  return (
      <div>
          <BreadCrumb />
          <AboutUsSection/>
          <HourSection />
    </div>
  )
}

export default About