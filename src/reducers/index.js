import { combineReducers } from 'redux'
import productReducer from './productReducer'
import hospitalReducer from './hospitalReducer'
import hospitalNeedsReducer from './hospitalNeedsReducer'

export default combineReducers({ 
    products: productReducer, 
    hospitals: hospitalReducer, 
    hospitalNeeds: hospitalNeedsReducer 
})
