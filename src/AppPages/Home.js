import React, { Component } from 'react';
import '../App.css';

import AppMenuBar from '../AppContainers/AppMenuBar.js';
import AppList from '../AppContainers/AppList.js';
import AppDialog from '../AppContainers/AppDialog.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag_addmodal: false,
      target_modal: "no",
 
    }
  }
  handleFlagAddmodal(target){
    this.setState({
      flag_addmodal: !(this.state.flag_addmodal),
      modal_target: target,
    })
  }

  addList(s){
    this.refs.AppList.newText(s)
    /*
    let cp_list = this.state.items1.slice()
    cp_list.push(s);
    this.setState({
      items1: cp_list,
    });
    */
  }

  render() {
    return (
      
      <div className="Home">
        <AppList />
    
      
         <div className="HomeBoards">
         <AppMenuBar />
         
    
        <AppDialog addList={(s) => {this.addList(s)}}/>
        
              
         
         </div>
      </div>
    );
  }
}

export default Home;