import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    value: "",
  };

  changeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addTask = () => {
    this.props.changeData && this.props.changeData(this.state.value);
  };

  render() {
    console.log("AddTask run");
    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.changeValue}
        />
        <button onClick={this.addTask}>add</button>
      </>
    );
  }
}
