import { combineReducers } from 'redux'
import { ACTIVE_STATE } from '../actions'

function line(state = {}, action) {
	switch (action.type) {
    case ACTIVE_STATE:
      return Object.assign({}, state, {
        active: !state.active
      })
    default:
      return state
  }
}

function lineData(state = {}, action) {
  switch (action.type) {
    case ACTIVE_STATE:
    	let thisLine = state[action.lineIndex]
      return Object.assign({}, state, {
        [action.lineIndex]: line(thisLine, action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  lineData
})

export default rootReducer


