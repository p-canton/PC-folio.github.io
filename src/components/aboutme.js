import React, { Component } from 'react';
import PabloPicture from './images/PabloPicture.svg';

class About extends Component {
  render() {
    return(
      <div style={{padding: '2em', paddingTop: '4em', paddingLeft: '10%', paddingRight: '10%', paddingBottom:'6em'}}>
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
                  <i class="fa fa-envelope fa-lg" style={{color: 'white', fontSize:'3em', padding: '0.5em'}}></i></a></p>
              <p style={{display: 'inline'}}><a className="LinkStyle" href="tel:+34676328005">
                  <i class="fa fa-phone fa-lg" style={{color: 'white', fontSize:'3em', padding: '0.5em'}}></i></a></p>
              <p style={{display: 'inline'}}><a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
                  <i class="fa fa-linkedin fa-lg" style={{color: 'white', fontSize:'3em', padding: '0.5em'}}></i></a></p>
              <p style={{display: 'inline'}}><a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
                  <i class="fa fa-github fa-lg" style={{color: 'white', fontSize:'3em', padding: '0.5em'}}></i></a></p>
            </div>
        </div>
          <div className="ColRight">
            <div style={{paddingLeft: '2em'}}>
                <h3 style={{fontSize: '3em'}}><b>Hi !!!</b></h3>
                <p style={{fontSize: '1.5em'}}>
                Nice to see you around here, I am Pablo Cantón from Spain Currently
                leaving at The Netherland ... and what I am doing so far away from my home?
                </p><p style={{fontSize: '1.5em'}}>
                I am doing my second year in the EIT Digital master at Human-Computer
                Interaction & Design, at the University of Twente; my first year was
                at Aalto University in Finland. I make a hard decistions and leave my work to
                start this master to challenge myself and beging a new journey at two different countries and in a new file
                that was not that related to my bachelor of Computer Science, at the Technical
                University of Madrid. Also, going through this experience I am able to combine
                my interest in technology, design and entrepreneurship, while I was
                able to make a lot of new friends around the world.
                </p>
                <p style={{fontSize: '1.5em'}}>
                 During this new stage of my life, I was able to learn more from
                 a designer perspective and at the same time have the opportunity
                 to work with several companies and startups. My first year was
                 focused on designing and entrepreneur, while this second year I
                 have the opportunity to combine technical and design lectures.
                 We able to combine these two different files makes me feel really
                 positive and encourage me to try new challenges and search for a
                 job that helps me to combine technology and design, creating new
                 ideas and projects.
                </p>
                <div>
                  <h3 style={{fontSize: '3em', display: 'inline', paddingRight: '1em'}}><b>A bit of me</b></h3>
                  <h3 style={{fontSize: '3em', display: 'inline'}}><i class="fa fa-plane" style={{color: '#0097a7', padding: '1em'}}></i></h3>
                  <h3 style={{fontSize: '3em', display: 'inline'}}><i class="fa fa-cutlery" style={{color: '#0097a7', padding: '1em'}}></i></h3>
                  <h3 style={{fontSize: '3em', display: 'inline'}}><i class="fa fa-book" style={{color: '#0097a7', padding: '1em'}}></i></h3>
                  <h3 style={{fontSize: '3em', display: 'inline'}}><i class="fa fa-laptop" style={{color: '#0097a7', padding: '1em'}}></i></h3>
                  <h3 style={{fontSize: '3em', display: 'inline'}}><i class="fa fa-video-camera" style={{color: '#0097a7', padding: '1em'}}></i></h3>
                </div>
                <p style={{fontSize: '1.5em'}}>
                Is true that works is something important, but is not everything
                in our lives. I am a positive person that loves to have new challenges
                and find if I can exceed my limits. But this does not mean that I do
                not like to enjoy other things, in my free time I always try to leave
                my work aside and enjoy the time with my friends. And what kind of things I
                like to do? in my free time, I go to the cinema or maybe watch a good
                TVshow, but usually, I prefer to spend time outside and do some sport
                at the gym. Also, I love travelling to new cities and countries and
                meanwhile be able to meet new people al around the world. Some of
                my hobbies that enjoy doing are cooking, try to design new concepts,
                create new stupid ideas, read about technology and learn about new advantages.
                </p>
                <p style={{fontSize: '1.5em', position: 'absolute', right: '15%', paddingTop: '2em'}}><b>
                PD: coffe is always importan :D
                </b></p>
            </div>
        </div>
      </div>
    )
  }
}

export default About;
