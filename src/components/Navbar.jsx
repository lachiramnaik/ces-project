import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './stylesheet/navbar.css'
import img from './images/home/logo.png'
import './Functions'

export class Navbar extends Component {
  render() {
    return <div>
      <>
        {/* Mobile menu */}
        <nav className="navbar navbar-expand-lg fixed-top " id='navbar'>
          <div className="container-fluid">

            {/* responsive menu*/}
            <div className='responsive-navigation'>
              <button className="btn menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <i className="bi bi-list"></i>
              </button>

              <div className="offcanvas offcanvas-start"  tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Civil Engineering Society </h5>
                  <button  className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <div>


                    <ul className="navbar-nav ">
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <NavLink exact activeClassName="active_class" to="/" className='nav-link'>Home</NavLink>
                      </li>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <NavLink exact activeClassName="active_class" to="/about" className='nav-link'> About</NavLink>
                      </li>







                      <li className="nav-item">
                        <p>
                          <p className="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Activities +
                          </p>

                        </p>
                        <div className="collapse" id="collapseExample">
                          <div className="card card-body">


                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="/seminars" className="dropdown-item">Seminars</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="#" className="dropdown-item">CERSD</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="/pm_Sessions" className="dropdown-item">PM Sessions</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="/alumni_talks" className="dropdown-item">Alumni talks</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="/site_visits" className="dropdown-item">Site visits</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="faculty_talks" className="dropdown-item">Faculty talks</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="civil_day" className="dropdown-item">Civil day</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="research_mentee" className="dropdown-item">Research-mentee</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="workshops" className="dropdown-item">Workshops and conferences</NavLink></li>


                          </div>
                        </div>
                      </li>


                      <li className="nav-item">
                        <p>
                          <a className="nav-link" data-bs-toggle="collapse" href="#collapseExamples" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Team +
                          </a>

                        </p>
                        <div className="collapse" id="collapseExamples">
                          <div className="card card-body">

                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="team_2122" className="dropdown-item">Team 2021-2022</NavLink></li>
                            <li data-bs-dismiss="offcanvas"><NavLink exact activeClassName="active_class" to="funding_team" className="dropdown-item">Founding Team</NavLink></li>


                          </div>
                        </div>
                      </li>




                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <NavLink exact activeClassName="active_class" to="/achievements" className='nav-link'> Achievements</NavLink>

                      </li>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <NavLink exact activeClassName="active_class" to="/gallery" className='nav-link'>Gallary</NavLink>

                      </li>
                      <li className="nav-item" data-bs-dismiss="offcanvas">
                        <NavLink exact activeClassName="active_class" to="/contact" className='nav-link'>Contact Us</NavLink>

                      </li>

                    </ul>

                  </div>

                </div>
              </div>
            </div>
            {/* responsive menu*/}



            {/* website menu */}
            <a className="navbar-brand" href="/"><img src={img}></img></a>
            {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>*/}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink exact activeClassName="active_class" to="/" className='nav-link'>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact activeClassName="active_class" to="/about" className='nav-link'> About</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Activities
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                   
               
                  <li><NavLink exact activeClassName="active_class" to="/seminars" className="dropdown-item">Seminars</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="#" className="dropdown-item">CERSD</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="/pm_Sessions" className="dropdown-item">PM Sessions</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="/alumni_talks" className="dropdown-item">Alumni talks</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="/site_visits" className="dropdown-item">Site visits</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="faculty_talks" className="dropdown-item">Faculty talks</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="civil_day" className="dropdown-item">Civil day</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="research_mentee" className="dropdown-item">Research-mentee</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="workshops" className="dropdown-item">Workshops and conferences</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Team
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  
                  <li><NavLink exact activeClassName="active_class" to="team_2122" className="dropdown-item">Team 2021-2022</NavLink></li>
                            <li><NavLink exact activeClassName="active_class" to="funding_team" className="dropdown-item">Founding Team</NavLink></li>

                  </ul>
                </li>
               
                <li className="nav-item">
                        <NavLink exact activeClassName="active_class" to="/achievements" className='nav-link'> Achievements</NavLink>

                      </li>
                      <li className="nav-item">
                        <NavLink exact activeClassName="active_class" to="/gallery" className='nav-link'>Gallary</NavLink>

                      </li>
                      <li className="nav-item">
                        <NavLink exact activeClassName="active_class" to="contact" className='nav-link'>Contact Us</NavLink>

                      </li>

              </ul>
            </div>
          </div>
        </nav>











      </>
    </div>;
  }
}

export default Navbar;
