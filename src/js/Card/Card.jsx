import React, { Component, CreateElement } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="row col-md-12">
            <div className="card col-md-4">
                <img className="card-img-top" src='http://andre-sa.com/img/pecas/moovieplay_03.jpg'></img>
                <div className="card-body" >
                    <h5 className="card-title">Moovieplay</h5>
                    <p className="card-text">Portal da ferramenta Movieplay</p>
                    <a href="https://www.moovieplay.com.br/#/home">Conheça</a>
                </div>
            </div>
            <div className="card col-md-4">
                <img className="card-img-top" src='https://i.ytimg.com/vi/KBIbl2cZZCQ/maxresdefault.jpg'></img>
                <div className="card-body" >
                    <h5 className="card-title">PontoFoPag</h5>
                    <p className="card-text">Sistema de ponto online</p>
                    <a href="https://employer.com.br/ponto-eletronico">Conheça</a>
                </div>
            </div>
            <div className="card col-md-4">
                <img className="card-img-top" src='http://conquistadeconcurso.com.br/wp-content/uploads/2016/06/concurso-utfpr.jpg'></img>
                <div className="card-body" >
                    <h5 className="card-title">Mural UTF</h5>
                    <p className="card-text">Trabalho da disciplina de Oficina de integração</p>
                    <a href="https://github.com/merschermat/Oficina">Conheça</a>
                </div>
            </div>
            </div>
        );
    }
}
export default Card;