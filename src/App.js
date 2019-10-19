import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Content } from 'react-mdl';
import LogoPCBW from '../src/components/images/LogoPCBW.svg';
import Main from './components/main';
import { Link } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends React.Component{
  componentDidMount() {
    this._div.scrollTop = 0
  }
  render() {
    return (
    <div ref={(ref) => this._div = ref}>
    <Layout className="Body">
          <div  className="NavBar">
            <Navigation>
                <Link to="/"><img className="Button HidePhone"
                src={LogoPCBW} style={{height: '2.5em'}}/></Link>

                <Link className="Button HidePhone" to="/resume"
                  style= {{fontWeight: 'bold', fontSize: '1.5em', color: 'black'}}>
                  Resume</Link>
                <Link className="Button HideScreen" to="/resume"
                  style= {{fontWeight: 'bold', fontSize: '1.2em', color: 'black'}}>
                  <i className="fa fa-briefcase fa-2x"></i></Link>

                <Link className="Button HidePhone" to="/aboutme"
                  style= {{fontWeight: 'bold', fontSize: '1.5em', color: 'black'}}>
                  About Me</Link>
                <Link className="Button HideScreen" to="/aboutme"
                  style= {{fontWeight: 'bold', fontSize: '1.2em', color: 'black'}}>
                  <i className="fa fa-user fa-2x"></i></Link>

                <Link class="HideScreen" to="/" style= {{fontWeight: 'bold'}}>
                  <img className="Button HideScreen" src={LogoPCBW}
                  style={{height: '2.2em', fontSize: '1.2em', color: 'black',
                  paddingLeft: '1.8em', paddingRight: '1.8em'}}/>
                </Link>

                <Link className="Button HidePhone" to="/projects"
                style= {{fontWeight: 'bold', fontSize: '1.5em', color: 'black'}}>
                  Projects</Link>
                  <Link className="Button HideScreen" to="/projects"
                  style= {{fontWeight: 'bold', fontSize: '1.2em', color: 'black'}}>
                  <i className="fa fa-file fa-2x"></i></Link>

                <Link className="Button HidePhone" to="/contact"
                style= {{fontWeight: 'bold', fontSize: '1.5em', color: 'black'}}>
                  Contact</Link>
                  <Link className="Button HideScreen" to="/contact"
                  style= {{fontWeight: 'bold', fontSize: '1.2em', color: 'black'}}>
                  <i className="fa fa-phone fa-2x"></i></Link>
            </Navigation>
          </div>
            <Main/>
    </Layout>
</div>

    );
  }
}

export default App;
