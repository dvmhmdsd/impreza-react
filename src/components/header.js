import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div id="header">
          <header>
            <div className="bg-video">
                <video muted loop autoPlay preload="auto" width="100%" height="auto">
                <source type="video/mp4" src="http://impreza2.us-themes.com/wp-content/uploads/2015/05/agency.mp4" />
                </video>
            </div>
            <div className="overlay"></div>
            <div className="header-content">
                <div className="container">
                <p className="title">ONEPAGE AGENCY DEMO</p>
                <p className="sub-title">What will blow our customers minds</p>
                
                <button className="bg-color">projects</button>
                <button className="bg-white">about us</button>
                </div>
            </div>
        </header>
      </div>
    )
  }
}

export default Header;
