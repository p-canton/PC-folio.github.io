import React, { Component } from 'react';
import PabloPicture from './images/PabloPicture.svg';

class About extends Component {
  render() {
    return(
      <div style={{padding: '2em', paddingTop: '4em'}}>
      <h1 className="Tittle2" style={{textAlign: 'left'}}>About me</h1>
        <div className="ColLeft">
          <img className="LogoPCMain" src={PabloPicture}/>
          <h3 style={{color: 'white', fontSize:'2,5em', paddingRight: '0.2em'
              , paddingLeft: '0.2em'}}><b>Pablo Cantón</b></h3>
            <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}>22/09/1995</p>
            <h3 style={{color: 'white', fontSize:'2em', textAlign: 'center'}}>
                Soft Skills</h3>
                <p style={{color: '#f3f3f3', fontSize:'1.5em',
                  paddingLeft: '1em', paddingRight: '1em'}}>
                  Creativity - Teamwork - Attention to detail</p>
            <h3 style={{color: 'white', fontSize:'2em'}}>Contact</h3>
            <div style={{paddingBottom: '2em'}}>
            <p href="url" style={{display: 'inline'}}> <a className="LinkStyle" href="mailto:pablocg1995@gmail.com">
                <i class="fa fa-envelope fa-lg" style={{color: 'white', fontSize:'3em'}}></i></a></p>
            <p style={{display: 'inline', paddingLeft: '2em', paddingRight: '2em'}}><a className="LinkStyle" href="tel:+34676328005">
                <i class="fa fa-phone fa-lg" style={{color: 'white', fontSize:'3em'}}></i></a></p>
            <p style={{display: 'inline'}}><a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
                <i class="fa fa-linkedin fa-lg" style={{color: 'white', fontSize:'3em'}}></i></a></p>
            </div>
        </div>
          <div className="ColRight">
            <div style={{paddingLeft: '2em'}}>
                <h3 style={{fontSize: '3em'}}><b>Hi !!!</b></h3>
                <p style={{fontSize: '1.5em'}}>
                Nice to see you around here, I am Pablo from Spain leaving at The
                Netherland ... and what I am doing so far away from my home?
                </p><p style={{fontSize: '1.5em'}}>
                Currently I am doing my second-year ot the EIT Digital master
                at Human-Computer Interaction & Desing, at the University of Twente,
                my first year was at Aalto University in Finland. I started this
                master to challenge my self and start a new journey at two different
                cities and in a new file that was not that related to my bachelor
                of Computer Science, at the Technical University of Madrid.
                </p>
                <h3 style={{fontSize: '3em'}}><b>Interest</b></h3>
            </div>
        </div>
      </div>
    )
  }
}

export default About;
