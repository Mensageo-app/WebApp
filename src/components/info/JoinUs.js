import React from 'react'
import FullWidthInfoCard from './FullWidthInfoCard'
import InfoModalTemplate from './InfoModalTemplate'

const JoinUs = (props) => {
  return <InfoModalTemplate open={props.open} handleClose={props.handleClose}>
    <FullWidthInfoCard title="joinus.title" content="joinus.content" />
  </InfoModalTemplate>
}

export default JoinUs
