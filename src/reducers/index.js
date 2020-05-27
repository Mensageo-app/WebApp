import { combineReducers } from 'redux'
import productReducer from './productReducer'
import hospitalReducer from './hospitalReducer'
import hospitalNeedsReducer from './hospitalNeedsReducer'
import emailReducer from './emailReducer'

export default combineReducers({
  products: productReducer,
  hospitals: hospitalReducer,
  hospitalNeeds: hospitalNeedsReducer,
  emailSent: emailReducer
})
