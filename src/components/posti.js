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
              <i class="fa fa-caret-left"></i>  Posti</h1>
              <p style={{display: 'inline', paddingLeft: '2em', paddingRight: '1em'}}>
              (2019 , Helsinki.)</p>
            </Link>
        </Navigation>
        <div>
          <div className="HalfLeft">
                <p>Project collaboration between Aalto University, Posti as the client and
                Vincit as the company. We were a team of 5 students and 2 Vincit Designer that
                the main task was to come up with an idea and design to improve Posti services.
                During this month we went through all the design process, information research,
                finding the idea and created the first prototype. The final result was a
                detachable parcel that can change their size depending on the size of the package
                connected to Posti app.</p>
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
