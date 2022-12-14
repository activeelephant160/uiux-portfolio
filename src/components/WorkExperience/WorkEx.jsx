import React from 'react'; 
import './workex.css';
import BeauMondeBanner from '../../assets/BeauMonde/Banner.png'; 
import BarsaatBanner from '../../assets/Barsaat/PortfolioImages/banner.png';
import CampfireBanner from '../../assets/Campfire/banner.png' 
import WebControlBanner from '../../assets/WebControl/banner.png'

const WorkEx = () => {
  return(
      <section id="workEx" className="work-ex work-ex-container">
        <div className="portfolio-container">
          <div className="row-1">
            <div className="image-container">
              <a href="/beaumonde"><img src={BeauMondeBanner} alt="BeauMonde Towers Project Banner"></img>
              <h2 className="image-child project-heading">With Neighbors Like Family...</h2>
              <h4 className="image-child project-description">Redesigning BeauMonde Towers’ Website</h4>
              </a>
            </div>
            <div className="image-container">
            <a href="/barsaat"><img src={BarsaatBanner} alt="Barsaat Project Banner"></img>
              <h2 className="image-child project-heading">The Secret of the Umbrella</h2>
              <h4 className="image-child project-description">Designing a website for Brown University’s premiere South Asian a cappella group</h4>
              </a>
            </div>
          </div>
          <div className="row-1">
            <div className="image-container">
            <a href="/campfire"><img src={CampfireBanner} alt="Campfire Banner"></img>
              <h2 className="image-child project-heading">Campfire</h2>
              <h4 className="image-child project-description">Iterative Design Assignment for Campfire, a Y Combinator start-up</h4></a>
            </div>
            <div className="image-container">
            <a href="/webControl"><img src={WebControlBanner} alt="Web Control of Real Time Systems"></img>
              <h2 className="image-child project-heading">Web Control of Real Time Systems</h2>
              <h4 className="image-child project-description">Creating a Web application that facilitates two-way communication with Raspberry Pis on Mako Servers</h4></a>
            </div>
          </div>
        </div>
      </section>
  )   
}

export default WorkEx; 