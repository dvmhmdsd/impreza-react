import React, { Component } from 'react'
import Data from './data';
import Contact from './form';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
          <div class="section">
            <header class="text-center">
                <h2><span class="colored">contact</span> us</h2>
            </header>

            <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <Data />
                </div>
                <div class="col-md-6">
                    <Contact />
                </div>
            </div>
            </div>

            <div class="text-center">
            <p>All rights reserved &copy; 2019</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer
