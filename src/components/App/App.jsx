import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import background from '../../img/blurred-background.jpg';
import Joke from './../Joke/Joke.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Norris" subtitle="Jokes you can't possibly not laugh at!" image={background} />
        <Joke category="explicit" />
      </div>
    );
  }
}

export default App;
