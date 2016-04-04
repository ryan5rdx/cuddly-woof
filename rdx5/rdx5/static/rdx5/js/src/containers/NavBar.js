import React, { Component, PropTypes } from 'react'
import * as TodoActions from '../actions'
import classNames from 'classnames'

class NavBar extends Component {
  render() {
    let classes = classNames({
        'navbar': true,
        'navbar-dark': true,
        'navbar-dark': true,
        'bg-inverse': true,
    })
    let innerClasses = classNames({
        'nav': true,
        'navbar-nav': true
    })
    let brandClasses = classNames({
        'navbar-brand': true,
    })
    let itemClasses = classNames({
        'nav-item': true,
        'nav-link': true
    })
    return (
      <nav className={classes}>
        <div className={innerClasses}>
            <a className={brandClasses} href={"#"}>Ryan</a>
            <a className={itemClasses} href={"#"}>Test</a>
        </div>
      </nav>
    )
  }
}

NavBar.propTypes = {
}

export default NavBar
