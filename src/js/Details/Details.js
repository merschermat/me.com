import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div id="Details" className="row offset-1 col-lg-10 offset-1 center ">
        <div>
        <h2>Idiomas</h2> 
        <ul>
        <li>Portugues(Lingua nativa) - Ótimo dominio</li>
        <li>Ingles - Ingles avançado</li>
        </ul>
        <h2>Interesses</h2>
        <ul>
        <li>Jogos Online</li>
        <li>Desenvolvimento Web</li>
        <li>Avanço de tecnologias</li>
        <li>Astronomia</li>
        <li>Futebol</li>
        </ul>
        <h2>
          Formação
        </h2>
        <ul>
        <li><div>Ensino Médio completo : 2015 - Etec Pedro D'Arcadia Neto
        Assis-São Paulo</div>
        </li>
        <li><div>Cursando Ensino Superior : 2019 - Engenharia de Software na Universidade Tecnologica Federal do Paraná </div>
        </li>
        </ul>
        <h2>Atividades desenvolvidas</h2>
        -
        </div> 
        </div>
    );
  }
}

export default Details;