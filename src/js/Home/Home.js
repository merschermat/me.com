import React, { Component } from 'react';
import me from './eu.jpg'
import './Home.css';
class Home extends Component {
  render() {
    return (
      <div id="Home" className="row offset-1 col-lg-10 offset-1 center ">
        <img id="me" src={me} alt="Uma foto minha"/>
        <div className="text col-lg-7 ">
          Meu nome é Mateus Merscher Baltazar, tenho 20 anos de idade, moro em Conélio Procópio - PR e eu sou estudante do curso de Engenharia de Software na UTFPR. 
          Trabalho como Web developer na empresa <a href="https://www.facebook.com/YanktonTI/">Yankton Technologies</a>
          <div className="row col-lg-12">
          <button className="btn btn-outline-success">Meu currículo</button>
        </div>
        </div>

      </div>
    );
  }
}

export default Home;