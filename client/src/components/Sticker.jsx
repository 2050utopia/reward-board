import React from 'react'

export default React.createClass({
  addSticker: function(){
    //this.setState({filled: 1})
  },
  render: function () {
    var classstr = "stickerSpot"
    var onclick = () => { this.props.filled(1) }
    if (this.props.filled === 1) { classstr += " sticker" }
    else { onclick = () => { this.addSticker() } }
    return <div className={classstr} onClick={onclick}>{this.props.index}</div>
  }
})
