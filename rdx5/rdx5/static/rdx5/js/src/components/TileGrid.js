export default TileGrid
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Tile from '../components/Tile'

class TileGrid extends Component {
  render() {
    const { onClick, text} = this.props
    let gridClass = classNames({
        'tile-grid': true,
        'col-md-8': true,
        'col-md-offset-2': true
    })
    return (
    <div
      className={gridClass}
      onClick={onClick}
    >
      <Tile onClick={()=>{}} text={'tile1'} />
      <Tile onClick={()=>{}} text={'tile2'} />
      <Tile onClick={()=>{}} text={'tile3'} />
      <Tile onClick={()=>{}} text={'tile3'} />
      <Tile onClick={()=>{}} text={'tile3'} />
      <Tile onClick={()=>{}} text={'tile3'} />
      <Tile onClick={()=>{}} text={'tile3'} />
      <Tile onClick={()=>{}} text={'tile3'} />
      <Tile onClick={()=>{}} text={'tile3'} />
    </div>
    )
  }
}

Tile.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}


export default TileGrid
