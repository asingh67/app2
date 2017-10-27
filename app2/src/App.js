import React, { Component } from 'react';
import AppBar from "material-ui/AppBar"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <AppBar
        title="mAppBar"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
