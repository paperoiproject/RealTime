import React, { Component } from 'react';
import ViewMenuBar from '../ViewContainers/ViewMenuBar.js';

class AppMenubar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <ViewMenuBar />
      </div>
    );
  }
}

export default AppMenubar;
