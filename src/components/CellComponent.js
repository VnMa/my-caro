import React, { Component } from "react";

export default class CellComponent extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="cell" onClick={this.props.onClick}>
        {value}
      </div>
    );
  }
}
