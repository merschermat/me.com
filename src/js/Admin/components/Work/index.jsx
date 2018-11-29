import React, { Component } from 'react';
import Add from '../Commons'

class Work extends Component {
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
                <Add name="Work" ></Add>
            </div>);
    }
} export default Work;