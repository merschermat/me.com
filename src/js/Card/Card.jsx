import React, { Component, CreateElement } from 'react';

class Card extends Component{
    data =
        [{
        "title":"Moovieplay",
        "description":"skaksjas"
        },
        {
        "title":"Moovieplay",
        "description":"skaksjas"
        }
    ]
    code = "";
    element ="";
    render(){
        return(
            <React.Fragment>
            this.data.forEach(e => {
                 React.Fragment.Append =
                    <div className="card col-md-4">
                        <img className="card-img-top" src='.../100px180/'></img>
                        <div className="card-body" >
                            <h5 className="card-title">${this.e.title}</h5>
                            <p className="card-text">${this.e.description}</p>
                            <a href="https://www.moovieplay.com.br/#/home">Conheça</a>
                        </div>
                    </div>
                 
            }
            )
            
            </React.Fragment>
            );
    }
}
export default Card;