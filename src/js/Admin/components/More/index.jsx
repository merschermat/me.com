import React, { Component } from 'react';
import Add from '../Commons'

class More extends Component {
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
                <Add name="More" ></Add>
            </div>);
    }
} export default More;