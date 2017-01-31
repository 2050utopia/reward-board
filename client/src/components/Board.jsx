import React from 'react'

export default React.createClass({
  getBoard: function(){
    return this.props.board || {}
  },
  render: function (){

     return <div className="board">
     {

          <h1>{this.getBoard().progress}</h1>

     }
     </div>;
  }
})
