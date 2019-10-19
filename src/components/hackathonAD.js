import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Posti from './images/Posti.jpg';

class Resume extends Component {
  render() {
    return(
      <div style={{padding: '2em', paddingTop: '7em', paddingLeft: '10%', paddingRight: '10%'}}>
        <Navigation>
        <Link to="/projects">
          <h1 className="Tittle" style={{display: 'inline', textAlign: 'left'}}>
          <i class="fa fa-caret-left"></i>  1st place Hackathon Ucode by Adidas</h1>
          <p style={{display: 'inline', paddingLeft: '2em', paddingRight: '1em'}}>
          (Mar 2018. Zaragoza, Spain.)</p>
        </Link>
    </Navigation>
    <div>
      <div className="HalfLeft" >
            <p style={{paddingRight: '5%'}}>A 48h hackathon to develop an IoT solution that bring new user
            experience to the customers of Adidas. We were a team of 4 students
            developing an Android app to connect different devices to the same
            platform and create a new store experience. We use React Native,
            Android studio, IBM cloud,  Firebase, Python for the software and NFC,
            Bluetooth, Estimote and RaspberryPi as the IoT network. The end result
            was Adidas shop an App that change the way user experience when they go
            to buy to an Adidas shop, let the user try their products and have all
            their data connection. My main task was to manage the team organization,
            develop the front-end and be the responsible to do the pitch. </p>
          </div>
          <div className="HalfRight">
            <img className="ProjectPic" src={Posti}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume;
