import * as React from 'react';
import "../../Projects/projects.css";
import Card from '../../../../node_modules/@mui/material/Card'
import Banner from '../../../assets/WebControl/banner.png'
import paper_prototype1 from '../../../assets/WebControl/paper-prototype1.png'
import paper_prototype2 from '../../../assets/WebControl/paper-prototype2.png'
import paper_prototype3 from '../../../assets/WebControl/paper-prototype3.jpg'

function WebControl() {
    return(
    <div id="webControl" className="project project-container">
        <img src={Banner} className="banner-image"></img>
        <div className="content-container">
            <div className="content">
                <h1 className="project-title">Web Control of Real Time Systems</h1>
                <h2 className="subtitle">Creating a Web application that facilitates two-way communication with Raspberry Pis on Mako Servers</h2>
                <div className="role">
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Role</h4>
                        <h5 className="role-content">Product Manager</h5>
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
                        <h5 className="role-content">Developers: Llama, Jackal, Koala</h5>
                        <h5 className="role-content">UX/UI Designer: Peacock</h5>
                    </Card>
                    <Card sx={{backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-white)'}}
                    className={"role-items"}>
                        <h4>Skills</h4>
                        <h5 className="role-content">UX/UI Design</h5>
                        <h5 className="role-content">Product Research</h5>
                        <h5 className="role-content">Full Stack at Brown</h5>
                    </Card>
                </div>
                <h2 className="section-header">Overview</h2>
                <h5 className="body-text">I am a Product Manager at Full Stack at Brown, a club undertaking pro-bono projects for the Brown community. My current project is for the Web Control of Real-Time Systems with a Neuroscience professor. We are creating a web application to facilitate two-way communication with Raspberry Pis running on Mako Servers. Furthermore, we are expanding the scope of our project to display more detailed information on the Web Application from input devices like joysticks running on the Raspberry Pi. We just shipped the back-end architecture using Lua frameworks and have moved on to developing the front end with a scope for expansion.</h5>

                <img src={paper_prototype1} className="content-images"></img>

                <h2 className="section-header">Problems</h2>
                <h3 className="section-sub-header">Challenge</h3>
                <h5 className="body-text">Currently, the desktop application is cluttered and inefficient in terms of navigating between different tabs (displaying various types of information about the experiment)</h5>

                <h3 className="section-sub-header">Objective</h3>
                <h5 className="body-text">How can we create a web application with functionality to support the back end while improving the front end for a cleaner, easier-to-use solution?
                </h5>

                <h2 className="section-header">Currently Working On...</h2>
                <h5 className="body-text">We just completed the back-end architecture of the project and have moved on to designing high-fidelity prototypes for the front end.</h5>

                <img src={paper_prototype2} className="content-images"></img>
                <img src={paper_prototype3} className="content-images"></img>

                <h2 className="section-header" >MORE COMING SOON...</h2>

            </div>
        </div>
    </div>
    )
}

export default WebControl;