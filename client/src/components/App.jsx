import React from 'react'
import {Map} from 'immutable'

var testBoard = new Map({
  total_size: 100,
  progress: 43
})

var appEntry = React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {board: testBoard});
  }
})

module.exports = appEntry, testBoard
