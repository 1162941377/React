import React, { Component } from "react";

export default class Cmp extends Component {
  state = {
    n: 0,
  };

  handleClick = () => {
    this.setState({
      n: this.state.n + 1,
    }, () => {
      console.log(this.state.n);
    });
  };

  render() {
    console.log("render");

    return (
      <>
        <h1>{this.state.n}</h1>
        <p>
          <button onClick={this.handleClick}>+</button>
        </p>
      </>
    );
  }
}
