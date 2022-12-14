import * as React from 'react';
import "../../Projects/projects.css";
import BeauMondeBanner from '../../../assets/BeauMonde/Banner.png'; 
import BeauMondeResearch from '../../../assets/BeauMonde/Research.png'
import BeauMondeBeforevAfter from '../../../assets/BeauMonde/beforevafter.png'
import BeauMondeFinalFrame from '../../../assets/BeauMonde/FinalFrame.png'
import BeauMondeLogos from '../../../assets/BeauMonde/Logos.png'
import Iteration1_1 from '../../../assets/BeauMonde/iteration1-1.gif'
import Iteration1_2 from '../../../assets/BeauMonde/iteration1-2.gif'
import Iteration2 from '../../../assets/BeauMonde/iteration2.gif'
import Iteration3 from '../../../assets/BeauMonde/final.gif'
import Card from '../../../../node_modules/@mui/material/Card'

function BeauMonde() {

  return (
    <div id="beaumonde" className="project project-container">
        <img src={BeauMondeBanner} className="banner-image"></img>
        <div className="content-container">
            <div className="content">
                <h1 className="project-title">With Neighbors like Family...</h1>
                <h2 className="subtitle">Redesigning BeauMonde Towers’ Website</h2>
                <div className="role">
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Role</h4>
                        <h5 className="role-content">UX/UI Designer</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Timeline</h4>
                        <h5 className="role-content">Sep 2022 - Ongoing</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Team</h4>
                        <h5 className="role-content">Solo Designer</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Skills</h4>
                        <h5 className="role-content">UX/UI Design</h5>
                        <h5 className="role-content">UX Research</h5>
                        <h5 className="role-content">Contract</h5>
                    </Card>
                </div>
                <h2 className="section-header">Overview</h2>
                <h5 className="body-text">People often compare Mumbai to New York - a concrete jungle that never sleeps. Among the concrete, I was fortunate enough to grow up in an apartment building with amenities that provided a break from the city. It had lush greens, multiple playgrounds and an opportunity to pursue various sports but, most importantly, a community of neighbors that became family.

                BeauMonde gave me an unforgettable, most memorable childhood. It allowed me to pursue everything that makes me, me - I discovered my love for Basketball, overcame my stage fright, and more. And through this, I made lifelong friendships. The same can be said for every resident, as BeauMonde offers something for every age group.

                The management wanted to improve BeauMonde's digital presence by redesigning the building's website to display the facility's advantages, including amenities and available apartments while focusing on the community.</h5>
                
                <h2 className="section-header">Problems</h2>
                <div className="problem">
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons" role="img" aria-label="hi">🔍</span></h4>
                        <h5 className="role-content">Users have to spend an excessive amount of time going through the web page searching for information relevant to them. They find it a deterrance and redundant.</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons"role="img" aria-label="hi">🏢</span></h4>
                        <h5 className="role-content">BeauMonde’s biggest advantage is the community it offers. It is the perfect place for families. Currently the website has no mention of the community it offers.</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons" role="img" aria-label="hi">🚗</span></h4>
                        <h5 className="role-content">In a traffic-heavy city like Mumbai, commuting is often a chore. BeauMonde offers accessible amenities excusively to residents. This is not efficiently or efficetively highlighted on the web page.</h5>
                    </Card>
                </div>

                <h3 className="section-sub-header">Challenge</h3>
                <h5 className="body-text">BeauMonde's current website has too much repetitive, poorly organized content. It is hard to discern information about the building's amenities or available apartments as content is densely populated on the landing page but is not categorized. There is also no mention of the community BeauMonde offers.</h5>

                <h3 className="section-sub-header">Objective</h3>
                <h5 className="body-text">How can I create a seamless process for users to gain information and contact management about Beaumonde's amenities, community and available apartments while improving the building's digital presence?</h5>

                <h2 className="section-header">Research</h2>
                <img src={BeauMondeResearch} className="content-images"></img>
                <h3 className="section-sub-header">Interviews</h3>
                <h5 className="body-text">I interviewed seven people - five residents and two potential residents. Among the current residents, I interviewed people of various ages (16-50 years) to gauge insights about multiple requirements and interests for the website.</h5>
                <div className="columns-container">
                    <div className="columns-content">
                        <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">🧑‍🤝‍🧑</span>Residents</h5>
                        <h5 className="column-text">They want a contact management section to formally speak to committee members to organize events or raise concerns. They would also like visual aids like images and icons to support amenities and events, as the current solution does not have any.</h5>
                    </div>
                    <div className="columns-content">
                        <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">👀</span>Non-Residents</h5>
                        <h5 className="column-text">They want to differentiate between apartments available for rent and purchase while including the apartments’ available dates. They want to see a separate section for amenities with visual aid and want a feel of what it would be like to be a resident of BeauMonde. They also want to know the building's location advantages.</h5>
                    </div>
                </div>

                <h3 className="section-sub-header">Competitive Analysis</h3>
                <img src={BeauMondeLogos} className="content-images"></img>
                <h5 className="body-text">I conducted a competitive analysis of 3 other luxury apartment buildings: Kalpatru Avana, Imperial Towers & Ahuja Towers. A typical design element was a background image of the building's view. I recognize the value of that design element in a metropolitan city like Mumbai. With high-rises all around, the view a building offers sets it apart. None of the websites provided information about apartment prices. I also found that although all buildings offered information about the facility's amenities - none mentioned anything about the community. This is what makes BeauMonde stand out - the people.</h5>
                
                <h2 className="section-header">Pain Points</h2>
                <h5 className="body-text">Using the interviews and competitive analysis, I summarized the user pain points. </h5>
                <div className="pain-points">
                    <Card sx={{
                    backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)', 
                    borderRadius: '50%',
                    width: '14rem',
                    height: '14rem'
                    }} className={"pain-points-items"}>
                        <h5><span className="pain-points-icons" role="img" aria-label="hi">📷</span></h5>
                        <h5 className="pain-points-title">No Graphics</h5>
                        <h5 className="pain-points-text">Users are unable to visualize events and amenities without images or icons</h5>
                    </Card>
                    <Card sx={{
                    backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)', 
                    borderRadius: '50%',
                    width: '14rem',
                    height: '14rem'
                    }} className={"pain-points-items"}>
                        <h4><span className="pain-points-icons" role="img" aria-label="hi">💞</span></h4>
                        <h5 className="pain-points-title">No Community</h5>
                        <h5 className="pain-points-text">Users don't see any events displaying the community's impact</h5>
                    </Card> 
                    <Card sx={{
                    backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)', 
                    borderRadius: '50%',
                    width: '14rem',
                    height: '14rem'
                    }} className={"pain-points-items"}>
                        <h5><span className="pain-points-icons" role="img" aria-label="hi">💻</span></h5>
                        <h5 className="pain-points-title">Inaccessible Management</h5>
                        <h5 className="pain-points-text">The current Contact Us page is difficult to use</h5>
                    </Card>
                </div>

                <h2 className="section-header">Project Goals</h2>
                <div className="project-goals">
                    <div className="project-row">
                        <Card sx={{
                        backgroundColor: 'var(--color-black)', 
                        color: 'var(--color-white)', 
                        borderRadius: '50%',
                        width: '2rem',
                        height: '2rem'
                        }} className={"project-goal-icons"}>
                            <h5 className="pain-points-title">1</h5>
                        </Card>
                        <Card sx={{backgroundColor: 'var(--color-primary)', 
                        color: 'var(--color-white)'}}
                        className={"project-goal-items"}>
                            <h5 className="role-content">Amenities: Create a visual, descriptive and easy-to-us amenities section</h5>
                        </Card>
                    </div>
                    <div className="project-row">
                        <Card sx={{
                        backgroundColor: 'var(--color-black)', 
                        color: 'var(--color-white)', 
                        borderRadius: '50%',
                        width: '2rem',
                        height: '2rem'
                        }} className={"project-goal-icons"}>
                            <h5 className="pain-points-title">2</h5>
                        </Card>
                        <Card sx={{backgroundColor: 'var(--color-primary)', 
                        color: 'var(--color-white)'}}
                        className={"project-goal-items"}>
                            <h5 className="role-content">Community: Design an interactive Community page displaying what makes BeauMonde different from its competitors</h5>
                        </Card>
                    </div>
                    <div className="project-row">
                        <Card sx={{
                        backgroundColor: 'var(--color-black)', 
                        color: 'var(--color-white)', 
                        borderRadius: '50%',
                        width: '2rem',
                        height: '2rem'
                        }} className={"project-goal-icons"}>
                            <h5 className="pain-points-title">3</h5>
                        </Card>
                        <Card sx={{backgroundColor: 'var(--color-primary)', 
                        color: 'var(--color-white)'}}
                        className={"project-goal-items"}>
                            <h5 className="role-content">Availability: Construct an accessible Availability section that distinguishes between apartments available for rent and purchase.</h5>
                        </Card>
                    </div>
                </div>

                <h2 className="section-header">Final Designs</h2>
                
                <img src={BeauMondeBeforevAfter} className="content-images"></img>

                <div className="prototype-holder">
                    <h5>Check out the Final Prototype here!</h5>
                    <a href="https://www.figma.com/proto/L7lVxQ1h1CndQ9mn28uLD0/BeauMonde-Towers-Redesign?page-id=15%3A223&node-id=43%3A160&viewport=275%2C95%2C0.1&scaling=scale-down&starting-point-node-id=43%3A160"><button className="btn">Live High-Fi Prototype</button></a>
                </div>

                <h2 className="section-header">Process</h2>
                <h3 className="section-sub-header">Wireframing & Testing</h3>
                <h5 className="body-text">With two users - residents and potential residents - in mind, I designed low-fidelity wireframes focusing on navigation and page layouts. These designs went through user testing and critiques with the original interviewees. Overall, the feedback was to create more defined section dividers and to remove the "Overview" from the navbar, as they found that option to be redundant. They also had some feedback about adding more information about apartment sizes while making the landing page more hierarchal.</h5>
               
                <h3 className="section-sub-header">Iterations & Actionable Insights</h3>
                <h3 className="section-sub-sub-header">Iteration 1</h3>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 1: Visual, descriptive & easy-to-use Amenities section</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❌</span> Goal 2: Community page highlighting BeauMonde’s “it” factor</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❌</span> Goal 3: Accessible Availabilities section</h5>
                
                <div className="gif-container">
                    <img src={Iteration1_1} className="gif"></img>
                    <img src={Iteration1_2} className="gif"></img>
                </div>
                
                <h5 className="body-text">I tested the prototype on the original interviewees and found <span className="text-bold">three actionable insights.</span> Users felt underwhelmed by the Community page:</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">🤯</span> The Navbar had too many elements and the “Overview” subheading was redundant </h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❓</span> Users were confused with the landing page image and thought some text would help connect the image to BeauMonde</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">📄</span> They found the Availabilities page to be empty. Adding it to the Landing page would improve the visual hierarchy </h5>

                <h3 className="section-sub-sub-header">Iteration 2</h3>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 1: Visual, descriptive & easy-to-use Amenities section</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❌</span> Goal 2: Community page highlighting BeauMonde’s “it” factor</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 3: Accessible Availabilities section</h5>
                
                <div className="gif-container">
                    <img src={Iteration2} className="gif"></img>
                </div>
                
                <h5 className="body-text">I worked towards Goal 3 in the second design iteration. Same as the first one, I tested the prototype on the original interviewees and found <span className="text-bold">two actionable insights.</span> Users found the imbedded availabilities section much easier to use.</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">↔️</span> Users couldn’t immediately make the connection between the Life@Beau title and the events displayed</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❓</span> Overall, they felt confused by the events section. They wanted more information / images to create a clearer picture about the community</h5>

                <h3 className="section-sub-sub-header">Iteration 3</h3>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 1: Visual, descriptive & easy-to-use Amenities section</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 2: Community page highlighting BeauMonde’s “it” factor</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 3: Accessible Availabilities section</h5>
                <h5 className="body-text">In the third iteration, I wanted to focus on the Community Page. To make the page more personable, I decided to rename it as “Life@Beau.” To keep design consistent across the different pages, I added a background image to the Community page. This added more life and insight to the page.</h5>
                
                <div className="gif-container">
                    <img src={Iteration3} className="gif"></img>
                </div>

                <h2 className="section-header">What's Next?</h2>
                <h3 className="section-sub-header">Currently Working On</h3>
                <ul>
                    <li><h5 className="body-text">Front-end Development</h5></li>
                    <li><h5 className="body-text">Loads of Testing!</h5></li>
                </ul>
                <h3 className="section-sub-header">Learnings</h3>
                <ol>
                    <li><h5 className="body-text">The overall experience of the website matters much more than the visuals</h5></li>
                    <li><h5 className="body-text">Iteration can mean making the smallest of changes</h5></li>
                    <li><h5 className="body-text">Finish writing the case study before putting it on a web page ;)</h5></li>
                </ol>
            </div>
        </div>
        <img src={BeauMondeFinalFrame} className="banner-image"></img>
    </div>
  );
}

export default BeauMonde;
