import React from 'react'; 
import './intro.css';
import Type from '../TypingEffect/Type.jsx'
import Typewriter from 'typewriter-effect';

const Intro = () => {
  return(
      <section className="introduction introduction-container">
          <div className="text-container">
            <h1 className="text-child"><span role="img" aria-label="hi">👋🏻</span> Hi! I'm the Active Elephant!</h1>
            <h2 className="text-child">I'm a 
            <div className="typing">
              <Typewriter options={{
              strings: ['Butterfly Chaser', 'Tail Wagger', 'Cuddle Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 75, 
              pauseFor: 1500
              }}
              />
            </div>
            passionate about creating intuitive, engaging solutions</h2>
            <h2 className="text-child">Currently, I'm looking for the closest <span style={{color: 'var(--color-primary-variant )'}}> watering hole </span></h2>
          </div>
          <div className="scroll-below introduction-child">
            <a href="#workEx"><h3 className="scroll-below">Check out some of my work  <span role="img" aria-label="scroll-down">⬇️</span></h3></a>
          </div>         
     </section>
     )
}

export default Intro; 