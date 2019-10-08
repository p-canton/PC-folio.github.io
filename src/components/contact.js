import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return(
      <div style={{padding: '2em', paddingTop: '4em'}}>
        <h1 className="Tittle2" style={{textAlign: 'left'}}>Contacts details</h1>
          <h3>Email</h3>
            <p href="url">
              <a className="LinkStyle" href="mailto:pablocg1995@gmail.com">
                <i class="fa fa-envelope fa-lg"></i>     pablocg1995@gmail.com
              </a></p>
          <h3>Phone</h3>
            <p><a className="LinkStyle" href="tel:+34676328005">
              <i class="fa fa-phone fa-lg"></i>     +34 676 32 80 05
            </a></p>
          <h3>Linkedin</h3>
            <p><a className="LinkStyle" href="https://www.linkedin.com/in/p-canton/">
            <i class="fa fa-linkedin fa-lg"></i>     Pablo Cantón Linkedin</a></p>
      </div>
    )
  }
}

export default Contact;
