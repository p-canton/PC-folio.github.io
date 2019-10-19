import React, { Component } from 'react';
import LogoPC from './images/LogoPC.svg';

class Landing extends Component {
  render() {
    return(
      <div style={{paddingTop:'10%', paddingLeft: '10%', paddingRight: '10%'}}>
      <img className="LogoPCMain" src={LogoPC} style={{height: '20em'}}/>
      <h1 className="Tittle">Software Engineer & UI Designer</h1>
      <p className="SubTittle">"Creating a new concept of technology
      and design"</p>
      </div>
    )
  }
}

export default Landing;
