import React, { Component } from "react";
import NumberInput from "./components/NumberInput";

export default class App extends Component {
  state = {
    value: "Hello World",
  };

  onChange = (e) => {
    // console.log(e);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <NumberInput value={this.state.value} onChange={this.onChange} />
        <button
          onClick={() => {
            console.log(this.state.value);
          }}
        >
          click
        </button>
      </>
    );
  }
}
