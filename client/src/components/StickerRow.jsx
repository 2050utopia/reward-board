import React from 'react'
import Sticker from './Sticker'
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    var stickers = []
    var filled = 0
    for (var x = 0; x < 5; x++){
      filled = 0
      if (x < this.props.count) { filled = 1 }
      stickers.push(<Sticker key={x} index={this.props.start + x} filled={filled} makeProgress={this.props.makeProgress} />)
    }
    var classstr = "stickerRow"
    if (this.props.direction === "<"){ classstr += " reverse" }
    return <div className={classstr}>
      {stickers}
    </div>
  }
})
