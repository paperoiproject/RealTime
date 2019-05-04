import React, { Component } from 'react';
import ViewAddModal from '../ViewContainers/ViewAddModal.js';

class AppAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
    }
  };
  changeAddText(e){
    this.setState({
      textValue: e.target.value,
    });
  }
  render() {
    console.log(this.state.textValue);
    return (
      <div className="" >
        <ViewAddModal
        open={this.props.open}
        onClose={() => {this.props.onClose()}}
        changeAddText={e =>{this.changeAddText(e)}}
        addCard={() => {
          this.props.addCard(this.state.textValue);
          this.props.onClose();
        }} />
      </div>
    );
  }
}

export default AppAddModal;