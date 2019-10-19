import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import BetsFriends from './images/BetsFriends.svg';

class Resume extends Component {
  render() {
    return(
    <div style={{padding: '2em', paddingTop: '7em', paddingLeft: '10%', paddingRight: '10%', paddingBottom: '15%'}}>
      <div>
        <Navigation>
        <Link to="/projects">
          <h1 className="Tittle" style={{display: 'inline', textAlign: 'left'}}>
          <i class="fa fa-caret-left"></i>  BetsFriends</h1>
          <p style={{display: 'inline', paddingLeft: '2em', paddingRight: '1em'}}>
          (Sep 2018, Helsinki, Finland..)</p>
        </Link>
        </Navigation>
        <div className="HalfLeft" >
          <p style={{paddingRight: '5%'}}>
          Have you ever forgotten about a bet you made with a friend or has a friend
          of yours ever pretended to have forgotten about a bet just to get out of paying
          his dues? With our web application, you can easily keep track of your bets and hold
          your friends accountable. In one place you will have an overview of all the bets
          you currently have running and also be able to see popular bets other people are
          involved in and join them.
          </p><p>
          The project started during my stay in Finland as a student of Aalto University
          together with Carolina Diess and Pablo Cantón. Currently, I am migrating the
          application from our Firebase server to a MEAN Stack Application, therefore
          the current status of the application is "On maintenance".</p>
          </div>
            <div className="HalfRight">
              <img className="ProjectPic" src={BetsFriends}/>
          </div>
        </div>
        <h3>The Process</h3>
        <p>With BetsFriends, our intention was to create a platform which allow
        to the user to use any wager during his bets, including the non-economic
        ones, from doing the washing up for a week to get to throw a cake in somebody's face.
        </p><p>
        We based the process of our project on the one proposed by Stanford University,
        which is divided into 5 different stages: "Empathise", "Define", "Ideate", "Prototype" and "Test"</p>
        <h3>Personas</h3>
        <p>We defined three different user groups represented by one persona each.
        The first one would consider those users who would use our platform to socialize
        and track their bets with their friends. Secondly, we define those users who would
        be part of a group, such as sports or university groups, and finally, we thought
        about families. We consider a potential group of users those couples or siblings
        who want to challenge each other. Finally, we came out with a fourth group that
        we considered really interested in this platform, the big companies. We could
        see some of them launching massive challenges along the net to engage users.</p>
        <h3>Wireframing</h3>
        <p>Since we decided to conduct the tests within a high-fidelity prototype
        in order to simulate a more realistic environment, we designed just wireframing
        for the main screens of the platform in order to set up a common view of all the
        members of the group.</p>
        <h3>Mockup</h3>
        <p>The software used on this project to accomplish the task of prototyping
        was Sketch. After iterating along the process by testing the mockup and polishing
        it, we ended up with the following prototype:</p>
        <h3>Features</h3>
        <p>During the process, we realized that designing the platform for a large
        desktop was an easier alternative, therefore we decided to start working on
        the phone version, following the strategy of Mobile-First Design. It is important
        to remind that our main focus was to offer customer satisfaction as the primary
        goal meaning that we never forgot about Customer-First strategy.</p>
        <p>Nevertheless, one main requirement which was set for BetsFriends, was
        the capability of being used in screen regardless its size, meaning
        computer/laptops, tablets and smartphones. Therefore we decided to develop
        the project as a web application, deciding to avoid an Android/IOs applications in the beginning.</p>
      </div>
    )
  }
}

export default Resume;
