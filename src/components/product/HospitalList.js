import React from 'react'
import HospitalCard from './HospitalCard'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const HospitalList = () => {
  const hospitals = [{ name: 'Hospital Clinic', needs: [{ quantity: 50, productsName: 'Mask' }, { quantity: 150, productsName: 'Super Mask' }] }, { name: 'Hospital del Mar', needs: [{ quantity: 100, productsName: 'Mask' }] }, { name: 'Clinica Sabadell' }]

  return <Container maxWidth="lg">
    <Box m="1rem">
      <Typography variant="h4" align="center">Who needs protective masks?</Typography>
    </Box>
    <Grid container spacing={4}>
      {hospitals.map(hospital => {
        return <HospitalCard hospital ={hospital} key={hospital.name}/>
      })}
    </Grid>
  </Container>
}
export default HospitalList
