import {
  Map,
  List
}
from 'immutable';

export var initialState = new Map({
  boards: new List()
})

export var defaultBoard = new Map({
  progress: 0
})

export function addBoard(state) {
  return state.updateIn(['boards'], new List(), boards => boards.push(
    defaultBoard))
}

export function incrementProgress(boardState) {
  return boardState.updateIn(['progress'], 0, progress =>
    progress + 1)
}

export function setProgress(boardState, value) {
  return boardState.set('progress', value)
}
