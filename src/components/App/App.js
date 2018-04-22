import React, { Component } from 'react';
import './App.css';
import MainScene from '../MainScene/MainScene';
import DevToolComponent from '../../dev/DevToolComponent';

class App extends Component {
  render() {
    return (
      <div>
        <MainScene/>
        <DevToolComponent/>
      </div>
    );
  }
}

export default App;
