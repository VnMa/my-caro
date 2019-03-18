import React, { Component } from "react";
import CellComponent from "./CellComponent";

export default class BoardComponent extends Component {
  render() {
    return (
      <div className="board">
        <div className="board-row">
          <CellComponent value="1" />
          <CellComponent value="2" />
        </div>
        <div className="board-row">
          <CellComponent value="3" />
          <CellComponent value="4" />
        </div>
      </div>
    );
  }
}
