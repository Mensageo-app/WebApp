const validateForm = (inputs) => {
  const errors = {}

  if (!inputs.FullName) {
    errors.fullName = 'Name is required'
  }

  if (!inputs.Telephone) {
    errors.telephone = 'Telephone is required'
  } else if (!/^[6,7,8,9][0-9]{8}$/.test(inputs.Telephone)) {
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

  if (inputs.AdditionalTelefone && !/^[6,7,8,9][0-9]{8}$/.test(inputs.AdditionalTelephone)) {
    errors.additionalTelephone = 'Telephone invalid'
  }

  return errors
}

export default validateForm
