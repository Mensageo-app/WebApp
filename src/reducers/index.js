import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import hospitalNeedsReducer from './hospitalNeedsReducer'

export default combineReducers({ categories: categoryReducer, hospitalNeeds: hospitalNeedsReducer })
