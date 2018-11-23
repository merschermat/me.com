import React, { Component } from 'react';
import Header from '../Header/Header'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Details from '../Details/Details'
import Footer from '../Footer/Footer'
import Blog from '../Blog/Blog'
import More from '../More/More'
import Form from '../Form/Form'

class Page extends Component{
    render() {
        return(
            <div>
                <Header></Header>
                <Home></Home>
                <Projects></Projects>
                <Details></Details>
                <Blog></Blog>
                <More></More>
                <Form></Form>
                <Footer></Footer>
            </div>
        );
    }
}export default Page;