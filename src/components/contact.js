import React, { Component } from 'react';
import Contacts from './images/Contacts.jpg';


class Contact extends Component {
  render() {
    return(
      <div style={{padding: '2em', paddingTop: '4em', paddingLeft: '10%', paddingRight: '10%'}}>
        <h1 className="Tittle2" style={{textAlign: 'left'}}>Contacts details</h1>
        <p>Do not hesitate, feel free to contact me and ask any question you have or
        take a look to my Linkedin or Github. </p>
        <div className="HalfLeft">
          <div style={{paddingLeft: '2em'}}>
            <a className="LinkStyle" href="mailto:pablocg1995@gmail.com">
            <h3><i class="fa fa-envelope"></i>  Email</h3></a>
            <p href="url" style={{paddingLeft: '2em'}}>
              <a className="LinkStyle" href="mailto:pablocg1995@gmail.com">
               pablocg1995@gmail.com
              </a></p>
            <a className="LinkStyle" href="tel:+34676328005">
            <h3><i class="fa fa-phone"></i> Phone</h3></a>
              <p style={{paddingLeft: '2em'}}><a className="LinkStyle" href="tel:+34676328005">
              +34 676 32 80 05
              </a></p>
          </div>
        </div>
        <div className="HalfRight">
          <div style={{paddingLeft: '2em'}}>
            <a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
            <h3><i class="fa fa-linkedin"></i>  Linkedin</h3></a>
              <p style={{paddingLeft: '2em'}}><a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
              www.linkedin.com/in/p-canton</a></p>
            <a className="LinkStyle" href="https://github.com/p-canton">
            <h3><i class="fa fa-github"></i>  Github</h3></a>
              <p style={{paddingLeft: '2em'}}><a className="LinkStyle" href="https://github.com/p-canton">
              https://github.com/p-canton</a></p>
          </div>
        </div>
        <div style={{paddingTop: '6em', paddingBottom: '6em'}}>
          <img className="ProjectPic" src={Contacts}/>
          <p style={{position: 'absolute', right: '11%'}}>Photo by Pablo Cantón (Mauritius Island)</p>
        </div>
      </div>
    )
  }
}

export default Contact;
