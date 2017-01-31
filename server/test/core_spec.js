import {
  List, Map
}
from 'immutable'
import {
  expect
}
from 'chai'

import {
  initialState, defaultBoard, addBoard, incrementProgress, setProgress
}
from '../src/core'

describe('application logic', () => {

  describe('addBoard', () => {
    it('adds a reward board to the state', () => {
      var nextState = addBoard(initialState, defaultBoard)
      expect(nextState).to.equal(Map({
        'boards': List.of(Map({
          progress: 0
        }))
      }))
    })
  })

  describe('incrementProgress', () => {
    it("increments the user's reward board progress", () => {
      var nextState = incrementProgress(defaultBoard)
      expect(nextState).to.equal(Map({
        progress: 1
      }))
    })
  })

  describe('setProgress', () => {
    it('sets a board to a specific value', () => {
      var nextState = setProgress(defaultBoard, 42)
      expect(nextState).to.equal(Map({
        progress: 42
      }))
    })
  })
})
