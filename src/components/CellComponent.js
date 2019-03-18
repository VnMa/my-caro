import React, { Component } from "react";

export default class CellComponent extends Component {
  render() {
    return <div className="cell">Cell {this.props.value}</div>;
  }
}
