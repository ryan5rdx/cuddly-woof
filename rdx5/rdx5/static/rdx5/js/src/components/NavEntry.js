import React, { PropTypes } from 'react'
import {selectTab} from '../actions/MainActions'
import {connect} from 'react-redux'
import classNames from 'classnames'

const NavEntryC = ({ name, active, onClick }) => {
    let classes = classNames({
        'nav-item': true,
        'nav-link': true,
        'active': active
    })
  return (
    <a href="#"
        className={classes}
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
    {name}
    </a>
  )
}

NavEntryC.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.selectedTab === ownProps.name
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(selectTab(ownProps.name))
        }
    }
}

const NavEntry = connect(
        mapStateToProps,
        mapDispatchToProps
    )(NavEntryC)

export default NavEntry
