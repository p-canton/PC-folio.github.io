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
          <i class="fa fa-caret-left"></i>  1st place Hackathon FS Code - Game of Cloud (Capgemini - IBM)</h1>
          <p style={{display: 'inline', paddingLeft: '2em', paddingRight: '1em'}}>
          (Nov 2017, Madrid.)</p>
        </Link>
    </Navigation>
    <div>
      <div className="HalfLeft" >
            <p style={{paddingRight: '5%'}}></p>
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
