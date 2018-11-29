import React, { Component } from 'react';
import Add from '../Commons'

class MinBio extends Component {
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
                <Add name="MinBio" ></Add>
            </div>);
    }
} export default MinBio;