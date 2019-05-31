import React, { Component } from 'react';
import ViewButton from '../ViewContainers/ViewButton.js';

class AppButton extends Component {
  constructor(props) {
    super(props);
  }

  makeButton(){
    let boards = this.props =((value) => {
        return (
          <ViewButton type="content" text={value} onClick={() => {this.props.deleteClick()}}/>
        );
      }
    );
    return (boards);
  }

  render() {
    return (
      <div className="" >
        {this.makeButton()}
      </div>
    );
  }
}

export default AppButton;