import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
import InteractiveList  from '../components/InteractiveList';

const groupStyle = {
  marginLeft: '50px',
  flex: 1
};

class Lists extends React.Component {
  constructor(props) {
    super(props);
    
    

    this.state = {
      items1: ["bread baking done", "出来立てのパンです", "хлеб испеченн", "Brot gebacken" ,"bröd bakat", "麵包烤"],
      items2: ["aaaaaaaaaaaaaaa", "b", "c"],
      items3: ["aaaaa", "出来ンです", "хлиспеченн", "Brbacken" ,"bbakat", "烤"],
      nlist: this.props.nlist%3
      
    };
    
  }
 

deleteList(index){
  if( Math.abs(this.props.nlist % 3) === 0) {
    let cp_list = this.state.items1.slice();
    cp_list.splice(index, 1);
    this.setState({
      items1: cp_list,
    });
   }else if( Math.abs(this.props.nlist % 3) === 1){
    let cp_list = this.state.items2.slice();
    cp_list.splice(index, 1);
    this.setState({
      items2: cp_list,
    });
   }else{
     let cp_list = this.state.items3.slice();
    cp_list.splice(index, 1);
    this.setState({
      items3: cp_list,
    });
  }
}

newText(text){
  let cp_list = this.state.items1.slice()
    cp_list.push(text);
    this.setState({
      items1: cp_list,
    });
}

handleClickObject = () => {
  this.setState({ nlist: this.props.nlist});
};


  render() {
    return (
      
      <div style={{ display: 'flex', justifyContent: 'stretch', marginRight: '5px', padding:'0 10px' ,fontSize:'1.5em'}}>
        <div style={groupStyle} >
        { Math.abs(this.props.nlist % 3) === 0 ?
          <Container groupName="1" getChildPayload={i => this.state.items1[i]} onDrop={e => this.setState({ items1 : applyDrag(this.state.items1, e) })}>
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
          : Math.abs(this.props.nlist % 3) === 1 ?
            <Container groupName="1" getChildPayload={i => this.state.items2[i]} onDrop={e => this.setState({ items2 : applyDrag(this.state.items2, e) })}>
              {
                this.state.items2.map((value, index) => {
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
            : 
            <Container groupName="1" getChildPayload={i => this.state.items3[i]} onDrop={e => this.setState({ items3 : applyDrag(this.state.items3, e) })}>
              {
                this.state.items3.map((value, index) => {
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
            }
        </div>
      </div>
      
    );
  }
}

export default Lists;