import React, { Component } from "react";
import BoardComponent from "./BoardComponent";

export default class GameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isXNext: true,
      squares: Array(9).fill("-")
    };
  }

  render() {
    const { isXNext, squares } = this.state;
    return (
      <div className="board">
        <div className="board-title">Caro board game</div>
        <div className="board-info">Next move: {isXNext ? "x" : "o"}</div>
        <BoardComponent
          squares={squares}
          onClick={i => this.handleOnClick(i)}
        />
      </div>
    );
  }

  handleOnClick(i) {
    console.log(i);
    const squares = this.state.squares.slice();
    squares[i] = this.state.isXNext ? "x" : "o";

    this.setState(prevState => ({
      ...prevState,
      isXNext: !this.state.isXNext,
      squares
    }));
  }
}
