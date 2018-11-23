import React, { Component, CreateElement } from 'react';

class Form extends Component {
    render() {
        return (
            <div style={{paddingTop:"40px"}} className=" offset-1 col-lg-10 offset-1 center">
            <h2>Entre em contato!</h2>
        <form >
        <div className="form-group">
    <label for="name">Nome:</label>
    <input className="form-control" id="name" aria-describedby="name" placeholder="Coloque seu nome"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Coloque seu email"/>
  </div>
  <div className="form-group">
    <label for="about">Assunto</label>
    <input className="form-control" id="about" placeholder="Assunto"/>
  </div>
  <div className="form-group">
    <label for="message">Mensagem</label>
    <input type="text" className="form-control" id="message" placeholder="Mensagem"/>
  </div>
  <button type="submit" className="btn btn-success">Enviar</button>
</form>
</div>
);
  }
}

export default Form;