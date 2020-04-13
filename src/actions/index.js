import category from '../apis/category'
import { FETCH_CATEGORIES } from './types'

export const fetchCategories = () => async dispatch => {
  const res = await category.get('/categories')
  dispatch({ type: FETCH_CATEGORIES, payload: res.data })
}
