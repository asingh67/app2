import React, { Component } from 'react';
import MyAppBar from './components/MyAppbar';
import MyDrawer from './components/MyDrawer';
import injectReactTapEventPlugin from 'react-tap-event-plugin';

import './App.css';

injectReactTapEventPlugin();
class App extends Component {

  handleDrawerClose(){
    this.setState({
      drawerOpen : false
    });
  }

  toggleDrawer(){
    this.setState ({
      drawerOpen : !this.state.drawerOpen
    });
  }

  constructor(props){
    super(props);
    this.state = {
      drawerOpen : false
    };

    //this.handleDrawerClose = this.handleDrawerClose.bind(this);
    //this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  render() {
    return (

      <div className="App">
        <MyAppBar onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}/>
        <MyDrawer drawerOpen={this.state.drawerOpen} onRequestChange={this.handleDrawerClose.bind(this)} onMenuItemClick={this.toggleDrawer.bind(this)}/>
      </div>
    );
  }
}

export default App;
