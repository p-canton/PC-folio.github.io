import React, { Component } from 'react';
import { Tabs, Tab, Button} from 'react-mdl';
import ExPicture from './images/ExamplePhoto.jpg';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div style={{padding: '3em', paddingTop: '3em', paddingBottom: '5em'}}>
          <h1 className="Tittle2"
            style={{textAlign: 'left', paddingTop: '1.2em'}}>
            All projects</h1>
          <div className="Container">
            <div style={{ borderRadius: '1em',
            textAlign: 'left'}}>
                <div>
                  <div className="HalfLeft">
                    <div>
                    <h3 style={{display: 'inline'}}>Posti</h3>
                    <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em'}}>
                    (2019 , Helsinki.)</p>
                      <p>Project collaboration between Aalto University, Posti as the client and
                      Vincit as the company. We were a team of 5 students and 2 Vincit Designer that
                      the main task was to come up with an idea and design to improve Posti services.
                      During this month we went through all the design process, information research,
                      finding the idea and created the first prototype. The final result was a
                      detachable parcel that can change their size depending on the size of the package
                      connected to Posti app.</p>
                      <Navigation style={{right: '0'}}>
                          <Link to="/posti"><h6 className="LinkStyle">
                          <i class="fa fa-plus" style={{color: '#ffab40ff'}}></i>  Information</h6></Link>
                      </Navigation>
                    </div>
                  </div>
                  <div className="SpecialSpace"/>
                  <div className="HalfRight">
                      <img className="ProjectPic" style={{paddingRight:'0'}} src={ExPicture}/>
                  </div>
                </div>
            </div>

            <div style={{ borderRadius: '1em',
            textAlign: 'left'}}>
            <div>
              <div className="HalfLeft">
                <img className="ProjectPic HidePhone" src={ExPicture}/>
              </div>
              <div className="SpecialSpace"/>
              <div className="HalfRight">
                <div className="SpecialPad">
                    <div>
                        <h3 style={{display: 'inline'}}>Elias</h3>
                        <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em'}}>
                        (2019 , Helsinki.)</p>
                        <Navigation >
                            <Link to="/posti">Posti</Link>
                        </Navigation>
                          <p><b>Text.</b></p>
                      </div>
                      <img className="ProjectPic HideScreen" src={ExPicture}/>
                    </div>
                  </div>
              </div>

            </div>

            <div style={{backgroundColor: 'white', borderRadius: '1em',
            textAlign: 'left', paddingLeft: '2em'}}>
              <h3>Tekla</h3>
                <p>2019, Helsinki</p>
                <p><b>Text</b></p>
            </div>

            <div style={{backgroundColor: 'white', borderRadius: '1em',
            textAlign: 'left', paddingLeft: '2em'}}>
            <h3>Verdesten</h3>
              <p>2019, Enschede</p>
                <p><b>Text</b></p>
            </div>

            <div style={{backgroundColor: 'white', borderRadius: '1em',
            textAlign: 'left', paddingLeft: '2em'}}>
              <h3>Hackathon</h3>
                <p>2019, Enschede</p>
                <p><b>Text.</b></p>
            </div>

          </div>
        </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div style={{padding: '3em', paddingTop: '3em', paddingBottom: '5em'}}>
          <h1 className="Tittle2"
            style={{textAlign: 'left', paddingTop: '1.2em'}}>
            Technical projects</h1>
          <div className="Container">

            <div style={{backgroundColor: 'white', borderRadius: '1em',
            textAlign: 'left', paddingLeft: '2em'}}>
              <h3>Posti</h3>
                <p>2019, Helsinki</p>
                <p><b>Text</b></p>
            </div>

            <div style={{backgroundColor: 'white', borderRadius: '1em',
            textAlign: 'left', paddingLeft: '2em'}}>
                <h3>Elias</h3>
                  <p>2019, Helsinki</p>
                  <p><b>Text</b></p>
            </div>

            <div style={{backgroundColor: 'white', borderRadius: '1em',
            textAlign: 'left', paddingLeft: '2em'}}>
              <h3>Tekla</h3>
                <p>2019, Helsinki</p>
                <p><b>Text</b></p>
            </div>

            <div style={{backgroundColor: 'white', borderRadius: '1em',
            textAlign: 'left', paddingLeft: '2em'}}>
              <h3>Tekla</h3>
                <p>2019, Helsinki</p>
                <p><b>Text</b></p>
            </div>
          </div>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div style={{padding: '3em'}}>
          <h1 className="Tittle2" style={{textAlign: 'left', paddingTop: '1.2em'}}>Design</h1>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div style={{padding: '3em'}}>
          <h1 className="Tittle2" style={{textAlign: 'left', paddingTop: '1.2em'}}>Personal</h1>
        </div>
      )
    }

  }

  render() {
    return(
      <div >
        <Tabs activeTab={this.state.activeTab} className="ProjecBar"
        onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{color: 'black'}}>All</Tab>
          <Tab style={{color: 'black'}}>Technical</Tab>
          <Tab style={{color: 'black'}}>Design</Tab>
          <Tab style={{color: 'black'}}>Personal</Tab>
        </Tabs>
              <div className="content" style={{position: 'bottom'}}>{this.toggleCategories()}</div>


      </div>
    )
  }
}

export default Projects;
