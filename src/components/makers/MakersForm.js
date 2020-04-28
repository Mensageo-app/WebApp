import React from 'react'
import Button from '@material-ui/core/Button'
import { Paper, Grid, TextField } from '@material-ui/core'

const MakersForm = () =>
  <>
    <form>
      <Paper style={{ padding: 45 }} elevation={0} >
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth required id ="FullName" type="text" label="Full Name" />

            <TextField fullWidth required id ="Telephone" type="text" label="Telephone" />

            <TextField fullWidth required id ="Email" type="text" label="Email" />

            <TextField fullWidth required id ="Amount" type="text" label="Amount" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth id ="Company" type="text" label="Company" />

            <TextField fullWidth id ="AdditionalTelephone" type="text" label="Additional telephone" />

            <TextField fullWidth id ="AdditionalEmail" type="text" label="Additional email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required id ="DonationInfo" type="text" label="Information about the donation" multiline rowsMax={5}/>
          </Grid>
          <Grid item xs={12} align="right" style={{ paddingTop: 20, paddingRight: 80 }}>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  </>

export default MakersForm
