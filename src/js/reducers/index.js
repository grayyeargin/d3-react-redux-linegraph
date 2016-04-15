import { combineReducers } from 'redux'
import { SOME_ACTION } from '../actions'


function aReducer(state = {}, action) {
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
  aReducer
})

export default rootReducer


