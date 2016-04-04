import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import TileGrid from '../components/TileGrid.js'
import classNames from 'classnames'

class MainWrapper extends Component {
  render() {
    let classes = classNames({
        'main-wrapper': true,
        'row': true,
        'col-md-8': true,
        'col-md-offset-2': true
    })
    return (
      <div className={classes}>
        <h1>TEST</h1>
        <TileGrid onClick={()=>{console.log("aaa")}}/>
      </div>
    )
  }
}

MainWrapper.propTypes = {
}

export default MainWrapper
