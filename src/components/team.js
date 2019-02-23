import React, { Component } from 'react';


class Team extends Component {
  render() {
    return (
      <div id="team">
          <div class="section">
            <header class="text-center">
                <h2><span class="colored">our</span> team</h2>
            </header>

            <div class="container">
                <div class="row">
                    
                    <div class="te-item col-md-4 text-center">
                        <img src={require('./client1.jpg')} alt="person" class="rounded-circle" />
                        <h3>Ahmed Mahmoud</h3>
                        <p>Founder</p>
                    </div>

                    
                    <div class="te-item col-md-4 text-center">
                        <img src={require('./client2.png')} alt="person" class="rounded-circle" />
                        <h3>Ahmed Mahmoud</h3>
                        <p>Founder</p>
                    </div>

                    
                    <div class="te-item col-md-4 text-center">
                        <img src={require('./client3.jpg')} alt="person" class="rounded-circle" />
                        <h3>Ahmed Mahmoud</h3>
                        <p>Founder</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Team
