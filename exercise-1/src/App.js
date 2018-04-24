import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name: 'Jeff'
  }

  changeNameHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        <UserInput
          changeName={this.changeNameHandler}
          username={this.state.name}/>
        <UserOutput username={this.state.name} />
        <UserOutput username={this.state.name} />
        <UserOutput username={this.state.name} />
      </div>
    );
  }
}

export default App;
