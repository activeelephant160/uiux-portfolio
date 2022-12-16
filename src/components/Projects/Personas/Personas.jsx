import * as React from 'react';
import "../../Projects/projects.css";
import "../Personas/personas.css"
import Card from '../../../../node_modules/@mui/material/Card'
import drawing from "../../../assets/Personas/drawing.jpg"
import story1 from "../../../assets/Personas/Storyboarding-1.jpg"
import story2 from "../../../assets/Personas/Storyboarding-2.jpg"
import story3 from "../../../assets/Personas/Storyboarding-3.jpg"
import story4 from "../../../assets/Personas/Storyboarding-4.jpg"
import story5 from "../../../assets/Personas/Storyboarding-5.jpg"
import story6 from "../../../assets/Personas/Storyboarding-6.jpg"
import story7 from "../../../assets/Personas/Storyboarding-7.jpg"
import story8 from "../../../assets/Personas/Storyboarding-8.jpg"
import story9 from "../../../assets/Personas/Storyboarding-9.jpg"
import story10 from "../../../assets/Personas/Storyboarding-10.jpg"
import story11 from "../../../assets/Personas/Storyboarding-11.jpg"
import Banner from "../../../assets/Personas/banner.png"


function Personas(){
    return(
    <div id="personas" className="project project-container">
        <img src={Banner} className="banner-image"></img>
        <div className="content-container">
            <div className="content">
                <h1 className="project-title">A Nespresso Love Story</h1>
                <h2 className="subtitle">Personas and storyboarding assignment investigating users interacting with a Nespresso machine</h2>
                <div className="role">
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Role</h4>
                        <h5 className="role-content">UX Researcher</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Timeline</h4>
                        <h5 className="role-content">Sep 2022</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Team</h4>
                        <h5 className="role-content">Solo Researcher</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Skills</h4>
                        <h5 className="role-content">UX Research</h5>
                        <h5 className="role-content">Product Research</h5>
                    </Card>
                </div>
                <h2 className="section-header">Overview</h2>
                <h5 className="body-text">To inculcate and build UX Research skills, students had to step into a user’s shoes and observe their interactions with a public interface for a Personas and Storyboarding assignment. Based on interviews about the users’ experiences, we had to create user personas and illustrate a storyboard based on one of the user personas. As an avid coffee drinker, I chose to observe and interview students using a Nespresso machine in an apartment building lounge.</h5>

                <img src={drawing} className="content-images"></img>

                <h2 className="section-header">Preparation & Recording Observations</h2>
                <h5 className="body-text">For the first part of the assignment, we had to observe and interview people interacting with the coffee machine as a “contextual inquiry.” I prepared some questions before-hand targeting user experience, expectations, motives and limitations.</h5>
                <h3 className="section-sub-header">Key Observations</h3>
                <div className="problem">
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons" role="img" aria-label="hi">🪜</span></h4>
                        <h5 className="role-content">First Step</h5>
                        <h5 className="role-content">All three users began the coffee making process by filling the water jug.</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons"role="img" aria-label="hi">⏱️</span></h4>
                        <h5 className="role-content">Process Time</h5>
                        <h5 className="role-content">Almost all users overestimated the time it would take them to make coffee using the machine.</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-secondary)', 
                    color: 'var(--color-black)'}}
                    className={"problem-items"}>
                        <h4><span className="icons" role="img" aria-label="hi">📍</span></h4>
                        <h5 className="role-content">Locating Pod Holder</h5>
                        <h5 className="role-content">Neither experienced, nor inexperienced users struggled to locate the coffee pod holder.</h5>
                    </Card>
                </div>

                <h3 className="section-sub-header">Interviews</h3>
                <h3 className="section-sub-sub-header">Questions</h3>
                <h5 className="body-text">Before using the machine</h5>
                <h5 className="body-text">1. How do you think this coffee is going to compare to coffee you're used to?</h5>
                <h5 className="body-text">2. Have you used a coffee machine (this or another) before? </h5>

                <h5 className="body-text">After using the machine</h5>
                <h5 className="body-text">1. What did you like about this process?</h5>
                <h5 className="body-text">2. What did you dislike about this process?</h5>
                <h5 className="body-text">3. How was the overall experience of using this machine?</h5>

                <h3 className="section-sub-sub-header">Responses</h3>
                <h5 className="body-text">Before using the machine</h5>
                <h5 className="body-text">1. All users thought this coffee would taste like the one their used to drinking</h5>
                <h5 className="body-text">2. Users were divided with respect to the coffee machines they've used - one had used this model, one had used a different type of machine, one had never used a coffee machine before</h5>

                <h5 className="body-text">After using the machine</h5>
                <h5 className="body-text">1. Users liked the clean, modern aesthetic of the machine. They also liked that it was fast, and had few moving parts.</h5>
                <h5 className="body-text">2. Users disliked how large and bulky the machine is (makes it less portable). One user also noted that the cup holder was not deep enough to hold all types of cups</h5>
                <h5 className="body-text">3. According to the users, opening the pod holder was not intuitive. They also felt that there should've been some sort of instruction around the re-click function of the button</h5>

                <h2 className="section-header">Personas</h2>
                <h3 className="section-sub-header">Personas 1: Frequent coffee drinker, experienced with this machine</h3>
                <h5 className="body-text">This persona represents an avid coffee drinker who has used the Nespresso machine multiple times. They dislike the large size of the machine as it makes it less portable. They also dislike how often they have to clean and clear out the pod dispenser in addition to the short length of the outlet wire.</h5>

                <h5 className="body-text">This type of persona is representative of Nespresso machine users as people who love coffee and spend a lot of time in this lounge are likely to operate this machine often. They would offer more nuanced and deeper insights as experienced users.
                </h5>

                <div className="interview-container">
                    <div className="interview-row">
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">🤔</span>Thinks</h5>
                            <h5 className="column-text">How much work do I have today?</h5>
                            <h5 className="column-text">How long am I going to be in the lounge?</h5>
                            <h5 className="column-text">Have I had any coffee today?</h5>
                        </div>
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">💞</span>Feels</h5>
                            <h5 className="column-text">Sleepy, without coffee</h5>
                            <h5 className="column-text">Exhausted in the middle of the work-week</h5>
                            <h5 className="column-text">Confused with multiple deadlines </h5>
                        </div>
                    </div>
                    <div className="interview-row">
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">🗣️</span>Says</h5>
                            <h5 className="column-text">I want a caramel flavor pod</h5>
                            <h5 className="column-text">Getting my morning fuel!</h5>
                            <h5 className="column-text">Am I feeling hot coffee today or cold?</h5>
                        </div>
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">✔️</span>Does</h5>
                            <h5 className="column-text">Fills the jug of water half-way</h5>
                            <h5 className="column-text">Presses the button the second time to stop the dispenser</h5>
                        </div>
                    </div>
                </div>

                <h3 className="section-sub-header">Personas 2: Frequent coffee drinker, inexperienced with coffee machines</h3>
                <h5 className="body-text">This persona represents an avid coffee drinker who has never used the Nespresso machine or any other coffee machine. They thought it was not intuitive to figure out where the pods go.  They also were confused about the size of the cup that would fit on the machine as the depth of the cup holder was low.</h5>

                <h5 className="body-text">This type of persona is representative of coffee users who have no experience using any coffee machine. They spend a lot of time in this lounge and coffee is a big part of their daily schedule. They would offer less nuanced insights and more beginner level operations.
                </h5>
                
                <div className="interview-container">
                    <div className="interview-row">
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">🤔</span>Thinks</h5>
                            <h5 className="column-text">Should I make coffee or go to a coffee shop?</h5>
                            <h5 className="column-text">Do I need anything other than water or coffee pods?</h5>

                        </div>
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">💞</span>Feels</h5>
                            <h5 className="column-text">Confused as to what orientation to put the pods in</h5>
                            <h5 className="column-text">Do I need anything other than water or coffee pods?</h5>
                        </div>
                    </div>
                    <div className="interview-row">
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">🗣️</span>Says</h5>
                            <h5 className="column-text">Where can I find coffee pods?</h5>
                            <h5 className="column-text">How long will this take?</h5>
                            <h5 className="column-text">Are only nespresso pods working with this machine?</h5>
                        </div>
                        <div className="interview-content">
                            <h5 className="column-heading"><span className="icons" role="img" aria-label="hi">✔️</span>Does</h5>
                            <h5 className="column-text">Fumbles with the mechanical flap to open the pod holder </h5>
                            <h5 className="column-text">Presses the button only once </h5>
                        </div>
                    </div>
                </div>

                <h2 className="section-header">Storyboarding</h2>
                <h5 className="body-text">I created a storyboard based on the first persona: Frequent Coffee Drinker Experienced with this machine.</h5>
                <div className="story-container">
                    <div className="story-row">
                        <div className="story-description">
                            <img src={story1} className="story-image"></img>
                            <h5 className="body-text">Studying for a midterm in the lounge, Bob realizes he desperately needs coffee</h5>
                        </div>
                        <div className="story-description">
                            <img src={story2} className="story-image"></img>
                            <h5 className="body-text">Bob walks over to his trusty coffee machine and removes the water jug to fill it up with water</h5>
                        </div>
                    </div>
                    <div className="story-row">
                        <div className="story-description">
                            <img src={story3} className="story-image"></img>
                            <h5 className="body-text">He takes the water jug to sink and fills it halfway</h5>
                        </div>
                        <div className="story-description">
                            <img src={story4} className="story-image"></img>
                            <h5 className="body-text">Bob places the water jug back onto the machine and searches the drawer of coffee pods for his favorite flavor</h5>
                        </div>
                    </div>
                    <div className="story-row">
                        <div className="story-description">
                            <img src={story5} className="story-image"></img>
                            <h5 className="body-text">With the pod in one hand, he uses the other hand to gently hit the mechanical flap to place the pod into the Nespresso machine</h5>
                        </div><div className="story-description">
                            <img src={story6} className="story-image"></img>
                            <h5 className="body-text">He then places the coffee pod into the Nespresso machine</h5>
                        </div>
                    </div>
                    <div className="story-row">
                        <div className="story-description">
                            <img src={story7} className="story-image"></img>
                            <h5 className="body-text">Next, Bob finds a coffee mug and places it onto the cup holder of the machine</h5>
                        </div>
                        <div className="story-description">
                            <img src={story8} className="story-image"></img>
                            <h5 className="body-text">He clicks the button on the top of the coffee machine to start the dispenser</h5>
                        </div>
                    </div>
                    <div className="story-row">
                        <div className="story-description">
                            <img src={story9} className="story-image"></img>
                            <h5 className="body-text">He then patiently waits for a couple minutes until the cup fills up to three quarters </h5>
                        </div>
                        <div className="story-description">
                            <img src={story10} className="story-image"></img>
                            <h5 className="body-text">He once again clicks the button on the top of the coffee machine to stop the dispenser</h5>
                        </div>
                    </div>
                    <div className="story-row">
                        <div className="story-description">
                            <img src={story11} className="story-image"></img>
                            <h5 className="body-text">Bob is satisfied and moves back to the desk to enjoy his coffee. He can now focus on the midterm preparation!</h5>
                        </div>
                    </div>
                </div>
                <h2 className="section-header">Learnings</h2>
                <ol>
                    <li><h5 className="body-text">It's important to have an engaging narrative</h5></li>
                    <li><h5 className="body-text">Don't lead the interviewees ;)</h5></li>
                </ol>
            </div>
        </div>
    </div>
    )
}

export default Personas;