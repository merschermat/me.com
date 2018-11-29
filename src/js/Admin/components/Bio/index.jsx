import React, { Component } from 'react';
import Add from '../Commons'

class Bio extends Component {
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
                <Add name="Biografia"></Add>
            </div>);
    }
} export default Bio;