import React, { Component } from 'react';
import ViewBoard from '../ViewContainers/ViewBoard.js';

class AppBoard extends Component {
  constructor(props) {
    super(props);
  }

  makeBoard(){
    let boards = this.props.list.map((value, index) => {
      if(index === 0){
        return (
          <ViewBoard key={index} type="tab" text={value} onClick={this.props.addClick}/>
        );
      }else{
        return (
          <ViewBoard key={index} type="content" text={value} onClick={() => {this.props.deleteClick(index)}}/>
        );
      }
    });
    return (boards);
  }

  render() {
    return (
      <div className="" >
        {this.makeBoard()}
      </div>
    );
  }
}

export default AppBoard;