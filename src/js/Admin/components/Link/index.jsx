import React, { Component } from 'react';
import Add from '../Commons'

class Link extends Component {
    text
    obj
    constructor(props) {
        super(props);
        this.state = {
            post: this.props.data,
            comment: ''
        };
    }

    render() {
        return (
            <div className="row cemp">
                <Add name="Link" ></Add>
            </div>);
    }
} export default Link;