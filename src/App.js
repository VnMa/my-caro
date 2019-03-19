import React, { Component } from "react";
import "./App.css";
import GameComponent from "./components/GameComponent";
class App extends Component {
  render() {
    return (
      <div>
        <GameComponent size="3" />
      </div>
    );
  }
}

export default App;
