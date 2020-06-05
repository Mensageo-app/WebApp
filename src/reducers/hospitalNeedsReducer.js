import { FETCH_HOSPITAL_NEEDS, FETCH_HOSPITAL_NEEDS_BY_PRODUCT } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HOSPITAL_NEEDS_BY_PRODUCT:
    case FETCH_HOSPITAL_NEEDS:
      return action.payload
    default:
      return state
  }
}
