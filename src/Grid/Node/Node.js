import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  state = {
    start: false,
    finish: false,
    visited: false,
  };

  getClass = () => {
    const { start, finish, visited } = this.state;

    if (start) {
      return " Start";
    } else if (finish) {
      return " Finish";
    } else if (visited) {
      return " Visited";
    } else {
      return "";
    }
  };

  clickHandler = () => {
    const { start, finish, visited } = this.state;

    if (!start && !finish) {
      this.setState({ start: true });
    } else if (start && !finish) {
      this.setState({ start: false, finish: true });
    }
  };

  downHandler = () => {
    const { start, finish, visited } = this.state;

    if (!start && !finish) {
      this.setState({ start: true });
    } else if (start && !finish) {
      this.setState({ finish: false });
    } else if (finish && !start) {
      this.setState({ start: false, finish: false });
    }
  };

  render() {
    return (
      <div
        // onMouseDown={() => this.downHandler()}
        onClick={() => this.clickHandler()}
        className={"Node" + this.getClass()}
      ></div>
    );
  }
}

//
