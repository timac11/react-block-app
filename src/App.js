import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/Header/HeaderComponent'
import MainBodyComponent from './Components/MainBody/MainBodyComponent'
import SiteMenuComponent from './Components/SiteMenu/SiteMenuComponent'

class App extends Component {
  render() {
    return (
      <div>
          <HeaderComponent />
          <MainBodyComponent />
          <SiteMenuComponent />
      </div>
    );
  }
}

export default App;
