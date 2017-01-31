import {
  initialState, addBoard, incrementProgress, setProgress
}
from './core'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return addBoard(state);
      break;
    case 'INCREMENT_PROGRESS':
      return state.updateIn([
        'boards', action.boardIndex
      ], board => incrementProgress(board));
      break;
    case 'SET_PROGRESS':
      return state.updateIn(['boards'], boards => boards.update(action.boardIndex,
        board => setProgress(board, action.value)));
      break;
  }
  return state
}
