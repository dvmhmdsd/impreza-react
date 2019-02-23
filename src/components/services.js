import React, { Component } from 'react'

class Services extends Component {
  render() {
    return (
      <div id="services">
          <div class="section">
            <header class="text-center">
                <h2><span class="colored">our</span> services</h2>
            </header>
            <div class="row">
            <div class="col-md-8">
                <div class="row">
                <div class="col-sm-4 ser-item">
                    <div class="ser-content">
                        <i class="fa fa-tablet-alt"></i>
                        <h3>Mobile Design</h3>
                    </div>
                </div>
                <div class="col-sm-4 ser-item">
                    <div class="ser-content">
                        <i class="fa fa-cube"></i>
                        <h3>Apps Development</h3>
                    </div>
                </div>
                <div class="col-sm-4 ser-item">
                    <div class="ser-content">
                        <i class="fa fa-play"></i>
                        <h3>Google Play</h3>
                    </div>
                </div>
                <div class="col-sm-4 ser-item">
                    <div class="ser-content">
                        <i class="fab fa-apple"></i>
                        <h3>Apple Appstore</h3>
                    </div>
                </div>
                <div class="col-sm-4 ser-item">
                    <div class="ser-content">
                        <i class="fa fa-chart-area"></i>
                        <h3>mobile design</h3>
                    </div>
                </div>
                <div class="col-sm-4 ser-item">
                    <div class="ser-content">
                        <i class="fa fa-hand-point-up"></i>
                        <h3>UI/UX design</h3>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-md-4 ser-image"></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Services
