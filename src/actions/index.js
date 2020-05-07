import api from '../apis/backend'
import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_HOSPITALS, FETCH_HOSPITAL_NEEDS } from './types'

export const fetchProducts = () => async dispatch => {
  const res = await api.get('/products')
  dispatch({ type: FETCH_PRODUCTS, payload: res.data })
}

export const fetchProduct = (id) => async dispatch => {
  const res = await api.get(`/products/${id}`)
  dispatch({ type: FETCH_PRODUCT, payload: res.data })
}

export const fetchHospitals = () => async dispatch => {
  const res = await api.get(`/hospitals`)
  dispatch({ type: FETCH_HOSPITALS, payload: res.data})
}

export const fetchHospitalNeeds = () => async dispatch => {
  const res = await api.get(`/hospital_needs`)
  dispatch({type: FETCH_HOSPITAL_NEEDS, payload: res.data})
}