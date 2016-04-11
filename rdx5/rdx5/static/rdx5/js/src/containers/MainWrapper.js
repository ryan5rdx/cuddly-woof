import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import TileGrid from '../components/TileGrid.js'
import classNames from 'classnames'

class MainWrapperC extends Component {
  render() {
    let classes = classNames({
        'main-wrapper': true,
        'row': true,
        'col-md-8': true,
        'col-md-offset-2': true
    })
    let content = null
    switch (this.props.selectedTab) {
        case 'Home':
            content = (
                <div className={"card card-inverse center-card"}>
                    <img className={"card-img imgw"} src={STATIC_URL+"rdx5/img/sky (1).jpg"} alt="img"/>
                    <div className={"card-img-overlay"}>
                        <h4 className={"card-title"}>Ryan Churaman</h4>
                        <h6 className={"card-subtitle text-muted"}>University of Waterloo, Software Engineering</h6>
                        <p className={"card-text"}>
                            Software Developer<br/>
                            Cryptocoin Miner<br/>
                            Book Addict<br/>
                            Guitar Enthusiast<br/>
                            Gamer<br/>
                        </p>
                    </div>
                </div>
            )
            break
        case 'Resume':
            content = (
                <embed width="100%" height="100%" src={STATIC_URL+"rdx5/resume/resume2016.pdf"} type="application/pdf"></embed>
            )
            break
        case 'Contact':
            content = (
                <div>Contact</div>
            )
            break
        case 'Projects':
            content = (
                <div>
                    <h2 className={"center-text"}>Altcoin Miner</h2>
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                      </ol>
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img src={STATIC_URL+"rdx5/img/bit (5).jpg"} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                          <img src={STATIC_URL+"rdx5/img/bit (6).jpg"} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                          <img src={STATIC_URL+"rdx5/img/bit (10).jpg"} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                          <img src={STATIC_URL+"rdx5/img/oldbit (3).jpg"} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                          <img src={STATIC_URL+"rdx5/img/bit.jpg"} alt="Second slide"/>
                        </div>
                      </div>
                      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                    <h2 className={"center-text"}>Bioscanner App</h2>
                    <div id="carousel-scanner-generic" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carousel-scanner-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-scanner-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-scanner-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-scanner-generic" data-slide-to="3"></li>
                        <li data-target="#carousel-scanner-generic" data-slide-to="4"></li>
                      </ol>
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img src={STATIC_URL+"rdx5/img/bioscanner (5).png"} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                          <img src={STATIC_URL+"rdx5/img/bioscanner (2).png"} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                          <img src={STATIC_URL+"rdx5/img/bioscanner (3).png"} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                          <img src={STATIC_URL+"rdx5/img/bioscanner (4).png"} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                          <img src={STATIC_URL+"rdx5/img/bioscanner (1).png"} alt="First slide"/>
                        </div>
                      </div>
                      <a className="left carousel-control" href="#carousel-scanner-generic" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="right carousel-control" href="#carousel-scanner-generic" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>

                </div>
            )
            break
        default:
            content = (
                <div>Error</div>
            )
    }
    return (
      <div className={classes}>
        {content}
      </div>
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

MainWrapperC.propTypes = {
    selectedTab: PropTypes.string.isRequired
}

const MainWrapper = connect(
        mapStateToProps,
        mapDispatchToProps
    )(MainWrapperC)
export default MainWrapper
