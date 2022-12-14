import * as React from 'react';
import "../../Projects/projects.css";
import Banner from '../../../assets/Barsaat/PortfolioImages/banner.png'
import Research from '../../../assets/Barsaat/PortfolioImages/interviews.png'
import FinalFrame from '../../../assets/Barsaat/PortfolioImages/bottom.png'
import Competitve from '../../../assets/Barsaat/PortfolioImages/competitive.png'
import Wireframes from '../../../assets/Barsaat/PortfolioImages/wireframing.png'
import Card from '../../../../node_modules/@mui/material/Card'
import Iteration1_1 from '../../../assets/Barsaat/PortfolioImages/iteration1-1.gif'
import Iteration1_2 from '../../../assets/Barsaat/PortfolioImages/iteration1-2.gif'
import Iteration1_3 from '../../../assets/Barsaat/PortfolioImages/iteration1-3.gif'
import Iteration2_1 from '../../../assets/Barsaat/PortfolioImages/iteration2-1.gif'
import Iteration2_2 from '../../../assets/Barsaat/PortfolioImages/iteration2-2.gif'
import Iteration2_3 from '../../../assets/Barsaat/PortfolioImages/iteration2-3.gif'
import Iteration2_4 from '../../../assets/Barsaat/PortfolioImages/iteration2-4.gif'
import Iteration2_5 from '../../../assets/Barsaat/PortfolioImages/iteration2-5.gif'
import Iteration3_1 from '../../../assets/Barsaat/PortfolioImages/iteration3-1.gif'


function Barsaat() {

  return (
    <div id="barsaat" className="project project-container">
        <img src={Banner} className="banner-image"></img>
        <div className="content-container">
            <div className="content">
                <h1 className="project-title">The Secret of the Umbrella</h1>
                <h2 className="subtitle">Designing a website for Brown University's premier South Asian fusion A Capella group</h2>
                <div className="role">
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Role</h4>
                        <h5 className="role-content">UX/UI Designer</h5>
                        <h5 className="role-content">Web Designer</h5>
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
                        <h5 className="role-content">Passion Project</h5>
                    </Card>
                </div>
                <h2 className="section-header">Overview</h2>
                <h5 className="body-text">Since the inception of South Asian-Western fusion A Capella with Penn Masala at the University of Penn Masala, South Asian A Capella groups have become a university trend to stay. At Brown, I am a part of a South Asian fusion A Capella group - Barsaat. Growing up in Mumbai, I was surrounded by people from my culture and ethnicity. Moving to Brown was a welcome change, yet I missed a piece of home. In a foreign place, Barsaat provided a home away from home with like-minded people who shared my love for music. It has been a massive part of my college experience, and as the years have gone by, we have only become bigger and better.

                Recently, we hit a milestone and started performing at places outside Brown - local restaurants and Wellesley college, to name a few. Post our performances, we were often told how hard it was to find information about our group. Our hosts could only see us through Instagram. As a group gaining popularity, we figured it was high time we created our own website where users can gain information about our group more efficiently!</h5>
                
                <h2 className="section-header">Problems</h2>
                <div className="problem">
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons" role="img" aria-label="hi">🎙️</span></h4>
                        <h5 className="role-content">Potential Barsaatees are unable to find relevant information about Barsaat's audition process or the group's life outside of rehearsals and performances</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons"role="img" aria-label="hi">☔</span></h4>
                        <h5 className="role-content">Currently, Barsaat does not have an updated, functional website which hinders the group's growth & popularity outisde of Brown</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons" role="img" aria-label="hi">👩‍💻</span></h4>
                        <h5 className="role-content">Non-Brown University organizations that want to hire Barsaat to perform are unable to find information that would help them decide if Barsaat is a good fit for their events.</h5>
                    </Card>
                </div>

                <h3 className="section-sub-header">Challenge</h3>
                <h5 className="body-text">Barsaat does not have a website that can effectively inform potential organizations the group could perform for outside Brown. As a result, we limit our outreach and, subsequently, our growth in the New England area.</h5>

                <h3 className="section-sub-header">Objective</h3>
                <h5 className="body-text">How can I create a seamless process for users to gain information and contact Barsaat's executive board about the group's previous performances, upcoming events, and other news for better insight before hiring our group?</h5>

                <h2 className="section-header">Research</h2>
                <img src={Research} className="content-images"></img>
                <h3 className="section-sub-header">Interviews</h3>
                <h5 className="body-text">I divided users into 4 categories: current Barsaatees (Barsaat members), potential Barsaatees, Brown University organizations and Non-Brown University organizations we have performed for in the past.</h5>
                <div className="interview-container">
                    <div className="interview-row">
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">☔</span>Current Barsaatees</h5>
                            <h5 className="column-text">Barsaat Members wanted a page to show off our previous performances to prospective hosts and Barsaatees. They also thought it would be helpful to add a section where users could find our Upcoming Performances in case they wanted to catch us live.</h5>
                        </div>
                        <div className="interview-content">
                        <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">☁️</span>Potential Barsaatees</h5>
                        <h5 className="column-text">I interviewed students interested in auditioning for Barsaat in the future, and they said they would like to see more information about the audition process. They also mentioned that they would like to see what community the group creates outside of rehearsals and performances.</h5>
                        </div>
                    </div>
                    <div className="interview-row">
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">🐻</span>Brown University Organizations</h5>
                            <h5 className="column-text">Barsaat has performed for organizations like the South Asian Students Association. They thought it would be beneficial to include visual documentation of Barsaat's previous performances highlighting the different kinds of events Barsaat has performed.</h5>
                        </div>
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">👩🏻‍💼</span>Non-Brown University Organizations</h5>
                            <h5 className="column-text">I interviewed students interested in auditioning for Barsaat in the future, and they said they would like to see more information about the audition process. They also mentioned that they would like to see what community the group creates outside of rehearsals and performances.</h5>
                        </div>
                    </div>
                </div>

                <h3 className="section-sub-header">Competitive Analysis</h3>
                <img src={Competitve} className="content-images"></img>
                <h5 className="body-text">I conducted a competitive analysis of four South Asian fusion A Capella groups - Penn Masala, JHU Kranti, Columbia Sur and Case Western's Dhamkapella - and one A Capella group from Brown - The Brown Derbies. I noticed that most websites adopted a darker color palette. Almost all of them had a page highlighting current and past members. I also found it interesting that all websites highlighted the group's previous performances in addition to their repertoire. However, only The Brown Derbies highlighted the group's audition process. As Barsaat is similar to the Derbies in a non-competitive, performance-focused way, I wanted to include an audition process section during the iterations.</h5>
                
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
                            <h5 className="role-content">Inform potential Barsaatees about the Audition process and Barsaat as a community</h5>
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
                            <h5 className="role-content">Design a call-to-action for organizations Barsaat could perform for in the future.</h5>
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
                            <h5 className="role-content">Create a more permanent online platform for Barsaat to solidify the group's presence</h5>
                        </Card>
                    </div>
                </div>

                <h2 className="section-header">Final Designs</h2>
                
                <div className="prototype-holder">
                    <h5>Check out the Final Prototype here!</h5>
                    <a href="https://www.figma.com/proto/UyBISQTWQbDCie5vdT3kI1/Barsaat-Website?node-id=374%3A1114&page-id=374%3A1113&scaling=scale-down&starting-point-node-id=374%3A1114&viewport=328%2C548%2C0.15"><button className="btn">Live High-Fi Prototype</button></a>
                </div>

                <h2 className="section-header">Process</h2>
                <h3 className="section-sub-header">Wireframing & Testing</h3>
                <h5 className="body-text">With four users in mind, I designed low-fidelity wireframes focusing on a layout with separate pages. This project was especially interesting and filled with personal learnings for me as a junior UI/UX Designer. I've outlined the iterations below.</h5>
                <img src={Wireframes} className="content-images"></img>
               
                <h3 className="section-sub-header">Iterations & Actionable Insights</h3>
                <h3 className="section-sub-sub-header">Iteration 1</h3>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 1: Inform potential Barsaatees</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❌</span> Goal 2: Call-to-Action for Non-Brown University Organizations</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">❌</span> Goal 3: Create a more permanent online presence</h5>
                
                <div className="gif-container">
                    <img src={Iteration1_1} className="gif"></img>
                    <img src={Iteration1_2} className="gif"></img>
                    <img src={Iteration1_3} className="gif"></img>
                </div>

                <h5 className="body-text">During this stage, I hit a block. I could not fill the empty space on each page (Upcoming, Performances, Members etc.). As a result, I ended up focusing only on the UI elements instead of the UX. I realized this drew user attention away from the content to only visual design, which defeated the website's purpose. I wanted to completely change up the designs but decided to user-test them before to gain more insight into the direction in which the changes should be. Here's a summary of the feedback:</h5>

                <h5 className="body-text"><span role="img" aria-label="hi">👨‍🎓</span> Members & Alumni pages did not need to be separated and could be under the same bucket.</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">⬛</span> Black as a background is too overwhelming.</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">📃</span> The purpose of the Landing page and About page is too similar</h5>

                <h3 className="section-sub-sub-header">Iteration 2</h3>
                <h5 className="body-text"><span role="img" aria-label="hi">❌</span> Goal 1: Inform potential Barsaatees</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 2: Call-to-Action for Non-Brown University Organizations</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 3: Create a more permanent online presence</h5>
                
                <div className="gif-container">
                    <img src={Iteration2_1} className="gif"></img>
                    <img src={Iteration2_2} className="gif"></img>
                    <img src={Iteration2_3} className="gif"></img>
                    <img src={Iteration2_4} className="gif"></img>
                    <img src={Iteration2_5} className="gif"></img>
                </div>

                <h5 className="body-text">I incorporated user feedback and instinct in the second iteration to completely change the designs. Instead of a darker color palette, I chose a semi-pastel one complementing Barsaat's logo. Instead of a separate-page layout, I transferred most of the information onto the landing page - only separating the "For Fun!" page. I felt much more confident with the second iteration and tested them on the same people as the first one. Here's a summary of the findings..</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">🎯</span> There should be more than one way to access information about auditions instead of only through the About section.</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">🤔</span> Users thought the Contact section could have more information connecting it to the rest of the prototype. Information like "when would users get in touch", etc.</h5>

                <h3 className="section-sub-sub-header">Iteration 3</h3>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 1: Visual, descriptive & easy-to-use Amenities section</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 2: Community page highlighting BeauMonde’s “it” factor</h5>
                <h5 className="body-text"><span role="img" aria-label="hi">✅</span> Goal 3: Accessible Availabilities section</h5>
                <h5 className="body-text">In the third iteration, I wanted to focus on the Auditions section for prospective Barsaatees. It is essential to display a timeline as Barsaat auditions occur twice an academic year. I also wanted to highlight the audition process to provide complete transparency. But, I wanted to do so in a relaxed manner to avoid creating a "serious/intimidating" vibe.</h5>
                
                <div className="gif-container">
                    <img src={Iteration3_1} className="gif"></img>
                </div>

                <h2 className="section-header">What's Next?</h2>
                <h3 className="section-sub-header">Currently Working On</h3>
                <ul>
                    <li><h5 className="body-text">Front-end Development</h5></li>
                </ul>
                <h3 className="section-sub-header">Learnings</h3>
                <ol>
                    <li><h5 className="body-text">Always think about the amount of content when making design choices</h5></li>
                    <li><h5 className="body-text">Doing a 180 midway through the project is not as bad as it sounds- but commit to it</h5></li>
                    <li><h5 className="body-text">Go with a color palette more suited to the brand than only what is a norm for competitors</h5></li>
                </ol>
            </div>
        </div>
        <img src={FinalFrame} className="banner-image"></img>
    </div>
  );
}

export default Barsaat;
