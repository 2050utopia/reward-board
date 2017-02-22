import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getIndex: function() {
    return this.props.index
  },
  render: function () {
    var classstr = "stickerSpot"
    var onclick = () => { this.props.makeProgress(this, this.getIndex()) }

    if (this.props.filled === 1) { classstr += " sticker" }

    return <div className={classstr} onClick={onclick}>{this.getIndex()}</div>
  }
})
