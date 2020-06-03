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

  render () {
    const { product, hospitals, hospitalNeeds } = this.props
    if (!hospitals || !hospitalNeeds || !product) {
      return <Loader />
    }
    return <Container maxWidth="lg">
      <Box m="1rem">
        <Typography variant="h4" align="center">Who needs {product.name}?</Typography>
      </Box>
      <Grid container spacing={4}>
        {hospitalNeeds
        // calculateProductQuantityPerHospital(hospitalNeed.product.id, hospitalNeed.hospital.id, hospitalNeeds)
          .map(hospitalNeed => ({ ...hospitalNeed, quantity: hospitalNeed.quantity }))
          .filter(item => item.quantity > 0)
          .map(hospitalNeed => {
            return <HospitalCard hospitalNeeds={hospitalNeed} key={hospitalNeed.id}/> // why we don't put result of map to the variable? Because it returns to HospitalCard?
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
