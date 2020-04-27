import React from 'react'
import Button from '@material-ui/core/Button';
import { TextField, FormControl } from '@material-ui/core';

const MakersForm = () => 
    <>
        <TextField required id="FullName" label="Full Name" variant="outlined" />
        <TextField required id="Telephone" label="Telephone" variant="outlined" />
        <TextField required id="Email" label="Email" variant="outlined" />
        <TextField required id="Amount" label="Amount" variant="outlined" />
        <TextField required id="DonationInfo" label="Information about the donation" variant="outlined" multiline/>
        <TextField id="Company" label="Company" variant="outlined" />
        <TextField id="AdditionalTelephone" label="Additional telephone" variant="outlined" />
        <TextField id="AdditionalEmail" label="Additional email" variant="outlined" />
        <Button variant="contained">Submit</Button>
    </>

export default MakersForm