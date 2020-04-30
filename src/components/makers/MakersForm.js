import React from 'react'
import Button from '@material-ui/core/Button'
import { Paper, Grid, TextField, DialogTitle, Dialog, DialogContent, DialogContentText } from '@material-ui/core'

const MakersForm = ({ open, onClose, hospitalName, product }) =>
  <Dialog open={open} onClose={onClose}>
    <DialogTitle></DialogTitle>
    <DialogContent>
      <DialogContentText>
        Thank you for contacting hospital {hospitalName} in order to donate {product}
        <br />
        <br />
        In order for the hospital to be able to evaluate if your donation can be accepted or not,
        we kindly request you to include all the relevant information to this end, including if you
        hold any kind of certification or if you are using a model that has already
        been certified
      </DialogContentText>
      <form>
        <Paper style={{ padding: 45 }} elevation={0} >
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth required id ="FullName" type="text" label="Full Name" />

              <TextField fullWidth required id ="Telephone" type="tel" label="Telephone" inputProps={{ pattern: '[6,7,8,9][0-9]{8}' }}/>

              <TextField fullWidth required id ="Email" type="email" label="Email" />

              <TextField fullWidth required id ="Amount" type="number" label="Amount" inputProps={{ min: 1 }} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth id ="Company" type="text" label="Company" />

              <TextField fullWidth id ="AdditionalTelephone" type="tel" label="Additional telephone" inputProps={{ pattern: '[6,7,8,9][0-9]{8}' }}/>

              <TextField fullWidth id ="AdditionalEmail" type="email" label="Additional email" />
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
    </DialogContent>
  </Dialog>

export default MakersForm
