import React, { Component } from 'react';

import Home from './AppPages/Home.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day_list: ["Day", "ajaflkdajfkldajfkldjaklf", "b", "c", "d"],
      week_list: ["Week", "e", "fkjaklfjdalkjfklajffald", "g", "h"],
      month_list: ["Month","i", "j", "kajdfklajfklajfdkakjjlkajfkajflajdflajjjjjjjjjjjjjjjjjj", "l"],
    }
  }

  addCard(text, target){
    if(target === "day"){
      let cp_day_list = this.state.day_list.slice();
      cp_day_list.push(text)
      this.setState({
        day_list: cp_day_list,
      });
    }

    if(target === "week"){
      let cp_week_list = this.state.week_list.slice();
      cp_week_list.push(text)
      this.setState({
        week_list: cp_week_list,
      });
    }

    if(target === "month"){
      let cp_month_list = this.state.day_list.slice();
      cp_month_list.push(text)
      this.setState({
        month_list: cp_month_list,
      });
    }
  }

  deleteCard(index, target){
    console.log(index);
    if(target === "day"){
      let cp_day_list = this.state.day_list.slice();
      cp_day_list.splice(index, 1);
      this.setState({
        day_list: cp_day_list,
      });
    }

    if(target === "week"){
      let cp_week_list = this.state.week_list.slice();
      cp_week_list.splice(index, 1);
      this.setState({
        week_list: cp_week_list,
      });
    }

    if(target === "month"){
      let cp_month_list = this.state.month_list.slice();
      cp_month_list.splice(index, 1);
      this.setState({
        month_list: cp_month_list,
      });
    }
  }

  render() {
    return (
      <div className="App">
         <Home
           day_list={this.state.day_list}
           week_list={this.state.week_list}
           month_list={this.state.month_list}
           addCard={(text, target) => {this.addCard(text, target)}}
           deleteClick={(index, target) => this.deleteCard(index, target)}
         />
      </div>
    );
  }
}

export default App;
