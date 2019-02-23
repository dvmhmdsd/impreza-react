import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder="Name" />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email*" />
            </div>
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message*"></textarea>
            </div>
            <button type="submit" className="btn">send message</button>
        </form>
      </div>
    )
  }
}

export default Contact
