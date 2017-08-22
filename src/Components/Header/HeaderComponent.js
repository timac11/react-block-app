import React, { Component } from 'react';
import HeaderMenuComponent from './HeaderMenuComponent/HeaderMenuComponent'
import NavigationBarComponent from './NavigationBar/NavigationBarComponent'

class HeaderComponent extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <NavigationBarComponent />
                </div>
                <HeaderMenuComponent />
            </div>
        );
    }
}

export default HeaderComponent;
