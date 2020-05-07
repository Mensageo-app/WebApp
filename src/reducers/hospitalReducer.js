import { FETCH_HOSPITALS } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HOSPITALS:
      return action.payload
    default:
      return state
  }
}
