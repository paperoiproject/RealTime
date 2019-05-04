import React, { Component } from 'react';
import '../App.css';

import AppMenuBar from '../AppContainers/AppMenuBar.js';
import AppBoard from '../AppContainers/AppBoard.js';
import AppAddModal from '../AppContainers/AppAddModal.js';

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

  render() {
    return (
      <div className="Home">
         <AppMenuBar />
         <AppAddModal
           open={this.state.flag_addmodal}
           onClose={
              () => {this.handleFlagAddmodal("no")}}
           addCard={
              (text) => {this.props.addCard(text, this.state.modal_target)}} />
         <div className="HomeBoards">
           <AppBoard
            list={this.props.day_list}
            addClick={
              () => {this.handleFlagAddmodal("day")}}
            deleteClick={
              (index) => {this.props.deleteClick(index, "day")}} />
           <AppBoard
             list={this.props.week_list}
             addClick={
               () => {this.handleFlagAddmodal("week")}}
             deleteClick={
               (index) => {this.props.deleteClick(index, "week")}} />
           <AppBoard
             list={this.props.month_list}
             addClick={
               () => {this.handleFlagAddmodal("month")}}
             deleteClick={
               (index) => {this.props.deleteClick(index, "month")}} />
         </div>
      </div>
    );
  }
}

export default Home;