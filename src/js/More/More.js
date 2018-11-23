import React, { Component } from 'react';
import curriculo from '../../CurriculumVitaeMateus.pdf'
class More extends Component {
  render() {
    return (
      <div id="Home" className="row offset-1 col-lg-10 offset-1 center ">
        <div className=" col-md-6">
        <h1 className="row">Biografia</h1>
        Meu nome é Mateus Merscher Baltazar, tenho 20 anos de idade, nasci na cidade de Assis, e morei em Maracaí-SP até os 18 anos de idadem, atualmente moro em Conélio Procópio - PR e eu sou estudante do curso de Engenharia de Software na UTFPR campos Cornélio Procópio. 
        Trabalho como desenvolvedor em uma empresa de soluções para a web chamada Yankton, ingressei na faculdade através do ENEM no ano de 2016 com previsão de conclusãod o curso no final de 2019. 
          
        </div>
        <div className="col-lg-6 ">
        <h1 className="row">Profissão</h1>
         Sou novo no mercado de trabalho, ingressei em uma empresa, em maio de 2018 como estagiario e permaneço nela, ao longo do tempo que estou na empresa, ja trabalhei em alguns projetos
         envolvendo tecnologias novas e mais antigas, tenho grande familiaridade com Javascript, e com tecnologias Front-end, mas tenho bom domínio com o Back-end em algumas linguagens como NodeJs e C#,
         no momento estou trabalhando como desenvolvedor na empresa <a href="https://www.facebook.com/YanktonTI/">Yankton Technologies</a>.
        </div>

      </div>
    );
  }
}

export default More;