import {
  Map, List, fromJS
}
from 'immutable'
import {
  expect
}
from 'chai'
import {
  stateWithBoard
}
from './test_helper'
import {
  initialState, defaultBoard
}
from '../src/core'

import reducer from '../src/reducer'

describe('reducer', () => {
  it('handles ADD_BOARD', () => {
    var action = {
      type: "ADD_BOARD"
    }
    var nextState = reducer(initialState, action)
    expect(nextState).to.equal(fromJS({
      boards: List.of(Map({
        progress: 0
      }))
    }))
  })
  it('handles INCREMENT_PROGRESS', () => {
    var action = {
      type: "INCREMENT_PROGRESS",
      boardIndex: 0
    }
    var nextState = reducer(stateWithBoard, action)
    expect(nextState).to.equal(fromJS({
      boards: List.of(Map({
        progress: 1
      }))
    }))
  })
  it('handles SET_PROGRESS', () => {
    var action = {
      type: "SET_PROGRESS",
      boardIndex: 0,
      value: 42
    }
    var nextState = reducer(stateWithBoard, action)
    expect(nextState).to.equal(fromJS({
      boards: List.of(Map({
        progress: 42
      }))
    }))
  })

  it('has an initial state', () => {
    var action = {
      type: 'ADD_BOARD'
    }
    var nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      boards: List.of(Map({
        progress: 0
      }))
    }));
  });

  it('can be used with reduce', () => {
    var actions = [{
      type: 'ADD_BOARD',
      newBoard: defaultBoard
    }, {
      type: 'SET_PROGRESS',
      boardIndex: 0,
      value: 42
    }, {
      type: 'INCREMENT_PROGRESS',
      boardIndex: 0
    }, {
      type: 'INCREMENT_PROGRESS',
      boardIndex: 0
    }, {
      type: 'INCREMENT_PROGRESS',
      boardIndex: 0
    }];
    var finalState = actions.reduce(reducer, Map());

    expect(finalState).to.equal(fromJS({

      boards: List.of(Map({
        progress: 45
      }))
    }))
  });
})
