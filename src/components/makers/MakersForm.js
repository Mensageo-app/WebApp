import React, { useState } from 'react'
// import { connect } from 'react-redux'
import { sendEmail } from '../../actions'
import Button from '@material-ui/core/Button'
import { Paper, Grid, TextField, DialogTitle, Dialog, DialogContent, DialogContentText } from '@material-ui/core'

const MakersForm = ({ open, onClose, hospitalName, product }) => {
  const [inputs, setInputs] = useState({})
  const [errors, setErrors] = useState({})

  const onChange = (event) => {
    console.log('Event', event.target.id, event.target.value)

    event.preventDefault()
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.id]: event.target.value }))

    console.log('inputs: ', inputs)
  }

  const validateForm = (inputs) => {
    const errors = {}

    if (!inputs.FullName) {
      errors.fullName = 'Name is required'
    }

    if (!inputs.Telephone) {
      errors.telephone = 'Telephone is required'
    } else if (/^[6,7,8,9][0-9]{8}$/.test(inputs.Telephone)) {
      errors.telephone = 'Telephone is invalid'
    }

    if (!inputs.Email) {
      errors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(inputs.Email)) {
      errors.email = 'Email address is invalid'
    }

    if (!inputs.Amount) {
      errors.amount = 'Amount is required'
    } else if (!/^[0-9]+$/.test(inputs.Amount)) {
      errors.amount = 'Amount is invalid'
    }

    if (!inputs.DonationInfo) {
      errors.donationInfo = 'This field is required'
    }

    if (inputs.AdditionalTelefone && /^[6,7,8,9][0-9]{8}$/.test(inputs.AdditionalTelephone)) {
      errors.additionalTelephone = 'Telephone invalid'
    }

    return errors
  }

  const submitForm = (event) => {
    console.log('Errors: ', errors)
    console.log('Inputs', inputs)

    const validatoionsErrors = validateForm(inputs)
    console.log('ValidationErrors', validatoionsErrors)

    setErrors(validatoionsErrors)

    console.log('Errors after validation: ', errors)

    /** TODO: Fix validations by using custom function */
    if (Object.keys(validatoionsErrors).length === 0) {
      sendEmail(inputs)

      // httpApi.post('/email', transformState(inputs)).then(res => handleContactClicked()).catch(err => handleErrorContactClicked(err))
      // handleContactClicked();

      // 1. Dispacth --->
      // 2. EmailSend : state: null, ---> state: OK | state:error
      // 3.
      // Call the API
      // Then if OK - show Success Dialog
      // But if not OK - show the Error Dialog
      showSuccessDialog()
    }
    event.preventDefault()
  }

  const [showDialog, setShowDialog] = useState(false)

  const showSuccessDialog = () => {
    setShowDialog(true)
  }

  const handleSuccessDialogClosing = () => {
    setShowDialog(false)
    onClose()
  }

  // const showDialog = emailSend.state != null

  return (
    <Dialog open={open} onClose={onClose}>

      <Dialog open={showDialog} onClose={handleSuccessDialogClosing} >
        <DialogContent>
          <DialogContentText>
        Email sent
          </DialogContentText>
        </DialogContent>

      </Dialog>
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
                <TextField fullWidth required onChange={onChange} id ="FullName" type="text" label="Full Name" helperText={errors.fullName}/>

                <TextField fullWidth required onChange={onChange} id ="Telephone" type="tel" label="Telephone" inputProps={{ pattern: '^[6,7,8,9][0-9]{8}$' }} helperText={errors.telephone}/>

                <TextField fullWidth required onChange={onChange} id ="Email" type="email" label="Email" helperText={errors.email}/>

                <TextField fullWidth required onChange={onChange} id ="Amount" type="number" label="Amount" inputProps={{ min: 1 }} helperText={errors.amount}/>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth onChange={onChange} id ="Company" type="text" label="Company" />

                <TextField fullWidth onChange={onChange} id ="AdditionalTelephone" type="tel" label="Additional telephone" inputProps={{ pattern: '^[6,7,8,9][0-9]{8}$' }} helperText={errors.additionaTelephone}/>

                <TextField fullWidth onChange={onChange} id ="AdditionalEmail" type="email" label="Additional email" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth required onChange={onChange} id ="DonationInfo" type="text" label="Information about the donation" multiline rowsMax={5} helperText={errors.donationInfo}/>
              </Grid>
              <Grid item xs={12} align="right" style={{ paddingTop: 20, paddingRight: 80 }}>
                <Button onClick={submitForm} variant="contained" color="primary" type="submit">Submit</Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </DialogContent>
    </Dialog>

  )
}
// const mapStateToProps = (state) => {
//   return {
//     emailSent: state.emailSent
//   }
// }
export default MakersForm
