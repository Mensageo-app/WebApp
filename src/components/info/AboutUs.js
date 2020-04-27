import React from 'react'
import FullWidthInfoCard from './FullWidthInfoCard'
import InfoTemplate from './InfoTemplate'

const AboutUs = () => {
  return <InfoTemplate title="aboutus.aboutus" >
    <FullWidthInfoCard title="aboutus.vision.title" content="aboutus.vision.content" />
    <FullWidthInfoCard title="aboutus.whoarewe.title" content="aboutus.whoarewe.content" />
    <FullWidthInfoCard title="aboutus.contactus.title" content="aboutus.contactus.content" />
  </InfoTemplate>
}

export default AboutUs
