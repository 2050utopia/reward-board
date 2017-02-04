import React from 'react'
import ReactDOM from 'react-dom'
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils'
import Board from '../../src/components/Board'
import {expect} from 'chai'

var test_board = {
  total_size: 100,
  progress: 39
}

describe("board", () => {
  it("renders a board div", () => {
    var component = renderIntoDocument(
      <Board board={test_board} />
    )
    var board = scryRenderedDOMComponentsWithTag(component, 'div')

    expect(board.length).to.equal(1)
  })
})
