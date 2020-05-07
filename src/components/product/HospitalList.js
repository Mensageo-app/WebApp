import React from 'react'
import { connect } from 'react-redux'
import { fetchHospitals, fetchHospitalNeeds } from '../../actions'
import HospitalCard from './HospitalCard'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Loader from '../Loader'

class HospitalList extends React.Component {
  componentDidMount () {
    this.props.fetchHospitals()
    this.props.fetchHospitalNeeds()
  }

  rende () {
    const { hospitals } = this.props
    if (!hospitals) {
      return <Loader />
    }
    return <Container maxWidth="lg">
      <Box m="1rem">
        <Typography variant="h4" align="center">Who needs protective masks?</Typography>
      </Box>
      <Grid container spacing={4}>
        {hospitals.map(hospital => {
          return <HospitalCard hospital={hospital} key={hospital.id}/> // why we don't put result of map to the variable? Because it returns to HospitalCard?
        })}
      </Grid>
    </Container>
  }
}
const mapStateToProps = (state) => {
  return {
    hospitals: state.hospitals,
    hospitalNeeds: state.hospitalNeeds ? state.hospitalNeeds : []
  }
}
export default connect(mapStateToProps, { fetchHospitals, fetchHospitalNeeds })(HospitalList)
