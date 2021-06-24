import React, { Component } from "react";

export default class Test extends Component {
  state = {
    data: "zjc",
  };

  render() {
    console.log("render 运行了");
    return (
      <>
        <p>{this.state.data}</p>
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          click
        </button>
      </>
    );
  }
}
