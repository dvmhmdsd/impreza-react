import React, { Component } from 'react';
import './App.css';
 
import Header from './components/header';
import projects from './components/projects';
import Projects from './components/projects';
import Services from './components/services';
import Team from './components/team';
import Facts from './components/facts';
import Footer from './components/footer';

class App extends Component {

    componentDidMount() {
      var scrollpos = window.scrollY;
      var header = document.querySelector(".navbar");

      function add_class_on_scroll() {
          header.classList.add("scrolled");
      }

      function remove_class_on_scroll() {
          header.classList.remove("scrolled");
      }

      window.addEventListener('scroll', function(){ 
          //Here you forgot to update the value
          scrollpos = window.scrollY;

          if(scrollpos > 10){
              add_class_on_scroll();
          }
          else {
              remove_class_on_scroll();
          }
      });
    }

  render() {
    return (
      <div className="App">
        <nav  className={`navbar navbar-expand-lg navbar-light fixed-top`}>
          <a className="navbar-brand" href="#">Impreza</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> <i className="fas fa-search"></i> </a>
              </li>
            </ul>
          </div>
        </nav>
        <Header />
        <Projects />
        <Services />
        <Team />
        <Facts />
        <Footer />
      </div>
    );
  }
}

export default App;
