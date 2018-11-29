import React, { Component } from 'react';
import axios from 'axios';
import '../Commons.css'
import './Actions.css'
class Actions extends Component {
    text
    editIcon = "https://cdn.icon-icons.com/icons2/788/PNG/512/pencil_icon-icons.com_64998.png"
    cancelIcon = "https://image.flaticon.com/icons/svg/14/14048.svg"
    currentIcon = this.editIcon
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            background: "d-block float-right btns btn  my-2 my-sm-0 btn-success "
        };
    }
    preparePost = (e) => {
        this.props.obj.text = e.target.value;
    }
    sendPut = () => {
        axios({
            method: 'put',
            url: 'http://localhost:8080/' + this.props.name,
            data: this.props.obj
        }).then(res => {
            console.log(res)
        });
    }
    sendPost = (e) => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/add/' + this.props.name,
            data: { text: this.props.obj.text }
        }).then(res => {
            console.log(res)
        });
    }
    setPut = (e) => {
        if (this.props.obj._id == null) {
            this.sendPost();
        } else {
            console.log(this.props.name)
            this.sendPut();
        }

    }
    edit = (e) => {
        this.currentIcon = this.state.editing == false ? this.cancelIcon : this.editIcon;
        this.state.background = this.state.editing == true ? "d-block float-right btns btn  my-2 my-sm-0 btn-success" : "d-block float-right btns btn  my-2 my-sm-0 btn-danger";
        this.setState({ editing: !this.state.editing })
    }
    cancelEdit = (e) => {
        this.props.obj = null;
        this.text = null;
    }
    newItem = (e) => {
        console.log(e)
    }
    delete = (e) => {
        axios({
            method: 'delete',
            url: 'http://localhost:8080/'+ this.props.name +'/' + this.props.obj._id,
        }).then(res => {
            console.log(res)
        });
    }
    render() {
        return (
            <div className="controls">

                <button className="d-block float-right  btn  my-2 my-sm-0 btn-danger" style={{ borderRadius: 50 }} onClick={this.delete.bind(this)}><img src="https://image.flaticon.com/icons/svg/29/29338.svg" style={{ width: 30, height: 30 }}></img></button>
                <button className={this.state.background} style={{ borderRadius: 50 }} onClick={this.edit.bind(this)}><img src={this.currentIcon} style={{ width: 30, height: 30 }}></img></button>
                <label class="switch d-block float-right  btn  my-2 my-sm-0  ">
                    <input type="checkbox" className="  btn my-2 my-sm-0" />
                    <span class="slider round" />
                </label>
                <textarea rows="5" className="cemp input" data-id={"text"} name="text" onChange={this.preparePost.bind(this)} value={this.props.obj.text} />
                {this.state.editing ? (
                    <div className="col-md-5 float-right btns">
                        <button className="col-6 btn btn-success my-2 my-sm-0" onClick={this.setPut.bind(this)}>Salvar</button>
                        <button className="col-5 btn btn-danger my-2 my-sm-0" onClick={this.cancelEdit.bind(this)}>Cancelar</button>
                    </div>) : <div></div>}
            </div >
        );
    }
} export default Actions;