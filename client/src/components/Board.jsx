import React from 'react'
import StickerRow from './StickerRow'
import PureRenderMixin from 'react-addons-pure-render-mixin';
//import {Map} from 'immutable';

export default React.createClass({
  mixins: [PureRenderMixin],
  getBoard: function(){
    return this.props.board || {}
  },
  getRowCount: function(){
    return Math.ceil(this.getBoard().get('total_size') / 5)
  },
  makeProgress: function(spot, fillIndex){
    if (this.getBoard().get('progress') === fillIndex){
      console.log(this.getBoard().get('progress'))
      this.getBoard().updateIn('progress', fillIndex + 1)
    }
    else{
      console.log(spot)
      //spot.className += "test"
    }
  },
  render: function (){
    var stickerRows = []
    var remainder = this.getBoard().get('progress')
    for (var x = 0; x < this.getRowCount(); x++){
      if (x % 2 === 0){
        stickerRows.push(<StickerRow key={x} direction=">" start={x*5} count={Math.min(5, remainder)} makeProgress={this.makeProgress} />)
      }
      else{
        stickerRows.push(<StickerRow key={x} direction="<" start={x*5} count={Math.min(5, remainder)} makeProgress={this.makeProgress} />)
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
