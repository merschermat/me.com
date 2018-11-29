import React, { Component } from 'react';
import axios from 'axios';
import Actions from './Actions/index'
import './Commons.css'
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info :[]
        };
    }
    newItem = (e) => {
        this.state.info.push({});
        console.log()
        this.setState({info : this.state.info})
    }
    sendPut = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/add/' + this.props.name,
            data: {
                text: this.text
            }
        }).then(res => {
            console.log(res)
        });
    }
    componentWillMount = () => {
        axios({
            method: 'get',
            url : 'http://localhost:8080/'+this.props.name+'/'
        }).then(data =>{
            console.log(data.data)
            this.setState({info : data.data }) 
        })
    }

    render() {
        return(
            <div className="offset-1 col-lg-10 offset-1 center" >
            <button className="btn btn-success addBtn float-right" onClick={this.newItem.bind(this)}>+</button>
            {this.state.info.map(obj => {
                return (<Actions name={this.props.name} obj={obj}></Actions>)
            })}
            </div>
            );
    }
} export default Add;