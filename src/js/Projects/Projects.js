import React, { Component } from 'react';
import './Projects.css';
import Card from '../Card/Card.jsx'
class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="row offset-1 col-lg-10 offset-1 center">
        <div className="col-lg-12 center">
          <h1 style={{textAlign: "center"}}>Alguns projetos que participei</h1>
            <Card></Card>
        </div>

      </div>
    );
  }
}

export default Projects;