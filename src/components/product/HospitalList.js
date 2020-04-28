import React from 'react'
import HospitalCard from './HospitalCard'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const HospitalList = () => {
  const hospitals = [{ name: 'Hospital Clinic', needs: [{ quantity: 50, productsName: 'Mask' }, { quantity: 150, productsName: 'Super Mask' }] }, { name: 'Hospital del Mar', needs: [{ quantity: 100, productsName: 'Mask' }] }, { name: 'Clinica Sabadell' }]

  return <Container maxWidth="lg">
    <Typography variant="h5" align="center">Who needs protective masks</Typography>
    <Grid container spacing={4}>
      {hospitals.map(hospital => {
        return <HospitalCard hospital ={hospital} key={hospital.name}/> // why we don't put result of map to the variable? Because it returns to HospitalCard?
      })}
    </Grid>
  </Container>
}
export default HospitalList
