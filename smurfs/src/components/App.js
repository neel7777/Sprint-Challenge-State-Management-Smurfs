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

//REVIEW QUESTIONS
// What problem does the context API help solve?
  //We use context api when we have alot of global data shared by many components; the api keeps the state clean.
//  In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  //actions are packets of info containing an action type that are dispatched to the reducer. The reducer recieves the action and updates the state accordingly. The store contains our state for the application. The store is referred to as the truth because the state of the whole application is stored in an object tree within it.
//  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  //Application state is the global state accessed by all components whereas component state is more local: it is only used within its own component. Application state is better for bigger apps with multiple components.
//  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
  //redux thunk is a function that is returned by another function. It facilitates our middleware and has access to the dispatch function.
//  What is your favorite state management system you've learned and this sprint? Please explain why!
  //My favorite was redux simply because I am most comfortable with it atm and it makes the most sense conceptually (the flow is easy to follow)