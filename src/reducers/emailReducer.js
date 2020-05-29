import { SEND_EMAIL, RESET_SEND_EMAIL } from '../actions/types'

const MapHttpStatusToEmailStatus = status => {
  if (status === 201) {
    return 'OK'
  } return 'ERROR'
}

export default (state = null, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return MapHttpStatusToEmailStatus(action.payload)
    case RESET_SEND_EMAIL:
      return null
    default:
      return state
  }
}
