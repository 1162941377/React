import React, { Component } from "react";

// 如下两个组件，不再关注与该组件无关的事
export class A extends Component {
  render() {
    return (
      <>
        <h1>A: {this.props.a}</h1>
      </>
    );
  }
}

export class B extends Component {
  render() {
    return (
      <>
        <h1>B: {this.props.b}</h1>
      </>
    );
  }
}
