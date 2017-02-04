import React from 'react'
import StickerRow from './StickerRow'

export default React.createClass({
  getBoard: function(){
    return this.props.board || {}
  },
  render: function (){
    var stickerRows = []
    var remainder = this.getBoard().progress
    for (var x = 0; x < Math.ceil(this.getBoard().total_size / 5); x++){
      if (x % 2 === 0){
        stickerRows.push(<StickerRow key={x} direction=">" start={x*5} count={Math.min(5, remainder)} />)
      }
      else{
        stickerRows.push(<StickerRow key={x} direction="<" start={x*5} count={Math.min(5, remainder)} />)
      }
      if (remainder > 5) { remainder -= 5 }
      else { remainder = 0 }
    }
    return <div className="board">
    {
     stickerRows
    }
    </div>;
  }
})
