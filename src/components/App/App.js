import React, { Component } from 'react';
import './App.css';
import ImagesForm from '../ImagesForm/ImagesForm';
import Header from '../Header/Header';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <ImagesForm />
      </div>
    );
  }
}

export default App;
