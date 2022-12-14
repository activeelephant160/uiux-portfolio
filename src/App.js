import './index.css';
import * as React from 'react';
import Homepage from "./components/Homepage/Homepage"
import About from "./components/About/About"
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import BeauMonde from "./components/Projects/BeauMonde/BeauMonde"
import Barsaat from "./components/Projects/Barsaat/Barsaat"
import Campfire from "./components/Projects/Campfire/Campfire"
import WebControl from "./components/Projects/WebControl/WebControl"

function App() {

  let component 
  switch(window.location.pathname){
    case"/":
      component = <Homepage/>
      break
    case "/about":
      component = <About/>
      break
    case "/beaumonde":
      console.log("BeauMonde")
      component = <BeauMonde/>
      break
    case "/barsaat":
      component = <Barsaat/>
      break
    case "/campfire":
      component = <Campfire/>
      break
    case "/webControl":
      component = <WebControl/>
      break
  }

  return (
    <div className="App"> 
      <Navbar/>
      {component}
      <Footer/>
    </div>
  );
}

export default App;
