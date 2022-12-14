import React from 'react'; 
import './about.css';
import Me from '../../assets/me.JPG'

const About = () => {
  return(
    <section id ="about" className="about about-container">
      <div className="about-content">
        <div>
          <h2 className="about-heading">Hey there <span role="img" aria-label="hi">👋🏻</span></h2>
          <h2 className="about-heading">I’m Soumya <span role="text-italics">(Saw-Um-Ya)
            </span>  <span role="img" aria-label="hi">👩🏻</span></h2>
          <h4 className="about-text"><span role="img" aria-label="hi">👩🏻‍🎨</span> I'm extremely passionate about using collaborative approaches to integrate diverse perspectives to the product innovation process</h4>
          <h4 className="about-text"><span role="img" aria-label="hi">👥</span> I enjoy telling stories through experiences that bring people together in the digital or physical world </h4>
          <h4 className="about-text"><span role="img" aria-label="hi">🎓</span> Currently I’m a Senior at Brown University looking for my next opportunity </h4>
          <h4 className="about-text"><span role="img" aria-label="hi">📩</span> I love meeting new people and talking about cool coffee shops, small bookstores, fusion food, Harry Potter or pretty much anything! Feel free to reach out to me on <span className="text-bold">soumya_karwa@brown.edu </span><span role="img" aria-label="hi">😊</span></h4>
        </div>
        <div>
          <img src={Me} className="content-images"></img>
        </div>
        
      </div>
      
    </section>
  )
}

export default About; 
