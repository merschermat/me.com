import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header fixed-top">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto center">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projetos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contato</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mais
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Interesses</a>
                    <a className="dropdown-item" href="#">Idiomas</a>
                    <a className="dropdown-item" href="#">Formação</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Atividades desenvolvidas</a>
                  </div>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <div className="navbar-nav ">
                  <a className="nav-link" href="#">Me siga!</a>
                </div>
              </form>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
