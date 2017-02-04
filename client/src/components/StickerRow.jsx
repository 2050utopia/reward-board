import React from 'react'
import Sticker from './Sticker'

export default React.createClass({
  //direction = "forward" || "reverse"
  //count = stickers in row
  //start = first sticker index on board
  render: function () {
    var stickers = []
    var filled = 0
    for (var x = 0; x < 5; x++){
      filled = 0
      if (x < this.props.count) { filled = 1 }
      stickers.push(<Sticker key={x} index={this.props.start + x} filled={filled} />)
    }
    var classstr = "stickerRow"
    if (this.props.direction === "<"){ classstr += " reverse" }
    return <div className={classstr}>
      {stickers}
    </div>
  }
})
