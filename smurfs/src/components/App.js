import React, { Component } from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import Village from './Village';
import Smurfs from './Smurfs';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURF VILLAGE! </h1>
        
        <Village />
        <SmurfForm />
        <Smurfs />  
      </div>
    );
  }
}

export default App;
