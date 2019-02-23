import React, { Component } from 'react'

class Facts extends Component {
    state = {
        satisfied: 125,
        projects: 256
    }
  render() {
    return (
      <div>
          <div className="row text-center">
            <div className="col-sm-3 fac-item lighter">
                <p className="fac-number"> {this.state.satisfied} </p>
                <p>clients satisfied</p>
            </div>
            <div className="col-sm-3 fac-item">
                <p className="fac-number"> {this.state.projects} </p>
                <p>Projects completed</p>
            </div>
            <div className="col-sm-6 fac-tem">
                <a href="#"> <i className="fab fa-facebook"></i> </a>
                <a href="#"> <i className="fab fa-twitter"></i> </a>
                <a href="#"> <i className="fab fa-behance"></i> </a>
                <a href="#"> <i className="fab fa-dribbble"></i> </a>
            </div>
        </div>
      </div>
    )
  }
}

export default Facts
