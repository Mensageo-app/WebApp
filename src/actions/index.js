import api from '../apis/backend'
import { FETCH_CATEGORIES, FETCH_CATEGORY, FETCH_HOSPITAL_NEEDS } from './types'

export const fetchCategories = () => async dispatch => {
  const res = await api.get('/categories')
  dispatch({ type: FETCH_CATEGORIES, payload: res.data })
}

export const fetchCategory = (id) => async dispatch => {
  const res = await api.get(`/categories/${id}`)
  dispatch({ type: FETCH_CATEGORY, payload: res.data })
}

export const fetchHospitalNeeds = (id) => async dispatch => {
  const res = await api.get(`/hospital_needs?product_id=${id}`)
  dispatch({type: FETCH_HOSPITAL_NEEDS, payload: res.data})
}