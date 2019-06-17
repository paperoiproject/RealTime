import React, { Component } from 'react';
import Underbar from '../components/Underbar.js';//include Lists

class AppList extends Component {
  constructor(props) {
    super(props);
  }

  newText(text){
    this.refs.Underbar.newText(text)
  }

  render() {
    return (
      <div className="" >
        <Underbar text={this.props.text}/>
      </div>
    );
  }
}

export default AppList;