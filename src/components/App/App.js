import React, { Component } from 'react';
import './App.css';
import ImagesForm from '../ImagesForm/ImagesForm';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <ImagesForm />
      </div>
    );
  }
}

export default App;
