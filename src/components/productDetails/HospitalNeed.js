import React from 'react'
import Typography from '@material-ui/core/Typography'

const HospitalNeed = ({ need }) => {
  if (!need) { return null }

  return (
    <Typography align="left">
      {need.quantity + ' ' + need.productsName}
    </Typography>)
}
export default HospitalNeed
