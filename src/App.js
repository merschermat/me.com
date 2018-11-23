import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Admin from './js/Admin/Admin'
import Page from './js/Page/Page'


class App extends Component{
    render() {
        return(
            <Router>
            <div>
                <Route path="/admin" component={Admin}/>
                <Route exact path="/" component={Page}/>
            </div>
            </Router>
        );
    }
}export default App;