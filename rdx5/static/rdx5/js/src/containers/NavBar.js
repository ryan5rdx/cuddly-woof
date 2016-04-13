import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {selectTab} from '../actions/MainActions'
import NavEntry from '../components/NavEntry'
import classNames from 'classnames'

class NavBarC extends Component {
  render() {
    let classes = classNames({
        'navbar': true,
        'navbar-dark': true,
        'bg-inverse': true,
    })
    let innerClasses = classNames({
        'nav': true,
        'navbar-nav': true
    })
    let brandClasses = classNames({
    })
    return (
      <nav className={classes}>
        <div className={innerClasses}>
            <NavEntry name={"Home"} isBrand={true}/>
            <NavEntry name={"Resume"} />
            <NavEntry name={"Links"} />
            <NavEntry name={"Projects"} />
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        selectedTab: state.selectedTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

NavBarC.propTypes = {
    selectedTab: PropTypes.string.isRequired
}
const NavBar = connect(
        mapStateToProps,
        mapDispatchToProps
    )(NavBarC)

export default NavBar
