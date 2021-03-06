import React, { Component } from 'react';
import UserInput from './components/UserInput.js'
import {Users, ConnectedUsers} from './components/Users.js'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers store={this.props.store}/>
      </div>
    );
  }
}

export default App;
