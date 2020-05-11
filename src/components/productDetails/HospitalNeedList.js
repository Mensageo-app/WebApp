import React from 'react'
import Typography from '@material-ui/core/Typography'

const HospitalNeedList = ({ needs }) => {
  if (!needs) { return null }
  return needs.map(need => {
    return (
      <Typography key= {need.productsName} variant="h9" align="left">
        {need.quantity + ' ' + need.productsName}
      </Typography>)
  }
  )
}
export default HospitalNeedList
