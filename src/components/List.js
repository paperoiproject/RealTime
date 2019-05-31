import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
import InteractiveList  from '../components/InteractiveList';

const groupStyle = {
  marginLeft: '50px',
  flex: 1
};

class List extends Component {
  constructor() {
    super();

    this.state = {
      items1: [1, 2, 3, 4 ,5, 6],
    };
  }

deleteList(index){
  let cp_list = this.state.items1.slice();
  cp_list.splice(index, 1);
  this.setState({
    items1: cp_list,
  });
}


  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '100px', marginRight: '50px', padding:'0 20px' ,fontSize:'1.5em'}}>
        <div style={groupStyle}>
          <Container groupName="1" getChildPayload={i => this.state.items1[i]} onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}>
            {
              this.state.items1.map((value, index) => {
                return (
                  <Draggable key={value.id}>
                    <div className="draggable-item">
                      {<InteractiveList text={value} id={index} deleteList={(num) => {this.deleteList(num)}}/>}
                    </div>
                  </Draggable>
                );
              })
            }
          </Container>
        </div>

      </div>
    );
  }
}

List.propTypes = {

};

export default List;