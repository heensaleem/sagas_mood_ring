import React, { Component } from 'react';
import './App.css';
import ImagesForm from '../ImagesForm/ImagesForm';
import TagsForm from '../TagsForm/TagsForm'

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
