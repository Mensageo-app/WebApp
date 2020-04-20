import category from '../apis/category'
import { FETCH_CATEGORIES, FETCH_CATEGORY } from './types'

export const fetchCategories = () => async dispatch => {
  const res = await category.get('/categories')
  dispatch({ type: FETCH_CATEGORIES, payload: res.data })
}

export const fetchCategory = (id) => async dispatch => {
  const res = await category.get(`/categories/${id}`)
  dispatch({ type: FETCH_CATEGORY, payload: res.data })
}
