import React from 'react'
import ReactDOM from 'react-dom'
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils'
import Board from '../../src/components/Board'
import {expect} from 'chai'
import {testBoard} from '../../src/components/App.jsx'

// var test_board = {
//   total_size: 100,
//   progress: 39
// }

function Board_tests(){
  describe("board", () => {
    it("renders a board div", () => {
      var component = renderIntoDocument(
        <Board board={testBoard} />
      )
      var board = scryRenderedDOMComponentsWithClass(component, 'board')

      expect(board.length).to.equal(1)
    })
  })
}

module.exports = Board_tests
