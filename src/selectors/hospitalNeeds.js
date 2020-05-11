export const calculateProductQuantity = (productId, hospitalNeeds) => {
  if (!hospitalNeeds) {
    return null
  }
  return hospitalNeeds
    .filter(item => productId === item.product_id)
    .reduce((quantity, hospitalNeed) => quantity + hospitalNeed.quantity, 0)
}

export const calculateProductQuantityPerHospital = (productId, hospitalId, hospitalNeeds) => {
  if (!hospitalNeeds) {
    return null
  }
  return hospitalNeeds
    .filter(item => productId === item.product_id && hospitalId === item.hospital_id)
    .reduce((quantity, hospitalNeed) => quantity + hospitalNeed.quantity, 0)
}
