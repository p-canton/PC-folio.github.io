import React, { Component } from 'react';
import Pablopicture from './images/PabloPicture.svg';
import { ProgressBar} from 'react-mdl';
import Bar100 from './images/Bar100.svg';
import Bar85 from './images/Bar85.svg';
import DocPDF from './Documents/PabloCanton-CV.pdf';

class Resume extends Component {
  render() {
    return(
      <div style={{paddingTop: '7em', paddingBottom: "8em", paddingLeft: '10%', paddingRight: '10%', overflowX: 'inherit'}}>
        <div className="ColRight ScrollBar" style={{paddingBottom: "5em",}}>
        <h1 className="Tittle2" style={{textAlign: 'left', top: '0'}}>Experience</h1>
        <h1 className="Tittle2" style={{textAlign: 'left'}}>Jobs</h1>
        <div>
            <h3 style={{display: 'inline'}}>Slush</h3>
              <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em'}}>
              (Dec 2018 , Helsinki.)</p>
              <p style={{paddingRight: '2em'}}><b>Volunteer, organizing and helping during the event</b></p>
              <details style={{paddingBottom: '1em', width: '95%'}}>
                <summary>More information</summary>
                <p style={{paddingTop: '1em', paddingLeft: '1em'}}>Slush is a not-for-profit event that takes place in Helsinki,
                with the purpose of help startups or new technologies to facilitate
                meetings with investors and create a worldwide startup community.
                During the three days of the event, I help at the sauna area, a place
                where the event attendees can go to relax and enjoy a  Finish experience.
                I perform tasks such as attend the costumers, make sure that the
                place keeps its peaceful environment and organise the task between
                the rest of the volunteers.</p>
                <p style={{paddingLeft: '0.5em'}}><b>Why did I decide to take part in this event?</b></p>
                <p style={{paddingLeft: '1em'}}>Since I started my bachelor at Computer Scicnec I was interested
                in technology and the world of the startups. For that reason, I
                decided to enroll as a volunteer in this event and has de opportunity
                to experience this huge event.</p>
              </details>
            <h3 style={{display: 'inline'}}>Everis</h3>
              <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em'}}>
              (Sep 2017 - Jul 2018, Madrid.)</p>
              <p style={{paddingRight: '2em'}}><b>Internship managing the databases of the client,
              Grupo IFA.</b></p>
                <details style={{paddingBottom: '1em', width: '95%'}}>
                  <summary>More information</summary>
                  <p style={{paddingTop: '1em', paddingLeft: '1em'}}>Everis and
                  NTT DATTA company is a technology consultancy with multiple
                  sedes around the word. During the internship, I was designate
                  to work with Grupo IFA, one of their clients that have a strong
                  position in the retail market in Spain. The main objective of
                  the project consists of migrating all the data of their currents
                  database and combine it in a web application with its suppliers
                  and associates database. For this period of time in the company,
                  I was assigned technical tasks such as programming in SQL, JavaScript,
                  CSS and HTML all inside the Oracle ecosystem. As none technical
                  task I was assigned conducting performance test with the final users,
                  redesign interface from the web app, participating in meetings with
                  the client and writing documentations. </p>
                  <p style={{paddingLeft: '0.5em'}}><b>What I learn?</b></p>
                  <p style={{paddingLeft: '1em'}}>This was my first experience
                  working inside a big company and at the same time deal with a
                  client. Spending all this month working in this environment give
                  me the Skills to work deal with a client and at the same time
                  get experience working with a team at a big company. Also, I
                  improve my technical knowledge such manage Databases using
                  Oracle and web UI design.</p>
              </details>
            <h3 style={{display: 'inline'}}>Cortés de Moraga</h3>
              <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em'}}>
              (Jun 2016 - Jul 2017, Madrid.)</p>
              <p><b>Work as a waiter for puntual events.</b></p>
              <details style={{paddingBottom: '1em', width: '95%'}}>
                <summary>More information</summary>
                <p style={{paddingTop: '1em', paddingLeft: '1em'}}>While I was doing my bachelor
                degree in Computer Science I decided to find a temporary job to
                start to earn some money to be more independent of my family. I
                work as a waiter in social events, carry out the task that I was
                assigned and keep a good atmosphere for the clients.</p>
            </details>
          <h1 className="Tittle2" style={{textAlign: 'left'}}>Education</h1>
          <h3 style={{display: 'inline'}}>EIT Digital Master’s - Human Computer Interaction & Design</h3>
            <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em'}}>
              (Sep 2018 - Jun 2020.)</p>
              <p><b>European master in two different Universities, combining
              technology design, technical studies and business aspects.</b></p>
              <details style={{paddingBottom: '1em', width: '95%'}}>
                <summary>More information</summary>
                <p style={{paddingTop: '1em', paddingLeft: '1em'}}>The EIT Digital Master’s
                degree HCID is an interdisciplinary programme where our User-Centred Design
                 approach places the users at the centre of the design process,
                 by combining human aspects to technological and business aspects.</p>
                 <p style={{paddingTop: '1em', paddingLeft: '1em'}}>
                 <b> - 1st year University of Aalto, Finland</b></p>
                 <p style={{paddingLeft: '1em'}}>The first
                 year at Aalto university the master specialise at
                 Design services and business-related with entrepreneurship. The lectures
                 that I learn and enjoy most were "Design of WWW services",
                 "User Interface Construction" and "Digital Business Management".</p>
                 <p style={{paddingTop: '1em', paddingLeft: '1em'}}>
                 <b> - 2nd year University of Twente, Netherlands</b></p>
                 <p style={{paddingLeft: '1em'}}>The second
                 year at university of Twente the master specialise at
                 Intelligent systems and business-related with entrepreneurship. The lectures
                 that I learn and enjoy most were "Natural Language Processing",
                 "Brand Management" and "Data Science".</p>
            </details>
            <h3 style={{display: 'inline'}}>Computer Science</h3>
              <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em'}}>
              (Sep 2013 - Jun 2018.)</p>
              <p><b>Bachelor degree at the Polytechnic University of Madrid, Spain</b></p>
              <details style={{paddingBottom: '1em', width: '95%'}}>
              <summary>More information</summary>
                <p style={{paddingLeft: '1em'}}> During these four years of degree I lear all my
                Knowledge related scientific, technological and socio-economic skills,
                trained to practice as developers and implementers of information
                and communications technologies (ICT) within the field of computer
                science and engineering. The lectures that I learn and enjoy most were
                "Service-Oreinted Computing", "Human Computer-Interaction" and "Computer Structure".</p>
          </details>
            <h3 style={{display: 'inline'}}>High School</h3>
              <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em',
              Color:'#666666'}}>(Sep 2011 - Jun 2013.)</p>
                <p><b>Technological specialisation at the international Brains School S.L., Spain</b></p>
                <details style={{paddingBottom: '1em', width: '95%'}}>
                <summary>More information</summary>
                  <p style={{paddingLeft: '1em'}}> This was the first time I was
                  able to choose my path during my studies and prepare my selve
                  for the university. I end up choosing to study the technological
                  specialisation, where I focus more on lectures as Maths, Physics
                  or Chemistry.</p>
            </details>
          </div>
          </div>
          <div className="ColLeft PosFixR ScrollBar" style={{right: '10%'}}>
            <h3 style={{color: 'white', fontSize:'2em', textAlign: 'center'}}>
            Skills</h3>
              <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}>
              <b>Programs</b></p>
              <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}>
              Java  - JavaScript - C - SQL - HTML - CSS - Python - Ciao</p>
              <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}>
              <b>Software</b></p>
              <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}>
              Android studio - React - React-native - Balsamiq - Matlab -
              Firebase - Maple - Oracle - Unix - Figma - Bash - Office - Eclipse</p>
            <h3 style={{color: 'white', fontSize:'2em', textAlign: 'center'}}>
            Language</h3>
              <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}>
              <b>Spanish - NS (100%)</b></p>

              <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}>
              <img className="LogoPCMain" src={Bar100} style={{paddingTop: '0em'}}/></p>

              <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}><b>English - C1 ( 85%)</b></p>
              <p style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em'}}>
              <img className="LogoPCMain" src={Bar85} style={{paddingTop: '0em'}}/></p>

              <p style={{paddingTop: '2em'}}><a href={DocPDF} download="Pablo Cantón CV" style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em', textDecoration: 'none'}}>
              <i class="fa fa-arrow-circle-down fa-lg"></i>      Download Resume</a></p>
              <p ><a href={DocPDF} download="Pablo Cantón CV" style={{color: '#f3f3f3', fontSize:'1.5em',
              paddingLeft: '1em', paddingRight: '1em', textDecoration: 'none'}}>
              <i class="fa fa-arrow-circle-down fa-lg"></i>      Download Portfolio</a></p>
          </div>
      </div>
    )
  }
}

export default Resume;
