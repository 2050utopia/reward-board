import {Map, List, fromJS} from 'immutable'
import {expect} from 'chai'
import makeStore from '../src/store'
import defaultBoard from '../src/core'

describe('store', () => {
  it('is a redux store with the right reducer', () => {
    var store = makeStore()
    expect(store.getState()).to.equal(Map({boards: List()}))

    store.dispatch({type: 'ADD_BOARD', newBoard: defaultBoard})
    expect(store.getState()).to.equal(fromJS({
      boards: List.of(Map({progress: 0}))
    }))
  })
})
