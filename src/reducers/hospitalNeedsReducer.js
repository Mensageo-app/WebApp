import _ from 'lodash'
import { FETCH_HOSPITAL_NEEDS } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HOSPITAL_NEEDS:
      return action.payload
    default:
      return state
  }
}
