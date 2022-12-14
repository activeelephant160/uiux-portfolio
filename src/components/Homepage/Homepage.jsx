import "../../index.css";
import * as React from 'react';
import Intro from "../Intro/Intro.jsx"
import WorkEx from "../WorkExperience/WorkEx.jsx"


function Homepage() {

  return (
    <div>
      <Intro/>
      <WorkEx/>
    </div>
  );
}

export default Homepage;
