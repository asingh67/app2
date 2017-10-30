import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class MyDrawer extends Component {
  render() {
    return (
      <div className="MyDrawer">
        <Drawer 
            onRequestChange={this.props.onRequestChange} 
            open={this.props.drawerOpen} 
            docked={false}
            > 
                <MenuItem onClick={this.props.onMenuItemClick}>
                Item1
                </MenuItem>
                <MenuItem onClick={this.props.onMenuItemClick}>
                Item2
                </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default MyDrawer;
