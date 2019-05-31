import React, { Component } from 'react';
import '../App.css';

import AppMenuBar from '../AppContainers/AppMenuBar.js';
import AppBoard from '../AppContainers/AppBoard.js';
import AppButton from '../AppContainers/AppButton.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag_addmodal: false,
      target_modal: "no",
    }
  }

  render() {
    return (
      
      <div className="Home">
      <doList/>
      
         <div className="HomeBoards">
         <AppMenuBar />
         <AppBoard />
         <AppButton
             deleteClick={
               (index) => {this.props.deleteClick(index)}} />
           
        
              
         
         </div>
      </div>
    );
  }
}

export default Home;