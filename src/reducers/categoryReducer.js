import _ from 'lodash';
import {FETCH_CATEGORIES} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, ..._.mapKeys(action.payload, 'uid')};
        default:
            return state;
    }
}