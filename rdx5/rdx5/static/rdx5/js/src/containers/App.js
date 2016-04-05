import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions'
import MainWrapper from '../containers/MainWrapper'
import NavBar from '../containers/NavBar'
import classNames from 'classnames'

class App extends Component {
  render() {
    const { actions } = this.props
    let appClass = classNames({
        test: true,
        'container-fluid': true
    })
    return (
      <div className={appClass}>
        <NavBar/>
        <MainWrapper/>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    selectedTab: state.selectedTab
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AllActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
