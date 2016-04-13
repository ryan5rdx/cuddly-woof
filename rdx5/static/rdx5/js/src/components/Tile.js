import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Tile extends Component {
  render() {
    const { onClick, text, icon} = this.props
    let tileClass = classNames({
        'tile': true,
        'card': true,
        'card-block': true,
        'col-md-2': true
    })
    let iconClass = classNames({
        icon: true,
    })
    return (
      <div className={tileClass}>
        {text}
        <i className={iconClass}></i>
      </div>
    )
  }
}

Tile.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}


export default Tile
