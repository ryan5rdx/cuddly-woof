import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import MainWrapper from '../containers/MainWrapper'
import NavBar from '../containers/NavBar'
import classNames from 'classnames'

class App extends Component {
  render() {
    const { todos, actions } = this.props
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
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
