import { combineReducers } from 'redux'
import { SOME_ACTION } from '../actions'


function lineData(state = {}, action) {
  switch (action.type) {
    case SOME_ACTION:
      return Object.assign({}, state, {
        'new state': 'a new state'
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  lineData
})

export default rootReducer


