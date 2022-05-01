import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Funding_team from './components/Funding_team'
import Team_2122 from './components/Team_2122'
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Seminars from './components/Seminars';
import Pm_sessions from './components/Pm_sessions';
import Alumni_talks from './components/Alumni_talks';
import Site_visits from './components/Site_Visits';
import Faculty from './components/Faculty';
import Contact from './components/contact';
import Faculty_talks from './components/Faculty_talks';
import Civil_day from './components/civil_day';
import Research_mentee from './components/Research_mentee';
import Workshops from './components/Workshops';
function App() {
  return (
    <Router>
    <div>
     
     <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/funding_team" component={Funding_team} />
        <Route path="/team_2122" component={Team_2122} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/gallery" component={ Gallery} />
        <Route path="/seminars" component={Seminars} />
        <Route path="/pm_sessions" component={Pm_sessions} />
        <Route path="/alumni_talks" component={Alumni_talks} />
        <Route path="/site_visits" component={Site_visits} />
        <Route path="/faculty" component={Faculty} />
        <Route path="/contact" component={Contact} />
        <Route path="/faculty_talks" component={Faculty_talks} />
        <Route path="/civil_day" component={Civil_day} />
        <Route path="/research_mentee" component={Research_mentee} />
        <Route path="/workshops" component={Workshops} />
      </Switch>
     <Footer/>
    </div>
  </Router>
  );
}

export default App;
