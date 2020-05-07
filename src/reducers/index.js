import { combineReducers } from 'redux'
import productReducer from './productReducer'
import hospitalNeedsReducer from './hospitalNeedsReducer'

export default combineReducers({ products: productReducer, hospitalNeeds: hospitalNeedsReducer })
