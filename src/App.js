import React, { Component } from 'react';
import Header from './js/Header/Header'
import Home from './js/Home/Home'
import Projects from './js/Projects/Projects'

class App extends Component{
    render() {
        return(
            <div>
            <Header></Header>
            <Home></Home>
            <Projects></Projects>
            </div>
        );
    }
}export default App;