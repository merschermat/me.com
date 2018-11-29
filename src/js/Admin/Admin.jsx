import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from '../Header'
import Bio from './components/Bio'
import Curriculum from './components/Curriculum'
import Degree from './components/Degree'
import Idiom from './components/Idiom'
import Interest from './components/Interest'
import Links from './components/Link'
import MinBio from './components/MinBio'
import More from './components/More'
import Photo from './components/Photo'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Work from './components/Work'
import Wellcome from './components/Welcome'
import './Admin.css';

class Admin extends Component {
  counting = 5;
  user = "Mateus"
  style = {
    "padding-left" : 15
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (

      <Router>
        <div id="Admin" className="row cemp" style={this.style}>
          <Header></Header>
          <div className="col-2">
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Bio" >Bio</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>            
                <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Curriculum" >Curriculum</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Degree" >Degree</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Idiom" >Idiom</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Interest" >Interest</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Link" >Link</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/MinBio" >MinBio</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/More" >More</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Photo" >Photo</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Portfolio" >Portfolio</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Skills" >Skills</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                
                <Link to="/admin/Work" >Work</Link>

                <span class="badge badge-primary badge-pill list-group-item-success" >{this.counting}</span>
              </li>

            </ul>
          </div>
          <div className="col-10">
            <Route path="/admin/home"  component={Wellcome} user={this.user}></Route>
            <Route path="/Admin/Bio" component={Bio}></Route>
            <Route path="/Admin/Curriculum" component={Curriculum}></Route>
            <Route path="/Admin/Degree" component={Degree}></Route>
            <Route path="/Admin/Idiom" component={Idiom}></Route>
            <Route path="/Admin/Interest" component={Interest}></Route>
            <Route path="/Admin/Link" component={Links}></Route>
            <Route path="/Admin/MinBio" component={MinBio}></Route>
            <Route path="/Admin/More" component={More}></Route>
            <Route path="/Admin/Photo" component={Photo}></Route>
            <Route path="/Admin/Portfolio" component={Portfolio}></Route>
            <Route path="/Admin/Skills" component={Skills}></Route>
            <Route path="/Admin/Work" component={Work}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default Admin;