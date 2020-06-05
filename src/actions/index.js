import api from '../apis/backend'
import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_HOSPITALS, FETCH_HOSPITAL_NEEDS, FETCH_HOSPITAL_NEEDS_BY_PRODUCT, SEND_EMAIL, RESET_SEND_EMAIL } from './types'

export const fetchProducts = () => async dispatch => {
  const res = await api.get('/products')
  dispatch({ type: FETCH_PRODUCTS, payload: res.data })
}

export const fetchProduct = (id) => async dispatch => {
  const res = await api.get(`/products/${id}`)
  dispatch({ type: FETCH_PRODUCT, payload: res.data })
}

export const fetchHospitals = () => async dispatch => {
  const res = await api.get('/hospitals')
  dispatch({ type: FETCH_HOSPITALS, payload: res.data })
}

export const fetchHospitalNeeds = (productId) => async dispatch => {
  const res = await api.get('/hospital_needs')
  dispatch({ type: FETCH_HOSPITAL_NEEDS, payload: res.data })
}

export const fetchHospitalNeedsByProduct = (productId) => async dispatch => {
  const res = await api.get(`/hospital_needs/by_product/${productId}`)
  dispatch({ type: FETCH_HOSPITAL_NEEDS_BY_PRODUCT, payload: res.data })
}

export const sendEmail = (inputs) => async dispatch => {
  try {
    const res = await api.post('/emails/create', inputs)
    dispatch({ type: SEND_EMAIL, payload: res.status })
  } catch (error) {
    console.log(error)
    dispatch({ type: SEND_EMAIL, payload: 500 })
  }
}

export const resetEmailSendStatus = () => async dispatch => {
  dispatch({ type: RESET_SEND_EMAIL })
}
