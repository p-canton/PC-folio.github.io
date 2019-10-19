import React, { Component } from 'react';
import { Tabs, Tab, Button} from 'react-mdl';
import Posti from './images/Posti.jpg';
import HackathonGOC from './images/HackathonGOC.jpg';
import CodeWeek from './images/CodeWeek.jpg';
import Adidas from './images/Adidas.jpg';
import BetsFriends from './images/BetsFriends.jpg';
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
        <div style={{padding: '3em', paddingTop: '3em', paddingBottom: '8em', paddingLeft: '10%', paddingRight: '10%'}}>
          <h1 className="Tittle2"
            style={{textAlign: 'left', paddingTop: '1.2em'}}>
            All projects</h1>

            <div className="ProjectTexPic" style={{paddingTop: '1em'}}>
              <Navigation style={{right: '0'}}>
                  <Link to="/posti"><img className="ProjectPic" src={Posti}/></Link>
              </Navigation>
              <div style={{position: 'absolute', top: '2em', left: '2em', paddingRight: '2em'}}>
                <Navigation style={{right: '0'}}>
                  <Link to="/posti"><h3 style={{display: 'inline', color: 'white'}}><b>Posti</b></h3>
                  <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em', color: 'white'}}>
                  <b>(2019 , Helsinki.)</b></p>
                  </Link>
                </Navigation>
              </div>
              <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                <Navigation style={{right: '0'}}>
                  <Link to="/posti"><h6 className="LinkStyle" style={{color: 'white'}}>
                  <i class="fa fa-plus" style={{color: '#ffab40ff'}}></i>  Information</h6></Link>
                </Navigation>
                </div>
              </div>

                <div className="ProjectTexPic" style={{paddingTop: '1em'}}>
                  <Navigation style={{right: '0'}}>
                      <Link to="/hackathonAD"><img className="ProjectPic" src={Adidas}/></Link>
                  </Navigation>
                  <div style={{position: 'absolute', top: '2em', left: '2em', paddingRight: '2em'}}>
                    <Navigation style={{right: '0'}}>
                      <Link to="/hackathonAD"><h3 style={{display: 'inline', color: 'white'}}><b>Ucode by Adidas</b></h3>
                      <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em', color: 'white'}}>
                      <b>Mar 2018. Zaragoza, Spain.</b></p>
                      </Link>
                    </Navigation>
                  </div>
                  <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                    <Navigation style={{right: '0'}}>
                      <Link to="/hackathonAD"><h6 className="LinkStyle" style={{color: 'white'}}>
                      <i class="fa fa-plus" style={{color: '#ffab40ff'}}></i>  Information</h6></Link>
                    </Navigation>
                </div>
              </div>

              <div className="ProjectTexPic" style={{paddingTop: '1em'}}>
                <Navigation style={{right: '0'}}>
                    <Link to="/hackathonWK"><img className="ProjectPic" src={CodeWeek}/></Link>
                </Navigation>
                <div style={{position: 'absolute', top: '2em', left: '2em', paddingRight: '2em'}}>
                  <Navigation style={{right: '0'}}>
                    <Link to="/hackathonWK"><h3 style={{display: 'inline', color: 'white'}}><b> Code Weekend</b></h3>
                    <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em', color: 'white'}}>
                    <b>May 2017, Madrid.</b></p>
                    </Link>
                  </Navigation>
                </div>
                <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                  <Navigation style={{right: '0'}}>
                    <Link to="/hackathonWK"><h6 className="LinkStyle" style={{color: 'white'}}>
                    <i class="fa fa-plus" style={{color: '#ffab40ff'}}></i>  Information</h6></Link>
                  </Navigation>
              </div>
            </div>

            <div className="ProjectTexPic" style={{paddingTop: '1em'}}>
              <Navigation style={{right: '0'}}>
                  <Link to="/hackathonGOC"><img className="ProjectPic" src={HackathonGOC}/></Link>
              </Navigation>
              <div style={{position: 'absolute', top: '2em', left: '2em', paddingRight: '2em'}}>
                <Navigation style={{right: '0'}}>
                  <Link to="/hackathonGOC"><h3 style={{display: 'inline', color: 'white'}}><b> Game of Cloud</b></h3>
                  <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em', color: 'white'}}>
                  <b>Mov 2017, Madrid, Spain.</b></p>
                  </Link>
                </Navigation>
              </div>
              <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                <Navigation style={{right: '0'}}>
                  <Link to="/hackathonGOC"><h6 className="LinkStyle" style={{color: 'white'}}>
                  <i class="fa fa-plus" style={{color: '#ffab40ff'}}></i>  Information</h6></Link>
                </Navigation>
            </div>
          </div>
          <div className="ProjectTexPic" style={{paddingTop: '1em'}}>
            <Navigation style={{right: '0'}}>
                <Link to="/betsFriends"><img className="ProjectPic" src={BetsFriends}/></Link>
            </Navigation>
            <div style={{position: 'absolute', top: '2em', left: '2em', paddingRight: '2em'}}>
              <Navigation style={{right: '0'}}>
                <Link to="/BetsFriends"><h3 style={{display: 'inline', color: 'white'}}><b> BetsFriends</b></h3>
                <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em', color: 'white'}}>
                <b>Sep 2018, Helsinki, Finland.</b></p>
                </Link>
              </Navigation>
            </div>
            <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
              <Navigation style={{right: '0'}}>
                <Link to="/betsFriends"><h6 className="LinkStyle" style={{color: 'white'}}>
                <i class="fa fa-plus" style={{color: '#ffab40ff'}}></i>  Information</h6></Link>
              </Navigation>
          </div>
        </div>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div style={{padding: '3em', paddingTop: '3em', paddingBottom: '10em', paddingLeft: '10%', paddingRight: '10%'}}>
          <h1 className="Tittle2"
            style={{textAlign: 'left', paddingTop: '1.2em'}}>
            Technical projects</h1>

          <div className="ProjectTexPic" style={{paddingTop: '1em'}}>
            <Navigation style={{right: '0'}}>
                <Link to="/hackathonGOC"><img className="ProjectPic" src={HackathonGOC}/></Link>
            </Navigation>
            <div style={{position: 'absolute', top: '2em', left: '2em', paddingRight: '2em'}}>
              <Navigation style={{right: '0'}}>
                <Link to="/hackathonGOC"><h3 style={{display: 'inline', color: 'white'}}><b>Game of cloud</b></h3>
                <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em', color: 'white'}}>
                <b>M.</b></p>
                </Link>
              </Navigation>
            </div>
            <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
              <Navigation style={{right: '0'}}>
                <Link to="/hackathonGOC"><h6 className="LinkStyle" style={{color: 'white'}}>
                <i class="fa fa-plus" style={{color: '#ffab40ff'}}></i>  Information</h6></Link>
              </Navigation>
          </div>
        </div>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div style={{padding: '3em', paddingTop: '3em', paddingBottom: '10em', paddingLeft: '10%', paddingRight: '10%'}}>
          <h1 className="Tittle2"
            style={{textAlign: 'left', paddingTop: '1.2em'}}>
            Design projects</h1>

            <div className="ProjectTexPic" style={{paddingTop: '1em'}}>
              <Navigation style={{right: '0'}}>
                  <Link to="/posti"><img className="ProjectPic" src={Posti}/></Link>
              </Navigation>
              <div style={{position: 'absolute', top: '2em', left: '2em', paddingRight: '2em'}}>
                <Navigation style={{right: '0'}}>
                  <Link to="/posti"><h3 style={{display: 'inline', color: 'white'}}><b>Posti</b></h3>
                  <p style={{display: 'inline', paddingLeft: '1em', paddingRight: '1em', color: 'white'}}>
                  <b>(2019 , Helsinki.)</b></p>
                  </Link>
                </Navigation>
              </div>
              <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                <Navigation style={{right: '0'}}>
                  <Link to="/posti"><h6 className="LinkStyle" style={{color: 'white'}}>
                  <i class="fa fa-plus" style={{color: '#ffab40ff'}}></i>  Information</h6></Link>
                </Navigation>
            </div>
          </div>
        </div>

      )
    } else if(this.state.activeTab === 3) {
      return (
        <div style={{padding: '3em', paddingTop: '3em', paddingBottom: '10em', paddingLeft: '10%', paddingRight: '10%'}}>
          <h1 className="Tittle2"
            style={{textAlign: 'left', paddingTop: '1.2em'}}>
            Personal projects</h1>
        </div>

      )
    }

  }

  render() {
    return(
      <div>
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
