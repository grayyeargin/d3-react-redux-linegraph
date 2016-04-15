import fetch from 'isomorphic-fetch'
import { formatDate } from '../utils'


// Sample sync action
export const SOME_ACTION = 'SOME_ACTION'

export function doSomeAction() {
  return {
    type: SOME_ACTION
  }
}



// Sample fetch / redux 'thunk' for async calls
export function fetchSomething(file) {
   return dispatch => {
    dispatch(startFetch())
    return fetch('some/api/endpoint')
      .then((response) => {
        dispatch(endFetch())
      })
      .catch((err) => {
        dispatch(fetchError())
      })
  }
}

export const START_FETCH = 'START_FETCH'
function startFetch() {
  return {
    type: START_FETCH
  }
}

export const END_FETCH = 'END_FETCH'
function endFetch() {
  return {
    type: END_FETCH
  }
}

export const FETCH_ERROR = 'FETCH_ERROR'
function fetchError() {
  return {
    type: FETCH_ERROR
  }
}