import React from 'react'
import FullWidthInfoCard from './FullWidthInfoCard'
import InfoModalTemplate from './InfoModalTemplate'

const Feedback = (props) => {
  return <InfoModalTemplate open={props.open} handleClose={props.handleClose}>
    <FullWidthInfoCard title="feedback.title" content="feedback.content" />
  </InfoModalTemplate>
}

export default Feedback
