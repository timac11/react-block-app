import React, { Component } from 'react';
import './MainBodyComponent.css'
import MainNewsComponent from './MainNews/MainNewsComponent'
import CurrentNewComponent from './CurrentNew/CurrentNewComponent'

class MainBodyComponent extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="header-news">
                    <h1> Our News </h1>
                </div>
                <CurrentNewComponent />
                <CurrentNewComponent />
                <CurrentNewComponent />
            </div>
        );
    }
}

export default MainBodyComponent;
