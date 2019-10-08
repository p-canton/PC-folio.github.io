import React, { Component } from 'react';
import Pablopicture from './images/PabloPicture.svg';
import { ProgressBar} from 'react-mdl';
import Bar100 from './images/Bar100.svg';
import Bar85 from './images/Bar85.svg';
import DocPDF from './Documents/PabloCanton-CV.pdf';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import ExPicture from './images/ExamplePhoto.jpg';

class Resume extends Component {
  render() {
    return(
      <div style={{padding: '2em', paddingTop: '7em'}}>
        <Navigation>
            <Link to="/projects">
              <h1 className="Tittle" style={{textAlign: 'left'}}>
              <i class="fa fa-caret-left"></i>  Posti</h1>
            </Link>
        </Navigation>
        <div>
          <div className="HalfLeft">
              <h3 style={{paddingLeft: '0.5em'}}>Tittle</h3>
              <p style={{paddingLeft: '2em'}}>Text</p>
          </div>
          <div className="HalfRight">
            <img className="ProjectPic" src={ExPicture}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume;
