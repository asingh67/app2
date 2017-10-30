import React, { Component } from 'react';
import AppBar  from "material-ui/AppBar";

class MyAppBar extends Component {
  render() {
    return (
      <div className="MyAppBar">
        <AppBar  
            title="MyAppBar"
            onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
            zDepth={1}
            />
      </div>
    );
  }
}

export default MyAppBar;
