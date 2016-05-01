export const ACTIVE_STATE = 'ACTIVE_STATE'

export function toggleActiveState(lineIndex) {
  return {
    type: ACTIVE_STATE,
    lineIndex
  }
}
