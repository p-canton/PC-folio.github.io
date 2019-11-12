import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Posti from './posti';
import HackathonGOC from './hackathonGOC';
import HackathonAD from './hackathonAD';
import HackathonWK from './hackathonWK';
import BetsFriends from './betsFriends';
import ScrollToTop from './ScrollToTop';


const Main = () => (
  <>
  <ScrollToTop />
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/posti" component={Posti} />
    <Route path="/hackathonGOC" component={HackathonGOC} />
    <Route path="/hackathonAD" component={HackathonAD} />
    <Route path="/hackathonWK" component={HackathonWK} />
    <Route path="/betsFriends" component={BetsFriends} />
  </Switch>
  </>
)

export default Main;
