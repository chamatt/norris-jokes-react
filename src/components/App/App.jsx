import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import background from "../../img/chuck-norris-wallpaper.jpg";
import JokeContainer from "./../JokeContainer/JokeContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="Norris"
          subtitle="Jokes you can't possibly not laugh at!"
          image={background}
        />
        <JokeContainer />
      </div>
    );
  }
}

export default App;
