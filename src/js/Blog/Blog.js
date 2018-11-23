import React, { Component, CreateElement } from 'react';
import './Blog.css';
class Blog extends Component {
    render() {
        return (
            <div id="Blog">
            <h1 style={{textAlign: "center"}}>Blog de Notícias</h1>
            <div className="offset-1  col-lg-10 offset-1 center">
            <div className="card-deck">
            <div className="card col-md-4">
                <img className="card-img-top" src='https://eventbrite-s3.s3.amazonaws.com/marketing/Academy/Event_Academy-HOME.png'></img>
                <div className="card-body" >
                    <h5 className="card-title">The Quest for React Micro-Apps: The Beginning</h5>
                    <a href="https://www.eventbrite.com/engineering/quest-react-micro-apps-beginning/?utm_campaign=React%2BNewsletter&utm_medium=web&utm_source=React_Newsletter_138">Ler mais</a>
                </div>
            </div>
            <div className="card col-md-4">
                <img className="card-img-top" src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Flouiscolumbus%2Ffiles%2F2018%2F08%2FIoT-Market-Predicted-To-Double-By-2021-Reaching-520B.jpg'></img>
                <div className="card-body" >
                    <h5 className="card-title">IoT Market Predicted To Double By 2021, Reaching $520B</h5>
                    <a href="https://www.forbes.com/sites/louiscolumbus/2018/08/16/iot-market-predicted-to-double-by-2021-reaching-520b/#3f38b2081f94">Ler mais</a>
                </div>
            </div>
            <div className="card col-md-4">
                <img className="card-img-top" src='https://images.idgesg.net/images/article/2017/07/thread_weave_colorful_network_web-100728394-large.jpg'></img>
                <div className="card-body" >
                    <h5 className="card-title">What’s new in HTML5.2</h5>
                    <a href="https://www.infoworld.com/article/3244087/html5/whats-new-in-html52.html">Ler mais</a>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}
export default Blog;