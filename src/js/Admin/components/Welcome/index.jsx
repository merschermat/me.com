import React, { Component } from 'react';
import Add from '../Commons'

class Wellcome extends Component {
    text
    obj
    opacity ={
        opacity: 0.5

    }
    constructor(props) {
        super(props);
        this.state = {
            post: this.props.data,
            comment: ''
        };
    }

    render() {
        return (
            <div className="row d-flex justify-content-center align-items-center" style={{height: 100+"%", paddingLeft : 15,color: "#50ba1d"}}>
            <div className="text-center col-10">
                <h1 style={{fontSize:50, paddingBottom :30}}>Seja Bem vindo, {this.props.user} a tela de configuração de informações de sua página!</h1>
                <h4 style={this.opacity}>Aqui você pode gerenciar as informações que estarão visíveis em seu site, adicionar novos dados ou excluir antigos.</h4>
            </div>
            </div>);
    }
}export default Wellcome;