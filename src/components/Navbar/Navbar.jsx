import React from 'react'; 
import './navbar.css';

const Navbar = () => {

  let location
    switch(window.location.pathname){
      case"/about":
        location = "/"
        break
      case "/":
        location = "#workEx"
        break
  }
  
  return(
    <div className="navbar navbar-container">
      <div className="nav-content">
        <a href="/"><h1 className="left-align">Active Elephant 161</h1></a>
        <div className="nav-elements">
          <a href="/about"><h3>About</h3></a>
          <a href='/'><h3>Work</h3></a>
        </div>  
      </div>
    </div>
  )   
}

export default Navbar; 